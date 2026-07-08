import { StaticImageData } from "next/image";

import listing_img1 from "@/assets/img/listing/su/manali.jpg"
import listing3_img1 from "@/assets/img/listing/spt.jpg"
import listing3_img7 from "@/assets/img/listing/rajasthan-camel.jpg"
import listing5_img1 from "@/assets/img/listing/listing-3/lehimage.jpg"
import listing5_img4 from "@/assets/img/listing/listing-3/uk.jpg"
import listing5_img8 from "@/assets/img/listing/listing-3/munarnew.jpg"
import listing_imggoa from "@/assets/img/listing/listing-3/goa.jpg"
import imgkullunew from "@/assets/img/listing/listing-3/tirthanvalley.jpg"
import imhgheavhm from "@/assets/img/listing/listing-3/Shimla-During-Monsoon.jpg"
import imgdharamshala from "@/assets/img/listing/listing-3/dshand.jpg"
import imghimchal from "@/assets/img/listing/listing-3/sptvalley.jpg"
import imgtvalley from "@/assets/img/listing/listing-3/jibhiimage.jpg"
import imgbike from "@/assets/img/listing/listing-3/sptbike.jpg"
import imgknrroad from "@/assets/img/listing/listing-3/knrroad.jpg"
import imgPangong from "@/assets/img/listing/listing-3/panjonglake.jpg"
import imgSrinagar from "@/assets/img/listing/listing-3/srngr.jpg"
import imgEscape from "@/assets/img/listing/listing-3/Kashmir.jpg"
import imguk from "@/assets/img/listing/listing-3/rishikesh1.jpg"
import imgHaridwar from "@/assets/img/listing/listing-3/hd.jpg"
import imgDeserts from "@/assets/img/listing/listing-3/laxmi.jpg"
import imgUdaipur from "@/assets/img/listing/listing-3/Udaipur.jpg"
import imgKerala from "@/assets/img/listing/listing-3/keralaimage.jpg"
import imgMunnar from "@/assets/img/listing/listing-3/mur.jpg"
import imggoa from "@/assets/img/listing/listing-3/goaaroup.jpg"
import imgBackpacking from "@/assets/img/listing/listing-3/Goanre.jpg"
import imgshimlahoneymoon from "@/assets/img/listing/listing-3/Shimla-Manali-Honeymoon.jpg"
import imgbirbilling from "@/assets/img/listing/listing-3/paragliding-in-bir-himachal.jpg"
import imgDalhousie from "@/assets/img/listing/listing-3/dalhousie.jpg"
import imgspitibike from "@/assets/img/listing/listing-3/bikespiti.jpg"
import imgsmmnl from "@/assets/img/listing/listing-3/Shimla-Manali-Tour-Package.jpg"
import imgdhrmdalhousie from "@/assets/img/listing/listing-3/khajjiar.jpg"
import imgsppptvalley from "@/assets/img/listing/listing-3/sptneww.jpg"
import imgkarsog from "@/assets/img/listing/listing-3/karsog-valley-view.jpg"
import imgImla from "@/assets/img/listing/listing-3/vimla.jpg"
import imgVimla from "@/assets/img/listing/listing-3/vimlanew.jpg"
import imgvashnodevi1 from "@/assets/img/listing/listing-3/mata-vaishno-devi-darshan-tour-package.jpg"
import imgMajestic from "@/assets/img/listing/listing-3/mkashmir.jpg"
import imgVaishnonew from "@/assets/img/listing/listing-3/Vaishno-Devi-and-Shiv-Khori-Tour-Package.jpg"
import imgFamily from "@/assets/img/listing/listing-3/goanew.jpg"
import imgBackwater from "@/assets/img/listing/listing-3/The-Magical-Backwaters-of-Kerala.jpg"
import imgRediscover from "@/assets/img/listing/listing-3/rediscover.jpg"
import imgKanyakumari from "@/assets/img/listing/listing-3/Kanyakumari.jpg"












interface DayItinerary {
   day: string;
   title: string;
   description: string;
}

interface DestinationPackage {
   id: number;
   destination: string;
   thumb: StaticImageData;
   tag?: string;
   featured?: string;
   offer?: string;
   time: string;
   guest?: string;
   title: string;
   location: string;
   delete_price?: number;
   price: string;
   review: number;
   total_review?: string;
   itinerary?: DayItinerary[];
   inclusions?: string[];
   exclusions?: string | string[];
}

const destination_data: DestinationPackage[] = [
   // Himachal - 14 packages
   {
      id: 1,
      destination: "himachal",
      thumb: listing_img1,
      tag: "Popular",
      time: " 7 Nights / 8 Days",
      title: "Manali Chandratal Kaza",
      location: "Shimla & Manali, Himachal Pradesh",
      price: "Startng From ₹32,199",
      review: 4.8,
      total_review: "(45 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Delhi to Shimla",
            description: "Arrive in Delhi and begin your scenic journey to Shimla. Upon arrival, check in to your hotel and relax. In the evening, explore the local markets or enjoy a peaceful walk on Mall Road. Overnight stay in Shimla."
         },
         {
            day: "Day 2",
            title: "Shimla & Kufri Sightseeing",
            description: "After breakfast, visit Kufri, known for its panoramic Himalayan views and adventure activities. Explore Jakhoo Temple, The Ridge, Christ Church, Mall Road, and Lakkar Bazaar before returning to your hotel for an overnight stay."
         },
         {
            day: "Day 3",
            title: "Shimla to Manali via Kullu",
            description: "Check out from the hotel and drive towards Manali via the picturesque Kullu Valley. En route, visit Pandoh Dam, Kullu Shawl Factory, and enjoy river rafting (optional). Reach Manali by evening, check in to your hotel, and relax."
         },
         {
            day: "Day 4",
            title: "Manali Local Sightseeing",
            description: "Explore the popular attractions of Manali including Hadimba Devi Temple, Vashisht Hot Springs, Tibetan Monastery, Van Vihar, and Club House. Spend the evening exploring Manali Mall Road before returning to the hotel."
         },
         {
            day: "Day 5",
            title: "Manali to Kaza via Rohtang & Kunzum Pass",
            description: "Start early and drive towards Kaza, crossing the breathtaking Rohtang Pass and Kunzum Pass. Witness dramatic landscapes as you enter the cold desert region of Spiti Valley. Reach Kaza by evening and check in to your hotel."
         },
         {
            day: "Day 6",
            title: "Kaza Local Sightseeing",
            description: "After breakfast, explore the villages around Kaza including Key Monastery, Kibber Village, Langza, Hikkim (home to the world's highest post office), and Komic. Return to Kaza for an overnight stay."
         },
         {
            day: "Day 7",
            title: "Chandratal Lake Excursion",
            description: "Enjoy a full-day excursion to the mesmerizing Chandratal Lake, known as the 'Moon Lake' for its crescent shape. Marvel at the crystal-clear turquoise waters surrounded by rugged mountains before returning to your stay."
         },
         {
            day: "Day 8",
            title: "Kaza to Delhi Departure",
            description: "After breakfast, check out from your hotel and begin your return journey towards Manali/Delhi, carrying unforgettable memories of the Manali Chandratal Kaza adventure."
         }
      ],

      inclusions: [
         "Accommodation in Shimla & Manali",
         "Daily Breakfast & Dinner",
         "Delhi to Shimla and Manali to Delhi Volvo Transfers (if applicable)",
         "Private vehicle for sightseeing and transfers",
         "Shimla, Kufri, Kullu & Manali sightseeing",
         "Driver allowance, toll taxes & parking charges"
      ],

      exclusions: [
         "Airfare / Train Fare",
         "Rohtang Pass permit & vehicle charges (if applicable)",
         "Adventure activities (Paragliding, ATV Ride, Skiing, etc.)",
         "Lunch and personal expenses",
         "Monument entry fees",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 2,
      destination: "himachal",
      thumb: imgkullunew,
      tag: "Bestseller",
      time: "2 Nights / 3 Days",
      title: "Tirthan Valley Tour Package",
      location: "Kullu & Manali, Himachal Pradesh",
      price: "Startng From ₹5,799",
      review: 4.7,
      total_review: "(38 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Delhi to Manali",
            description: "Begin your exciting journey from Delhi by overnight AC Volvo or private vehicle. Enjoy the scenic drive through the Himalayan foothills as you travel towards the beautiful hill station of Manali."
         },
         {
            day: "Day 2",
            title: "Manali Local Sightseeing & Solang Valley",
            description: "Arrive in Manali and check in to your hotel. Visit the famous Hadimba Devi Temple, Vashisht Hot Springs, Tibetan Monastery, and Club House. Later, head to Solang Valley for scenic views and optional adventure activities. Overnight stay in Manali."
         },
         {
            day: "Day 3",
            title: "Manali to Delhi",
            description: "After breakfast, check out from the hotel. Spend some leisure time exploring the local market at Mall Road before boarding your evening Volvo or private transfer back to Delhi with unforgettable memories of your Kullu Manali tour."
         }
      ],

      inclusions: [
         "Accommodation in comfortable hotels",
         "Daily Breakfast & Dinner",
         "Delhi–Manali–Delhi Volvo tickets (if applicable)",
         "Private cab for sightseeing",
         "Manali local sightseeing",
         "Solang Valley & Kullu sightseeing",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare / Train Fare",
         "Rohtang Pass permit & vehicle charges (if applicable)",
         "Adventure activities (Paragliding, ATV Ride, River Rafting, etc.)",
         "Lunch and personal expenses",
         "Monument entry fees",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 3,
      destination: "himachal",
      thumb: imhgheavhm,
      time: " 5 Nights / 6 Days",
      title: "Shimla Kullu Manali Honeymoon Package",
      location: "Shimla, Manali & Dharamshala, Himachal Pradesh",
      price: "Startng From ₹21,099",
      review: 4.9,
      total_review: "(52 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Delhi to Shimla",
            description: "Arrive in Delhi and begin your scenic drive to Shimla. Check in to your hotel and spend the evening exploring Mall Road, The Ridge, and Christ Church. Overnight stay in Shimla."
         },
         {
            day: "Day 2",
            title: "Shimla & Kufri Sightseeing",
            description: "After breakfast, visit Kufri, Green Valley, Himalayan Nature Park, Indira Tourist Park, Jakhoo Temple, and Lakkar Bazaar. Return to Shimla for an overnight stay."
         },
         {
            day: "Day 3",
            title: "Shimla to Manali",
            description: "Drive to Manali via the beautiful Kullu Valley. En route visit Pandoh Dam, Sundernagar Lake, Kullu Shawl Factory, and Vaishno Devi Temple. Reach Manali by evening and check in to your hotel."
         },
         {
            day: "Day 4",
            title: "Manali Local Sightseeing & Solang Valley",
            description: "Explore Hadimba Devi Temple, Vashisht Hot Springs, Tibetan Monastery, Van Vihar, and Club House. Later, visit Solang Valley for scenic beauty and adventure activities such as paragliding and ziplining. Overnight stay in Manali."
         },
         {
            day: "Day 5",
            title: "Manali to Dharamshala",
            description: "After breakfast, drive to Dharamshala via Palampur. Visit the beautiful tea gardens en route. Check in to your hotel and enjoy the peaceful surroundings."
         },
         {
            day: "Day 6",
            title: "Dharamshala Sightseeing & Departure",
            description: "Visit the Dalai Lama Temple, Namgyal Monastery, Bhagsunag Temple, Bhagsu Waterfall, St. John in the Wilderness Church, and the HPCA Cricket Stadium. Later depart for Delhi with unforgettable memories of your honeymoon tour."
         }
      ],

      inclusions: [
         "Accommodation in comfortable hotels",
         "Daily Breakfast & Dinner",
         "Private vehicle for all transfers and sightseeing",
         "Shimla, Kufri, Manali, Solang Valley & Dharamshala sightseeing",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare / Train Fare",
         "Adventure activities charges",
         "Rohtang Pass permit & vehicle charges (if applicable)",
         "Monument entry fees",
         "Lunch and personal expenses",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 4,
      destination: "himachal",
      thumb: imgdharamshala,
      tag: "Featured",
      time: "3 Nights / 4 Days",
      title: "Dharamshala Dalhousie Tour",
      location: "Amritsar, Dalhousie & Dharamshala",
      price: "Startng From ₹9,999",
      review: 4.6,
      total_review: "(31 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Amritsar",
            description: "Arrive in Amritsar and check in to your hotel. In the afternoon, visit the famous Wagah Border to witness the spectacular Beating Retreat Ceremony. Return to the hotel for an overnight stay."
         },
         {
            day: "Day 2",
            title: "Amritsar Sightseeing & Transfer to Dalhousie",
            description: "After breakfast, visit the Golden Temple, Jallianwala Bagh, Durgiana Temple, and Hall Bazaar. Later, drive to the picturesque hill station of Dalhousie. Check in to your hotel and relax."
         },
         {
            day: "Day 3",
            title: "Khajjiar & Kalatop Excursion, Transfer to Dharamshala",
            description: "Enjoy a half-day excursion to Khajjiar, popularly known as the 'Mini Switzerland of India', and Kalatop Wildlife Sanctuary. Later, drive to Dharamshala en route enjoying the scenic beauty of Kangra Valley. Check in to your hotel."
         },
         {
            day: "Day 4",
            title: "Dharamshala Sightseeing & Departure",
            description: "Visit Namgyal Monastery, Dalai Lama Temple Complex, Bhagsunag Temple, Bhagsu Waterfall, and the Tibetan Market in McLeod Ganj. Later depart for Amritsar Railway Station or Airport with unforgettable memories of your tour."
         }
      ],

      inclusions: [
         "Accommodation in comfortable hotels",
         "Daily Breakfast & Dinner",
         "Private vehicle for all transfers and sightseeing",
         "Amritsar, Dalhousie, Khajjiar & Dharamshala sightseeing",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare / Train Fare",
         "Lunch and personal expenses",
         "Monument entry fees",
         "Travel insurance",
         "Adventure activities (if any)",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 5,
      destination: "himachal",
      thumb: imghimchal,
      time: "6 Nights / 7 Days",
      title: "Spiti Valley Tour Package From Manali",
      location: "Shimla, Manali & Kasol, Himachal Pradesh",
      price: "Startng From ₹26,699",
      review: 4.8,
      total_review: "(28 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Shimla",
            description: "Arrive in Shimla and check in to your hotel. Spend the evening exploring Mall Road, The Ridge, and Christ Church. Overnight stay in Shimla."
         },
         {
            day: "Day 2",
            title: "Shimla & Kufri Adventure",
            description: "After breakfast, visit Kufri, Green Valley, Himalayan Nature Park, and enjoy optional activities like horse riding and go-karting. Return to Shimla for an overnight stay."
         },
         {
            day: "Day 3",
            title: "Shimla to Manali",
            description: "Drive through the scenic Kullu Valley. En route visit Pandoh Dam, Sundernagar Lake, Kullu Shawl Factory, and enjoy optional river rafting. Reach Manali by evening."
         },
         {
            day: "Day 4",
            title: "Manali Local Sightseeing",
            description: "Visit Hadimba Devi Temple, Vashisht Hot Springs, Tibetan Monastery, Club House, Van Vihar, and Mall Road. Overnight stay in Manali."
         },
         {
            day: "Day 5",
            title: "Solang Valley Adventure",
            description: "Enjoy a full day at Solang Valley with adventure activities like paragliding, ziplining, ATV rides, skiing, snow scooter rides, and ropeway (seasonal and at additional cost). Return to Manali."
         },
         {
            day: "Day 6",
            title: "Manali to Kasol",
            description: "After breakfast, drive to Kasol. Visit Manikaran Sahib Gurudwara, hot water springs, and enjoy a peaceful walk along the Parvati River. Overnight stay in Kasol."
         },
         {
            day: "Day 7",
            title: "Kasol & Tosh Excursion, Departure",
            description: "Explore the beautiful villages of Tosh and Kasol. Enjoy short nature trails, riverside cafés, and mountain views before proceeding to Delhi/Chandigarh with unforgettable memories of your Himachal adventure tour."
         }
      ],

      inclusions: [
         "Accommodation in hotels",
         "Daily Breakfast & Dinner",
         "Private vehicle for all transfers and sightseeing",
         "Shimla, Kufri, Manali, Solang Valley & Kasol sightseeing",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare / Train Fare",
         "Adventure activities charges",
         "Lunch and personal expenses",
         "Monument entry fees",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 6,
      destination: "himachal",
      thumb: imgtvalley,
      tag: "New",
      time: "3 Nights / 4 Days",
      title: "Jibhi, Tirthan Valley Tour Package",
      location: "Tirthan Valley & Jibhi, Himachal Pradesh",
      price: "Startng From ₹7,799",
      review: 4.7,
      total_review: "(22 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Delhi to Aut (Overnight Journey)",
            description: "Begin your journey from Delhi in the evening by Volvo or private vehicle towards Aut. Enjoy an overnight drive through the beautiful Himalayan foothills."
         },
         {
            day: "Day 2",
            title: "Aut to Jibhi & Local Sightseeing",
            description: "Arrive at Aut and transfer to the charming village of Jibhi. After check-in, visit the beautiful Jibhi Waterfall, Mini Thailand, and enjoy a peaceful walk through the traditional Himalayan village. Overnight stay in Jibhi."
         },
         {
            day: "Day 3",
            title: "Jalori Pass & Serolsar Lake Trek",
            description: "After breakfast, drive to Jalori Pass (3,120 m) and begin the scenic trek to Serolsar Lake. Visit the sacred Budhi Nagin Temple and enjoy breathtaking mountain views before returning to Jibhi for an overnight stay."
         },
         {
            day: "Day 4",
            title: "Chehni Kothi Exploration & Departure",
            description: "Check out from the hotel and visit the historic Chehni Kothi, one of Himachal's tallest traditional wooden towers. Later explore the Tirthan River and nearby villages before heading to Aut to board your Volvo for Delhi."
         }
      ],

      inclusions: [
         "Accommodation in hotels/homestays",
         "Daily Breakfast & Dinner",
         "Private vehicle for local sightseeing and transfers",
         "Jibhi, Jalori Pass, Serolsar Lake & Tirthan Valley sightseeing",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Volvo/Bus or Train fare (unless specified)",
         "Lunch and personal expenses",
         "Entry fees to attractions",
         "Travel insurance",
         "Adventure activities (if any)",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 26,
      destination: "himachal",
      thumb: imgshimlahoneymoon,
      tag: "New",
      time: "6 Nights / 7 Days",
      title: "Manali Shimla Honeymoon Package",
      location: "Shimla & Manali, Himachal Pradesh",
      price: "Startng From ₹27,199",
      review: 4.8,
      total_review: "(36 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Delhi to Shimla",
            description: "Begin your honeymoon journey from Delhi to Shimla. Check in to the hotel and spend the evening exploring Mall Road, The Ridge, and Christ Church."
         },
         {
            day: "Day 2",
            title: "Shimla & Kufri Sightseeing",
            description: "Visit Kufri, Green Valley, Himalayan Nature Park, Jakhoo Temple, and enjoy beautiful mountain views before returning to Shimla."
         },
         {
            day: "Day 3",
            title: "Shimla to Manali",
            description: "Drive through Kullu Valley to Manali while enjoying scenic rivers, forests, and mountain landscapes. Check in and relax."
         },
         {
            day: "Day 4",
            title: "Solang Valley Excursion",
            description: "Visit Solang Valley for adventure activities and breathtaking views. Depending on weather, enjoy a visit to Atal Tunnel or nearby attractions."
         },
         {
            day: "Day 5",
            title: "Manali Local Sightseeing",
            description: "Explore Hadimba Devi Temple, Manu Temple, Vashisht Hot Springs, Tibetan Monastery, Van Vihar, and Mall Road."
         },
         {
            day: "Day 6",
            title: "Naggar & Kullu Excursion",
            description: "Visit Naggar Castle, Roerich Art Gallery, Kullu Shawl Factory, and enjoy river rafting (optional) before returning to Manali."
         },
         {
            day: "Day 7",
            title: "Departure to Delhi",
            description: "After breakfast, check out and return to Delhi with unforgettable honeymoon memories."
         }
      ],

      inclusions: [
         "6 Nights hotel accommodation",
         "Daily Breakfast & Dinner",
         "Private cab for sightseeing",
         "Shimla, Kufri, Manali & Kullu sightseeing",
         "Driver allowance, toll tax & parking"
      ],

      exclusions: [
         "Airfare/Train/Volvo tickets",
         "Lunch & personal expenses",
         "Adventure activities",
         "Entry tickets",
         "Travel insurance",
         "Anything not mentioned in inclusions"
      ]
   },

   {
      id: 27,
      destination: "himachal",
      thumb: imgbirbilling,
      tag: "New",
      time: "3 Nights / 4 Days",
      title: "Bir Billing With Barot Valley Tour Plan",
      location: "Bir Billing & Barot Valley, Himachal Pradesh",
      price: "Startng From ₹13,099",
      review: 4.8,
      total_review: "(28 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival at Bir Billing",
            description: "Arrive at Bir Billing and check into your hotel. Visit Bir Monastery, explore the local Tibetan market, and enjoy the peaceful surroundings."
         },
         {
            day: "Day 2",
            title: "Paragliding & Billing Sightseeing",
            description: "Experience the world-famous Bir Billing paragliding (optional). Visit Billing Top, enjoy panoramic Himalayan views, and spend the evening at Bir cafés."
         },
         {
            day: "Day 3",
            title: "Barot Valley Excursion",
            description: "Drive to the beautiful Barot Valley. Explore the Uhl River, forests, trout farms, and scenic villages before returning to Bir."
         },
         {
            day: "Day 4",
            title: "Departure",
            description: "After breakfast, check out from the hotel and depart with beautiful memories of Bir Billing and Barot Valley."
         }
      ],

      inclusions: [
         "3 Nights hotel accommodation",
         "Daily Breakfast & Dinner",
         "Private cab for sightseeing",
         "Bir Billing & Barot Valley sightseeing",
         "Driver allowance, toll tax & parking"
      ],

      exclusions: [
         "Airfare/Train/Bus tickets",
         "Paragliding charges",
         "Lunch & personal expenses",
         "Entry fees",
         "Travel insurance",
         "Anything not mentioned in inclusions"
      ]
   },




   {
      id: 28,
      destination: "himachal",
      thumb: imgDalhousie,
      tag: "New",
      time: "7 Nights / 8 Days",
      title: "Shimla Manali Dalhousie Package From Delhi",
      location: "Shimla, Manali & Dalhousie, Himachal Pradesh",
      price: "Startng From ₹16,799",
      review: 4.8,
      total_review: "(34 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Delhi to Shimla",
            description: "Arrive in Shimla and check in to your hotel. Spend the evening exploring Mall Road, The Ridge, Christ Church, and Lakkar Bazaar."
         },
         {
            day: "Day 2",
            title: "Shimla & Kufri Sightseeing",
            description: "Visit Kufri, Green Valley, Jakhoo Temple, Himalayan Nature Park, and enjoy panoramic Himalayan views before returning to Shimla."
         },
         {
            day: "Day 3",
            title: "Shimla to Manali",
            description: "Drive through the beautiful Kullu Valley to Manali while enjoying scenic mountain landscapes, rivers, and apple orchards."
         },
         {
            day: "Day 4",
            title: "Manali Local & Solang Valley",
            description: "Visit Hadimba Temple, Vashisht Hot Springs, Tibetan Monastery, Mall Road, and later enjoy the breathtaking beauty of Solang Valley."
         },
         {
            day: "Day 5",
            title: "Manali to Dalhousie",
            description: "After breakfast, drive to Dalhousie. Check in to the hotel and spend the evening enjoying the pleasant weather and local market."
         },
         {
            day: "Day 6",
            title: "Dalhousie & Khajjiar Sightseeing",
            description: "Visit Khajjiar, Kalatop Wildlife Sanctuary, Panchpula, Satdhara Falls, and St. John's Church while enjoying the scenic beauty of Dalhousie."
         },
         {
            day: "Day 7",
            title: "Dalhousie Local Exploration",
            description: "Enjoy a leisurely day exploring Dalhousie's viewpoints, heritage churches, shopping areas, and relaxing amidst the pine forests."
         },
         {
            day: "Day 8",
            title: "Departure to Delhi",
            description: "After breakfast, check out from the hotel and return to Delhi with unforgettable memories of Shimla, Manali, and Dalhousie."
         }
      ],

      inclusions: [
         "7 Nights hotel accommodation",
         "Daily Breakfast & Dinner",
         "Private cab for sightseeing",
         "Shimla, Manali & Dalhousie sightseeing",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare/Train/Volvo tickets",
         "Lunch & personal expenses",
         "Entry fees to monuments & attractions",
         "Adventure activities",
         "Travel insurance",
         "Anything not mentioned under inclusions"
      ]
   },

   {
      id: 29,
      destination: "himachal",
      thumb: imgspitibike,
      tag: "New",
      time: "8 Nights / 9 Days",
      title: "Spiti Valley Bike Trip",
      location: "Spiti Valley, Himachal Pradesh",
      price: "Startng From ₹34,699",
      review: 4.9,
      total_review: "(48 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Shimla to Chitkul",
            description: "Begin your bike expedition from Shimla and ride through Narkanda and Sangla Valley to reach Chitkul, the last inhabited village near the Indo-Tibet border."
         },
         {
            day: "Day 2",
            title: "Chitkul to Nako",
            description: "Ride through the scenic Kinnaur region, passing Khab Sangam and rocky mountain roads before reaching the beautiful village of Nako."
         },
         {
            day: "Day 3",
            title: "Nako to Kaza via Tabo",
            description: "Visit the ancient Tabo Monastery and Dhankar Monastery before continuing your ride to Kaza, the heart of Spiti Valley."
         },
         {
            day: "Day 4",
            title: "Kaza Local Sightseeing",
            description: "Explore Key Monastery, Kibber Village, Chicham Bridge, Hikkim, Komic, and Langza while enjoying spectacular Himalayan landscapes."
         },
         {
            day: "Day 5",
            title: "Kaza to Chandratal Lake",
            description: "Ride through Kunzum Pass to the breathtaking Chandratal Lake and spend the evening camping under the star-filled sky."
         },
         {
            day: "Day 6",
            title: "Chandratal to Manali",
            description: "Cross the rugged mountain roads via Batal and Atal Tunnel before reaching the beautiful hill town of Manali."
         },
         {
            day: "Day 7",
            title: "Manali Leisure Day",
            description: "Relax after the adventurous ride or explore Hadimba Temple, Mall Road, Old Manali, and nearby cafés."
         },
         {
            day: "Day 8",
            title: "Manali to Delhi",
            description: "Begin your return journey from Manali to Delhi while enjoying the scenic drive through Kullu Valley."
         },
         {
            day: "Day 9",
            title: "Tour Ends",
            description: "Reach Delhi with unforgettable memories of your thrilling Spiti Valley bike expedition through some of the most spectacular Himalayan roads."
         }
      ],

      inclusions: [
         "8 Nights accommodation (Hotel/Camp/Homestay)",
         "Daily Breakfast & Dinner",
         "Backup vehicle for luggage",
         "Road captain & mechanic support",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Motorcycle rental & fuel (unless specified)",
         "Airfare/Train/Bus tickets",
         "Lunch & personal expenses",
         "Entry fees",
         "Travel insurance",
         "Anything not mentioned under inclusions"
      ]
   },



   {
      id: 30,
      destination: "himachal",
      thumb: imgsmmnl,
      tag: "New",
      time: "5 Nights / 6 Days",
      title: "Shimla Manali Tour Package",
      location: "Shimla & Manali, Himachal Pradesh",
      price: "Startng From ₹18,799",
      review: 4.8,
      total_review: "(42 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Delhi to Shimla",
            description: "Arrive in Shimla and check in to your hotel. Spend the evening exploring Mall Road, The Ridge, Christ Church, and the local markets."
         },
         {
            day: "Day 2",
            title: "Shimla & Kufri Sightseeing",
            description: "Visit Kufri, Green Valley, Himalayan Nature Park, Jakhoo Temple, and enjoy panoramic views of the surrounding mountains before returning to Shimla."
         },
         {
            day: "Day 3",
            title: "Shimla to Manali",
            description: "Drive through the scenic Kullu Valley to Manali while enjoying breathtaking mountain views, rivers, and lush forests. Check in and relax."
         },
         {
            day: "Day 4",
            title: "Manali Local & Solang Valley",
            description: "Visit Hadimba Devi Temple, Vashisht Hot Springs, Tibetan Monastery, Van Vihar, Mall Road, and later explore the beautiful Solang Valley."
         },
         {
            day: "Day 5",
            title: "Kullu & Naggar Excursion",
            description: "Explore Kullu Valley, Naggar Castle, Roerich Art Gallery, local handicraft shops, and enjoy optional river rafting before returning to Manali."
         },
         {
            day: "Day 6",
            title: "Departure to Delhi",
            description: "After breakfast, check out from the hotel and begin your return journey to Delhi with unforgettable memories of Shimla and Manali."
         }
      ],

      inclusions: [
         "5 Nights hotel accommodation",
         "Daily Breakfast & Dinner",
         "Private cab for sightseeing",
         "Shimla, Kufri, Manali & Kullu sightseeing",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare/Train/Volvo tickets",
         "Lunch & personal expenses",
         "Entry fees to attractions",
         "Adventure activities",
         "Travel insurance",
         "Anything not mentioned under inclusions"
      ]
   },

   {
      id: 31,
      destination: "himachal",
      thumb: imgdhrmdalhousie,
      tag: "New",
      time: "4 Nights / 5 Days",
      title: "Dharamshala Dalhousie Honeymoon Tour",
      location: "Dharamshala & Dalhousie, Himachal Pradesh",
      price: "Startng From ₹34,199",
      review: 4.9,
      total_review: "(30 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Delhi to Dharamshala",
            description: "Arrive in Dharamshala and check in to your hotel. Spend a romantic evening exploring the local cafés and beautiful mountain surroundings."
         },
         {
            day: "Day 2",
            title: "Dharamshala & McLeod Ganj Sightseeing",
            description: "Visit the Dalai Lama Temple, Bhagsunag Temple, Bhagsu Waterfall, St. John in the Wilderness Church, Naddi View Point, and Dal Lake."
         },
         {
            day: "Day 3",
            title: "Dharamshala to Dalhousie",
            description: "Drive to the charming hill station of Dalhousie. Check in to your hotel and enjoy a peaceful evening together exploring Gandhi Chowk and Subhash Chowk."
         },
         {
            day: "Day 4",
            title: "Khajjiar & Dalhousie Sightseeing",
            description: "Visit the beautiful Khajjiar, Kalatop Wildlife Sanctuary, Panchpula, and Satdhara Falls before returning to Dalhousie for an overnight stay."
         },
         {
            day: "Day 5",
            title: "Departure to Delhi",
            description: "After breakfast, check out from the hotel and return to Delhi with unforgettable memories of your romantic Dharamshala and Dalhousie honeymoon."
         }
      ],

      inclusions: [
         "4 Nights hotel accommodation",
         "Daily Breakfast & Dinner",
         "Private cab for sightseeing",
         "Dharamshala, McLeod Ganj, Dalhousie & Khajjiar sightseeing",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare/Train/Volvo tickets",
         "Lunch & personal expenses",
         "Entry fees to attractions",
         "Adventure activities",
         "Travel insurance",
         "Anything not mentioned under inclusions"
      ]
   },
   {
      id: 32,
      destination: "himachal",
      thumb: imgsppptvalley,
      tag: "New",
      time: "3 Nights / 4 Days",
      title: "Spiti Valley Tour Package From Shimla",
      location: "Shimla & Spiti Valley, Himachal Pradesh",
      price: "Startng From ₹16,199",
      review: 4.9,
      total_review: "(40 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Shimla to Kalpa",
            description: "Begin your journey from Shimla towards Kalpa via Narkanda and Rampur. Enjoy scenic views of the Sutlej River, apple orchards, and the magnificent Kinner Kailash Range. Overnight stay in Kalpa."
         },
         {
            day: "Day 2",
            title: "Kalpa to Kaza via Nako & Tabo",
            description: "After breakfast, drive through Kinnaur to the beautiful Nako Village. Visit the ancient Tabo Monastery before continuing to Kaza, the cultural heart of Spiti Valley."
         },
         {
            day: "Day 3",
            title: "Kaza Local Sightseeing",
            description: "Explore the famous Key Monastery, Kibber Village, Chicham Bridge, Hikkim Post Office, Komic Village, and Langza, known for its fossil sites and giant Buddha statue."
         },
         {
            day: "Day 4",
            title: "Departure from Kaza",
            description: "After breakfast, check out from the hotel and begin your onward journey with unforgettable memories of the breathtaking landscapes and monasteries of Spiti Valley."
         }
      ],

      inclusions: [
         "3 Nights accommodation",
         "Daily Breakfast & Dinner",
         "Private vehicle for sightseeing",
         "Shimla, Kalpa & Spiti Valley sightseeing",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare/Train/Volvo tickets",
         "Lunch & personal expenses",
         "Entry fees to attractions",
         "Travel insurance",
         "Adventure activities",
         "Anything not mentioned under inclusions"
      ]
   },

   {
      id: 33,
      destination: "himachal",
      thumb: imgkarsog,
      tag: "New",
      time: "3 Nights / 4 Days",
      title: "Karsog Valley Tour from Shimla",
      location: "Karsog Valley, Himachal Pradesh",
      price: "Startng From ₹14,999",
      review: 4.8,
      total_review: "(27 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Shimla to Karsog Valley",
            description: "Drive from Shimla to the picturesque Karsog Valley via Chail and Tatapani. Check in to your hotel and spend the evening enjoying the peaceful surroundings and apple orchards."
         },
         {
            day: "Day 2",
            title: "Karsog Valley Sightseeing",
            description: "Visit the historic Mamleshwar Mahadev Temple, Kamaksha Devi Temple, Pangna Fort, and nearby traditional villages while enjoying panoramic valley views."
         },
         {
            day: "Day 3",
            title: "Nature Walk & Local Exploration",
            description: "Explore the lush forests, scenic viewpoints, and beautiful apple orchards of Karsog Valley. Interact with locals and experience the authentic Himachali lifestyle."
         },
         {
            day: "Day 4",
            title: "Return to Shimla",
            description: "After breakfast, check out from the hotel and drive back to Shimla with wonderful memories of your peaceful Karsog Valley tour."
         }
      ],

      inclusions: [
         "3 Nights accommodation",
         "Daily Breakfast & Dinner",
         "Private vehicle for sightseeing",
         "Karsog Valley local sightseeing",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare/Train/Volvo tickets",
         "Lunch & personal expenses",
         "Entry fees to attractions",
         "Travel insurance",
         "Adventure activities",
         "Anything not mentioned under inclusions"
      ]
   },

   {
      id: 35,
      destination: "himachal",
      thumb: imgImla,
      tag: "New",
      time: "2 Nights / 3 Days",
      title: "Imla - Vimla Valley Tour From Shimla",
      location: "Imla & Vimla Valley, Shimla, Himachal Pradesh",
      price: "Price On Request",
      review: 4.7,
      total_review: "(22 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Shimla to Imla Valley",
            description: "Arrive in Shimla and drive towards the scenic Imla Valley. Check in to your stay, enjoy the peaceful surroundings, explore nearby villages, and spend the evening amidst nature."
         },
         {
            day: "Day 2",
            title: "Imla & Vimla Valley Sightseeing",
            description: "After breakfast, visit the beautiful viewpoints, forests, apple orchards, and local temples around Imla and Vimla Valley. Enjoy nature walks and experience the traditional Himachali lifestyle."
         },
         {
            day: "Day 3",
            title: "Return to Shimla",
            description: "After breakfast, check out from the hotel and drive back to Shimla with wonderful memories of your peaceful valley tour."
         }
      ],

      inclusions: [
         "2 Nights accommodation",
         "Daily Breakfast & Dinner",
         "Private vehicle for sightseeing",
         "All sightseeing as per itinerary",
         "Driver allowance, toll tax & parking"
      ],

      exclusions: [
         "Personal expenses",
         "Lunch",
         "Entry tickets",
         "Travel insurance",
         "Adventure activities",
         "Anything not mentioned in inclusions"
      ]
   },
   {
      id: 36,
      destination: "himachal",
      thumb: imgVimla,
      tag: "New",
      time: "2 Nights / 3 Days",
      title: "Imla - Vimla Valley Tour From Mandi",
      location: "Imla & Vimla Valley, Mandi, Himachal Pradesh",
      price: "Price On Request",
      review: 4.7,
      total_review: "(22 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Mandi to Imla Valley",
            description: "Start your journey from Mandi and drive to the beautiful Imla Valley. Check in to your accommodation and spend the evening exploring the peaceful surroundings and nearby villages."
         },
         {
            day: "Day 2",
            title: "Vimla Valley Exploration",
            description: "Enjoy breakfast before exploring the scenic landscapes of Vimla Valley, local temples, forests, apple orchards, and traditional Himachali villages. Spend quality time in nature."
         },
         {
            day: "Day 3",
            title: "Return to Mandi",
            description: "After breakfast, check out from the hotel and return to Mandi with unforgettable memories of your valley getaway."
         }
      ],

      inclusions: [
         "2 Nights accommodation",
         "Daily Breakfast & Dinner",
         "Private vehicle for sightseeing",
         "All sightseeing as per itinerary",
         "Driver allowance, toll tax & parking"
      ],

      exclusions: [
         "Personal expenses",
         "Lunch",
         "Entry tickets",
         "Travel insurance",
         "Adventure activities",
         "Anything not mentioned in inclusions"
      ]
   },








   // Spiti - 3 packages
   {
      id: 7,
      destination: "spiti",
      thumb: listing3_img1,
      tag: "Adventure",
      time: "10 Days",
      title: "Best of Spiti Valley Tour Package",
      location: "Spiti Valley, Himachal Pradesh",
      price: "Price On Request",
      review: 4.9,
      total_review: "(67 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Manali",
            description: "Arrive in Manali and check in to your hotel. Visit Hadimba Devi Temple, Tibetan Monastery, Club House, Van Vihar, Old Manali, and Mall Road. Overnight stay in Manali."
         },
         {
            day: "Day 2",
            title: "Manali to Kaza via Atal Tunnel & Kunzum Pass",
            description: "Drive through Atal Tunnel, Gramphu, Chatru, Batal, and Kunzum Pass before reaching Losar Village and Kaza. Enjoy breathtaking Himalayan landscapes throughout the journey. Overnight stay in Kaza."
         },
         {
            day: "Day 3",
            title: "Kaza Local Sightseeing",
            description: "Visit Key Monastery, Kibber Village, Chicham Bridge, Gette Village, Langza, Hikkim (World's Highest Post Office), and Komik, the world's highest motorable village. Overnight stay in Kaza."
         },
         {
            day: "Day 4",
            title: "Tabo, Dhankar & Pin Valley",
            description: "Explore the ancient Tabo Monastery, Dhankar Monastery, Dhankar Lake (optional trek), Pin Valley National Park, Kungri Monastery, and Mudh Village before returning to Kaza."
         },
         {
            day: "Day 5",
            title: "Kaza to Gue & Nako Excursion",
            description: "Drive towards Gue Village to witness the famous 500-year-old naturally preserved mummy. Continue to the beautiful Nako Lake and Nako Monastery before returning to Kaza."
         },
         {
            day: "Day 6",
            title: "Kaza to Chandratal Lake",
            description: "Travel through Losar and Kunzum Pass to reach the stunning Chandratal Lake. Spend time admiring the crystal-clear lake surrounded by snow-capped mountains. Overnight stay in Swiss Camps near Chandratal."
         },
         {
            day: "Day 7",
            title: "Chandratal to Manali",
            description: "Drive back to Manali via Batal, Chatru, Gramphu, Atal Tunnel, and Solang Valley. Check in to your hotel and enjoy a relaxed evening."
         },
         {
            day: "Day 8",
            title: "Solang Valley Adventure",
            description: "Enjoy a full day in Solang Valley with optional activities like paragliding, ziplining, ATV rides, ropeway, skiing (seasonal), and snow scooter rides. Overnight stay in Manali."
         },
         {
            day: "Day 9",
            title: "Manali Leisure Day",
            description: "Explore Mall Road, Manu Temple, Jogini Waterfall (optional trek), local cafés, and shop for souvenirs. Spend the evening at leisure."
         },
         {
            day: "Day 10",
            title: "Departure from Manali",
            description: "After breakfast, check out from the hotel and proceed to the Manali Bus Stand for your onward journey with unforgettable memories of Spiti Valley."
         }
      ],

      inclusions: [
         "Accommodation in hotels, homestays & Swiss camps",
         "Daily Breakfast & Dinner",
         "Private vehicle for all transfers and sightseeing",
         "Manali, Kaza, Chandratal & Spiti sightseeing",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare / Train Fare / Volvo Tickets",
         "Lunch and personal expenses",
         "Adventure activities charges",
         "Entry fees to monuments and attractions",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 8,
      destination: "spiti",
      thumb: imgbike,
      time: "9 Days",
      title: "Chandigarh to Spiti Bike Expedition",
      location: "Spiti Valley, Himachal Pradesh",
      price: "Price On Request",
      review: 4.8,
      total_review: "(41 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Chandigarh & Ride to Narkanda",
            description: "Meet your expedition captain in Chandigarh, complete the bike briefing, and begin your ride towards Narkanda via Shimla. Enjoy the scenic Himalayan roads and overnight stay in Narkanda."
         },
         {
            day: "Day 2",
            title: "Narkanda to Sangla",
            description: "Ride through Kinnaur along the Sutlej River, crossing spectacular mountain roads before reaching the beautiful Baspa Valley. Overnight stay in Sangla."
         },
         {
            day: "Day 3",
            title: "Sangla – Chitkul – Kalpa",
            description: "Visit Chitkul, the last inhabited village near the Indo-Tibet border, before riding to Kalpa. Enjoy magnificent views of the Kinner Kailash Range. Overnight stay in Kalpa."
         },
         {
            day: "Day 4",
            title: "Kalpa to Tabo via Nako",
            description: "Ride through the rugged landscapes of Kinnaur into Spiti Valley. Visit Nako Lake and Nako Monastery before reaching the ancient village of Tabo. Overnight stay in Tabo."
         },
         {
            day: "Day 5",
            title: "Tabo – Dhankar – Kaza",
            description: "Visit the historic Tabo Monastery and the spectacular Dhankar Monastery before continuing to Kaza, the heart of Spiti Valley. Overnight stay in Kaza."
         },
         {
            day: "Day 6",
            title: "Kaza Local Sightseeing",
            description: "Explore Key Monastery, Kibber Village, Chicham Bridge, Hikkim (World's Highest Post Office), Langza, and Komik Village before returning to Kaza."
         },
         {
            day: "Day 7",
            title: "Kaza to Chandratal Lake",
            description: "Cross the breathtaking Kunzum Pass and ride towards the magical Chandratal Lake. Enjoy the sunset beside the lake and overnight stay in Swiss Camps."
         },
         {
            day: "Day 8",
            title: "Chandratal to Manali",
            description: "Ride through the adventurous Batal–Gramphu route, crossing streams and rough terrain before passing through Atal Tunnel to reach Manali. Enjoy a farewell dinner and overnight stay."
         },
         {
            day: "Day 9",
            title: "Departure from Manali",
            description: "After breakfast, check out from the hotel and transfer to the Manali Bus Stand for your onward journey with unforgettable memories of your Spiti Bike Expedition."
         }
      ],

      inclusions: [
         "Royal Enfield Bike (as per package)",
         "Fuel for the entire expedition",
         "Accommodation in hotels, guesthouses & Swiss camps",
         "Daily Breakfast & Dinner",
         "Experienced Ride Captain",
         "Backup Support Vehicle",
         "Mechanic Support",
         "Helmet for rider and pillion (if included)",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare / Train Fare / Volvo Tickets",
         "Lunch and personal expenses",
         "Bike security deposit (if applicable)",
         "Fuel for personal use or detours",
         "Monument entry fees",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 9,
      destination: "spiti",
      thumb: imgknrroad,
      tag: "Featured",
      time: "12 Days",
      title: "Kinnaur Spiti Road Trip",
      location: "Kinnaur & Spiti Valley, Himachal Pradesh",
      price: "Price On Request",
      review: 4.9,
      total_review: "(35 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Chandigarh to Narkanda",
            description: "Begin your journey from Chandigarh and drive through Shimla to Narkanda. Enjoy scenic mountain roads, apple orchards, and beautiful Himalayan landscapes. Overnight stay in Narkanda."
         },
         {
            day: "Day 2",
            title: "Narkanda to Sangla via Sarahan",
            description: "Drive through Rampur Bushahr and visit the famous Bhimakali Temple in Sarahan before continuing to the beautiful Sangla Valley. Overnight stay in Sangla."
         },
         {
            day: "Day 3",
            title: "Sangla & Chitkul Excursion",
            description: "Visit Kamru Fort and drive to Chitkul, the last inhabited village near the Indo-Tibet border. Enjoy the breathtaking beauty of Baspa Valley before returning to Sangla."
         },
         {
            day: "Day 4",
            title: "Sangla to Kalpa",
            description: "Drive to Kalpa via Reckong Peo. Visit Roghi Village and Suicide Point while enjoying spectacular views of the Kinner Kailash Range. Overnight stay in Kalpa."
         },
         {
            day: "Day 5",
            title: "Kalpa to Tabo via Nako & Gue",
            description: "Travel through the dramatic landscapes of Kinnaur into Spiti Valley. Visit Nako Lake, Nako Monastery, Gue Village, and the famous 500-year-old mummy before reaching Tabo."
         },
         {
            day: "Day 6",
            title: "Tabo to Kaza via Dhankar",
            description: "Explore the ancient Tabo Monastery before visiting Dhankar Monastery and Dhankar Village. Continue your journey to Kaza for an overnight stay."
         },
         {
            day: "Day 7",
            title: "Kaza Local Sightseeing",
            description: "Visit Key Monastery, Kibber Village, Chicham Bridge, Langza, Hikkim (World's Highest Post Office), and Komik Village before returning to Kaza."
         },
         {
            day: "Day 8",
            title: "Kaza to Pin Valley",
            description: "Explore Pin Valley National Park, Kungri Monastery, and Mudh Village. Experience the untouched beauty of Spiti before returning to Kaza."
         },
         {
            day: "Day 9",
            title: "Kaza to Chandratal Lake",
            description: "Drive via Losar and Kunzum Pass to the breathtaking Chandratal Lake. Spend the evening admiring the turquoise lake surrounded by majestic mountains. Overnight stay in Swiss Camps."
         },
         {
            day: "Day 10",
            title: "Chandratal to Manali",
            description: "Cross the adventurous Batal–Gramphu route and Atal Tunnel before reaching Manali. Enjoy leisure time at Mall Road and overnight stay in Manali."
         },
         {
            day: "Day 11",
            title: "Manali Local Sightseeing",
            description: "Visit Hadimba Devi Temple, Tibetan Monastery, Van Vihar, Club House, Old Manali, and Mall Road. Spend the evening shopping or relaxing at local cafés."
         },
         {
            day: "Day 12",
            title: "Manali to Chandigarh Departure",
            description: "After breakfast, check out from the hotel and drive back to Chandigarh with unforgettable memories of your Kinnaur Spiti Road Trip."
         }
      ],

      inclusions: [
         "Accommodation in hotels, guesthouses & Swiss camps",
         "Daily Breakfast & Dinner",
         "Private vehicle for all transfers and sightseeing",
         "Experienced driver",
         "Kinnaur & Spiti sightseeing as per itinerary",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare / Train Fare / Volvo Tickets",
         "Lunch and personal expenses",
         "Entry fees to monuments and monasteries",
         "Adventure activities",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },

   // Leh - 3 packages
   {
      id: 10,
      destination: "leh",
      thumb: listing5_img1,
      tag: "Popular",
      time: "4 Nights / 5 Days",
      title: "Majestic Ladakh Escape",
      location: "Leh, Nubra Valley & Pangong Lake",
      price: "Startng From ₹ 5,899",
      review: 4.9,
      total_review: "(89 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Leh | Acclimatization",
            description: "Arrive at Leh Airport and transfer to your hotel. Spend the day acclimatizing to the high altitude. In the evening, visit Leh Market and Shanti Stupa if time permits. Overnight stay in Leh."
         },
         {
            day: "Day 2",
            title: "Leh to Nubra Valley via Khardung La",
            description: "Drive through the world-famous Khardung La Pass to reach Nubra Valley. Visit Diskit Monastery and enjoy a camel ride at the Hunder Sand Dunes. Overnight stay in Nubra Valley."
         },
         {
            day: "Day 3",
            title: "Nubra Valley to Pangong Lake",
            description: "Travel via the scenic Shyok route to the breathtaking Pangong Lake. Spend the evening enjoying the stunning lake views and overnight stay in lakeside camps."
         },
         {
            day: "Day 4",
            title: "Pangong Lake to Leh",
            description: "Witness a beautiful sunrise over Pangong Lake before driving back to Leh via Chang La Pass. En route, enjoy panoramic mountain views and visit local attractions if time permits. Overnight stay in Leh."
         },
         {
            day: "Day 5",
            title: "Departure from Leh",
            description: "After breakfast, check out from the hotel and transfer to Leh Airport for your onward journey with unforgettable memories of Ladakh."
         }
      ],

      inclusions: [
         "4 Nights accommodation in hotels & camps",
         "Daily Breakfast & Dinner",
         "Private vehicle for all transfers & sightseeing",
         "Inner Line Permits",
         "Airport pick-up & drop",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare",
         "Lunch and personal expenses",
         "Camel ride & adventure activities",
         "Monument entry fees",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 11,
      destination: "leh",
      thumb: imgPangong,
      tag: "Best Seller",
      time: "7 Nights / 8 Days",
      title: "Grand Ladakh Expedition",
      location: "Leh, Sham Valley, Nubra Valley & Pangong Lake",
      price: "Startng From ₹35,999",
      review: 4.8,
      total_review: "(56 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Leh | Acclimatization",
            description: "Arrive at Leh Airport and transfer to your hotel. Spend the day acclimatizing to the high altitude. In the evening, visit Leh Market if time permits. Overnight stay in Leh."
         },
         {
            day: "Day 2",
            title: "Leh Local & Sham Valley Sightseeing",
            description: "Visit Hall of Fame Museum, Gurudwara Pathar Sahib, Magnetic Hill, Sangam Point (Indus & Zanskar Rivers), SECMOL Campus, and Shanti Stupa. Return to Leh for an overnight stay."
         },
         {
            day: "Day 3",
            title: "Leh to Nubra Valley via Khardung La",
            description: "Drive through the famous Khardung La Pass to reach Nubra Valley. Visit Diskit Monastery and enjoy a camel ride at the Hunder Sand Dunes. Overnight stay in Nubra Valley."
         },
         {
            day: "Day 4",
            title: "Nubra Valley to Pangong Lake",
            description: "Travel via the scenic Shyok route to Pangong Lake. Admire the changing colors of the crystal-clear lake and enjoy an overnight stay in lakeside camps."
         },
         {
            day: "Day 5",
            title: "Pangong Lake to Leh",
            description: "Witness the spectacular sunrise over Pangong Lake before driving back to Leh via Chang La Pass. En route visit Thiksey Monastery, Shey Palace, and Druk Padma Karpo School (Rancho School). Overnight stay in Leh."
         },
         {
            day: "Day 6",
            title: "Leisure Day in Leh",
            description: "Enjoy a relaxed day exploring Leh's vibrant markets, Tibetan handicraft shops, cafés, or nearby monasteries. You can also shop for souvenirs and local specialties. Overnight stay in Leh."
         },
         {
            day: "Day 7",
            title: "Monastery & Cultural Tour",
            description: "Visit Spituk Monastery, Stok Palace Museum, Sindhu Ghat, and nearby cultural attractions. Spend the evening at leisure in Leh. Overnight stay in Leh."
         },
         {
            day: "Day 8",
            title: "Departure from Leh",
            description: "After breakfast, check out from the hotel and transfer to Leh Airport for your onward journey with unforgettable memories of your Grand Ladakh Expedition."
         }
      ],

      inclusions: [
         "7 Nights accommodation in hotels & deluxe camps",
         "Daily Breakfast & Dinner",
         "Private vehicle for all transfers & sightseeing",
         "Inner Line Permits",
         "Airport pick-up & drop",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare",
         "Lunch and personal expenses",
         "Monument entry fees",
         "Camel ride & adventure activities",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 12,
      destination: "leh",
      thumb: imgSrinagar,
      tag: "Bestseller",
      time: "5 Nights / 6 Days",
      title: "Ladakh Bliss",
      location: "Leh, Nubra Valley & Pangong Lake",
      price: "Startng From ₹ 19,299",
      review: 4.9,
      total_review: "(34 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Leh | Acclimatization",
            description: "Arrive at Leh Airport and transfer to your hotel. Spend the day acclimatizing to the high altitude. In the evening, visit Shanti Stupa and Leh Market. Overnight stay in Leh."
         },
         {
            day: "Day 2",
            title: "Leh to Nubra Valley via Khardung La",
            description: "Drive through the iconic Khardung La Pass to Nubra Valley. Visit Diskit Monastery and enjoy a camel ride at the Hunder Sand Dunes. Overnight stay in Nubra Valley."
         },
         {
            day: "Day 3",
            title: "Nubra Valley to Pangong Lake",
            description: "Travel via the scenic Shyok route to Pangong Lake. Enjoy the mesmerizing blue waters and spend the night in lakeside camps."
         },
         {
            day: "Day 4",
            title: "Pangong Lake to Leh",
            description: "Witness the beautiful sunrise over Pangong Lake before returning to Leh via Chang La Pass. En route, visit Thiksey Monastery, Shey Palace, and Rancho School. Overnight stay in Leh."
         },
         {
            day: "Day 5",
            title: "Leh Local Sightseeing",
            description: "Explore Hall of Fame Museum, Gurudwara Pathar Sahib, Magnetic Hill, Sangam Point (Indus & Zanskar Rivers), and Leh Palace. Enjoy the evening shopping at the local market. Overnight stay in Leh."
         },
         {
            day: "Day 6",
            title: "Departure from Leh",
            description: "After breakfast, check out from the hotel and transfer to Leh Airport for your onward journey with unforgettable memories of Ladakh."
         }
      ],

      inclusions: [
         "5 Nights accommodation in hotels & camps",
         "Daily Breakfast & Dinner",
         "Private vehicle for all transfers & sightseeing",
         "Inner Line Permits",
         "Airport pick-up & drop",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare",
         "Lunch and personal expenses",
         "Camel ride & adventure activities",
         "Monument entry fees",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 37,
      destination: "leh",
      thumb: imgSrinagar,
      tag: "Bestseller",
      time: "6 Nights / 7 Days",
      title: "Rediscover Ladakh",
      location: "Leh, Nubra Valley & Pangong Lake",
      price: "Startng From ₹22,599",
      review: 4.9,
      total_review: "(34 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Leh | Acclimatization",
            description:
               "Arrive at Leh Airport and transfer to your hotel. Spend the day acclimatizing to the high altitude. In the evening, visit Shanti Stupa and Leh Market. Overnight stay in Leh."
         },
         {
            day: "Day 2",
            title: "Leh to Nubra Valley via Khardung La",
            description:
               "Drive through the iconic Khardung La Pass to Nubra Valley. Visit Diskit Monastery, Hunder Sand Dunes, and enjoy a camel ride. Overnight stay in Nubra Valley."
         },
         {
            day: "Day 3",
            title: "Nubra Valley to Pangong Lake",
            description:
               "Travel via the scenic Shyok route to Pangong Lake. Enjoy the mesmerizing blue waters and spend the night in lakeside camps."
         },
         {
            day: "Day 4",
            title: "Pangong Lake to Leh",
            description:
               "Witness the beautiful sunrise over Pangong Lake before returning to Leh via Chang La Pass. Visit Thiksey Monastery, Shey Palace, and Rancho School en route. Overnight stay in Leh."
         },
         {
            day: "Day 5",
            title: "Sham Valley Excursion",
            description:
               "Visit Hall of Fame Museum, Gurudwara Pathar Sahib, Magnetic Hill, and Sangam Point (Indus & Zanskar Rivers). Return to Leh for an overnight stay."
         },
         {
            day: "Day 6",
            title: "Leh Local Sightseeing & Leisure",
            description:
               "Visit Leh Palace, Namgyal Tsemo Monastery, Sankar Gompa, and explore the vibrant Leh Market. Enjoy leisure time for shopping and local cuisine. Overnight stay in Leh."
         },
         {
            day: "Day 7",
            title: "Departure from Leh",
            description:
               "After breakfast, check out from the hotel and transfer to Leh Airport for your onward journey with unforgettable memories of Ladakh."
         }
      ],

      inclusions: [
         "6 Nights accommodation in hotels & camps",
         "Daily Breakfast & Dinner",
         "Private vehicle for all transfers & sightseeing",
         "Inner Line Permits",
         "Airport pick-up & drop",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare",
         "Lunch and personal expenses",
         "Camel ride & adventure activities",
         "Monument entry fees",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },

   // Kashmir - 3 packages
   {
      id: 13,
      destination: "kashmir",
      thumb: imgvashnodevi1,
      tag: "Pilgrimage",
      time: "2 Nights / 3 Days",
      title: "Vaishnodevi Darshan",
      location: "Katra & Vaishno Devi Shrine, Jammu",
      price: "Startng From ₹5,899",
      review: 4.8,
      total_review: "(78 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Jammu | Transfer to Katra",
            description:
               "Arrive at Jammu Railway Station/Airport and drive to Katra. Check in to your hotel and spend the evening exploring the local market or preparing for the Vaishno Devi pilgrimage. Overnight stay in Katra."
         },
         {
            day: "Day 2",
            title: "Vaishno Devi Darshan",
            description:
               "Early morning begin your sacred trek to the Holy Shrine of Mata Vaishno Devi. Seek blessings at the Bhawan and, if desired, visit Bhairon Temple. Return to Katra after the darshan for an overnight stay."
         },
         {
            day: "Day 3",
            title: "Departure from Katra",
            description:
               "After breakfast, check out from the hotel and transfer to Jammu Railway Station/Airport for your onward journey with divine blessings and cherished memories."
         }
      ],

      inclusions: [
         "2 Nights accommodation in Katra",
         "Daily Breakfast & Dinner",
         "Private transfers between Jammu & Katra",
         "All sightseeing as per itinerary",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare / Train tickets",
         "Helicopter tickets for Vaishno Devi",
         "Pony, Palki or Battery Car charges",
         "Lunch and personal expenses",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 14,
      destination: "kashmir",
      thumb: imgMajestic,
      tag: "Popular",
      time: "7 Nights / 8 Days",
      title: "Majestic Kashmir Escape",
      location: "Srinagar, Gulmarg, Pahalgam & Sonmarg",
      price: "Startng From ₹17,899",
      review: 4.9,
      total_review: "(95 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Srinagar | Houseboat Stay & Shikara Ride",
            description: "Arrive at Srinagar Airport and transfer to a traditional Kashmiri houseboat. Enjoy a relaxing Shikara ride on Dal Lake and admire the floating gardens and local markets. Overnight stay in the houseboat."
         },
         {
            day: "Day 2",
            title: "Srinagar Local Sightseeing",
            description: "Visit the famous Mughal Gardens including Nishat Bagh, Shalimar Bagh, Chashme Shahi, Pari Mahal, Hazratbal Shrine, and Shankaracharya Temple. Overnight stay in Srinagar."
         },
         {
            day: "Day 3",
            title: "Excursion to Sonmarg",
            description: "Drive to Sonmarg, the 'Meadow of Gold'. Visit Thajiwas Glacier by pony (optional) or explore Zero Point (subject to weather and road conditions). Return to Srinagar for an overnight stay."
         },
         {
            day: "Day 4",
            title: "Srinagar to Gulmarg",
            description: "Proceed to Gulmarg and enjoy the breathtaking mountain landscapes. Visit the Gulmarg Golf Course and enjoy the famous Gulmarg Gondola ride (optional). Overnight stay in Gulmarg."
         },
         {
            day: "Day 5",
            title: "Gulmarg to Pahalgam",
            description: "Drive to Pahalgam via saffron fields and apple orchards. Enjoy the beautiful Lidder River and local sightseeing. Overnight stay in Pahalgam."
         },
         {
            day: "Day 6",
            title: "Pahalgam Sightseeing",
            description: "Visit Aru Valley, Betaab Valley, and Chandanwari (by local union cab). Optional activities like horse riding and river rafting are available. Overnight stay in Pahalgam."
         },
         {
            day: "Day 7",
            title: "Return to Srinagar",
            description: "After breakfast, return to Srinagar. Spend the day shopping for Kashmiri handicrafts, dry fruits, and souvenirs or relax at your hotel. Overnight stay in Srinagar."
         },
         {
            day: "Day 8",
            title: "Departure from Srinagar",
            description: "After breakfast, check out from the hotel and transfer to Srinagar Airport for your onward journey with unforgettable memories of Kashmir."
         }
      ],

      inclusions: [
         "7 Nights accommodation (Hotels & Houseboat)",
         "Daily Breakfast & Dinner",
         "Private cab for all transfers & sightseeing",
         "One Shikara Ride on Dal Lake",
         "Airport pickup & drop",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare",
         "Gulmarg Gondola tickets",
         "Local union cab charges in Gulmarg & Pahalgam",
         "Pony rides & adventure activities",
         "Lunch and personal expenses",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 15,
      destination: "kashmir",
      thumb: imgEscape,
      tag: "Featured",
      time: "3 Nights / 4 Days",
      title: "Kashmir Bliss Getaway",
      location: "Srinagar, Gulmarg & Pahalgam",
      price: "Startng From ₹9,999",
      review: 4.9,
      total_review: "(62 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Srinagar | Mughal Gardens & Shikara Ride",
            description: "Arrive at Srinagar Airport and transfer to your hotel. Visit the famous Mughal Gardens including Nishat Bagh, Shalimar Bagh, Chashme Shahi, Pari Mahal, and Shankaracharya Temple. In the evening, enjoy a relaxing Shikara ride on Dal Lake. Overnight stay in Srinagar."
         },
         {
            day: "Day 2",
            title: "Day Excursion to Gulmarg",
            description: "After breakfast, drive to Gulmarg. Explore the beautiful meadows, visit the Gulmarg Golf Course, St. Mary's Church, and enjoy the famous Gulmarg Gondola ride (optional). Return to Srinagar for an overnight stay."
         },
         {
            day: "Day 3",
            title: "Excursion to Pahalgam",
            description: "Drive to Pahalgam via saffron fields and apple orchards. Visit Betaab Valley, Aru Valley, and Chandanwari (by local union cab at own cost). Spend time by the Lidder River before returning to Srinagar for an overnight stay."
         },
         {
            day: "Day 4",
            title: "Departure from Srinagar",
            description: "After breakfast, check out from the hotel and transfer to Srinagar Airport for your onward journey with unforgettable memories of Kashmir."
         }
      ],

      inclusions: [
         "3 Nights accommodation in Srinagar",
         "Daily Breakfast & Dinner",
         "Private cab for airport transfers & sightseeing",
         "One Shikara Ride on Dal Lake",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare",
         "Gulmarg Gondola tickets",
         "Local union cab charges in Pahalgam",
         "Pony rides & adventure activities",
         "Lunch and personal expenses",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 37,
      destination: "kashmir",
      thumb: imgVaishnonew,
      tag: "Spiritual",
      time: "7 Nights / 8 Days",
      title: "Vaishno Devi & Enchanting Kashmir Tour",
      location: "Jammu, Katra, Srinagar, Gulmarg, Pahalgam & Sonmarg",
      price: "Startng From ₹19,999",
      review: 4.9,
      total_review: "(62 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Jammu | Transfer to Katra",
            description: "Arrive at Jammu Airport/Railway Station and drive to Katra. Check in to your hotel and spend the evening at leisure or explore the local market. Overnight stay in Katra."
         },
         {
            day: "Day 2",
            title: "Vaishno Devi Darshan",
            description: "Early morning begin your pilgrimage to the Holy Shrine of Mata Vaishno Devi. Seek blessings at the Bhawan and visit Bhairon Temple (optional). Return to Katra for an overnight stay."
         },
         {
            day: "Day 3",
            title: "Katra to Srinagar",
            description: "After breakfast, drive to Srinagar. Check in to your hotel or houseboat and enjoy a relaxing Shikara ride on the iconic Dal Lake. Overnight stay in Srinagar."
         },
         {
            day: "Day 4",
            title: "Srinagar Local Sightseeing",
            description: "Visit the famous Mughal Gardens including Nishat Bagh, Shalimar Bagh, Chashme Shahi, Pari Mahal, Hazratbal Shrine, and Shankaracharya Temple. Overnight stay in Srinagar."
         },
         {
            day: "Day 5",
            title: "Excursion to Gulmarg",
            description: "Drive to Gulmarg and explore its lush meadows. Enjoy the famous Gulmarg Gondola ride (optional), visit the Golf Course, and admire the breathtaking Himalayan views. Return to Srinagar for an overnight stay."
         },
         {
            day: "Day 6",
            title: "Excursion to Pahalgam",
            description: "Visit Pahalgam via saffron fields and apple orchards. Explore Betaab Valley, Aru Valley, and Chandanwari (by local union cab at own cost). Return to Srinagar in the evening."
         },
         {
            day: "Day 7",
            title: "Excursion to Sonmarg",
            description: "Enjoy a scenic drive to Sonmarg, the 'Meadow of Gold'. Visit Thajiwas Glacier by pony (optional) or explore Zero Point (subject to weather conditions). Return to Srinagar for an overnight stay."
         },
         {
            day: "Day 8",
            title: "Departure from Srinagar",
            description: "After breakfast, check out from the hotel and transfer to Srinagar Airport for your onward journey with unforgettable memories of Vaishno Devi and Kashmir."
         }
      ],

      inclusions: [
         "7 Nights accommodation in hotels/houseboat",
         "Daily Breakfast & Dinner",
         "Private cab for all transfers & sightseeing",
         "One Shikara Ride on Dal Lake",
         "Airport/Railway Station pickup & drop",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare / Train tickets",
         "Helicopter tickets for Vaishno Devi",
         "Gulmarg Gondola tickets",
         "Local union cab charges in Pahalgam",
         "Pony, Palki & Battery Car charges",
         "Lunch and personal expenses",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },

   // Uttarakhand - 3 packages
   {
      id: 16,
      destination: "uttarakhand",
      thumb: listing5_img4,
      tag: "Spiritual",
      time: "5 Days",
      title: "Kedarnath Group Tour from Haridwar with Rishikesh Stay",
      location: "Haridwar, Kedarnath & Rishikesh, Uttarakhand",
      price: "Price On Request",
      review: 4.7,
      total_review: "(91 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Haridwar to Guptkashi",
            description: "Arrive in Haridwar and begin your scenic drive to Guptkashi via Devprayag, Srinagar, Rudraprayag and Agastyamuni. Witness the beautiful confluence of rivers and breathtaking Himalayan views. Check in to the hotel and overnight stay in Guptkashi."
         },
         {
            day: "Day 2",
            title: "Guptkashi – Sonprayag – Gaurikund – Kedarnath",
            description: "Early morning drive to Sonprayag followed by a local shuttle to Gaurikund. Complete the biometric registration and begin the 16 km trek to the holy Kedarnath Temple. Pony, palki and helicopter services are available at an additional cost. Attend the evening aarti and overnight stay in Kedarnath."
         },
         {
            day: "Day 3",
            title: "Kedarnath to Guptkashi",
            description: "Attend the early morning darshan at Kedarnath Temple. After breakfast, trek back to Gaurikund and drive to Guptkashi via Sonprayag. Check in to the hotel and relax after the pilgrimage. Overnight stay in Guptkashi."
         },
         {
            day: "Day 4",
            title: "Guptkashi to Rishikesh",
            description: "After breakfast, drive to Rishikesh. Visit the famous Ram Jhula, Laxman Jhula, Triveni Ghat, Parmarth Niketan and explore the vibrant local market. Attend the evening Ganga Aarti (subject to timing). Overnight stay in Rishikesh."
         },
         {
            day: "Day 5",
            title: "Rishikesh to Haridwar Departure",
            description: "After breakfast, check out from the hotel and drive to Haridwar for your onward journey with divine blessings and unforgettable memories."
         }
      ],

      inclusions: [
         "Accommodation in hotels/guesthouses",
         "Daily Breakfast & Dinner",
         "Private vehicle for all transfers and sightseeing",
         "Driver allowance, toll tax & parking charges",
         "All applicable taxes"
      ],

      exclusions: [
         "Train / Flight fare",
         "Pony, Palki & Helicopter charges",
         "VIP Darshan & Temple Puja charges",
         "Biometric registration fees (if applicable)",
         "Lunch and personal expenses",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 17,
      destination: "uttarakhand",
      thumb: imguk,
      time: "6 Days",
      title: "Escape to Uttarakhand | From Sacred Streams to Alpine Dreams",
      location: "Haridwar, Rishikesh & Auli, Uttarakhand",
      price: "Price On Request",
      review: 4.8,
      total_review: "(54 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Haridwar | Transfer to Rishikesh",
            description: "Arrive at Haridwar Railway Station and drive to Rishikesh. Visit Ram Jhula, Laxman Jhula, Beatles Ashram, Triveni Ghat, and attend the evening Ganga Aarti. Overnight stay in Rishikesh."
         },
         {
            day: "Day 2",
            title: "Rishikesh to Auli",
            description: "After breakfast, drive towards Auli via Devprayag, Rudraprayag, Karnaprayag and Joshimath. Visit the scenic Vishnuprayag Sangam before reaching Auli. Check in to the hotel and enjoy the peaceful Himalayan surroundings."
         },
         {
            day: "Day 3",
            title: "Auli Sightseeing",
            description: "Explore the beautiful hill station of Auli. Visit the famous Auli Artificial Lake, enjoy the Auli Ropeway and Chairlift (optional), admire panoramic Himalayan views, and visit Gurso Bugyal if weather permits. Overnight stay in Auli."
         },
         {
            day: "Day 4",
            title: "Joshimath Excursion",
            description: "Visit Joshimath and explore Narsingh Temple, Shankaracharya Math, Kalpavriksha, and local markets. Spend the evening enjoying the peaceful mountain atmosphere before returning to Auli."
         },
         {
            day: "Day 5",
            title: "Auli to Rishikesh",
            description: "After breakfast, drive back to Rishikesh while enjoying the scenic Himalayan landscapes. Evening free for shopping, cafés, or relaxing by the Ganges. Overnight stay in Rishikesh."
         },
         {
            day: "Day 6",
            title: "Rishikesh to Haridwar Departure",
            description: "After breakfast, check out from the hotel and transfer to Haridwar Railway Station or Bus Stand for your onward journey with unforgettable memories of Uttarakhand."
         }
      ],

      inclusions: [
         "Accommodation in hotels/resorts",
         "Daily Breakfast & Dinner",
         "Private vehicle for all transfers & sightseeing",
         "Driver allowance, toll tax & parking charges",
         "All applicable taxes"
      ],

      exclusions: [
         "Train / Flight fare",
         "Auli Ropeway & Chairlift tickets",
         "Adventure activities",
         "Lunch and personal expenses",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 18,
      destination: "uttarakhand",
      thumb: imgHaridwar,
      tag: "Adventure",
      time: "7 Days",
      title: "Dehradun, Haridwar, Rishikesh & Mussoorie Winter Special",
      location: "Dehradun, Haridwar, Rishikesh & Mussoorie, Uttarakhand",
      price: "Price On Request",
      review: 4.9,
      total_review: "(38 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Dehradun | Transfer to Haridwar",
            description: "Arrive in Dehradun and drive to Haridwar. Visit Mansa Devi Temple, Chandi Devi Temple, Daksha Mahadev Temple, and Har Ki Pauri. Witness the mesmerizing evening Ganga Aarti before checking in to your hotel for an overnight stay."
         },
         {
            day: "Day 2",
            title: "Haridwar to Rishikesh Sightseeing",
            description: "After breakfast, proceed to Rishikesh. Visit Ram Jhula, Laxman Jhula, Triveni Ghat, Beatles Ashram, Parmarth Niketan, and Neelkanth Mahadev Temple. You can also enjoy optional river rafting or café hopping before returning to your hotel."
         },
         {
            day: "Day 3",
            title: "Rishikesh to Mussoorie",
            description: "Drive to Mussoorie, popularly known as the Queen of Hills. Visit Kempty Falls, Gun Hill via Ropeway, Company Garden, Camel's Back Road, and Mall Road. Spend the evening enjoying the beautiful winter atmosphere."
         },
         {
            day: "Day 4",
            title: "Mussoorie Local Sightseeing",
            description: "Explore Lal Tibba, George Everest House, Bhatta Falls, Mussoorie Lake, and nearby viewpoints. Enjoy shopping at Mall Road and taste local delicacies before returning to your hotel."
         },
         {
            day: "Day 5",
            title: "Mussoorie to Dehradun",
            description: "After breakfast, drive to Dehradun. Visit Robber's Cave, Sahastradhara, Forest Research Institute (FRI), Tapkeshwar Temple, and Paltan Bazaar. Overnight stay in Dehradun."
         },
         {
            day: "Day 6",
            title: "Leisure Day in Dehradun",
            description: "Enjoy a relaxed day exploring local cafés, shopping markets, or nearby attractions at your own pace. You may also visit Mindrolling Monastery and Malsi Deer Park."
         },
         {
            day: "Day 7",
            title: "Departure",
            description: "After breakfast, check out from the hotel and transfer to Dehradun Railway Station or Airport for your onward journey with unforgettable memories of Uttarakhand."
         }
      ],

      inclusions: [
         "Accommodation in hotels",
         "Daily Breakfast & Dinner",
         "Private vehicle for transfers & sightseeing",
         "Driver allowance, toll tax & parking charges",
         "All applicable taxes"
      ],

      exclusions: [
         "Train / Flight fare",
         "River rafting & adventure activities",
         "Ropeway tickets",
         "Lunch and personal expenses",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },

   // Rajasthan - 3 packages
   {
      id: 19,
      destination: "rajasthan",
      thumb: listing3_img7,
      tag: "Royal",
      time: "7 Days",
      title: "Vacation In Rajasthan",
      location: "Jaipur, Udaipur, Jodhpur & Jaisalmer, Rajasthan",
      price: "Price On Request",
      review: 4.8,
      total_review: "(73 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Udaipur",
            description: "Arrive in Udaipur and transfer to your hotel. After check-in, visit Saheliyon Ki Bari, Fateh Sagar Lake, Under The Sun Aquarium, and enjoy the peaceful surroundings. Overnight stay in Udaipur."
         },
         {
            day: "Day 2",
            title: "Udaipur City Tour",
            description: "After breakfast, explore the magnificent City Palace, Crystal Gallery, Jagdish Temple, Lake Pichola, Ambrai Ghat, and enjoy an optional boat ride on Lake Pichola. Overnight stay in Udaipur."
         },
         {
            day: "Day 3",
            title: "Udaipur to Jodhpur",
            description: "Drive to the Blue City of Jodhpur. Visit the magnificent Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace Museum, Clock Tower, and local markets. Overnight stay in Jodhpur."
         },
         {
            day: "Day 4",
            title: "Jodhpur to Jaisalmer",
            description: "After breakfast, drive towards the Golden City of Jaisalmer. En route visit the Jaisalmer War Museum. After hotel check-in, explore Gadisar Lake and local markets in the evening. Overnight stay in Jaisalmer."
         },
         {
            day: "Day 5",
            title: "Jaisalmer Sightseeing & Desert Camp",
            description: "Visit Jaisalmer Fort, Patwon Ki Haveli, Nathmal Ki Haveli, Salim Singh Ki Haveli, and Gadisar Lake. Later proceed to Sam Sand Dunes for camel safari, cultural folk dance, Rajasthani dinner, and overnight stay in a desert camp."
         },
         {
            day: "Day 6",
            title: "Jaisalmer to Jaipur",
            description: "After breakfast, drive or transfer to Jaipur. Check in to your hotel and spend the evening exploring the colorful local markets, famous for handicrafts, jewelry, and traditional Rajasthani cuisine."
         },
         {
            day: "Day 7",
            title: "Jaipur Sightseeing & Departure",
            description: "Visit Amber Fort, Jal Mahal, Hawa Mahal, City Palace, and Jantar Mantar. After sightseeing, transfer to Jaipur Airport or Railway Station for your onward journey with unforgettable memories of Rajasthan."
         }
      ],

      inclusions: [
         "Accommodation in hotels & desert camp",
         "Daily Breakfast",
         "Private vehicle for transfers & sightseeing",
         "Camel Safari at Sam Sand Dunes",
         "Cultural evening with Rajasthani folk dance",
         "Driver allowance, toll tax & parking charges",
         "All applicable taxes"
      ],

      exclusions: [
         "Airfare / Train fare",
         "Monument entry tickets",
         "Boat ride charges",
         "Lunch & Dinner (except desert camp dinner)",
         "Personal expenses",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 20,
      destination: "rajasthan",
      thumb: imgDeserts,
      time: "7 Days",
      title: "Deserts Of Rajasthan With Bikaner",
      location: "Jaipur, Bikaner, Jaisalmer & Jodhpur, Rajasthan",
      price: "Price On Request",
      review: 4.7,
      total_review: "(48 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Jaipur",
            description: "Meet our representative upon arrival in Jaipur and transfer to your hotel. After check-in and some relaxation, begin your sightseeing with the iconic Hawa Mahal, City Palace, Jantar Mantar, Govind Dev Ji Temple, and explore the vibrant local markets. Overnight stay in Jaipur."
         },
         {
            day: "Day 2",
            title: "Jaipur Sightseeing",
            description: "After breakfast, enjoy a full-day sightseeing tour of Jaipur. Visit the magnificent Amber Fort, Jaigarh Fort, Nahargarh Fort, Jal Mahal, and Birla Temple. Spend the evening shopping for handicrafts and traditional Rajasthani souvenirs. Overnight stay in Jaipur."
         },
         {
            day: "Day 3",
            title: "Jaipur to Bikaner",
            description: "After breakfast, check out and drive to Bikaner via Mandawa, famous for its beautifully painted havelis. Upon arrival, visit Junagarh Fort, Lalgarh Palace, Camel Breeding Farm, and explore the local markets famous for Bikaneri Bhujia and handicrafts. Overnight stay in Bikaner."
         },
         {
            day: "Day 4",
            title: "Bikaner to Jaisalmer",
            description: "After breakfast, proceed towards the Golden City of Jaisalmer. En route visit the famous Jaisalmer War Museum. On arrival, check in to your hotel and later explore the magnificent Jaisalmer Fort, local bazaars, and traditional handicraft shops. Overnight stay in Jaisalmer."
         },
         {
            day: "Day 5",
            title: "Jaisalmer Sightseeing & Sam Sand Dunes",
            description: "After breakfast, visit Gadisar Lake, Patwon Ki Haveli, Nathmal Ki Haveli, Salim Singh Ki Haveli, and the Golden Fort. Later drive to the famous Sam Sand Dunes where you will enjoy a Camel Safari, optional Jeep Safari, mesmerizing sunset views, folk dance performances, bonfire, and a traditional Rajasthani dinner. Overnight stay at a desert camp."
         },
         {
            day: "Day 6",
            title: "Jaisalmer to Jodhpur",
            description: "After breakfast, check out from the desert camp and drive to Jodhpur. Visit the magnificent Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace Museum, and Ghanta Ghar Market. Enjoy shopping for traditional handicrafts before checking in to your hotel. Overnight stay in Jodhpur."
         },
         {
            day: "Day 7",
            title: "Departure from Jodhpur",
            description: "After breakfast, check out from the hotel and transfer to Jodhpur Airport or Railway Station for your onward journey with unforgettable memories of Rajasthan."
         }
      ],

      inclusions: [
         "Accommodation in hotels & desert camp",
         "Daily Breakfast",
         "Traditional Rajasthani Dinner at Desert Camp",
         "Camel Safari at Sam Sand Dunes",
         "Private AC Vehicle for Transfers & Sightseeing",
         "Driver Allowance, Toll Tax & Parking Charges",
         "All Applicable Taxes"
      ],

      exclusions: [
         "Airfare / Train Fare",
         "Monument Entry Fees",
         "Jeep Safari Charges",
         "Lunch & Dinner (Except Desert Camp Dinner)",
         "Personal Expenses",
         "Travel Insurance",
         "Anything Not Mentioned in Inclusions"
      ]
   },
   {
      id: 21,
      destination: "rajasthan",
      thumb: imgUdaipur,
      tag: "Heritage",
      time: "8 Days",
      title: "Udaipur Mount Abu Tour",
      location: "Udaipur & Mount Abu, Rajasthan",
      price: "Price On Request",
      review: 4.9,
      total_review: "(41 Reviews)",
      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Jaipur",
            description: "Arrive in Jaipur and meet our representative. Transfer to your hotel and relax. Later visit Hawa Mahal, Jantar Mantar, City Palace, Govind Dev Ji Temple, and explore the colorful local markets. Overnight stay in Jaipur."
         },
         {
            day: "Day 2",
            title: "Jaipur Sightseeing",
            description: "After breakfast, explore the Pink City. Visit Amer Fort, Jaigarh Fort, Nahargarh Fort, Jal Mahal, and Birla Temple. Enjoy panoramic views of Jaipur before returning to the hotel for an overnight stay."
         },
         {
            day: "Day 3",
            title: "Jaipur to Udaipur",
            description: "Drive to Udaipur via Nathdwara. Visit the famous Shiva Statue and Eklingji Temple en route. Upon arrival, check into the hotel and later explore Saheliyon Ki Bari, Fateh Sagar Lake, and Under the Sun Aquarium. Overnight stay in Udaipur."
         },
         {
            day: "Day 4",
            title: "Udaipur City Tour",
            description: "Visit the magnificent City Palace and Crystal Gallery. Enjoy a peaceful boat ride on Lake Pichola and explore the vibrant local markets in the evening. Overnight stay in Udaipur."
         },
         {
            day: "Day 5",
            title: "Udaipur to Mount Abu",
            description: "After breakfast, drive to Mount Abu via NH-27. Visit the famous Dilwara Jain Temples, Achalgarh Fort, Guru Shikhar, and Trevor's Tank. Check into the hotel for an overnight stay."
         },
         {
            day: "Day 6",
            title: "Mount Abu Sightseeing",
            description: "Explore Nakki Lake with an optional boat ride, hike to Toad Rock, visit Sunset Point, Honeymoon Point, and the local market. Enjoy the pleasant weather before returning to the hotel."
         },
         {
            day: "Day 7",
            title: "Mount Abu to Udaipur",
            description: "After breakfast, drive back to Udaipur. Spend the remaining day shopping for handicrafts, miniature paintings, and traditional Rajasthani souvenirs. Overnight stay in Udaipur."
         },
         {
            day: "Day 8",
            title: "Departure",
            description: "After breakfast, check out from the hotel and transfer to Udaipur Railway Station or Airport for your onward journey with unforgettable memories of Rajasthan."
         }
      ],
      inclusions: [
         "Hotel accommodation",
         "Daily breakfast",
         "Private cab for sightseeing and transfers",
         "Driver allowance, toll taxes & parking",
         "All applicable hotel taxes"
      ],
      exclusions:
         "Airfare/train fare, entry tickets, personal expenses, boating charges, guide fees, and anything not mentioned in the inclusions."
   },

   // Kerala - 3 packages
   {
      id: 22,
      destination: "kerala",
      thumb: listing5_img8,
      tag: "Backwaters",
      time: "5 Nights / 6 Days",
      title: "Majestic Munnar",
      location: "Kochi, Munnar, Thekkady & Alleppey",
      price: "Starting From ₹10,099",
      review: 4.8,
      total_review: "(86 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Kochi & Sightseeing",
            description: "Arrive in Kochi and transfer to your hotel. Visit Fort Kochi, Mattancherry Palace, Santa Cruz Basilica, St. Francis Church, Chinese Fishing Nets, and Cherai Beach. Overnight stay in Kochi."
         },
         {
            day: "Day 2",
            title: "Kochi to Munnar",
            description: "After breakfast, drive to Munnar through scenic hills and tea plantations. En route visit Cheeyappara Waterfalls and Valara Waterfalls. Check in to the hotel and enjoy the peaceful surroundings. Overnight stay in Munnar."
         },
         {
            day: "Day 3",
            title: "Munnar Sightseeing",
            description: "Explore the beautiful attractions of Munnar including Echo Point, Mattupetty Dam, Kundala Lake, Blossom Park, Sevenmallay Tea Estate, and Eravikulam National Park. Return to the hotel for an overnight stay in Munnar."
         },
         {
            day: "Day 4",
            title: "Munnar to Thekkady",
            description: "Drive to Thekkady after breakfast. Visit Periyar Wildlife Sanctuary and enjoy an optional boat ride on Periyar Lake. Later visit Elephant Junction and explore local spice plantations. Overnight stay in Thekkady."
         },
         {
            day: "Day 5",
            title: "Thekkady to Alleppey Houseboat",
            description: "Transfer to Alleppey and board a traditional houseboat. Cruise through Kerala's famous backwaters, passing coconut groves, villages, and paddy fields while enjoying delicious Kerala cuisine. Overnight stay on the houseboat."
         },
         {
            day: "Day 6",
            title: "Departure from Kochi",
            description: "After breakfast, check out from the houseboat and transfer to Kochi Airport or Railway Station for your onward journey with unforgettable memories of God's Own Country."
         }
      ],

      inclusions: [
         "5 Nights accommodation (Hotels & Houseboat)",
         "Daily breakfast in hotels",
         "All meals on the houseboat",
         "Private cab for transfers & sightseeing",
         "Driver allowance, toll taxes & parking"
      ],

      exclusions: [
         "Airfare/train fare",
         "Monument entry fees",
         "Boating charges (except houseboat stay)",
         "Personal expenses",
         "Tips & gratuities",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 23,
      destination: "kerala",
      thumb: imgKerala,
      time: "5 Nights / 6 Days",
      title: "Majestic Kerala",
      location: "Munnar, Thekkady, Alleppey & Kochi",
      price: "Starting From ₹19,599",
      review: 4.9,
      total_review: "(67 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Kochi & Transfer to Munnar",
            description: "Arrive at Kochi Airport/Railway Station and drive to the picturesque hill station of Munnar. En route, visit the beautiful Cheeyappara and Valara Waterfalls while enjoying the scenic tea plantations and spice gardens. Check in to your hotel and relax overnight in Munnar."
         },
         {
            day: "Day 2",
            title: "Munnar Sightseeing",
            description: "After breakfast, explore the beauty of Munnar. Visit Echo Point, Mattupetty Dam, Kundala Lake, Blossom Park, Sevenmallay Tea Estate, and Eravikulam National Park. Enjoy panoramic views of lush green valleys before returning to the hotel. Overnight stay in Munnar."
         },
         {
            day: "Day 3",
            title: "Munnar to Thekkady",
            description: "Drive to Thekkady after breakfast. Visit Periyar Wildlife Sanctuary and enjoy an optional boat safari on Periyar Lake. Explore the famous spice plantations and Elephant Junction before checking into your hotel. Overnight stay in Thekkady."
         },
         {
            day: "Day 4",
            title: "Thekkady to Alleppey Houseboat",
            description: "Proceed to Alleppey and board a traditional Kerala houseboat. Cruise through the tranquil backwaters, coconut groves, and picturesque villages while enjoying authentic Kerala cuisine. Overnight stay on the houseboat."
         },
         {
            day: "Day 5",
            title: "Alleppey to Kochi",
            description: "After breakfast, check out from the houseboat and drive to Kochi. Visit Fort Kochi, Mattancherry Palace, St. Francis Church, Santa Cruz Basilica, Marine Drive, and the iconic Chinese Fishing Nets. Overnight stay in Kochi."
         },
         {
            day: "Day 6",
            title: "Departure",
            description: "After breakfast, check out from the hotel and transfer to Kochi Airport or Railway Station for your onward journey with unforgettable memories of Kerala."
         }
      ],

      inclusions: [
         "5 Nights accommodation (Hotels & Houseboat)",
         "Daily breakfast in hotels",
         "All meals on the houseboat",
         "Private cab for sightseeing & transfers",
         "Driver allowance, toll taxes & parking"
      ],

      exclusions: [
         "Airfare/train fare",
         "Monument entry fees",
         "Boating charges (except houseboat stay)",
         "Personal expenses",
         "Tips & gratuities",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 24,
      destination: "kerala",
      thumb: imgMunnar,
      tag: "Nature",
      time: "6 Nights / 7 Days",
      title: "Kerala Bliss",
      location: "Munnar, Thekkady, Alleppey, Kovalam & Trivandrum",
      price: "Starting From ₹12,599",
      review: 4.8,
      total_review: "(39 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Kochi & Transfer to Munnar",
            description: "Arrive at Kochi Airport/Railway Station and drive to the scenic hill station of Munnar. En route, visit Neriamangalam Bridge, Valara Waterfalls, Cheeyappara Waterfalls, and Pottas Fun Farm. In the evening, enjoy traditional Kathakali dance and Kalaripayattu martial arts performances. Overnight stay in Munnar."
         },
         {
            day: "Day 2",
            title: "Munnar Sightseeing",
            description: "After breakfast, explore Munnar's famous attractions including the Tata Tea Museum, lush tea plantations, 2nd Mile Viewpoint, Carmelagiri Elephant Park, Mattupetty Dam, Echo Point, Pullu Medu Elephant Viewpoint, and Kundala Lake. Return to the hotel for an overnight stay in Munnar."
         },
         {
            day: "Day 3",
            title: "Munnar to Thekkady",
            description: "Drive to Thekkady after breakfast. Visit the Periyar Wildlife Sanctuary, enjoy an optional boat safari on Periyar Lake, explore aromatic spice plantations, and visit Elephant Junction. Overnight stay in Thekkady."
         },
         {
            day: "Day 4",
            title: "Thekkady to Alleppey",
            description: "Proceed to Alleppey and check into a traditional Kerala houseboat. Cruise through the peaceful backwaters while enjoying scenic villages, coconut groves, and delicious Kerala cuisine. Overnight stay on the houseboat."
         },
         {
            day: "Day 5",
            title: "Alleppey to Kovalam",
            description: "After breakfast, drive to Kovalam. Relax at Lighthouse Beach, Hawa Beach, and Samudra Beach. Enjoy the beautiful sunset and peaceful seaside atmosphere. Overnight stay in Kovalam."
         },
         {
            day: "Day 6",
            title: "Kovalam & Trivandrum Sightseeing",
            description: "Visit Padmanabhaswamy Temple, Napier Museum, Kuthiramalika Palace, Shangumugham Beach, and Vizhinjam Lighthouse. Spend the evening shopping for local handicrafts before returning to your hotel. Overnight stay in Kovalam."
         },
         {
            day: "Day 7",
            title: "Departure",
            description: "After breakfast, check out from the hotel and transfer to Trivandrum Airport/Railway Station for your onward journey with wonderful memories of Kerala."
         }
      ],

      inclusions: [
         "6 Nights accommodation (Hotels & Houseboat)",
         "Daily breakfast",
         "All meals on the houseboat",
         "Private cab for sightseeing & transfers",
         "Driver allowance, toll taxes & parking"
      ],

      exclusions: [
         "Airfare/train fare",
         "Monument entry fees",
         "Boating charges (except houseboat stay)",
         "Personal expenses",
         "Tips & gratuities",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 44,
      destination: "kerala",
      thumb: imgBackwater,
      tag: "Nature",
      time: "6 Nights / 7 Days",
      title: "Backwater Escape",
      location: "Munnar, Thekkady, Alleppey, Kovalam & Trivandrum",
      price: "Starting From ₹23,099",
      review: 4.8,
      total_review: "(39 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Kochi & Transfer to Munnar",
            description: "Arrive at Kochi Airport/Railway Station and drive to the scenic hill station of Munnar. En route, visit Neriamangalam Bridge, Valara Waterfalls, Cheeyappara Waterfalls, and Pottas Fun Farm. In the evening, enjoy traditional Kathakali dance and Kalaripayattu martial arts performances. Overnight stay in Munnar."
         },
         {
            day: "Day 2",
            title: "Munnar Sightseeing",
            description: "After breakfast, explore Munnar's famous attractions including the Tata Tea Museum, lush tea plantations, 2nd Mile Viewpoint, Carmelagiri Elephant Park, Mattupetty Dam, Echo Point, Pullu Medu Elephant Viewpoint, and Kundala Lake. Return to the hotel for an overnight stay in Munnar."
         },
         {
            day: "Day 3",
            title: "Munnar to Thekkady",
            description: "Drive to Thekkady after breakfast. Visit the Periyar Wildlife Sanctuary, enjoy an optional boat safari on Periyar Lake, explore aromatic spice plantations, and visit Elephant Junction. Overnight stay in Thekkady."
         },
         {
            day: "Day 4",
            title: "Thekkady to Alleppey",
            description: "Proceed to Alleppey and check into a traditional Kerala houseboat. Cruise through the peaceful backwaters while enjoying scenic villages, coconut groves, and delicious Kerala cuisine. Overnight stay on the houseboat."
         },
         {
            day: "Day 5",
            title: "Alleppey to Kovalam",
            description: "After breakfast, drive to Kovalam. Relax at Lighthouse Beach, Hawa Beach, and Samudra Beach. Enjoy the beautiful sunset and peaceful seaside atmosphere. Overnight stay in Kovalam."
         },
         {
            day: "Day 6",
            title: "Kovalam & Trivandrum Sightseeing",
            description: "Visit Padmanabhaswamy Temple, Napier Museum, Kuthiramalika Palace, Shangumugham Beach, and Vizhinjam Lighthouse. Spend the evening shopping for local handicrafts before returning to your hotel. Overnight stay in Kovalam."
         },
         {
            day: "Day 7",
            title: "Departure",
            description: "After breakfast, check out from the hotel and transfer to Trivandrum Airport/Railway Station for your onward journey with wonderful memories of Kerala."
         }
      ],

      inclusions: [
         "6 Nights accommodation (Hotels & Houseboat)",
         "Daily breakfast",
         "All meals on the houseboat",
         "Private cab for sightseeing & transfers",
         "Driver allowance, toll taxes & parking"
      ],

      exclusions: [
         "Airfare/train fare",
         "Monument entry fees",
         "Boating charges (except houseboat stay)",
         "Personal expenses",
         "Tips & gratuities",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 47,
      destination: "kerala",
      thumb: imgRediscover,
      tag: "Nature",
      time: "6 Nights / 7 Days",
      title: "Rediscover Kerala",
      location: "Munnar, Thekkady, Alleppey, Kovalam & Trivandrum",
      price: "Starting From ₹19,299",
      review: 4.8,
      total_review: "(39 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Kochi & Transfer to Munnar",
            description: "Arrive at Kochi Airport/Railway Station and drive to the scenic hill station of Munnar. En route, visit Neriamangalam Bridge, Valara Waterfalls, Cheeyappara Waterfalls, and Pottas Fun Farm. In the evening, enjoy traditional Kathakali dance and Kalaripayattu martial arts performances. Overnight stay in Munnar."
         },
         {
            day: "Day 2",
            title: "Munnar Sightseeing",
            description: "After breakfast, explore Munnar's famous attractions including the Tata Tea Museum, lush tea plantations, 2nd Mile Viewpoint, Carmelagiri Elephant Park, Mattupetty Dam, Echo Point, Pullu Medu Elephant Viewpoint, and Kundala Lake. Return to the hotel for an overnight stay in Munnar."
         },
         {
            day: "Day 3",
            title: "Munnar to Thekkady",
            description: "Drive to Thekkady after breakfast. Visit the Periyar Wildlife Sanctuary, enjoy an optional boat safari on Periyar Lake, explore aromatic spice plantations, and visit Elephant Junction. Overnight stay in Thekkady."
         },
         {
            day: "Day 4",
            title: "Thekkady to Alleppey",
            description: "Proceed to Alleppey and check into a traditional Kerala houseboat. Cruise through the peaceful backwaters while enjoying scenic villages, coconut groves, and delicious Kerala cuisine. Overnight stay on the houseboat."
         },
         {
            day: "Day 5",
            title: "Alleppey to Kovalam",
            description: "After breakfast, drive to Kovalam. Relax at Lighthouse Beach, Hawa Beach, and Samudra Beach. Enjoy the beautiful sunset and peaceful seaside atmosphere. Overnight stay in Kovalam."
         },
         {
            day: "Day 6",
            title: "Kovalam & Trivandrum Sightseeing",
            description: "Visit Padmanabhaswamy Temple, Napier Museum, Kuthiramalika Palace, Shangumugham Beach, and Vizhinjam Lighthouse. Spend the evening shopping for local handicrafts before returning to your hotel. Overnight stay in Kovalam."
         },
         {
            day: "Day 7",
            title: "Departure",
            description: "After breakfast, check out from the hotel and transfer to Trivandrum Airport/Railway Station for your onward journey with wonderful memories of Kerala."
         }
      ],

      inclusions: [
         "6 Nights accommodation (Hotels & Houseboat)",
         "Daily breakfast",
         "All meals on the houseboat",
         "Private cab for sightseeing & transfers",
         "Driver allowance, toll taxes & parking"
      ],

      exclusions: [
         "Airfare/train fare",
         "Monument entry fees",
         "Boating charges (except houseboat stay)",
         "Personal expenses",
         "Tips & gratuities",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 49,
      destination: "kerala",
      thumb: imgKanyakumari,
      tag: "Nature",
      time: "9 Nights / 10 Days",
      title: "Grand Kerala with Kanyakumari",
      location: "Munnar, Thekkady, Alleppey, Kovalam & Trivandrum",
      price: "Starting From ₹33,099",
      review: 4.8,
      total_review: "(39 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Kochi & Transfer to Munnar",
            description: "Arrive at Kochi Airport/Railway Station and drive to the scenic hill station of Munnar. En route, visit Neriamangalam Bridge, Valara Waterfalls, Cheeyappara Waterfalls, and Pottas Fun Farm. In the evening, enjoy traditional Kathakali dance and Kalaripayattu martial arts performances. Overnight stay in Munnar."
         },
         {
            day: "Day 2",
            title: "Munnar Sightseeing",
            description: "After breakfast, explore Munnar's famous attractions including the Tata Tea Museum, lush tea plantations, 2nd Mile Viewpoint, Carmelagiri Elephant Park, Mattupetty Dam, Echo Point, Pullu Medu Elephant Viewpoint, and Kundala Lake. Return to the hotel for an overnight stay in Munnar."
         },
         {
            day: "Day 3",
            title: "Munnar to Thekkady",
            description: "Drive to Thekkady after breakfast. Visit the Periyar Wildlife Sanctuary, enjoy an optional boat safari on Periyar Lake, explore aromatic spice plantations, and visit Elephant Junction. Overnight stay in Thekkady."
         },
         {
            day: "Day 4",
            title: "Thekkady to Alleppey",
            description: "Proceed to Alleppey and check into a traditional Kerala houseboat. Cruise through the peaceful backwaters while enjoying scenic villages, coconut groves, and delicious Kerala cuisine. Overnight stay on the houseboat."
         },
         {
            day: "Day 5",
            title: "Alleppey to Kovalam",
            description: "After breakfast, drive to Kovalam. Relax at Lighthouse Beach, Hawa Beach, and Samudra Beach. Enjoy the beautiful sunset and peaceful seaside atmosphere. Overnight stay in Kovalam."
         },
         {
            day: "Day 6",
            title: "Kovalam & Trivandrum Sightseeing",
            description: "Visit Padmanabhaswamy Temple, Napier Museum, Kuthiramalika Palace, Shangumugham Beach, and Vizhinjam Lighthouse. Spend the evening shopping for local handicrafts before returning to your hotel. Overnight stay in Kovalam."
         },
         {
            day: "Day 7",
            title: "Departure",
            description: "After breakfast, check out from the hotel and transfer to Trivandrum Airport/Railway Station for your onward journey with wonderful memories of Kerala."
         }
      ],

      inclusions: [
         "6 Nights accommodation (Hotels & Houseboat)",
         "Daily breakfast",
         "All meals on the houseboat",
         "Private cab for sightseeing & transfers",
         "Driver allowance, toll taxes & parking"
      ],

      exclusions: [
         "Airfare/train fare",
         "Monument entry fees",
         "Boating charges (except houseboat stay)",
         "Personal expenses",
         "Tips & gratuities",
         "Anything not mentioned under 'Inclusions'"
      ]
   },

   // Goa - 3 packages
   {
      id: 25,
      destination: "goa",
      thumb: listing_imggoa,
      tag: "Beach",
      time: "3 Nights / 4 Days",
      title: "Goa Package For Friends",
      location: "North Goa & South Goa",
      price: "Startng From ₹12,999",
      review: 4.7,
      total_review: "(112 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Goa",
            description: "Arrive at Goa Airport/Railway Station and transfer to your hotel. After check-in, spend the day at leisure exploring nearby beaches, cafés, and local markets. Enjoy the vibrant nightlife or relax by the beach. Overnight stay in Goa."
         },
         {
            day: "Day 2",
            title: "North & South Goa Sightseeing",
            description: "After breakfast, enjoy a full-day sightseeing tour covering Panjim City, Miramar Beach, Dona Paula View Point, Basilica of Bom Jesus, Se Cathedral, and local markets. In the evening, enjoy a scenic Mandovi River Cruise with music and cultural performances. Overnight stay in Goa."
         },
         {
            day: "Day 3",
            title: "Dudhsagar Waterfalls & Spice Plantation Tour",
            description: "After breakfast, head towards the magnificent Dudhsagar Waterfalls by jeep safari. Witness one of India's tallest waterfalls surrounded by lush forests. Later, visit a traditional spice plantation, learn about aromatic spices, and enjoy an authentic Goan lunch before returning to the hotel. Overnight stay in Goa."
         },
         {
            day: "Day 4",
            title: "Departure",
            description: "After breakfast, check out from the hotel and transfer to Goa Airport or Railway Station for your onward journey with unforgettable memories of your beach vacation."
         }
      ],

      inclusions: [
         "3 Nights hotel accommodation",
         "Daily breakfast",
         "Private transfers & sightseeing",
         "Mandovi River Cruise",
         "Driver allowance, toll taxes & parking"
      ],

      exclusions: [
         "Airfare/train fare",
         "Entry tickets",
         "Dudhsagar jeep safari charges",
         "Water sports activities",
         "Personal expenses",
         "Tips & gratuities",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 39,
      destination: "goa",
      thumb: imggoa,
      time: "5 Nights / 6 Days",
      title: "Goa Package For Couple",
      location: "North Goa & South Goa",
      price: "Starting From ₹18,499",
      review: 4.8,
      total_review: "(78 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Goa",
            description: "Arrive at Goa Airport or Railway Station and transfer to your hotel. Complete the check-in formalities and spend the rest of the day at leisure. Relax on the nearby beaches, enjoy local cafés, or explore the vibrant markets. Overnight stay in Goa."
         },
         {
            day: "Day 2",
            title: "South Goa Sightseeing",
            description: "After breakfast, enjoy a full-day South Goa sightseeing tour. Visit the Basilica of Bom Jesus, Se Cathedral, Dona Paula View Point, Miramar Beach, and Panjim City. In the evening, enjoy a lively Mandovi River Cruise with music and cultural performances before returning to the hotel. Overnight stay in Goa."
         },
         {
            day: "Day 3",
            title: "North Goa Sightseeing",
            description: "Explore the famous attractions of North Goa including Fort Aguada, Sinquerim Beach, Calangute Beach, Baga Beach, Anjuna Beach, and Vagator Beach. Spend the evening enjoying Goa's nightlife or beach cafés. Overnight stay in Goa."
         },
         {
            day: "Day 4",
            title: "Water Sports & Leisure",
            description: "After breakfast, head to Candolim Beach or Calangute Beach to enjoy exciting water sports like Jet Ski, Parasailing, Banana Boat Ride, Speed Boat Ride, and Bumper Ride (optional). Spend the rest of the day shopping or relaxing by the beach. Overnight stay in Goa."
         },
         {
            day: "Day 5",
            title: "Dudhsagar Waterfalls & Spice Plantation",
            description: "Visit the spectacular Dudhsagar Waterfalls by jeep safari. Later, explore a traditional spice plantation, learn about Goan spices, and enjoy an authentic local lunch before returning to the hotel. Overnight stay in Goa."
         },
         {
            day: "Day 6",
            title: "Departure",
            description: "After breakfast, check out from the hotel and transfer to Goa Airport or Railway Station for your onward journey with unforgettable memories of your Goa vacation."
         }
      ],

      inclusions: [
         "5 Nights hotel accommodation",
         "Daily breakfast",
         "Private cab for transfers & sightseeing",
         "Mandovi River Cruise",
         "Driver allowance, toll taxes & parking"
      ],

      exclusions: [
         "Airfare/train fare",
         "Entry tickets",
         "Water sports charges",
         "Dudhsagar jeep safari charges",
         "Personal expenses",
         "Tips & gratuities",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 40,
      destination: "goa",
      thumb: imgBackpacking,
      tag: "Adventure",
      time: "5 Nights / 6 Days",
      title: "Goa Holiday Package",
      location: "North Goa & South Goa",
      price: "Starting From ₹9,999",
      review: 4.7,
      total_review: "(45 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Goa | Let the Fun Begin!",
            description: "Arrive in Goa and meet our representative for a smooth transfer to your hotel. Complete the check-in formalities and relax after your journey. Spend the rest of the day exploring nearby beaches, local markets, or simply unwind at the resort. Enjoy your first evening soaking in Goa's vibrant atmosphere. Overnight stay in Goa."
         },
         {
            day: "Day 2",
            title: "North Goa Sightseeing Tour",
            description: "After breakfast, head out to discover the best of North Goa. Visit Fort Aguada, Sinquerim Beach, Candolim Beach, Calangute Beach, Baga Beach, Tito's Lane, Anjuna Beach, and Vagator Beach. Enjoy stunning coastal views, beachside cafés, and Goa's famous nightlife. Overnight stay in Goa."
         },
         {
            day: "Day 3",
            title: "Water Sports Adventure",
            description: "After breakfast, head to Calangute Beach for an exciting day of adventure. Enjoy thrilling activities like Jet Ski, Parasailing, Banana Boat Ride, Bumper Ride, and Speed Boat Ride (subject to weather and package inclusions). Spend the evening relaxing at beach shacks or shopping at nearby markets. Overnight stay in Goa."
         },
         {
            day: "Day 4",
            title: "Dudhsagar Waterfall Excursion",
            description: "Visit the spectacular Dudhsagar Waterfalls. Travel through Mollem Wildlife Sanctuary by jeep safari and admire one of India's tallest waterfalls. Later, explore a traditional spice plantation and learn about Goa's rich spice heritage. Overnight stay in Goa."
         },
         {
            day: "Day 5",
            title: "Butterfly Beach Excursion",
            description: "After breakfast, visit the beautiful Butterfly Beach, one of Goa's hidden gems. Reach via boat from Palolem Beach or by trekking through the scenic forest trail. Relax on the pristine beach, enjoy swimming, kayaking, and snorkeling (optional), then return to the hotel. Overnight stay in Goa."
         },
         {
            day: "Day 6",
            title: "Departure",
            description: "Enjoy your final breakfast in Goa before checking out from the hotel. Transfer to Goa Airport or Railway Station for your onward journey with unforgettable memories of beaches, adventure, and relaxation."
         }
      ],

      inclusions: [
         "5 Nights hotel accommodation",
         "Daily breakfast",
         "Airport/Railway Station transfers",
         "North Goa sightseeing tour",
         "Dudhsagar Waterfall excursion",
         "Water sports (as per package)",
         "Private/shared transportation",
         "Driver allowance, toll taxes & parking"
      ],

      exclusions: [
         "Airfare or train tickets",
         "Lunch and dinner",
         "Entry tickets",
         "Jeep safari charges (if not included)",
         "Personal expenses",
         "Optional adventure activities",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 42,
      destination: "goa",
      thumb: imgFamily,
      tag: "Adventure",
      time: "5 Nights / 6 Days",
      title: "Family Holiday Package",
      location: "North Goa & South Goa",
      price: "Starting From ₹15,999",
      review: 4.7,
      total_review: "(45 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Goa | Let the Fun Begin!",
            description:
               "Arrive in Goa and meet our representative for a smooth transfer to your hotel. Complete the check-in formalities and relax after your journey. Spend the rest of the day exploring nearby beaches, local markets, or simply unwind at the resort. Enjoy your first evening soaking in Goa's vibrant atmosphere. Overnight stay in Goa."
         },
         {
            day: "Day 2",
            title: "North Goa Sightseeing Tour",
            description:
               "After breakfast, head out to discover the best of North Goa. Visit Fort Aguada, Sinquerim Beach, Candolim Beach, Calangute Beach, Baga Beach, Tito's Lane, Anjuna Beach, and Vagator Beach. Enjoy stunning coastal views, beachside cafés, and Goa's famous nightlife. Overnight stay in Goa."
         },
         {
            day: "Day 3",
            title: "Water Sports Adventure",
            description:
               "After breakfast, head to Calangute Beach for an exciting day of adventure. Enjoy thrilling activities like Jet Ski, Parasailing, Banana Boat Ride, Bumper Ride, and Speed Boat Ride (subject to weather and package inclusions). Spend the evening relaxing at beach shacks or shopping at nearby markets. Overnight stay in Goa."
         },
         {
            day: "Day 4",
            title: "Dudhsagar Waterfall Excursion",
            description:
               "Visit the spectacular Dudhsagar Waterfalls. Travel through Mollem Wildlife Sanctuary by jeep safari and admire one of India's tallest waterfalls. Later, explore a traditional spice plantation and learn about Goa's rich spice heritage. Overnight stay in Goa."
         },
         {
            day: "Day 5",
            title: "Butterfly Beach Excursion",
            description:
               "After breakfast, visit the beautiful Butterfly Beach, one of Goa's hidden gems. Reach via boat from Palolem Beach or by trekking through the scenic forest trail. Relax on the pristine beach, enjoy swimming, kayaking, and snorkeling (optional), then return to the hotel. Overnight stay in Goa."
         },
         {
            day: "Day 6",
            title: "Departure",
            description:
               "Enjoy your final breakfast in Goa before checking out from the hotel. Transfer to Goa Airport or Railway Station for your onward journey with unforgettable memories of beaches, adventure, and relaxation."
         }
      ],

      inclusions: [
         "5 Nights hotel accommodation",
         "Daily breakfast",
         "Airport/Railway Station transfers",
         "North Goa sightseeing tour",
         "Dudhsagar Waterfall excursion",
         "Water sports (as per package)",
         "Private/shared transportation",
         "Driver allowance, toll taxes & parking"
      ],

      exclusions: [
         "Airfare or train tickets",
         "Lunch and dinner",
         "Entry tickets",
         "Jeep safari charges (if not included)",
         "Personal expenses",
         "Optional adventure activities",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
];

export default destination_data;
