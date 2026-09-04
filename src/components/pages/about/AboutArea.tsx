import Image from "next/image"
import Button from "@/components/common/Button"
import Link from "next/link"

import shape_1 from "@/assets/img/about/details/shape.png"
import shape_2 from "@/assets/img/about/details/shape-2.png"
import shape_3 from "@/assets/img/chose/chose-3/circle-text.png"
import shape_4 from "@/assets/img/chose/chose-3/star.png"
import thumb_1 from "@/assets/img/about/details/abt2.jpg"
import thumb_2 from "@/assets/img/about/details/abt3.jpg"
import thumb_3 from "@/assets/img/about/details/abt4.jpg"

const AboutArea = () => {
   return (
      <div className="tg-about-area p-relative z-index-1 pt-100 pb-100">
         <Image className="tg-about-details-shape p-absolute d-none d-lg-block" src={shape_1} alt="shape" />
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="tg-about-details-left p-relative">
                     <Image className="tg-about-details-map p-absolute" src={shape_2} alt="map" />
                     <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                           <div className="tg-about-details-thumb p-relative z-index-9" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                              <Image className="main-thumb tg-round-15 w-100" src={thumb_1} alt="thumb" style={{ height: '300px', objectFit: 'cover' }} />
                              <Image className="main-thumb tg-round-15 w-100" src={thumb_2} alt="thumb" style={{ height: '470px', objectFit: 'cover' }} />
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                           <div className="tg-about-details-thumb-2 p-relative">
                              <div className="tg-chose-3-rounded p-relative mb-30">
                                 <Image className="rotate-infinite-2" src={shape_3} alt="" />
                                 <Image className="tg-chose-3-star" src={shape_4} alt="" />
                              </div>
                              <Image className="w-100 tg-round-15" src={thumb_3} alt="chose" style={{ height: '615px', objectFit: 'cover' }} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="tg-chose-content mb-35 ml-60">
                     <div className="tg-chose-section-title">
                        <h5 className="tg-section-subtitle mb-15 wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".1s">
                           Where Journey Becomes Legacy
                        </h5>
                        <h2 className="mb-20 text-capitalize wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">
                           Horizon Bound Travels
                        </h2>
                        <p className="wow fadeInUp mb-20" data-wow-delay=".5s" data-wow-duration=".9s" style={{ textTransform: 'none', lineHeight: '1.7', fontSize: '15px' }}>
                           Horizon Bound Travels is a professionally driven travel agency dedicated to making travel planning easier, smoother, and more rewarding. We help travellers discover beautiful destinations across India and the world through thoughtfully designed holiday packages and personalized travel solutions. Whether you are planning a family vacation, a romantic escape, an adventure trip, a group holiday, or a customized international journey, we are here to help you plan it with confidence
                        </p>
                        <p className="wow fadeInUp mb-35" data-wow-delay=".6s" data-wow-duration=".9s" style={{ textTransform: 'none', lineHeight: '1.7', fontSize: '15px' }}>
                           Our approach is simple — understand your travel needs, plan every important detail, and help you enjoy the journey without unnecessary hassle. From holiday packages and hotel stays to flights, transportation, sightseeing, and customized itineraries, we bring essential travel services together to create a convenient and well-planned travel experience. At Horizon Bound Travels, we value trust, transparency, comfort, and customer satisfaction. We believe that every traveller deserves personal attention and a travel experience that feels truly their own.
                        </p>
                        <div className="tg-about-promise-box wow fadeInUp mb-40" data-wow-delay=".7s" data-wow-duration=".9s">
                           <h6 className="promise-title text-uppercase mb-10">
                              <i className="fas fa-award me-2"></i> More Than a Trip — An Experience
                           </h6>
                           <blockquote className="promise-quote mb-0 font-italic text-muted">
                              &ldquo;Every destination has a story, and every traveller has a different reason for exploring it. Our goal is to connect you with destinations, experiences, and moments that become memories for a lifetime. Plan with us. Travel with confidence. Explore beyond the horizon. &rdquo;
                           </blockquote>
                        </div>
                        <div className="tg-chose-btn wow fadeInUp" data-wow-delay=".8s" data-wow-duration=".9s">
                           <Link href="/contact" className="tg-btn tg-btn-switch-animation">
                              <Button text="Book Your Trip" />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutArea
