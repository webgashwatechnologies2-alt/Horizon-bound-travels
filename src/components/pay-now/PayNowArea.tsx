"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { sendLead } from "@/utils/leadSender";

const PayNowArea = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Form state for payment confirmation
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    bookingId: "",
    amount: "",
    utr: "",
    paymentMethod: "UPI / QR Code",
    paymentDate: "",
    remarks: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const bankDetails = {
    accountName: "Horizon Bound Travels",
    bankName: "Central Bank of India",
    accountNumber: "4119067699",
    ifscCode: "CBIN0284737",
    accountType: "Current Account",
    branch: "Main Branch",
    upiId: "4119067699@cbin",
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    toast.success(`${label} copied to clipboard!`);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.amount || !formData.utr) {
      toast.error("Please fill in all required fields marked with *");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        form_type: "Payment Confirmation Slip",
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email || "N/A",
        bookingId: formData.bookingId || "N/A",
        amountPaid: `₹${formData.amount}`,
        utr_transaction_id: formData.utr,
        paymentMethod: formData.paymentMethod,
        paymentDate: formData.paymentDate || new Date().toISOString().split("T")[0],
        remarks: formData.remarks || "No additional remarks",
      };

      await sendLead(payload);
      setSubmitted(true);
      toast.success("Payment details submitted successfully! Our team will verify and send your confirmation shortly.");
    } catch (error) {
      console.error("Payment confirmation error:", error);
      toast.error("Failed to submit payment details. Please contact us directly on WhatsApp or phone.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Construct UPI link for QR Code
  const upiLink = `upi://pay?pa=${bankDetails.upiId}&pn=${encodeURIComponent(
    bankDetails.accountName
  )}&cu=INR`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
    upiLink
  )}&color=0b2545&bgcolor=ffffff`;

  return (
    <section className="tg-pay-now-area pt-100 pb-120 p-relative z-index-1 bg-light-subtle">
      <div className="container">
        {/* Top Header Banner */}
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10 text-center">
            <div className="tg-section-title-wrapper mb-20">
              <span className="tg-section-subtitle text-primary text-uppercase fw-semibold tracking-wider">
                <i className="fa-solid fa-shield-halved me-2"></i> 100% Verified & Secure Payment.
              </span>
              <h2 className="tg-section-title mt-10 fs-36 font-heading fw-bold">
                Official Payment Details for Horizon Bound Travels.
              </h2>
            </div>
            <p className="lead text-muted max-w-700 mx-auto fs-16">
              Make quick, hassle-free, and safe payments directly into our official bank account. 
              We support IMPS, NEFT, RTGS, UPI, Google Pay, PhonePe, and Paytm.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Bank Account Details Card */}
          <div className="col-lg-6 col-md-12">
            <div
              className="card border-0 shadow-lg h-100 rounded-4 overflow-hidden position-relative"
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #f8fafd 100%)",
                borderTop: "5px solid #0056b3",
              }}
            >
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center justify-content-between pb-3 mb-4 border-bottom">
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                      style={{ width: "52px", height: "52px", fontSize: "22px" }}
                    >
                      <i className="fa-solid fa-building-columns"></i>
                    </div>
                    <div>
                      <h4 className="mb-0 fw-bold fs-20 text-dark">Bank Transfer Details</h4>
                      <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-1 fs-12 mt-1">
                        <i className="fa-solid fa-check-circle me-1"></i> Verified Business Account
                      </span>
                    </div>
                  </div>
                </div>

                {/* Account Name */}
                <div className="p-3 mb-3 bg-white rounded-3 border shadow-sm">
                  <div className="text-muted small text-uppercase fw-semibold mb-1">
                    Account Holder Name
                  </div>
                  <div className="fw-bold fs-18 text-dark d-flex align-items-center justify-content-between">
                    <span>{bankDetails.accountName}</span>
                    <i className="fa-solid fa-user-check text-primary"></i>
                  </div>
                </div>

                {/* Bank Name */}
                <div className="p-3 mb-3 bg-white rounded-3 border shadow-sm">
                  <div className="text-muted small text-uppercase fw-semibold mb-1">
                    Bank Name
                  </div>
                  <div className="fw-bold fs-18 text-dark d-flex align-items-center justify-content-between">
                    <span>{bankDetails.bankName}</span>
                    <span className="badge bg-primary-subtle text-primary fw-semibold">Central Bank</span>
                  </div>
                </div>

                {/* Account Number with Copy */}
                <div className="p-3 mb-3 bg-primary-subtle bg-opacity-25 rounded-3 border border-primary-subtle">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="text-muted small text-uppercase fw-semibold">
                      Account Number
                    </span>
                    {copiedField === "Account Number" && (
                      <span className="text-success small fw-bold animate-fadeIn">
                        <i className="fa-solid fa-check me-1"></i> Copied!
                      </span>
                    )}
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="fw-bold fs-22 font-monospace tracking-wide text-dark">
                      {bankDetails.accountNumber}
                    </span>
                    <button
                      type="button"
                      className={`btn btn-sm ${
                        copiedField === "Account Number" ? "btn-success" : "btn-primary"
                      } px-3 rounded-pill shadow-sm transition-all`}
                      onClick={() => handleCopy(bankDetails.accountNumber, "Account Number")}
                    >
                      <i className={`fa-solid ${copiedField === "Account Number" ? "fa-check" : "fa-copy"} me-1`}></i>
                      {copiedField === "Account Number" ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>

                {/* IFSC Code with Copy */}
                <div className="p-3 mb-3 bg-white rounded-3 border shadow-sm">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="text-muted small text-uppercase fw-semibold">
                      IFSC Code
                    </span>
                    {copiedField === "IFSC Code" && (
                      <span className="text-success small fw-bold animate-fadeIn">
                        <i className="fa-solid fa-check me-1"></i> Copied!
                      </span>
                    )}
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="fw-bold fs-20 font-monospace text-dark">
                      {bankDetails.ifscCode}
                    </span>
                    <button
                      type="button"
                      className={`btn btn-sm ${
                        copiedField === "IFSC Code" ? "btn-success" : "btn-outline-primary"
                      } px-3 rounded-pill transition-all`}
                      onClick={() => handleCopy(bankDetails.ifscCode, "IFSC Code")}
                    >
                      <i className={`fa-solid ${copiedField === "IFSC Code" ? "fa-check" : "fa-copy"} me-1`}></i>
                      {copiedField === "IFSC Code" ? "Copied" : "Copy Code"}
                    </button>
                  </div>
                </div>

                {/* Additional Badges */}
                <div className="row g-2 mt-2">
                  <div className="col-12">
                    <div className="p-2 border rounded text-center bg-white">
                      <small className="text-muted d-block">Account Type </small>
                      <strong className="text-dark small">{bankDetails.accountType}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        {/* Need Assistance & WhatsApp Help Banner */}
        <div className="row justify-content-center mt-50">
          <div className="col-lg-10">
            <div
              className="p-4 p-md-4 rounded-4 shadow-sm text-white d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
              style={{ background: "linear-gradient(135deg, #0b2545 0%, #134074 100%)" }}
            >
              <div className="d-flex align-items-center gap-3">
                <div className="bg-success rounded-circle p-3 text-white d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>
                  <i className="fa-brands fa-whatsapp fs-2"></i>
                </div>
                <div>
                  <h5 className="mb-1 text-white fw-bold">Need instant payment verification?</h5>
                  <p className="mb-0 text-white-50 small">
                    Share your payment screenshot directly with our support team on WhatsApp for instant confirmation.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-2 flex-wrap">
                <Link
                  href="https://wa.me/+918988736000?text=Hi%20Horizon%20Bound%20Travels,%20I%20have%20made%20a%20payment.%20Here%20is%20my%20screenshot."
                  target="_blank"
                  className="btn btn-success rounded-pill px-4 fw-semibold d-inline-flex align-items-center"
                >
                  <i className="fa-brands fa-whatsapp me-2"></i> Send Screenshot
                </Link>
                <Link
                  href="tel:+918988736000"
                  className="btn btn-outline-light rounded-pill px-4 fw-semibold d-inline-flex align-items-center"
                >
                  <i className="fa-solid fa-phone me-2"></i> Call Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayNowArea;
