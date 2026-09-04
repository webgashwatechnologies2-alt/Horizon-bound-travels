"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { sendLead } from "@/utils/leadSender";

interface VisaAssistanceFormProps {
  defaultDestination?: string;
  packageTitle?: string;
  onSuccess?: () => void;
}

const VisaAssistanceForm = ({
  defaultDestination = "",
  packageTitle = "",
  onSuccess,
}: VisaAssistanceFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    destinationCountry: defaultDestination,
    travelDate: "",
    travelersCount: "1",
    visaType: "Tourist Visa",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validations
    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name.");
      return;
    }

    const phoneRegex = /^[0-9+\-\s()]{7,16}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!formData.destinationCountry.trim()) {
      toast.error("Please specify the destination country.");
      return;
    }

    setIsSubmitting(true);

    try {
      await sendLead({
        form_type: "Visa Assistance Inquiry",
        full_name: formData.fullName.trim(),
        name: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        user_email: formData.email.trim(),
        destination_country: formData.destinationCountry.trim(),
        destination: formData.destinationCountry.trim(),
        travel_date: formData.travelDate || "Not specified",
        travelers_count: formData.travelersCount || "1",
        visa_type_purpose: formData.visaType,
        message_requirements: formData.message.trim() || "None",
        package_context: packageTitle || "Direct Visa Assistance Inquiry",
      });

      setIsSubmitted(true);
      toast.success(
        "Thank you for your inquiry. Our team will contact you with the required visa assistance details."
      );
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Visa Assistance inquiry error:", error);
      toast.error("Failed to submit inquiry. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        style={{
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderRadius: "8px",
          padding: "24px 20px",
          textAlign: "center",
          margin: "15px 0",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            background: "#22c55e",
            borderRadius: "50%",
            color: "#fff",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            marginBottom: "15px",
          }}
        >
          <i className="fa-solid fa-check"></i>
        </div>
        <h5 style={{ color: "#166534", marginBottom: "10px", fontWeight: "700" }}>
          Inquiry Received!
        </h5>
        <p style={{ color: "#15803d", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
          Thank you for your inquiry. Our team will contact you with the required visa assistance details.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: "",
              phone: "",
              email: "",
              destinationCountry: defaultDestination,
              travelDate: "",
              travelersCount: "1",
              visaType: "Tourist Visa",
              message: "",
            });
          }}
          style={{
            marginTop: "18px",
            background: "transparent",
            border: "1px solid #22c55e",
            color: "#166534",
            padding: "8px 16px",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="mb-20" onSubmit={handleSubmit} noValidate>
      {/* Informational Header */}
      <div
        style={{
          background: "rgba(244, 107, 8, 0.08)",
          borderLeft: "3px solid var(--tg-theme-primary)",
          padding: "10px 14px",
          borderRadius: "4px",
          marginBottom: "16px",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: "#0b1c3f",
            margin: 0,
            lineHeight: "1.5",
          }}
        >
          <i
            className="fa-solid fa-passport"
            style={{ color: "var(--tg-theme-primary)", marginRight: "6px" }}
          ></i>
          Submit an inquiry for personalized visa guidance & documentation assistance.
        </p>
      </div>

      {/* Full Name */}
      <div className="mb-15">
        <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", fontSize: "14px" }}>
          Full Name <span style={{ color: "#dc2626" }}>*</span>
        </label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "11px 12px",
            border: "1px solid var(--tg-border-1)",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />
      </div>

      {/* Phone Number */}
      <div className="mb-15">
        <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", fontSize: "14px" }}>
          Phone Number <span style={{ color: "#dc2626" }}>*</span>
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="e.g. +91 9876543210"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "11px 12px",
            border: "1px solid var(--tg-border-1)",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />
      </div>

      {/* Email Address */}
      <div className="mb-15">
        <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", fontSize: "14px" }}>
          Email Address <span style={{ color: "#dc2626" }}>*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "11px 12px",
            border: "1px solid var(--tg-border-1)",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />
      </div>

      {/* Destination Country */}
      <div className="mb-15">
        <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", fontSize: "14px" }}>
          Destination Country <span style={{ color: "#dc2626" }}>*</span>
        </label>
        <input
          type="text"
          name="destinationCountry"
          placeholder="e.g. Dubai, Thailand, Bali"
          value={formData.destinationCountry}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "11px 12px",
            border: "1px solid var(--tg-border-1)",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />
      </div>

      {/* Travel Date & Number of Travelers (2 columns) */}
      <div className="row g-2 mb-15">
        <div className="col-sm-6">
          <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", fontSize: "14px" }}>
            Travel Date
          </label>
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid var(--tg-border-1)",
              borderRadius: "6px",
              fontSize: "13px",
            }}
          />
        </div>
        <div className="col-sm-6">
          <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", fontSize: "14px" }}>
            Travelers
          </label>
          <select
            name="travelersCount"
            value={formData.travelersCount}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid var(--tg-border-1)",
              borderRadius: "6px",
              fontSize: "13px",
              background: "#fff",
            }}
          >
            <option value="1">1 Traveler</option>
            <option value="2">2 Travelers</option>
            <option value="3-5">3 - 5 Travelers</option>
            <option value="6-10">6 - 10 Travelers</option>
            <option value="10+">10+ Group</option>
          </select>
        </div>
      </div>

      {/* Visa Type / Purpose */}
      <div className="mb-15">
        <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", fontSize: "14px" }}>
          Visa Type / Purpose
        </label>
        <select
          name="visaType"
          value={formData.visaType}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "11px 12px",
            border: "1px solid var(--tg-border-1)",
            borderRadius: "6px",
            fontSize: "14px",
            background: "#fff",
          }}
        >
          <option value="Tourist Visa">Tourist Visa</option>
          <option value="Business Visa">Business Visa</option>
          <option value="Transit Visa">Transit Visa</option>
          <option value="Family / Visitor Visa">Family / Visitor Visa</option>
          <option value="Group Visa">Group Visa</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message / Requirements */}
      <div className="mb-20">
        <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", fontSize: "14px" }}>
          Message / Requirements
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="Any specific questions, visa requirements, or passport details..."
          value={formData.message}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "11px 12px",
            border: "1px solid var(--tg-border-1)",
            borderRadius: "6px",
            fontSize: "14px",
            resize: "vertical",
          }}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="tg-btn w-100"
        style={{
          background: "var(--tg-theme-primary)",
          color: "#fff",
          padding: "13px",
          borderRadius: "6px",
          fontSize: "15px",
          fontWeight: "600",
          cursor: isSubmitting ? "not-allowed" : "pointer",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        {isSubmitting ? (
          <>
            <i className="fa-solid fa-spinner fa-spin"></i> Submitting Inquiry...
          </>
        ) : (
          <>
            <i className="fa-solid fa-paper-plane"></i> Submit Inquiry
          </>
        )}
      </button>
    </form>
  );
};

export default VisaAssistanceForm;
