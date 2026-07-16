"use client"
import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { sendLead } from "@/utils/leadSender";
import styles from "./LeadPopup.module.css";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  destination?: string;
  travelers?: string;
}

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelers: "1",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Check if user has already closed the popup in the current session
    const isClosedThisSession = sessionStorage.getItem("lead_popup_session_closed");

    if (!isClosedThisSession) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000); // 3 seconds delay
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("lead_popup_session_closed", "true");
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.replace(/\s+/g, ""))) {
      tempErrors.phone = "Please enter a valid phone number (10-15 digits)";
    }

    if (!formData.destination) {
      tempErrors.destination = "Please select a destination";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    sendLead({
      form_type: "Lead Popup Enquiry",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      destination: formData.destination,
      travelers: formData.travelers,
    })
      .then(() => {
        toast.success("Thank you! Your travel enquiry has been sent successfully. Our expert will contact you shortly.", {
          position: "top-center",
          autoClose: 5000,
        });
        setIsSubmitting(false);
        setFormData({ name: "", email: "", phone: "", destination: "", travelers: "1" });
        handleClose();
      })
      .catch((error) => {
        console.error("Popup form error:", error);
        toast.error("Failed to send enquiry. Please try again or contact us directly.", {
          position: "top-center",
          autoClose: 5000,
        });
        setIsSubmitting(false);
      });
  };

  return (
    <>
      {/* Floating Badge (Trigger) */}
      <button
        className={styles.leadBadgeTrigger}
        onClick={handleOpen}
        aria-label="Plan Your Trip"
      >
        <i className="fa-solid fa-paper-plane"></i>
        <span style={{ marginTop: '5px' }}>Plan Your Trip</span>
      </button>

      {/* Modal Popup */}
      {isOpen && (
        <div className={styles.leadPopupBackdrop} onClick={handleClose}>
          <div
            className={styles.leadPopupDialog}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className={styles.leadPopupCloseBtn}
              onClick={handleClose}
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            {/* Left Image Section (Hidden on mobile) */}
            <div
              className={styles.leadPopupLeft}
              style={{ backgroundImage: `url('/assets/img/hero/herobanerthree.jpg')` }}
            >
              <div className={styles.leadPopupLeftContent}>
                <span className={styles.leadPopupLeftBadge}>Special Offer</span>
                <h3 className={styles.leadPopupLeftTitle}>Explore India With Experts</h3>
                <p className={styles.leadPopupLeftText}>
                  Get custom itineraries, private cabs, handpicked hotels, and 24/7 on-tour support. Save up to 15% today!
                </p>
              </div>
            </div>

            {/* Right Form Section */}
            <div className={styles.leadPopupRight}>
              <div className={styles.leadPopupRightHeader}>
                <h4 className={styles.leadPopupRightTitle}>Plan Your Dream Trip</h4>
                <p className={styles.leadPopupRightSubtitle}>
                  Provide your details and we will create a perfect, customized itinerary for your trip!
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className={styles.leadPopupForm}>
                {/* Hidden fields for EmailJS context matching templates */}
                <input type="hidden" name="web" value={`Lead Form: Destination - ${formData.destination}, Travelers - ${formData.travelers}`} />
                <input type="hidden" name="message" value={`Contact phone: ${formData.phone}. Destination of interest: ${formData.destination} for ${formData.travelers} travelers.`} />

                {/* Name */}
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    className={styles.inputField}
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <i className={`form-icon fa-solid fa-user ${styles.formIcon}`}></i>
                  {/* Keep name="user_name" for EmailJS */}
                  <input type="hidden" name="user_name" value={formData.name} />
                  {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                </div>

                {/* Email */}
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    className={styles.inputField}
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <i className={`form-icon fa-solid fa-envelope ${styles.formIcon}`}></i>
                  {/* Keep name="user_email" for EmailJS */}
                  <input type="hidden" name="user_email" value={formData.email} />
                  {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                </div>

                {/* Phone */}
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    className={styles.inputField}
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <i className={`form-icon fa-solid fa-phone ${styles.formIcon}`}></i>
                  {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
                </div>

                {/* Destination */}
                <div className={styles.formGroup}>
                  <select
                    name="destination"
                    className={styles.selectField}
                    value={formData.destination}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select Destination</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Spiti">Spiti</option>
                    <option value="Leh">Leh</option>
                    <option value="Kashmir">Kashmir</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Goa">Goa</option>
                    <option value="Rajasthan">Rajasthan</option>
                  </select>
                  <i className={`form-icon fa-solid fa-map-location-dot ${styles.formIcon}`}></i>
                  {errors.destination && <span className={styles.errorMessage}>{errors.destination}</span>}
                </div>

                {/* Number of Travelers */}
                <div className={styles.formGroup}>
                  <select
                    name="travelers"
                    className={styles.selectField}
                    value={formData.travelers}
                    onChange={handleChange}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3-5">3 - 5 Persons</option>
                    <option value="6-9">6 - 9 Persons</option>
                    <option value="10+">10+ Persons (Group)</option>
                  </select>
                  <i className={`form-icon fa-solid fa-users ${styles.formIcon}`}></i>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className={styles.leadPopupSubmitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                    </>
                  ) : (
                    <>
                      Submit Request <i className="fa-solid fa-arrow-right"></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeadPopup;
