import Image from "next/image"
import Link from "next/link"

import shape from "@/assets/img/location/shape-2.png"
import himachalImg from "@/assets/img/listing/listing-3/himachalnewimage.jpeg" 
import KashmirImg from "@/assets/img/listing/listing-3/kashmir-tour-image.jpg"
import listing5_img1 from "@/assets/img/listing/listing-3/lehimagenew.jpg"
import imgKanyakumari from "@/assets/img/listing/listing-3/Kanyakumari.jpg"
import listing3_img7 from "@/assets/img/listing/rajasthan-camel.jpg"
import imgFamily from "@/assets/img/listing/listing-3/goanew.jpg"
import listing5_img4 from "@/assets/img/listing/listing-3/uk.jpg"
import imgspiti from "@/assets/img/listing/spt.jpg"


const Location = () => {
   const destinations = [
      { id: 1, name: "Himachal", tours: "06", thumb: himachalImg  },
      { id: 2, name: "Kashmir", tours: "03", thumb: KashmirImg },
      { id: 3, name: "Leh", tours: "03", thumb: listing5_img1 },
      { id: 4, name: "Kerala", tours: "03", thumb: imgKanyakumari },
      { id: 5, name: "Rajasthan", tours: "03", thumb: listing3_img7 },
      { id: 6, name: "Goa", tours: "03", thumb: imgFamily },
      { id: 7, name: "Uttarakhand", tours: "03", thumb: listing5_img4 },
      { id: 8, name: "Spiti", tours: "03", thumb: imgspiti },
   ];

   return (
      <div className="tg-location-area p-relative pb-40 tg-grey-bg pt-100">
         <Image className="tg-location-shape d-none d-lg-block" src={shape} alt="shape" />
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tg-location-section-title text-center mb-30">
                     <h5 className="tg-section-subtitle mb-15 wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">Next Adventure Destination</h5>
                     <h2 className="mb-15 text-capitalize wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".9s">Popular Indian Destinations <br />Explore Incredible India</h2>
                     <p className="text-capitalize wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".9s">Discover the beauty of India with our curated tour packages<br />
                        from mountains to beaches</p>
                  </div>
               </div>
               {destinations.map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".9s">
                     <div className="bg-white tg-round-25 p-relative z-index-1">
                        <div className="tg-location-wrap p-relative mb-30" style={{ minHeight: '280px' }}>
                           <div className="tg-location-thumb" style={{ height: '170px', overflow: 'hidden' }}>
                              <Image className="w-100 h-100 object-fit-cover" src={item.thumb} alt="location" />
                           </div>
                           <div className="tg-location-content text-center">
                              <span className="tg-location-time">{item.tours} Tours</span>
                              <h3 className="tg-location-title mb-0"><Link href={`/destinations/${item.name.toLowerCase()}`}>{item.name}</Link></h3>
                           </div>
                           <div className="tg-location-border one"></div>
                           <div className="tg-location-border two"></div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Location
