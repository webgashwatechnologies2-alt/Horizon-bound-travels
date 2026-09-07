"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import scannerimg from "@/assets/img/scanner/horizon-scanner.jpg"

const PayNowArea = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const bankDetails = {
    accountName: "Horizon Bound Travels",
    bankName: "Central Bank of India",
    accountNumber: "4119067699",
    ifscCode: "CBIN0284737",
    accountType: "Current Account",
    branch: "Main Branch",
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    toast.success(`${label} copied to clipboard!`);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  return (
    <section className="tg-pay-now-area pt-100 pb-120 p-relative z-index-1 bg-light-subtle">
      <div className="container">
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10 text-center">
            <div className="tg-section-title-wrapper mb-20">
              <span className="tg-section-subtitle text-primary text-uppercase fw-semibold tracking-wider">
                <i className="fa-solid fa-shield-halved me-2"></i> 100% Verified & Secure Payment
              </span>
              <h2 className="tg-section-title mt-10 fs-36 font-heading fw-bold">
                Official Payment Details for Horizon Bound Travels
              </h2>
            </div>
            <p className="lead text-muted max-w-700 mx-auto fs-16">
              Make quick, hassle-free, and safe payments directly into our official bank account.
              We support IMPS, NEFT, RTGS, UPI, Google Pay, PhonePe, and Paytm.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center align-items-stretch">
          <div className="col-lg-6 col-md-12">
            <div
              className="card border-0 shadow-lg h-100 rounded-4 overflow-hidden position-relative"
              style={{ minHeight: "400px" }}
            >
              <img
                src={scannerimg.src}
                alt="Secure Bank Transfer"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <div
                className="position-absolute bottom-0 start-0 w-100 p-4"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                }}
              >
                <h5 className="text-white fw-bold mb-1">Secure & Trusted Payments</h5>
                <p className="text-white-50 mb-0 fs-14">
                  Your transaction details are encrypted and 100% safe with us.
                </p>
              </div>
            </div>
          </div>
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
                <div className="p-3 mb-3 bg-white rounded-3 border shadow-sm">
                  <div className="text-muted small text-uppercase fw-semibold mb-1">
                    Account Holder Name
                  </div>
                  <div className="fw-bold fs-18 text-dark d-flex align-items-center justify-content-between">
                    <span>{bankDetails.accountName}</span>
                    <i className="fa-solid fa-user-check text-primary"></i>
                  </div>
                </div>
                <div className="p-3 mb-3 bg-white rounded-3 border shadow-sm">
                  <div className="text-muted small text-uppercase fw-semibold mb-1">
                    Bank Name
                  </div>
                  <div className="fw-bold fs-18 text-dark d-flex align-items-center justify-content-between">
                    <span>{bankDetails.bankName}</span>
                    <span className="badge bg-primary-subtle text-primary fw-semibold">Central Bank</span>
                  </div>
                </div>
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
                      className={`btn btn-sm ${copiedField === "Account Number" ? "btn-success" : "btn-primary"
                        } px-3 rounded-pill shadow-sm transition-all`}
                      onClick={() => handleCopy(bankDetails.accountNumber, "Account Number")}
                    >
                      <i className={`fa-solid ${copiedField === "Account Number" ? "fa-check" : "fa-copy"} me-1`}></i>
                      {copiedField === "Account Number" ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
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
                      className={`btn btn-sm ${copiedField === "IFSC Code" ? "btn-success" : "btn-outline-primary"
                        } px-3 rounded-pill transition-all`}
                      onClick={() => handleCopy(bankDetails.ifscCode, "IFSC Code")}
                    >
                      <i className={`fa-solid ${copiedField === "IFSC Code" ? "fa-check" : "fa-copy"} me-1`}></i>
                      {copiedField === "IFSC Code" ? "Copied" : "Copy Code"}
                    </button>
                  </div>
                </div>
                <div className="row g-2 mt-2">
                  <div className="col-12">
                    <div className="p-2 border rounded text-center bg-white">
                      <small className="text-muted d-block">Account Type</small>
                      <strong className="text-dark small">{bankDetails.accountType}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-40">
          <div className="col-lg-10">
            <div
              className="card border-0 shadow-lg rounded-4 overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #fbfdff 100%)",
                borderTop: "5px solid #ff7c08",
              }}
            >
              <div className="card-body p-4 p-md-5">
                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between pb-3 mb-4 border-bottom gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm flex-shrink-0"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "linear-gradient(135deg, #ff7c08 0%, #ff5200 100%)",
                        fontSize: "20px",
                      }}
                    >
                      <i className="fa-solid fa-credit-card"></i>
                    </div>
                    <div>
                      <div className="d-flex align-items-center gap-2">
                        <h4 className="mb-0 fw-bold fs-20 text-dark">
                          Accepted Payment Methods & UPI Apps
                        </h4>
                      </div>
                      <p className="text-muted small mb-0 mt-1">
                        Scan our official QR code with any of these trusted payment apps or pay directly via Net Banking.
                      </p>
                    </div>
                  </div>
                  <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-2 fs-12 align-self-start align-self-md-center">
                    <i className="fa-solid fa-shield-check me-1"></i> 100% Verified & Secure
                  </span>
                </div>
                <div className="row g-3 row-cols-2 row-cols-sm-3 row-cols-md-4">
                  <div className="col">
                    <div className="tg-payment-method-card">
                      <div className="d-flex align-items-center justify-content-center mb-2" style={{ height: "42px" }}>
                        <svg viewBox="0 0 48 48" width="38" height="38" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#4285F4" d="M46.145 24.5c0-1.636-.145-3.21-.418-4.727H24v9.09h12.436c-.545 2.872-2.181 5.309-4.636 6.945v5.782h7.509C43.709 37.455 46.145 31.527 46.145 24.5z"/>
                          <path fill="#34A853" d="M24 47c6.218 0 11.436-2.055 15.255-5.591l-7.509-5.782c-2.073 1.382-4.727 2.2-7.745 2.2-5.945 0-10.982-4.018-12.782-9.418H3.473v5.964C7.291 41.982 14.982 47 24 47z"/>
                          <path fill="#FBBC05" d="M11.218 28.409c-.455-1.382-.727-2.855-.727-4.409s.273-3.027.727-4.409V13.627H3.473C1.982 16.582 1.145 19.945 1.145 24s.836 7.418 2.327 10.373l7.745-5.964z"/>
                          <path fill="#EA4335" d="M24 9.382c3.382 0 6.418 1.164 8.8 3.436l6.6-6.6C35.418 2.564 30.2 0 24 0 14.982 0 7.291 5.018 3.473 12.627l7.745 5.964c1.8-5.4 6.836-9.209 12.782-9.209z"/>
                        </svg>
                      </div>
                      <h6 className="fw-bold text-dark fs-14 mb-1">Google Pay</h6>
                      <span className="text-muted fs-12">GPay / UPI</span>
                      <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-2 py-0 fs-10 mt-2">
                        Instant
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="tg-payment-method-card">
                      <div className="d-flex align-items-center justify-content-center mb-2" style={{ height: "42px" }}>
                        <svg viewBox="0 0 100 32" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100" height="32" rx="6" fill="#F4FBF7" stroke="#00A859" strokeWidth="1"/>
                          <path d="M12 7l-4 18h6l4-18h-6z" fill="#00A859"/>
                          <path d="M19 7l-4 18h6l4-18h-6z" fill="#F37021"/>
                          <text x="26" y="23" fontFamily="Arial, sans-serif" fontWeight="900" fontStyle="italic" fontSize="16" fill="#1C3F94">BHIM</text>
                        </svg>
                      </div>
                      <h6 className="fw-bold text-dark fs-14 mb-1">BHIM</h6>
                      <span className="text-muted fs-12">BHIM UPI</span>
                      <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-2 py-0 fs-10 mt-2">
                        Govt. Approved
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="tg-payment-method-card">
                      <div className="d-flex align-items-center justify-content-center mb-2" style={{ height: "42px" }}>
                        <svg viewBox="0 0 96 32" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="96" height="32" rx="6" fill="#F0F8FF" stroke="#00BAF2" strokeWidth="1"/>
                          <text x="8" y="23" fontFamily="Arial Black, Impact, sans-serif" fontWeight="900" fontSize="18" fill="#002970">Pay</text>
                          <text x="50" y="23" fontFamily="Arial Black, Impact, sans-serif" fontWeight="900" fontSize="18" fill="#00BAF2">tm</text>
                        </svg>
                      </div>
                      <h6 className="fw-bold text-dark fs-14 mb-1">Paytm</h6>
                      <span className="text-muted fs-12">UPI & Wallet</span>
                      <span className="badge bg-info-subtle text-info border border-info-subtle rounded-pill px-2 py-0 fs-10 mt-2">
                        Instant
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="tg-payment-method-card">
                      <div className="d-flex align-items-center justify-content-center mb-2" style={{ height: "42px" }}>
                        <svg viewBox="0 0 100 32" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100" height="32" rx="6" fill="#FFF9F5" stroke="#F37021" strokeWidth="1"/>
                          <path d="M14 9l-5 7 5 7h5l-5-7 5-7h-5z" fill="#00843D"/>
                          <path d="M21 9l-5 7 5 7h5l-5-7 5-7h-5z" fill="#F47920"/>
                          <text x="28" y="23" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontStyle="italic" fontSize="16" fill="#2E3192">UPI</text>
                        </svg>
                      </div>
                      <h6 className="fw-bold text-dark fs-14 mb-1">UPI</h6>
                      <span className="text-muted fs-12">All UPI Apps</span>
                      <span className="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle rounded-pill px-2 py-0 fs-10 mt-2">
                        24/7 Real-Time
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="tg-payment-method-card">
                      <div className="d-flex align-items-center justify-content-center mb-2" style={{ height: "42px" }}>
                        <svg viewBox="0 0 40 40" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="20" fill="#5F259F"/>
                          <path d="M22.8 11.8h-4.2c-3.8 0-5.8 2-5.8 5.2 0 3 1.8 5 4.8 5.2v8.5h3.4v-6.9h1.8c3.5 0 6-2.2 6-5.8 0-4-2.6-6.2-6-6.2zm-.2 8.4h-4v-4.7h4c1.8 0 3 .9 3 2.4 0 1.5-1.2 2.3-3 2.3z" fill="#ffffff"/>
                          <path d="M22.5 10l3.8-3.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <h6 className="fw-bold text-dark fs-14 mb-1">PhonePe</h6>
                      <span className="text-muted fs-12">UPI & Wallet</span>
                      <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-2 py-0 fs-10 mt-2">
                        Fast
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="tg-payment-method-card">
                      <div className="d-flex align-items-center justify-content-center mb-2" style={{ height: "42px" }}>
                        <svg viewBox="0 0 100 32" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100" height="32" rx="6" fill="#FFFDF5" stroke="#FF9900" strokeWidth="1"/>
                          <text x="8" y="20" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="13" fill="#232F3E">amazon</text>
                          <text x="56" y="20" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="13" fill="#007185">pay</text>
                          <path d="M12 25c12 4 28 2 34-2" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M47 21l2 3.5-3.5.5" fill="#FF9900"/>
                        </svg>
                      </div>
                      <h6 className="fw-bold text-dark fs-14 mb-1">Amazon Pay</h6>
                      <span className="text-muted fs-12">UPI & Balance</span>
                      <span className="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle rounded-pill px-2 py-0 fs-10 mt-2">
                        Supported
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="tg-payment-method-card">
                      <div className="d-flex align-items-center justify-content-center mb-2" style={{ height: "42px" }}>
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle text-white shadow-sm"
                          style={{ width: "38px", height: "38px", background: "linear-gradient(135deg, #0b2545 0%, #134074 100%)" }}
                        >
                          <i className="fa-solid fa-building-columns fs-16"></i>
                        </div>
                      </div>
                      <h6 className="fw-bold text-dark fs-14 mb-1">Net Banking</h6>
                      <span className="text-muted fs-12">IMPS / NEFT / RTGS</span>
                      <span className="badge bg-secondary-subtle text-secondary border border-secondary-subtle rounded-pill px-2 py-0 fs-10 mt-2">
                        All Banks
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="tg-payment-method-card">
                      <div className="d-flex align-items-center justify-content-center mb-2" style={{ height: "42px" }}>
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle text-white shadow-sm"
                          style={{ width: "38px", height: "38px", background: "linear-gradient(135deg, #0056b3 0%, #0099ff 100%)" }}
                        >
                          <i className="fa-solid fa-credit-card fs-16"></i>
                        </div>
                      </div>
                      <h6 className="fw-bold text-dark fs-14 mb-1">Cards & RuPay</h6>
                      <span className="text-muted fs-12">Debit / Credit Cards</span>
                      <span className="badge bg-info-subtle text-info border border-info-subtle rounded-pill px-2 py-0 fs-10 mt-2">
                        Secure
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-around gap-3 pt-4 mt-4 border-top">
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <i className="fa-solid fa-shield-check text-success fs-16"></i>
                    <span><strong>100% Encrypted</strong> & Safe</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <i className="fa-solid fa-bolt text-warning fs-16"></i>
                    <span><strong>Instant</strong> Transfer Confirmation</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <i className="fa-solid fa-circle-check text-primary fs-16"></i>
                    <span><strong>Zero</strong> Additional Convenience Fees</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <i className="fa-solid fa-building-columns text-info fs-16"></i>
                    <span><strong>Verified Current Account</strong> (Central Bank)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-40">
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
