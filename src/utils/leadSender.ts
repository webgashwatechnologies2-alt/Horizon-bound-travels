import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "@/config/emailConfig";

export interface LeadData {
  form_type: string;
  name?: string;
  fullName?: string;
  email?: string;
  user_email?: string;
  phone?: string;
  destination?: string;
  travelers?: string;
  date?: string;
  checkIn?: string;
  checkOut?: string;
  [key: string]: string | number | boolean | null | undefined;
}

/**
 * Utility function to send lead information.
 * Uses the configured preferred email delivery service.
 */
export const sendLead = async (data: LeadData): Promise<boolean> => {
  const service = EMAIL_CONFIG.PREFERRED_SERVICE;

  if (service === "simulated") {
    console.log("Simulating email submission for lead:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return true;
  }

  if (service === "php") {
    try {
      const response = await fetch("/send-lead.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      if (result && result.status === "success") {
        return true;
      }
      throw new Error(result?.message || "Failed to send lead via PHP mailer");
    } catch (error) {
      console.error("PHP Mailer dispatch error:", error);
      throw error;
    }
  }

  if (service === "web3forms") {
    try {
      const infoKey = EMAIL_CONFIG.WEB3FORMS_INFO_KEY;
      const salesKey = EMAIL_CONFIG.WEB3FORMS_SALES_KEY;

      const keysToSend: string[] = [];
      if (infoKey && infoKey !== "YOUR_WEB3FORMS_INFO_KEY") {
        keysToSend.push(infoKey);
      }
      if (salesKey && salesKey !== "YOUR_WEB3FORMS_SALES_KEY") {
        keysToSend.push(salesKey);
      }

      if (keysToSend.length === 0) {
        throw new Error("No Web3Forms access keys are configured in src/config/emailConfig.ts");
      }

      // Exclude base64 raw data from JSON API text email to keep it clean
      const payloadData = { ...data };
      if (payloadData.cv_file_data) {
        delete payloadData.cv_file_data;
      }

      // Send to all configured keys in parallel
      const sendPromises = keysToSend.map(async (key) => {
        const payload = {
          access_key: key,
          subject: `New Horizon Bound Lead: ${data.form_type}`,
          from_name: "Horizon Bound Travels Website",
          ...payloadData,
        };

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        if (!result || !result.success) {
          throw new Error(result?.message || "Web3Forms submission failed");
        }
        return true;
      });

      await Promise.all(sendPromises);
      return true;
    } catch (error) {
      console.error("Web3Forms dispatch error:", error);
      throw error;
    }
  }

  if (service === "emailjs") {
    try {
      const serviceId = EMAIL_CONFIG.EMAILJS_SERVICE_ID;
      const templateId = EMAIL_CONFIG.EMAILJS_TEMPLATE_ID;
      const publicKey = EMAIL_CONFIG.EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS is not fully configured in src/config/emailConfig.ts");
      }

      // Construct a formatted message from all fields
      const messageBody = Object.entries(data)
        .filter(([key]) => key !== "form_type")
        .map(([key, val]) => `${key.replace(/([A-Z])/g, ' $1').toUpperCase()}: ${val}`)
        .join("\n");

      const templateParams = {
        user_name: data.name || data.fullName || "Inquirer",
        user_email: data.email || data.user_email || "",
        web: `Horizon Bound Travels - Lead Type: ${data.form_type}`,
        message: messageBody,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      return true;
    } catch (error) {
      console.error("EmailJS dispatch error:", error);
      throw error;
    }
  }

  return false;
};
