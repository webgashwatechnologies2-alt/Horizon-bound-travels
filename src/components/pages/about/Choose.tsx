import Image from "next/image";
import { JSX } from "react";
import shape from "@/assets/img/banner/banner-2/shape.png"

interface DataType {
   id: number;
   icon: JSX.Element;
   title: string;
   desc: string;
}

const choose_data: DataType[] = [
   {
      id: 1,
      icon: <i className="fas fa-concierge-bell" style={{ color: '#F46B08', fontSize: '26px' }}></i>,
      title: "I. Logistics & Hospitality",
      desc: "We offer an uncompromising, end-to-end concierge experience. Every logistical facet—including commercial aviation, rail coordination, and private transfers—is synchronized flawlessly to guarantee an uninterrupted transition. Our portfolio features exclusive partnerships with premier properties, granting access to the finest luxury resorts in Manali and Shimla.",
   },
   {
      id: 2,
      icon: <i className="fas fa-route" style={{ color: '#F46B08', fontSize: '26px' }}></i>,
      title: "II. Bespoke Curations",
      desc: "No two itineraries are identical. Our specialists collaborate intimately with each client to tailor every nuance to their exacting preferences. Whether designing a highly private, snow-covered honeymoon itinerary or coordinating an ambitious, high-altitude expedition through the rugged terrain of Kullu, we infuse every journey with a white-glove touch.",
   },
   {
      id: 3,
      icon: <i className="fas fa-globe-asia" style={{ color: '#F46B08', fontSize: '26px' }}></i>,
      title: "III. Immersion & Heritage",
      desc: "True travel requires connection, not just observation. We bypass conventional tourism to grant our guests authentic access to the living heritage, regional gastronomy, and historic artisan markets of our destinations. Accompanied by elite local guides and private culinary experiences, our travelers encounter the genuine soul of Himachal.",
   },
];

const Choose = () => {
   return (
      <div className="tg-chose-area tg-grey-bg pt-140 pb-70 p-relative z-index-1">
         <Image className="tg-chose-6-shape d-none d-md-block" src={shape} alt="" />
         <div className="container">
            {/* Header intro section */}
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-9 col-md-10">
                  <div className="tg-chose-section-title text-center mb-55">
                     <h5 className="tg-section-subtitle mb-15 wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".1s">Our Services</h5>
                     <h2 className="mb-20 text-capitalize wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">The Pillars of Our Service</h2>
                     <p className="wow fadeInUp mb-35" data-wow-delay=".5s" data-wow-duration=".9s" style={{ textTransform: 'none', fontSize: '15px', lineHeight: '1.6' }}>
                        We build travel experiences on three fundamental pillars designed to provide comfort, personalization, and authentic local discovery.
                     </p>
                  </div>
               </div>
            </div>
            
            {/* Service Pillars Grid */}
            <div className="row">
               {choose_data.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="tg-chose-6-wrap mb-30" style={{ height: 'calc(100% - 30px)', display: 'flex', flexDirection: 'column' }}>
                        <span className="icon mb-20" style={{ display: 'inline-flex', width: '55px', height: '55px', borderRadius: '50%', background: 'rgba(244, 107, 8, 0.08)', alignItems: 'center', justifyContent: 'center' }}>
                           {item.icon}
                        </span>
                        <h4 className="tg-chose-6-title mb-15" style={{ fontSize: '18px', fontWeight: '700', color: '#0b1c3f' }}>{item.title}</h4>
                        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#555c6e', textTransform: 'none', flexGrow: '1' }}>{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Choose
