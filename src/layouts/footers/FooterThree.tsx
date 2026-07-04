"use client"
import Image from "next/image"
import Link from "next/link"


const FooterThree = () => {

   return (
      <>
         <footer>
            <div className="tg-footer-area tg-footer-space include-bg" style={{ backgroundImage: `url(/assets/img/footer/footer.jpg)` }}>
               <div className="container">
                  <div className="tg-footer-top mb-40">
                     <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                           <div className="tg-footer-widget mb-40">
                              <div className="tg-footer-logo mb-20">
                                 <Link href="/"><Image src="/hzlogo.jpeg" alt="Horizon Bound Travels" width={150} height={150} /></Link>
                              </div>
                              <p className="mb-20">
                                 Discover unforgettable journeys across Spiti, Kashmir, Ladakh, Goa, Kerala, and more with expertly planned tour packages.
                              </p>
                              <div className="tg-footer-form mb-30">
                                 <form onSubmit={(e) => e.preventDefault()}>
                                    <input type="email" placeholder="Enter your mail" />
                                    <button className="tg-footer-form-btn" type="submit">
                                       <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.52514 8.47486H20.4749M20.4749 8.47486L13.5 1.5M20.4749 8.47486L13.5 15.4497" stroke="white" strokeWidth="1.77778" strokeLinecap="round" strokeLinejoin="round" />
                                       </svg>
                                    </button>
                                 </form>
                              </div>
                              <div className="tg-footer-social">
                                 <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                 <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                           <div className="tg-footer-widget tg-footer-link ml-80 mb-40">
                              <h3 className="tg-footer-widget-title mb-25">Quick Links</h3>
                              <ul>
                                 <li><Link href="/">Home</Link></li>
                                 <li><Link href="/about">About Us</Link></li>
                                 <li><Link href="/tour-grid-1">Destinations</Link></li>
                                 <li><Link href="/contact"> Contact Us</Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                           <div className="tg-footer-widget tg-footer-info mb-40">
                              <h3 className="tg-footer-widget-title mb-25">Information</h3>
                              <ul>
                                 <li>
                                    <Link
                                       className="d-flex"
                                       href="https://www.google.com/maps/search/?api=1&query=Karsog+District+Mandi+Himachal+Pradesh+175011"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                    >
                                       <span className="mr-15">
                                          {/* SVG */}
                                       </span>
                                       Karsog, District Mandi, Himachal Pradesh 175011
                                    </Link>
                                 </li>
                                 <li>
                                    <Link className="d-flex" href="tel:+1238889999">
                                       <span className="mr-15">
                                          <i className="fa-sharp text-white fa-solid fa-phone"></i>
                                       </span>
                                       +91 82190-98536
                                    </Link>
                                 </li>
                                 <li className="d-flex">
                                    <span className="mr-15">
                                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M11.9987 5.60006V12.0001L16.2654 14.1334M22.6654 12.0002C22.6654 17.8912 17.8897 22.6668 11.9987 22.6668C6.10766 22.6668 1.33203 17.8912 1.33203 12.0002C1.33203 6.10912 6.10766 1.3335 11.9987 1.3335C17.8897 1.3335 22.6654 6.10912 22.6654 12.0002Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                       </svg>
                                    </span>
                                    <p className="mb-0">
                                       Mon – Sat: 8 am – 5 pm,<br />
                                       Sunday: <span className="text-white d-inline-block">CLOSED</span>
                                    </p>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                           <div className="tg-footer-widget tg-footer-link mb-40">
                              <h3 className="tg-footer-widget-title mb-25">Policies</h3>
                              <ul>
                                 <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                 <li><Link href="/terms-conditions">Terms & conditions</Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tg-footer-copyright text-center">
                  <span>
                     Copyright <Link href="#">©Horizon Bound Travels</Link> |  All Right Reserved
                  </span>
               </div>
            </div>
         </footer>
      </>
   )
}

export default FooterThree
