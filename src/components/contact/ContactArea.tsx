import Image from "next/image"
import Link from "next/link"
import ContactForm from "../forms/ContactForm"

import shape_1 from "@/assets/img/banner/banner-2/shape.png"

const ContactArea = () => {
   return (
      <div className="tg-contact-area pt-130 p-relative z-index-1 pb-100">
         <Image className="tg-team-shape-2 d-none d-md-block" src={shape_1} alt="" />
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-5">
                  <div className="tg-team-details-contant tg-contact-info-wrap mb-30">
                     <h6 className="mb-15">Information:</h6>
                     <p className="mb-25">Brendan Fraser, renowned actor of the silver screen, has taken on a new  as a tour guide, leveraging his passion for adventure</p>
                     <div className="tg-team-details-contact-info mb-35">
                        <div className="tg-team-details-contact">
                           <div className="item">
                              <span>Phone :</span>
                              <Link href="tel:+918988736000">+91 89887-36000</Link>
                           </div>
                           <div className="item">
                              <span>Website : </span>
                              <Link href="https://horizonboundtravels.com">horizonboundtravels.com</Link>
                           </div>
                           <div className="item">
                              <span>E-mail : </span>
                              <Link href="mailto: info@horizonboundtravels.com">info@horizonboundtravels.com</Link>
                           </div>
                           <div className="item">
                              <span>Address :</span>
                              <Link href="https://www.google.com/maps/search/?api=1&query=Karsog+District+Mandi+Himachal+Pradesh+175011"> Karsog District Mandi Himachal Pradesh 175011 </Link>
                           </div>
                        </div>
                     </div>
                     <div className="tg-contact-map h-100">
                        <iframe
                           src="https://www.google.com/maps/embed?pb=https://www.google.com/maps/search/?api=1&query=Karsog+District+Mandi+Himachal+Pradesh+175011"
                           width="100%"
                           height="450"
                           style={{ border: 0 }}
                           loading="lazy"
                           allowFullScreen
                           referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                     </div>
                  </div>
               </div>
               <div className="col-lg-7">
                  <div className="tg-contact-content-wrap ml-40 mb-30">
                     <h3 className="tg-contact-title mb-15">Let&apos;s connect and get to know <br />
                        each other</h3>
                     <p className="mb-30">Brendan Fraser, renowned actor of the silver screen, has taken on a new
                        role as a tour guide, leveraging his passion.</p>
                     <div className="tg-contact-form tg-tour-about-review-form">
                        <ContactForm />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactArea
