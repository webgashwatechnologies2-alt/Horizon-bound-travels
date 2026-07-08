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
               {/* Image collage left column */}
               <div className="col-lg-6">
                  <div className="tg-about-details-left p-relative mb-15">
                     <Image className="tg-about-details-map p-absolute" src={shape_2} alt="map" />
                     <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                           <div className="tg-about-details-thumb p-relative z-index-9">
                              <Image className="main-thumb tg-round-15 w-100 h-100 mb-20" src={thumb_1} alt="thumb" />
                              <Image className="main-thumb tg-round-15 w-100 h-100 mb-20" src={thumb_2} alt="thumb" />
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                           <div className="tg-about-details-thumb-2 p-relative">
                              <div className="tg-chose-3-rounded p-relative mb-30">
                                 <Image className="rotate-infinite-2" src={shape_3} alt="" />
                                 <Image className="tg-chose-3-star" src={shape_4} alt="" />
                              </div>
                              <Image className="w-100 h-100 tg-round-15" src={thumb_3} alt="chose" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Professional content right column */}
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
                           Horizon Bound Travels is an elite travel management company dedicated to redefining the paradigm of global exploration. Our foundational philosophy is built on a singular directive: to elevate standard travel into profound, lifelong milestones.
                        </p>
                        
                        <p className="wow fadeInUp mb-35" data-wow-delay=".6s" data-wow-duration=".9s" style={{ textTransform: 'none', lineHeight: '1.7', fontSize: '15px' }}>
                           While our operational capabilities span international frontiers, our heritage and deepest expertise reside within India’s most iconic landscapes—most notably, the majestic realm of Himachal Pradesh. We specialize in architecting bespoke, immersive itineraries through the alpine sanctuaries of Manali, the spiritual and cultural epicenter of Dharamshala, and the timeless, stately ridges of Shimla.
                        </p>

                        {/* Styled Horizon Bound Promise quote block */}
                        <div className="tg-about-promise-box wow fadeInUp mb-40" data-wow-delay=".7s" data-wow-duration=".9s">
                           <h6 className="promise-title text-uppercase mb-10">
                              <i className="fas fa-award me-2"></i> The Horizon Bound Promise
                           </h6>
                           <blockquote className="promise-quote mb-0 font-italic text-muted">
                              &ldquo;Horizon Bound Travels operates not merely as an agency, but as your dedicated custodian on the road. We plan with meticulous rigor so that your dream itinerary unfolds seamlessly—rendering every step a profound discovery, an authentic connection, and a lifetime of invaluable memories.&rdquo;
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
