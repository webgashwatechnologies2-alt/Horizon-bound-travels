"use client";
import { useState } from "react";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterThree from "@/layouts/footers/FooterThree";
import destination_data from "@/data/DestinationData";
import Image from "next/image";
import Link from "next/link";
import BookForm from "@/components/forms/BookForm";
import VisaAssistanceForm from "@/components/forms/VisaAssistanceForm";
import { isInternationalDestination, getDestinationDisplayName } from "@/utils/destinationClassifier";

interface TourDetailsClientProps {
  id: string;
}

const TourDetailsClient = ({ id }: TourDetailsClientProps) => {
  const packageId = parseInt(id);
  const pkg = destination_data.find(p => p.id === packageId);
  const isInternational = isInternationalDestination(pkg?.destination);
  const destinationDisplayName = getDestinationDisplayName(pkg?.destination);
  const [activeTab, setActiveTab] = useState<'book' | 'visa'>('book');
  const [expandedDays, setExpandedDays] = useState<Set<number>>(new Set());

  const toggleDay = (index: number) => {
    const newExpanded = new Set(expandedDays);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedDays(newExpanded);
  };

  const isLongDescription = (text: string) => text.length > 200;

  if (!pkg) {
    return (
      <>
        <HeaderThree />
        <main className="pt-120 pb-120">
          <div className="container">
            <div className="text-center">
              <h2>Package Not Found</h2>
              <Link href="/" className="tg-btn mt-4">Back to Home</Link>
            </div>
          </div>
        </main>
        <FooterThree />
      </>
    );
  }
  return (
    <>
      <HeaderThree />
      <main>
        <div className="tg-breadcrumb-spacing-3 include-bg p-relative fix" style={{ backgroundImage: `url(${pkg.thumb.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="tg-hero-top-shadow"></div>
        </div>
        <div className="tg-breadcrumb-list-2-wrap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tg-breadcrumb-list-2">
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><i className="fa-sharp fa-solid fa-angle-right"></i></li>
                    <li><span>{pkg.title}</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                {/* Package Image */}
                <div className="mb-30">
                  <div className="tg-package-thumb p-relative">
                    <Image
                      src={pkg.thumb}
                      alt={pkg.title}
                      className="w-100"
                      style={{ borderRadius: '8px', objectFit: 'cover', height: '450px' }}
                    />
                    {pkg.tag && (
                      <span className="tg-package-tag" style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        background: 'var(--tg-theme-primary)',
                        color: '#fff',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}>
                        {pkg.tag}
                      </span>
                    )}
                  </div>
                </div>

                {/* Package Info */}
                <div className="tg-package-details mb-40">
                  <h2 className="mb-20">{pkg.title}</h2>
                  <div className="tg-package-meta mb-30 d-flex flex-wrap align-items-center" style={{ gap: '20px' }}>
                    <div className="d-flex align-items-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                        <path d="M8.00175 3.73329V7.99996L10.8462 9.42218M15.1128 8.00003C15.1128 11.9274 11.9291 15.1111 8.00174 15.1111C4.07438 15.1111 0.890625 11.9274 0.890625 8.00003C0.890625 4.07267 4.07438 0.888916 8.00174 0.888916C11.9291 0.888916 15.1128 4.07267 15.1128 8.00003Z" stroke="currentColor" strokeWidth="1.06667" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{pkg.time}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                        <path d="M12.3329 6.7071C12.3329 11.2324 6.55512 15.1111 6.55512 15.1111C6.55512 15.1111 0.777344 11.2324 0.777344 6.7071C0.777344 5.16402 1.38607 3.68414 2.46962 2.59302C3.55316 1.5019 5.02276 0.888916 6.55512 0.888916C8.08748 0.888916 9.55708 1.5019 10.6406 2.59302C11.7242 3.68414 12.3329 5.16402 12.3329 6.7071Z" stroke="currentColor" strokeWidth="1.15556" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.55512 8.64649C7.61878 8.64649C8.48105 7.7782 8.48105 6.7071C8.48105 5.636 7.61878 4.7677 6.55512 4.7677C5.49146 4.7677 4.6292 5.636 4.6292 6.7071C4.6292 7.7782 5.49146 8.64649 6.55512 8.64649Z" stroke="currentColor" strokeWidth="1.15556" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{pkg.location}</span>
                    </div>
                    {pkg.guest && (
                      <div className="d-flex align-items-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                          <path d="M8.00175 8.00003C9.6586 8.00003 11.0017 6.65692 11.0017 5.00003C11.0017 3.34314 9.6586 2.00003 8.00175 2.00003C6.3449 2.00003 5.00175 3.34314 5.00175 5.00003C5.00175 6.65692 6.3449 8.00003 8.00175 8.00003Z" stroke="currentColor" strokeWidth="1.06667" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8.00175 9.33337C4.68465 9.33337 2.00175 11.0149 2.00175 13.1111V14.0001H14.0018V13.1111C14.0018 11.0149 11.3189 9.33337 8.00175 9.33337Z" stroke="currentColor" strokeWidth="1.06667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{pkg.guest}</span>
                      </div>
                    )}
                  </div>

                  <div className="tg-package-description mb-30">
                    <h4 className="mb-15">About This Package</h4>
                    <p style={{ lineHeight: '1.8', color: 'var(--tg-grey-1)' }}>
                      Experience the beauty of {pkg.location} with our carefully curated tour package.
                      This {pkg.time} journey takes you through the most stunning landscapes and cultural highlights
                      of the region. Perfect for {pkg.guest || 'travelers'} seeking adventure and memorable experiences.
                    </p>
                  </div>

                  <div className="tg-package-highlights mb-30">
                    <h4 className="mb-15">Package Highlights</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <i className="fa-solid fa-check" style={{ color: 'var(--tg-theme-primary)', marginRight: '10px' }}></i>
                        Professional tour guide
                      </li>
                      <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <i className="fa-solid fa-check" style={{ color: 'var(--tg-theme-primary)', marginRight: '10px' }}></i>
                        Comfortable accommodation
                      </li>
                      <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <i className="fa-solid fa-check" style={{ color: 'var(--tg-theme-primary)', marginRight: '10px' }}></i>
                        All transportation included
                      </li>
                      <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <i className="fa-solid fa-check" style={{ color: 'var(--tg-theme-primary)', marginRight: '10px' }}></i>
                        Breakfast included
                      </li>
                      <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <i className="fa-solid fa-check" style={{ color: 'var(--tg-theme-primary)', marginRight: '10px' }}></i>
                        24/7 customer support
                      </li>
                    </ul>
                  </div>

                  <div className="tg-package-reviews mb-30">
                    <h4 className="mb-15">Reviews</h4>
                    <div className="d-flex align-items-center mb-15">
                      <span className="tg-rating-stars" style={{ color: '#FFD700', marginRight: '10px' }}>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span style={{ fontWeight: '600' }}>{pkg.review}</span>
                      <span style={{ marginLeft: '10px', color: 'var(--tg-grey-4)' }}>{pkg.total_review}</span>
                    </div>
                  </div>
                  {pkg.itinerary && pkg.itinerary.length > 0 && (
                    <div className="tg-package-itinerary mb-40">
                      <h4 className="mb-20">Day-wise Itinerary</h4>
                      <div className="row">
                        {pkg.itinerary.map((day, index) => (
                          <div key={index} className="col-md-6 mb-20">
                            <div style={{
                              background: '#fff',
                              borderRadius: '12px',
                              padding: '0',
                              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                              border: '1px solid #eee',
                              overflow: 'hidden',
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column'
                            }}>
                              <div style={{
                                background: 'var(--tg-theme-primary)',
                                padding: '15px 20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px'
                              }}>
                                <div style={{
                                  width: '45px',
                                  height: '45px',
                                  borderRadius: '50%',
                                  background: '#fff',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontWeight: '700',
                                  fontSize: '18px',
                                  color: 'var(--tg-theme-primary)',
                                  flexShrink: 0
                                }}>
                                  {index + 1}
                                </div>
                                <div>
                                  <h5 style={{ fontSize: '16px', fontWeight: '600', margin: 0, color: '#fff' }}>
                                    {day.day}
                                  </h5>
                                  <p style={{ fontSize: '14px', margin: '4px 0 0 0', color: 'rgba(255,255,255,0.9)' }}>
                                    {day.title}
                                  </p>
                                </div>
                              </div>
                              <div style={{ padding: '20px', flex: 1 }}>
                                <p style={{ lineHeight: '1.7', color: 'var(--tg-grey-1)', margin: 0 }}>
                                  {isLongDescription(day.description) && !expandedDays.has(index)
                                    ? `${day.description.substring(0, 200)}...`
                                    : day.description}
                                </p>
                                {isLongDescription(day.description) && (
                                  <button
                                    onClick={() => toggleDay(index)}
                                    style={{
                                      background: 'none',
                                      border: 'none',
                                      color: 'var(--tg-theme-primary)',
                                      fontWeight: '600',
                                      cursor: 'pointer',
                                      padding: '8px 0',
                                      marginTop: '10px',
                                      fontSize: '14px'
                                    }}
                                  >
                                    {expandedDays.has(index) ? 'Read Less' : 'Read More'}
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Inclusions */}
                  {pkg.inclusions && pkg.inclusions.length > 0 && (
                    <div className="tg-package-inclusions mb-40">
                      <h4 className="mb-20">Inclusions</h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {pkg.inclusions.map((item, index) => (
                          <li key={index} style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
                            <i className="fa-solid fa-check-circle" style={{ color: '#28a745', marginRight: '12px', marginTop: '4px' }}></i>
                            <span style={{ lineHeight: '1.6' }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Exclusions */}
                  {pkg.exclusions && (
                    <div className="tg-package-exclusions mb-40">
                      <h4 className="mb-20">Exclusions</h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {(Array.isArray(pkg.exclusions) ? pkg.exclusions : [pkg.exclusions]).map((item, index) => (
                          <li key={index} style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
                            <i className="fa-solid fa-times-circle" style={{ color: '#dc3545', marginRight: '12px', marginTop: '4px' }}></i>
                            <span style={{ lineHeight: '1.6' }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-xl-4 col-lg-4">
                <div className="tg-package-sidebar">
                  <div className="tg-package-sidebar-card p-30" style={{
                    background: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                    padding: '30px'
                  }}>
                    {/* Conditional Tabs for International Packages */}
                    {isInternational && (
                      <div
                        className="d-flex mb-25"
                        style={{
                          background: "#f1f5f9",
                          borderRadius: "8px",
                          padding: "4px",
                          gap: "4px",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setActiveTab("book")}
                          style={{
                            flex: 1,
                            padding: "10px 12px",
                            borderRadius: "6px",
                            border: "none",
                            background: activeTab === "book" ? "#fff" : "transparent",
                            color: activeTab === "book" ? "var(--tg-theme-primary)" : "#64748b",
                            fontWeight: "600",
                            fontSize: "13px",
                            boxShadow:
                              activeTab === "book"
                                ? "0 2px 6px rgba(0,0,0,0.08)"
                                : "none",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                          }}
                        >
                          <i className="fa-solid fa-calendar-check"></i> Book Package
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveTab("visa")}
                          style={{
                            flex: 1,
                            padding: "10px 12px",
                            borderRadius: "6px",
                            border: "none",
                            background: activeTab === "visa" ? "#fff" : "transparent",
                            color: activeTab === "visa" ? "var(--tg-theme-primary)" : "#64748b",
                            fontWeight: "600",
                            fontSize: "13px",
                            boxShadow:
                              activeTab === "visa"
                                ? "0 2px 6px rgba(0,0,0,0.08)"
                                : "none",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                          }}
                        >
                          <i className="fa-solid fa-passport"></i> Visa Assistance
                        </button>
                      </div>
                    )}

                    {/* Booking View */}
                    {activeTab === "book" ? (
                      <>
                        <h4 className="mb-20">Book This Package</h4>

                        <div
                          className="tg-package-price mb-25"
                          style={{
                            background: "var(--tg-grey-7)",
                            padding: "20px",
                            borderRadius: "8px",
                            textAlign: "center",
                          }}
                        >
                          <p
                            className="mb-5"
                            style={{ fontSize: "14px", color: "var(--tg-grey-4)" }}
                          >
                            Starting From
                          </p>
                          <div className="d-flex align-items-center justify-content-center">
                            <span
                              style={{
                                fontSize: "24px",
                                fontWeight: "700",
                                color: "var(--tg-theme-primary)",
                              }}
                            ></span>
                            <span
                              style={{
                                fontSize: "20px",
                                fontWeight: "700",
                                color: "var(--tg-theme-primary)",
                                marginLeft: "5px",
                              }}
                            >
                              {pkg.price}
                            </span>
                          </div>
                          {pkg.delete_price && (
                            <del
                              style={{ color: "var(--tg-grey-4)", fontSize: "14px" }}
                            >
                              ₹{pkg.delete_price}
                            </del>
                          )}
                        </div>

                        <BookForm packageTitle={pkg.title} />

                        {/* Visa Assistance Callout Banner for International Packages */}
                        {isInternational && (
                          <div
                            style={{
                              marginTop: "15px",
                              marginBottom: "20px",
                              padding: "12px 14px",
                              background: "rgba(244, 107, 8, 0.06)",
                              border: "1px dashed var(--tg-theme-primary)",
                              borderRadius: "6px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "10px",
                            }}
                          >
                            <div style={{ fontSize: "13px", color: "#1e293b" }}>
                              <strong style={{ display: "block", color: "#0b1c3f" }}>
                                Need Visa Assistance?
                              </strong>
                              <span style={{ fontSize: "12px", color: "#64748b" }}>
                                For {destinationDisplayName || "this destination"}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => setActiveTab("visa")}
                              style={{
                                background: "var(--tg-theme-primary)",
                                color: "#fff",
                                border: "none",
                                padding: "7px 12px",
                                borderRadius: "4px",
                                fontSize: "12px",
                                fontWeight: "600",
                                cursor: "pointer",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Inquire Now
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      /* Visa Assistance View (International Only) */
                      <>
                        <div className="d-flex align-items-center justify-content-between mb-15">
                          <h4 className="mb-0" style={{ fontSize: "18px", fontWeight: "700" }}>
                            Visa Assistance
                          </h4>
                          <span
                            style={{
                              fontSize: "12px",
                              background: "rgba(244, 107, 8, 0.1)",
                              color: "var(--tg-theme-primary)",
                              padding: "3px 8px",
                              borderRadius: "4px",
                              fontWeight: "600",
                            }}
                          >
                            International
                          </span>
                        </div>
                        <VisaAssistanceForm
                          defaultDestination={destinationDisplayName || pkg.location || ""}
                          packageTitle={pkg.title}
                        />
                      </>
                    )}

                    <div className="tg-package-contact" style={{ textAlign: "center" }}>
                      <p style={{ marginBottom: "10px", color: "var(--tg-grey-4)" }}>
                        Need help?
                      </p>
                      <Link
                        href="/contact"
                        style={{
                          color: "var(--tg-theme-primary)",
                          fontWeight: "600",
                        }}
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterThree />
    </>
  );
};

export default TourDetailsClient;
