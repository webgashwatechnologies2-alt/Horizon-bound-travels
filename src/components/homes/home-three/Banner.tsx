"use client"
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';
import Button from "@/components/common/Button"
import Link from "next/link"

const banner_data = [
   {
      image: "/assets/img/hero/herobanerthree.jpg",
      subtitle: "✦ Adventure Awaits You",
      title: "Unleash the Explorer Within",
      description: "Traverse mystical high-altitude deserts, ancient monasteries, and thrilling mountain passes.",
      price: "Adventure Tour",
      label: "Experience",
      link: "/destinations/uttarakhand"
   },
   {
      image: "/assets/img/hero/herobaner1.jpg",
      subtitle: "✦ Begin Your Journey",
      title: "Escape to the Mountains",
      description: "Discover majestic peaks, lush valleys, and snow-capped summits on an unforgettable mountain adventure.",
      price: "Mountain Adventure",
      label: "Experience",
      link: "/destinations/himachal"
   },
   {
      image: "/assets/img/hero/herobaner2.jpg",
      subtitle: "✦ Travel with Wonder",
      title: "Journey to Paradise",
      description: "Experience breathtaking beauty, serene lakes, and pristine landscapes that leave you speechless.",
      price: "Family Friendly",
      label: "Perfect For",
      link: "/destinations/himachal"
   },
   
   {
      image: "/assets/img/hero/herobanerfour.jpg",
      subtitle: "✦ Find Your Serenity",
      title: "Relax in Serene Escapes",
      description: "Enjoy peaceful valleys, flowing rivers, lush forests, and breathtaking Himalayan landscapes.",
      price: "Nature Escape",
      label: "Theme",
      link: "/destinations/uttarakhand"
   },
   {
      image: "/assets/img/hero/herobanerfive.jpg",
      subtitle: "✦ Discover Hidden Gems",
      title: "Explore Hidden Wonders",
      description: "Discover charming hill towns, scenic trails, ancient temples, and unforgettable mountain views.",
      price: "Local Experiences",
      label: "Highlights",
      link: "/destinations/uttarakhand"
   },
   {
      image: "/assets/img/hero/herobanersix.jpg",
      subtitle: "✦ Breathe the Fresh Air",
      title: "Nature's Grand Canvas",
      description: "Reconnect with nature through peaceful valleys, pine forests, and breathtaking Himalayan vistas.",
      price: "All Seasons",
      label: "Best Time",
      link: "/destinations/himachal"
   },
   {
      image: "/assets/img/hero/herobanerseven.jpg",
      subtitle: "✦ Walk Sacred Paths",
      title: "Embark on Spiritual Trails",
      description: "Seek peace and adventure along holy riverbanks, ancient shrines, and pristine alpine pathways.",
      price: "Pilgrimage & Nature",
      label: "Speciality",
      link: "/destinations/uttarakhand"
   },
];

const Banner = () => {
   const swiperRef = useRef<SwiperType | null>(null);

   return (
      <div className="tg-hero-area fix p-relative">
         <div className="tg-hero-top-shadow"></div>

         <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
               delay: 5000,
               disableOnInteraction: false,
            }}
            pagination={{
               el: '.tg-hero-dots',
               clickable: true,
               bulletClass: 'tg-hero-dot',
               bulletActiveClass: 'tg-hero-dot-active',
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="tg-hero-slider-active"
            style={{ width: '100%' }}
         >
            {banner_data.map((item, i) => (
               <SwiperSlide key={i}>
                  {/* Full-screen slide wrapper */}
                  <div className="tg-hero-slide-wrapper">
                     {/* Background Image */}
                     <div
                        className="tg-hero-thumb"
                        style={{ backgroundImage: `url(${item.image})` }}
                     />
                     {/* Dark overlay */}
                     <div className="tg-hero-overlay" />

                     {/* Content */}
                     <div className="tg-hero-content-area">
                        <div className="container">
                           <div className="row justify-content-center">
                              <div className="col-xl-10">
                                 <div className="tg-hero-content text-center">
                                    <div className="tg-hero-title-box mb-10">
                                       <h5 className="tg-hero-subtitle mb-5">{item.subtitle}</h5>
                                       <h2 className="tg-hero-title">{item.title}</h2>
                                       <p className="tg-hero-para mb-0">{item.description}</p>
                                    </div>
                                    <div className="tg-hero-price-wrap mb-35 d-flex align-items-center justify-content-center">
                                       <p className="mr-15">{item.label}</p>
                                       <div className="tg-hero-price">
                                          <span className="hero-price">{item.price}</span>
                                       </div>
                                    </div>
                                    <div className="tg-hero-btn-box">
                                       <Link href={item.link} className="tg-btn tg-btn-switch-animation">
                                          <Button text="Explore Now" />
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>

         {/* Pagination dots */}
         <div className="tg-hero-dots-wrap">
            <div className="tg-hero-dots"></div>
         </div>

         {/* Navigation Arrows */}
         <div className="tg-hero-nav-wrap d-none">
            <button
               className="tg-hero-nav-btn tg-hero-nav-prev"
               onClick={() => swiperRef.current?.slidePrev()}
               aria-label="Previous slide"
            >
               <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.0274 7.5H0.972625M0.972625 7.5L7.25 1.22263M0.972625 7.5L7.25 13.7774" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </button>
            <button
               className="tg-hero-nav-btn tg-hero-nav-next"
               onClick={() => swiperRef.current?.slideNext()}
               aria-label="Next slide"
            >
               <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.47263 7.5H18.5274M18.5274 7.5L12.25 1.22263M18.5274 7.5L12.25 13.7774" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </button>
         </div>

         {/* Decorative Shapes */}
         <div className="tg-hero-bottom-shape d-none d-md-block">
            <span>
               <svg width="432" height="298" viewBox="0 0 432 298" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="line-1" opacity="0.4" d="M39.6062 428.345C4.4143 355.065 -24.2999 203.867 142.379 185.309C350.726 162.111 488.895 393.541 289.171 313.515C129.391 249.494 458.204 85.4772 642.582 11.4713" stroke="white" strokeWidth="24" />
               </svg>
            </span>
         </div>
         <div className="tg-hero-bottom-shape-2 d-none d-md-block">
            <span>
               <svg width="154" height="321" viewBox="0 0 154 321" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="line-1" opacity="0.4" d="M144.616 328.905C116.117 300.508 62.5986 230.961 76.5162 179.949C93.9132 116.184 275.231 7.44493 -65.0181 12.8762" stroke="white" strokeWidth="24" />
               </svg>
            </span>
         </div>
      </div>
   )
}

export default Banner
