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
      const key = EMAIL_CONFIG.WEB3FORMS_ACCESS_KEY;
      if (!key || key === "YOUR_WEB3FORMS_ACCESS_KEY") {
        throw new Error("Web3Forms access key is not configured in src/config/emailConfig.ts");
      }

      // Format payload for Web3Forms
      const payload = {
        access_key: key,
        subject: `New Horizon Bound Lead: ${data.form_type}`,
        from_name: "Horizon Bound Travels Website",
        ...data,
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
      if (result && result.success) {
        return true;
      }
      throw new Error(result?.message || "Web3Forms submission failed");
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
