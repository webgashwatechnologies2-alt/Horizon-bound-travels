"use client"
import { useEffect, useState } from "react";

interface FaqData {
   id: number;
   day: string;
   title: string;
   desc: string;
   showAnswer: boolean;
};

const faq_data: FaqData[] = [
   {
      id: 1,
      day: "Day-01",
      title: "Delhi to Shimla",
      desc: "Arrive in Delhi and begin your scenic journey to Shimla. Upon arrival, check in to your hotel and relax. In the evening, explore the local markets or enjoy a peaceful walk on Mall Road. Overnight stay in Shimla.",
      showAnswer: false,
   },
   {
      id: 2,
      day: "Day-02",
      title: "Shimla & Kufri Sightseeing",
      desc: "After breakfast, proceed for a full-day excursion to Kufri. Enjoy horse riding and the yak ride (optional). Later, visit the Vice Regal Lodge, Jakhoo Temple, and Christ Church. Evening free for shopping at Mall Road.",
      showAnswer: false,
   },
   {
      id: 3,
      day: "Day-03",
      title: "Shimla to Manali via Kullu",
      desc: "Check out from the hotel and travel to Manali. En route, visit the beautiful Kullu Valley, Pandoh Dam, and Sundar Nagar Lake. Arrive in Manali by evening, check in to your hotel, and rest.",
      showAnswer: false,
   },
   {
      id: 4,
      day: "Day-04",
      title: "Solang Valley & Local Sightseeing",
      desc: "Explore the breathtaking Solang Valley, known for its adventure activities like paragliding and zorbing. Later, visit Hadimba Temple, Vashisht Village, and the Tibetan Monastery. Enjoy a relaxing overnight stay in Manali.",
      showAnswer: false,
   },
];

const Faq = () => {

   const [faqData, setFaqData] = useState<FaqData[]>([]);

   useEffect(() => {
      const filtered = faq_data;
      const updatedData = faq_data.map((item) => ({
         ...item,
         showAnswer: item.id === filtered[0]?.id
      }));
      setFaqData(updatedData);
   }, []);

   const toggleAnswer = (faqId: number) => {
      setFaqData((prevFaqData) =>
         prevFaqData.map((faq) => ({
            ...faq,
            showAnswer: faq.id === faqId
         }))
      );
   };

   return (
      <div className="tg-tour-faq-wrap mb-70">
         <h4 className="tg-tour-about-title mb-15">Tour Plan</h4>
         <p className="text-capitalize lh-28 mb-20">Explore the beautiful hills of Himachal Pradesh. This carefully planned itinerary allows you to experience the best of Shimla and Manali without the hassle of planning everything yourself.</p>
         <div className="tg-tour-about-faq-inner">
            <div className="tg-tour-about-faq" id="accordionExample">
               {faqData.map((item) => (
                  <div key={item.id} className="accordion-item">
                     <h2 className="accordion-header">
                        <button className={`accordion-button ${item.showAnswer ? "" : "collapsed"}`} onClick={() => toggleAnswer(item.id)} type="button">
                           <span>{item.day}</span>{item.title}
                        </button>
                     </h2>
                     <div id="collapseOne" className={`accordion-collapse collapse ${item.showAnswer ? "show" : ""}`}>
                        <div className="accordion-body">
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Faq
