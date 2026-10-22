"use client";

import Image from "next/image";
import Link from "next/link";

const FooterThree = () => {
   return (
      <>
         <footer>
            <div
               className="tg-footer-area tg-footer-space include-bg"
               style={{
                  backgroundImage: "url(/assets/img/footer/footer.jpg)",
               }}
            >
               <div className="container">
                  <div className="tg-footer-top mb-0">
                     <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                           <div className="tg-footer-widget mb-40">
                              <div className="tg-footer-logo mb-20">
                                 <Link href="/">
                                    <Image
                                       src="/horizonlogo.jpeg"
                                       alt="Horizon Bound Travels"
                                       width={150}
                                       height={150}
                                       style={{
                                          width: "150px",
                                          height: "auto",
                                          objectFit: "contain",
                                       }}
                                    />
                                 </Link>
                              </div>
                              <p className="mb-20">
                                 Discover unforgettable journeys across Spiti,
                                 Kashmir, Ladakh, Goa, Kerala, and more with
                                 expertly planned tour packages.
                              </p>
                              <div className="tg-footer-form mb-30">
                                 <form onSubmit={(e) => e.preventDefault()}>
                                    <input
                                       type="email"
                                       placeholder="Enter your mail"
                                       aria-label="Email address"
                                    />
                                    <button
                                       className="tg-footer-form-btn"
                                       type="submit"
                                       aria-label="Subscribe"
                                    >
                                       <svg
                                          width="22"
                                          height="17"
                                          viewBox="0 0 22 17"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path
                                             d="M1.52514 8.47486H20.4749M20.4749 8.47486L13.5 1.5M20.4749 8.47486L13.5 15.4497"
                                             stroke="white"
                                             strokeWidth="1.77778"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                          />
                                       </svg>
                                    </button>
                                 </form>
                              </div>
                              <div className="tg-footer-social">
                                 <Link
                                    href="https://www.facebook.com/profile.php?id=61591492783445"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                 >
                                    <i className="fa-brands fa-facebook-f" />
                                 </Link>
                                 <Link
                                    href="https://www.instagram.com/horizonboundtravels/?hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                 >
                                    <i className="fa-brands fa-instagram" />
                                 </Link>
                                 <Link href="/" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin-in" />
                                 </Link>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                           <div className="tg-footer-widget tg-footer-link ml-80 mb-40">
                              <h3 className="tg-footer-widget-title mb-25">
                                 Quick Links
                              </h3>
                              <ul>
                                 <li>
                                    <Link href="/">Home</Link>
                                 </li>
                                 <li>
                                    <Link href="/about">About Us</Link>
                                 </li>
                                 <li>
                                    <Link href="/tour-grid-1">Destinations</Link>
                                 </li>
                                 <li>
                                    <Link href="/pay-now">Pay Now</Link>
                                 </li>
                                 <li>
                                    <Link href="/contact">Contact Us</Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                           <div className="tg-footer-widget tg-footer-info mb-40">
                              <h3 className="tg-footer-widget-title mb-25">
                                 Contact & Registration
                              </h3>
                              <ul>
                                 <li className="mb-20">
                                    <Link
                                       className="d-flex"
                                       href="https://www.google.com/maps/search/?api=1&query=Karsog+District+Mandi+Himachal+Pradesh+175011"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                    >
                                       <div className="mr-15">
                                          <svg
                                             width="20"
                                             height="24"
                                             viewBox="0 0 20 24"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                          >
                                             <path
                                                d="M19.0013 10.0608C19.0013 16.8486 10.3346 22.6668 10.3346 22.6668C10.3346 22.6668 1.66797 16.8486 1.66797 10.0608C1.66797 7.74615 2.58106 5.52634 4.20638 3.88965C5.83169 2.25297 8.03609 1.3335 10.3346 1.3335C12.6332 1.3335 14.8376 2.25297 16.4629 3.88965C18.0882 5.52634 19.0013 7.74615 19.0013 10.0608Z"
                                                stroke="white"
                                                strokeWidth="1.73333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M10.3346 12.9699C11.9301 12.9699 13.2235 11.6674 13.2235 10.0608C13.2235 8.45412 11.9301 7.15168 10.3346 7.15168C8.73915 7.15168 7.44575 8.45412 7.44575 10.0608C7.44575 11.6674 8.73915 12.9699 10.3346 12.9699Z"
                                                stroke="white"
                                                strokeWidth="1.73333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                          </svg>
                                       </div>
                                       <span>
                                          <strong className="d-block text-white mb-5">
                                             Permanent Business Address
                                          </strong>
                                          Horizon Bound Travels,
                                          <br />
                                          Near PNB Bank,
                                          <br />
                                          Karsog, District Mandi,
                                          <br />
                                          Himachal Pradesh – 175011
                                       </span>
                                    </Link>
                                 </li>
                                 <li className="mb-20">
                                    <Link
                                       className="d-flex"
                                       href="tel:+918988736000"
                                    >
                                       <div className="mr-15">
                                          <i className="fa-sharp text-white fa-solid fa-phone" />
                                       </div>

                                       <span>+91 89887-36000</span>
                                    </Link>
                                 </li>
                                 <li className="d-flex mb-25">
                                    <div className="mr-15">
                                       <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path
                                             d="M11.9987 5.60006V12.0001L16.2654 14.1334M22.6654 12.0002C22.6654 17.8912 17.8897 22.6668 11.9987 22.6668C6.10766 22.6668 1.33203 17.8912 1.33203 12.0002C1.33203 6.10912 6.10766 1.3335 11.9987 1.3335C17.8897 1.3335 22.6654 6.10912 22.6654 12.0002Z"
                                             stroke="white"
                                             strokeWidth="1.6"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                          />
                                       </svg>
                                    </div>
                                    <p className="mb-0">
                                       Mon – Sun:
                                       <span className="text-white d-inline-block">
                                          {" "}Always Open
                                       </span>
                                       <br />
                                       Timing: 8 am – 6 pm
                                    </p>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                           <div className="tg-footer-widget tg-footer-link mb-40">
                              <h3 className="tg-footer-widget-title mb-25">
                                 Policies
                              </h3>
                              <ul>
                                 <li>
                                    <Link href="/privacy-policy">
                                       Privacy Policy
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href="/payment-policy">
                                       Payment Policy
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href="/terms-conditions">
                                       Terms & Conditions
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href="/vision-mission">
                                       Vision And Mission
                                    </Link>
                                 </li>
                                 <li className="tg-footer-registration mt-25">
                                    <div
                                       style={{
                                          borderTop: "1px solid rgba(255,255,255,0.2)",
                                          paddingTop: "20px",
                                       }}
                                    >
                                       <div
                                          style={{
                                             marginBottom: "14px",
                                             display: "flex",
                                             alignItems: "center",
                                             gap: "12px",
                                             flexWrap: "wrap",
                                          }}
                                       >
                                          <Image
                                             src="/assets/img/tourisamlogo/himachal-tourism-logo.png"
                                             alt="Himachal Tourism Logo"
                                             width={65}
                                             height={65}
                                             style={{
                                                width: "65px",
                                                height: "65px",
                                                objectFit: "contain",
                                                backgroundColor: "#ffffff",
                                                borderRadius: "6px",
                                                padding: "5px",
                                             }}
                                          />
                                          <div>
                                             <span
                                                style={{
                                                   display: "block",
                                                   color: "#ffffff",
                                                   fontSize: "11px",
                                                   fontWeight: 600,
                                                   letterSpacing: "0.5px",
                                                   lineHeight: 1.6,
                                                }}
                                             >
                                                DEPARTMENT OF TOURISM
                                                <br />
                                                & CIVIL AVIATION
                                             </span>

                                             <strong
                                                style={{
                                                   display: "block",
                                                   color: "#ffffff",
                                                   fontSize: "15px",
                                                   marginTop: "3px",
                                                }}
                                             >
                                                Himachal Tourism
                                             </strong>
                                          </div>
                                       </div>
                                       <span
                                          style={{
                                             display: "block",
                                             color: "#ffffff",
                                             fontSize: "12px",
                                             marginBottom: "6px",
                                          }}
                                       >
                                          Permanent Registration Number
                                       </span>
                                       <strong
                                          style={{
                                             display: "inline-block",
                                             color: "#ffffff",
                                             backgroundColor: "rgba(255,255,255,0.10)",
                                             border: "1px solid rgba(255,255,255,0.25)",
                                             borderRadius: "4px",
                                             padding: "8px 10px",
                                             fontSize: "13px",
                                             lineHeight: 1.5,
                                             overflowWrap: "anywhere",
                                             maxWidth: "100%",
                                          }}
                                       >
                                          DTO-MND-11-412/2026
                                       </strong>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tg-footer-copyright text-center">
                  <span>
                     Copyright{" "}
                     <Link href="/">© Horizon Bound Travels</Link>
                     {" | "}All Rights Reserved
                  </span>
               </div>
            </div>
         </footer>
      </>
   );
};

export default FooterThree;