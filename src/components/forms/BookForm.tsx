"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { sendLead } from "@/utils/leadSender";

interface BookFormProps {
  packageTitle: string;
}

const BookForm = ({ packageTitle }: BookFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      await sendLead({
        form_type: "Tour Package Booking Inquiry",
        package_title: packageTitle,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        travel_date: formData.date,
      });

      toast.success("Enquiry sent successfully! Our tour expert will contact you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
      });
    } catch (error) {
      console.error("Booking form submit error:", error);
      toast.error("Failed to send enquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="mb-20" onSubmit={handleSubmit}>
      <div className="mb-15">
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>Your Name *</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid var(--tg-border-1)",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />
      </div>
      <div className="mb-15">
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>Email *</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid var(--tg-border-1)",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />
      </div>
      <div className="mb-15">
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>Phone *</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid var(--tg-border-1)",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />
      </div>
      <div className="mb-20">
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>Travel Date *</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid var(--tg-border-1)",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="tg-btn w-100"
        style={{
          background: "var(--tg-theme-primary)",
          color: "#fff",
          padding: "14px",
          borderRadius: "6px",
          fontSize: "16px",
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
            <i className="fa-solid fa-spinner fa-spin"></i> Submitting...
          </>
        ) : (
          "Enquire Now"
        )}
      </button>
    </form>
  );
};

export default BookForm;
