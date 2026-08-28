import { StaticImageData } from "next/image";
import listing_img1 from "@/assets/img/listing/listing-3/chandertaaalnew.jpeg"
import listing3_img1 from "@/assets/img/listing/spt.jpg"
import listing3_img7 from "@/assets/img/listing/rajasthan-camel.jpg"
import listing5_img1 from "@/assets/img/listing/listing-3/lehimage.jpg"
import listing5_img4 from "@/assets/img/listing/listing-3/uk.jpg"
import listing5_img8 from "@/assets/img/listing/listing-3/MajesticMunnar.jpeg"
import listing_imggoa from "@/assets/img/listing/listing-3/goa.jpg"
import imgkullunew from "@/assets/img/listing/listing-3/jibhi-tirthan.jpeg"
import imhgheavhm from "@/assets/img/listing/listing-3/Shimla-During-Monsoon.jpg"
import imgdharamshala from "@/assets/img/listing/listing-3/dharmashanreimage.jpeg"
import imghimchal from "@/assets/img/listing/listing-3/sptvalley.jpg"
import imgtvalley from "@/assets/img/listing/listing-3/Jibhi-TirthanValley-Tour-Package.jpeg"
import imgbike from "@/assets/img/listing/listing-3/Chandigarh-To-Spiti-Bike-Expedition.jpeg"
import imgknrroad from "@/assets/img/listing/listing-3/knrroad.jpg"
import imgPangong from "@/assets/img/listing/listing-3/Grand-Ladakh-Expedition.jpeg"
import imgSrinagar from "@/assets/img/listing/listing-3/srngr.jpg"
import imgEscape from "@/assets/img/listing/listing-3/Kashmir.jpg"
import imguk from "@/assets/img/listing/listing-3/escapetouttarakhand.jpeg"
import imgHaridwar from "@/assets/img/listing/listing-3/hd.jpg"
import imgDeserts from "@/assets/img/listing/listing-3/laxmi.jpg"
import imgUdaipur from "@/assets/img/listing/listing-3/Udaipur.jpg"
import imgKerala from "@/assets/img/listing/listing-3/keralaimage.jpg"
import imgMunnar from "@/assets/img/listing/listing-3/KeralaBliss.jpeg"
import imggoa from "@/assets/img/listing/listing-3/goaaroup.jpg"
import imgBackpacking from "@/assets/img/listing/listing-3/Goanre.jpg"
import imgshimlahoneymoon from "@/assets/img/listing/listing-3/honeymoon.jpeg"
import imgbirbilling from "@/assets/img/listing/listing-3/birbillingnew.jpeg"
import imgDalhousie from "@/assets/img/listing/listing-3/shimlaimage.jpg"
import imgspitibike from "@/assets/img/listing/listing-3/bikespiti.jpg"
import imgsmmnl from "@/assets/img/listing/listing-3/Shimla-Manali-Tour-Package.jpg"
import imgdhrmdalhousie from "@/assets/img/listing/listing-3/Dharamshala-Dalhousie-Honeymoon-Tour.jpeg"
import imgsppptvalley from "@/assets/img/listing/listing-3/sptneww.jpg"
import imgkarsog from "@/assets/img/listing/listing-3/karsongimagenew.jpeg"
import imgImla from "@/assets/img/listing/listing-3/vimlaaneww.jpeg"
import imgShikariMata from "@/assets/img/listing/listing-3/shikarimata.jpg"
import imgvashnodevi1 from "@/assets/img/listing/listing-3/newvashnodeviimage.jpg"
import imgMajestic from "@/assets/img/listing/listing-3/mkashmir.jpg"
import imgVaishnonew from "@/assets/img/listing/listing-3/vashnodeviimage.jpg"
import imgFamily from "@/assets/img/listing/listing-3/goanew.jpg"
import imgBackwater from "@/assets/img/listing/listing-3/The-Magical-Backwaters-of-Kerala.jpg"
import imgRediscover from "@/assets/img/listing/listing-3/rediscover.jpg"
import imgKanyakumari from "@/assets/img/listing/listing-3/Kanyakumari.jpg"
import imgLadakh from "@/assets/img/listing/listing-3/ladakhnewimage.jpg"

/////Internatinal Destination Images///////
import imgDubai from "@/assets/img/listing/listing-3/dubaihero.webp"
import imgDubai2 from "@/assets/img/listing/listing-3/traffic-street-dubai.webp"
import imgDubai3 from "@/assets/img/listing/listing-3/dubai3.webp"
import imgDubai4 from "@/assets/img/listing/listing-3/dubainew.webp"
import imgMaldives from "@/assets/img/listing/listing-3/Holidays-in-Maldives.webp"
import imgHongkong from "@/assets/img/listing/listing-3/hnkg.webp"
import imgmauritius from "@/assets/img/listing/listing-3/mauritius-pictures.webp"
import imgMalaysia from "@/assets/img/listing/listing-3/Mauritius.webp"
import imgMalaysia2 from "@/assets/img/listing/listing-3/ml2.webp"
import imgvietnam from "@/assets/img/listing/listing-3/vtnm.webp"
import imghanoi from "@/assets/img/listing/listing-3/hanoi.webp"
import imghanlog from "@/assets/img/listing/listing-3/halong.webp"
import imgthailand from "@/assets/img/listing/listing-3/thailandhero.jpg"
import imgsingapore from "@/assets/img/listing/listing-3/singapore.webp"
import imgsingapore2 from "@/assets/img/listing/listing-3/sp2.webp"
import imgsingapore3 from "@/assets/img/listing/listing-3/merlion-statue.webp"
import imgbali from "@/assets/img/listing/listing-3/MountBaturSunriseTrekking.webp"
import imgeurope from "@/assets/img/listing/listing-3/epnew.webp"

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
   {
      id: 1,
      destination: "himachal",
      thumb: listing_img1,
      tag: "Popular",
      time: "7 Nights / 8 Days",
      title: "Manali Chandratal Kaza Safari",
      location: "Shimla & Manali, Himachal Pradesh",
      price: "Startng From ₹32,199/Adult",
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
      price: "Startng From ₹5,799/Adult",
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
      price: "Startng From ₹21,499/Adult",
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
      price: "Startng From ₹9,999/Adult",
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
      price: "Startng From ₹26,699/Adult",
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
      price: "Startng From ₹7,799/Adult",
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
      price: "Startng From ₹27,199/Adult",
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
      price: "Startng From ₹13,499/Adult",
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
      price: "Startng From ₹16,799/Adult",
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
      price: "Startng From ₹34,699/Adult",
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
      price: "Startng From ₹18,799/Adult",
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
      price: "Startng From ₹34,199/Adult",
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
      price: "Startng From ₹16,199/Adult",
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
      price: "Startng From ₹14,999/Adult",
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
      price: "Startng From ₹9,999/Adult",
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
      thumb: imgShikariMata,
      tag: "Popular",
      time: "2 Nights / 3 Days",
      title: "Shikari Mata & Kamrunag Temple Tour Package From Mandi ",
      location: "Shikari Mata Temple, Janjehli Valley, Mandi, Himachal Pradesh",
      price: "Starting From ₹8,999/Adult",
      review: 4.8,
      total_review: "(28 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Mandi to Janjehli",
            description:
               "Arrive in Mandi and drive to the beautiful Janjehli Valley. Check in to your hotel and spend the evening exploring the peaceful surroundings, local markets, and scenic mountain views."
         },
         {
            day: "Day 2",
            title: "Shikari Mata Temple दर्शन & Sightseeing",
            description:
               "After breakfast, drive to the base point and enjoy a short trek or local transport to the famous Shikari Mata Temple. Seek blessings at the temple, admire the panoramic Himalayan views, and visit nearby meadows and forests before returning to Janjehli."
         },
         {
            day: "Day 3",
            title: "Janjehli to Mandi",
            description:
               "After breakfast, check out from the hotel and drive back to Mandi with wonderful memories of your spiritual and nature-filled journey."
         }
      ],

      inclusions: [
         "2 Nights accommodation",
         "Daily Breakfast & Dinner",
         "Private vehicle for sightseeing",
         "Visit to Shikari Mata Temple",
         "All sightseeing as per itinerary",
         "Driver allowance, toll tax & parking"
      ],

      exclusions: [
         "Personal expenses",
         "Lunch",
         "Temple donations",
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
      time: "9 Nights / 10 Days",
      title: "Best of Spiti Valley Tour Package",
      location: "Spiti Valley, Himachal Pradesh",
      price: "Startng From ₹23,999/ Adult",
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
      time: "8 Nights / 9 Days",
      title: "Chandigarh To Spiti Bike Expedition",
      location: "Spiti Valley, Himachal Pradesh",
      price: "Startng From ₹25,799/ Adult",
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
      time: "11 Nights / 12 Days",
      title: "Kinnaur Spiti Road Trip",
      location: "Kinnaur & Spiti Valley, Himachal Pradesh",
      price: "Startng From ₹22,500/ Adult",
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
      price: "Startng From ₹ 5,899/Person Twin Sharing",
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
      price: "Startng From ₹35,999/Person Twin Sharing",
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
      price: "Startng From ₹ 19,299/Person Twin Sharing",
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
      thumb: imgLadakh,
      tag: "Bestseller",
      time: "6 Nights / 7 Days",
      title: "Rediscover Ladakh",
      location: "Leh, Nubra Valley & Pangong Lake",
      price: "Startng From ₹22,599/Person Twin Sharing",
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
      price: "Starting From ₹5,899/Person Twin Sharing",
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
      price: "Starting From ₹17,899/Person Twin Sharing",
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
      price: "Starting From ₹9,999/Person Twin Sharing",
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
      id: 50,
      destination: "kashmir",
      thumb: imgVaishnonew,
      tag: "Spiritual",
      time: "7 Nights / 8 Days",
      title: "Vaishno Devi & Enchanting Kashmir Tour",
      location: "Jammu, Katra, Srinagar, Gulmarg, Pahalgam & Sonmarg",
      price: "Starting From ₹19,999/Person Twin Sharing",
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
      time: "4 Night / 5 Days",
      title: "Kedarnath Group Tour from Haridwar with Rishikesh Stay",
      location: "Haridwar, Kedarnath & Rishikesh, Uttarakhand",
      price: "Startng From ₹20,500 / Adult",
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
      time: "5 Night / 6 Days ",
      title: "Escape to Uttarakhand | From Sacred Streams to Alpine Dreams",
      location: "Haridwar, Rishikesh & Auli, Uttarakhand",
      price: "Startng From  ₹18,599/ Adult",
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
      time: "6 Night / 7 Days",
      title: "Dehradun, Haridwar, Rishikesh & Mussoorie Winter Special",
      location: "Dehradun, Haridwar, Rishikesh & Mussoorie, Uttarakhand",
      price: "Startng From ₹22,999/ Adult",
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
      time: "6 Nights / 7 Days",
      title: "Vacation In Rajasthan",
      location: "Jaipur, Udaipur, Jodhpur & Jaisalmer, Rajasthan",
      price: "Startng From ₹19,500 / Adult",
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
      time: "6 Nights / 7 Days",
      title: "Deserts Of Rajasthan With Bikaner",
      location: "Jaipur, Bikaner, Jaisalmer & Jodhpur, Rajasthan",
      price: "Startng From  ₹16,500 / Adult",
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
      time: "7 Nights / 8 Days",
      title: "Udaipur Mount Abu Tour",
      location: "Udaipur & Mount Abu, Rajasthan",
      price: "Startng From  ₹21,499 / Adult",
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
      price: "Starting From ₹10,099/Person",
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
      price: "Starting From ₹19,599/Person With Twin Sharing",
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
      price: "Starting From ₹12,599/Person",
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
      price: "Starting From ₹23,499/Person With Twin Sharing",
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
      price: "Starting From ₹19,299/Person With Twin Sharing",
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
      price: "Starting From ₹33,499/Person With Twin Sharing",
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
      price: "Startng From ₹12,999/Adult",
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
      price: "Starting From ₹18,499/Adult",
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
      price: "Starting From ₹9,999/Adult",
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
      price: "Starting From ₹15,999/Adult",
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
   ///////Inernational tours////////////
   {
      id: 46,
      destination: "dubai",
      thumb: imgDubai,
      tag: "Adventure",
      time: "4 Nights / 5 Days",
      title: "Dubai Highlights Tour",
      location: "Dubai, UAE",
      price: "28000/- per person X 2 Adults",
      review: 4.8,
      total_review: "(32 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival into Dubai - Check-in - Evening Dhow Cruise ",
            description:
               "You will be met by our representative at the Airport Arrival Terminal. Our representative will be holding a signage card with your Name written on it. You will then be escorted to waiting vehicle for transfer to hotel. Dubai Creek is an integral part of the city's history. It divides the city into two sections, Bur Dubai and Deira. Both the sides of the Dubai Creek boasts of some of the best exquisite buildings of the city. Therefore, a trip to the Creek is a must. However, rather than walking on the coast, go on a dhow cruise to turn your sightseeing into a unique experience.The dhow is a traditional Bedouin boat that was used for trade and transportation. Today, these dhows have been converted into restaurants that have a lower (airconditioned) and upper (open-air) decks. You are offered a welcome drink on arrival and are also served delicious barbecued dishes once the dhow sets on sail. "
         },
         {
            day: "Day 2",
            title: "Desert Safari ",
            description:
               "The Evening Desert Safari is a must-do for any adventure seekers visiting Dubai. Convenient round trip transportation will pick you up from your hotel and take you out to explore the Arabian desert. Test your balancing skills in an exhilarating sand boarding experience or try out the other many fun activities available for you to do including camel riding, dune bashing and henna painting. Take time to look around and take pictures, this tour is a great opportunity to capture breathtaking views of the desert during sunset. End the night with belly dancing show under the stars while indulging in a delicious BBQ dinner with unlimited soft drinks and shisha smoking (at extra cost). "
         },
         {
            day: "Day 3",
            title: "Morning Half Day City Tour ",
            description:
               "Embark on a 4-hour Dubai Half-Day City Tour that seamlessly blends the city's historic charm with its modern marvels. Begin by exploring heritage-rich neighborhoods such as Deira and Bur Dubai, where you'll pass by the Gold Souk, Spice Souk, Al Ghubaiba Historical and Heritage Site, Meena Bazaar, Al Fahidi Neighborhood, and Al Seef, offering a glimpse into Dubai's trading past and cultural heritage. Pause for a 15-minute photo opportunity at the Dubai Frame, a cultural landmark symbolizing the connection between the city's rich past and its ambitious future. Drive along Sheikh Zayed Road, flanked by towering skyscrapers and iconic structures, including the World Trade Centre. Take a 15-minute break to admire and photograph the Museum of the Future, an architectural and engineering marvel showcasing innovative design. Pass by the world's tallest building, the Burj Khalifa, and the scenic Dubai Water Canal, capturing the essence of modern Dubai. Observe the opulence of luxury car showrooms featuring brands like Ferrari and Lamborghini. Enjoy a 15-minute photo session at the Burj Al Arab, renowned as one of the world's most luxurious hotels. Drive through the man-made island of Palm Jumeirah and pass by the luxurious Atlantis The Palm resort, epitomizing Dubai's architectural innovation. Conclude with a 15-minute stop at The Cresent, Palm Jumeirah, an extraordinary seafront showcasing the city's modernity and waterfront development. On the way back, pass by the Mall of the Emirates, home to Ski Dubai, and admire the world-famous skyline along Sheikh Zayed Road. Please note that photo stops are subject to time availability and government authority permissions. This tour is designed to provide a snapshot of Dubai's key highlights, offering a balanced perspective of its historical roots and contemporary achievements"
         },
         {
            day: "Day 4",
            title: "Burj Khalifa ",
            description:
               "Transfer to Dubai Mall, one of the largest malls in the world and home to over 1200 stores. Later proceed to the Top of Burj Khalifa, World's Tallest Tower. Burj Khalifa visit begins in the reception area on the lower ground level of The Dubai Mall. Here and throughout your journey, you will be entertained and informed by a multi-media presentation that chronicles Dubai's exotic history and the fascinating story of Burj Khalifa. Begin your vertical ascent to the observation deck in a high-speed elevator, travelling at 10 metres per second. As the doors open on the 124th Floor, floor-to-ceiling glass walls provide a breathtaking unobstructed 360-degree view of the city, desert & ocean. Spend half an hour at the top and then come down, and at 7 pm watch the Dubai Fountains come alive. There is a 10 minute show every 20 minutes and its lovely to watch the largest fountain in the world. "
         },
         {
            day: "Day 5",
            title: "Departure from Dubai ",
            description:
               "You will be picked up from Hotel's lobby at the time confirmed. Please be available at the lobby 15 minutes before the time given and you will be transferred to the airport for your flight. "
         },
      ],

      inclusions: [
         "4 nights in Dubai ",
         "Stay at Admiral Plaza Hotel (3 star)  ",
         ".Room Included - Superior Room, Superior Room, ",
         ".Half Board  ",
         "One-way Transfer from Airport to Dubai Hotel - Private from Dubai International Airport ",
         "Dhow Cruise with Dinner - Creek Cruise - 3 Star Experience with Two Way Private Transfers (Tickets Included) ",
         "Desert Safari with Dune Bashing, Belly Dancing and Barbeque Dinner - Ticket With Private Transfers - Exclusive 4x4 Vehicle with Deluxe Camp ",
         "Half Day Dubai City Tour - Private Vehicle ",
         "Top of Burj Khalifa - Non Prime Hours Ticket With Two Way Private Transfers - 124th Floor (Between 7 am - 12:30 PM or 7.30 PM- 11 pm slot) ",
         "One-way Transfer from Dubai Hotel to Airport - Private to Dubai International Airport ",

      ],

      exclusions: [
         "Airfare , ",
         "Gst (05%) , ",
         "Visa , ",
         "Tcs (02%) , ",
         "Lunch , ",
         "Personal expenses such as shopping, Phone call, Laundry Etc. ",
      ]
   },
   {
      id: 64,
      destination: "dubai",
      thumb: imgDubai2,
      tag: "Adventure",
      time: "5 Nights / 6 Days",
      title: "Dubai Grand Highlights & Adventure Tour",
      location: "Dubai, UAE",
      price: "₹32500/- Per Person X 2 Adults",
      review: 4.8,
      total_review: "(32 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival into Dubai - Check-in ",
            description:
               "You will be met by our representative at the Airport Arrival Terminal. Our representative will be holding a signage card with your Name written on it. You will then be escorted to waiting vehicle for transfer to hotel. "
         },
         {
            day: "Day 2",
            title: " Morning Half Day City Tour - Evening Dhow Cruise ",
            description:
               "Embark on a 4-hour Dubai Half-Day City Tour that seamlessly blends the city's historic charm with its modern marvels. Begin by exploring heritage-rich neighborhoods such as Deira and Bur Dubai, where you'll pass by the Gold Souk, Spice Souk, Al Ghubaiba Historical and Heritage Site, Meena Bazaar, Al Fahidi Neighborhood, and Al Seef, offering a glimpse into Dubai's trading past and cultural heritage. Pause for a 15-minute photo opportunity at the Dubai Frame, a cultural landmark symbolizing the connection between the city's rich past and its ambitious future. Drive along Sheikh Zayed Road, flanked by towering skyscrapers and iconic structures, including the World Trade Centre. Take a 15-minute break to admire and photograph the Museum of the Future, an architectural and engineering marvel showcasing innovative design. Pass by the world's tallest building, the Burj Khalifa, and the scenic Dubai Water Canal, capturing the essence of modern Dubai. Observe the opulence of luxury car showrooms featuring brands like Ferrari and Lamborghini. Enjoy a 15-minute photo session at the Burj Al Arab, renowned as one of the world's most luxurious hotels. Drive through the man-made island of Palm Jumeirah and pass by the luxurious Atlantis The Palm resort, epitomizing Dubai's architectural innovation. Conclude with a 15-minute stop at The Cresent, Palm Jumeirah, an extraordinary seafront showcasing the city's modernity and waterfront development. On the way back, pass by the Mall of the Emirates, home to Ski Dubai, and admire the world-famous skyline along Sheikh Zayed Road. Please note that photo stops are subject to time availability and government authority permissions. This tour is designed to provide a snapshot of Dubai's key highlights, offering a balanced perspective of its historical roots and contemporary achievements. Dubai Creek is an integral part of the city's history. It divides the city into two sections, Bur Dubai and Deira. Both the sides of the Dubai Creek boasts of some of the best exquisite buildings of the city. Therefore, a trip to the Creek is a must. However, rather than walking on the coast, go on a dhow cruise to turn your sightseeing into a unique experience.The dhow is a traditional Bedouin boat that was used for trade and transportation. Today, these dhows have been converted into restaurants that have a lower (airconditioned) and upper (open-air) decks. You are offered a welcome drink on arrival and are also served delicious barbecued dishes once the dhow sets on sail. "
         },
         {
            day: "Day 3",
            title: "Desert Safari",
            description:
               "The Evening Desert Safari is a must-do for any adventure seekers visiting Dubai. Convenient round trip transportation will pick you up from your hotel and take you out to explore the Arabian desert. Test your balancing skills in an exhilarating sand boarding experience or try out the other many fun activities available for you to do including camel riding, dune bashing and henna painting. Take time to look around and take pictures, this tour is a great opportunity to capture breathtaking views of the desert during sunset. End the night with belly dancing show under the stars while indulging in a delicious BBQ dinner with unlimited soft drinks and shisha smoking (at extra cost). "
         },
         {
            day: "Day 4",
            title: "Burj Khalifa",
            description:
               "Transfer to Dubai Mall, one of the largest malls in the world and home to over 1200 stores. Later proceed to the Top of Burj Khalifa, World's Tallest Tower. Burj Khalifa visit begins in the reception area on the lower ground level of The Dubai Mall. Here and throughout your journey, you will be entertained and informed by a multi-media presentation that chronicles Dubai's exotic history and the fascinating story of Burj Khalifa. Begin your vertical ascent to the observation deck in a high-speed elevator, travelling at 10 metres per second. As the doors open on the 124th Floor, floor-to-ceiling glass walls provide a breathtaking unobstructed 360-degree view of the city, desert & ocean. Spend half an hour at the top and then come down, and at 7 pm watch the Dubai Fountains come alive. There is a 10 minute show every 20 minutes and its lovely to watch the largest fountain in the world.  "
         },
         {
            day: "Day 5",
            title: "Butterfly Garden",
            description:
               "Proceed for a visit to Dubai Butterfly Garden claimed to be the “World’s Largest Covered Butterfly Garden” consists of ten custom built domes around 6,673 sq.m. Each dome is filled with thousands of beautifully winged creatures, featuring 15,000 butterflies of around over 50 varieties of butterfly in different sizes and colors flying around the visitors. Dubai Butterfly Garden gives you the opportunity to see how butterflies evolve through each stage. "
         },
         {
            day: "Day 6",
            title: "Departure from Dubai ",
            description:
               "You will be picked up from Hotel's lobby at the time confirmed. Please be available at the lobby 15 minutes before the time given and you will be transferred to the airport for your flight. "
         },
      ],

      inclusions: [
         "Dubai ",
         "5 nights in Dubai ",
         "Stay at Citymax Bur Dubai (3 star) ",
         "Bed and Breakfast ",
         "One-way Transfer from Airport to Dubai Hotel - Private from Dubai International Airport ",
         "Half Day Dubai City Tour - Private Vehicle",
         "Dhow Cruise with Dinner - Creek Cruise - 3 Star Experience with Two Way Private Transfers (Tickets Included) ",
         "Desert Safari with Dune Bashing, Belly Dancing and Barbeque Dinner - Ticket With Private Transfers - Exclusive 4x4 Vehicle with Deluxe Camp",
         "Top of Burj Khalifa - Non Prime Hours Ticket With Two Way Private Transfers - 124th Floor (Between 7 am - 12:30 PM or 7.30 PM- 11 pm slot) ",
         "Butterfly Garden - Tickets Only ",
         "One-way Transfer from Dubai Hotel to Airport - Private to Dubai International Airport ",

      ],

      exclusions: [
         "Airfare , ",
         "Gst (05%) , ",
         "Lunch & Dinner   , ",
         "Personal expenses such as shopping, Phone call, Laundry Etc. ",
      ]
   },
   {
      id: 65,
      destination: "dubai",
      thumb: imgDubai3,
      tag: "Adventure",
      time: "6 Nights / 7 Days",
      title: "Dubai & Abu Dhabi Ultimate Experience",
      location: "Dubai, UAE",
      price: "₹32500/- Per Person X 2 Adults",
      review: 4.8,
      total_review: "(32 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival into Dubai - Check-in - Marina Dhow Cruise  ",
            description:
               "You will be met by our representative at the Airport Arrival Terminal. Our representative will be holding a signage card with your Name written on it. You will then be escorted to waiting vehicle for transfer to hotel. A daily evening two hour cruise along the man made Dubai Marina for sightseeing of luxurious and modern landmarks which have soured Dubai in the shape of sky touching towers for residential and commercial purpose over the past decade. This cruise is also accompanied by complimentary International Buffet dinner from a five star hotel, soft drinks, mineral water & live entertainment - tanoura dance show. The dhows are fully insured, safety fitted and fully air-conditioned for your safety and enjoyment. Ladies and gents washrooms as well as an open air upper deck are also part of the dhow structure. You can not miss these dhows and you find them elegantly gliding the Marina Promenade and into the open sea where the splendid Palm Island floats in front of you. "
         },
         {
            day: "Day 2",
            title: " Burj Khalifa - Morning Half Day City Tour ",
            description:
               "The Burj Khalifa is an iconic structure. Known to be the tallest building in the world, it is one of the most popular spots in Dubai. With this tour, you not only get the opportunity to enter the building but also visit the Observation Deck on the 124th floor and get a 360 degree view of the entire city. The tour begins with a multimedia presentation that gives you a glimpse of the history of Dubai as well as the story of the development of Burj Khalifa. After that, you would be whisked away to the 124th floor in the fastest elevator you have ever been. The Observation Deck is completely covered in glass, making it easier to view the city. You can get a closer look at the other iconic buildings through the viewing telescopes placed everywhere on the floor. For the brave ones, there is also the open-air terrace! At the end of the tour, you also get to visit The Cafe on the ground floor where you would be treated with a beverage of your choice. Embark on a 4-hour Dubai Half-Day City Tour that seamlessly blends the city's historic charm with its modern marvels. Begin by exploring heritage-rich neighborhoods such as Deira and Bur Dubai, where you'll pass by the Gold Souk, Spice Souk, Al Ghubaiba Historical and Heritage Site, Meena Bazaar, Al Fahidi Neighborhood, and Al Seef, offering a glimpse into Dubai's trading past and cultural heritage. Pause for a 15-minute photo opportunity at the Dubai Frame, a cultural landmark symbolizing the connection between the city's rich past and its ambitious future. Drive along Sheikh Zayed Road, flanked by towering skyscrapers and iconic structures, including the World Trade Centre. Take a 15-minute break to admire and photograph the Museum of the Future, an architectural and engineering marvel showcasing innovative design. Pass by the world's tallest building, the Burj Khalifa, and the scenic Dubai Water Canal, capturing the essence of modern Dubai. Observe the opulence of luxury car showrooms featuring brands like Ferrari and Lamborghini. Enjoy a 15-minute photo session at the Burj Al Arab, renowned as one of the world's most luxurious hotels. Drive through the man-made island of Palm Jumeirah and pass by the luxurious Atlantis The Palm resort, epitomizing Dubai's architectural innovation. Conclude with a 15-minute stop at The Cresent, Palm Jumeirah, an extraordinary seafront showcasing the city's modernity and waterfront development. On the way back, pass by the Mall of the Emirates, home to Ski Dubai, and admire the world-famous skyline along Sheikh Zayed Road. Please note that photo stops are subject to time availability and government authority permissions. This tour is designed to provide a snapshot of Dubai's key highlights, offering a balanced perspective of its historical roots and contemporary achievements.  "
         },
         {
            day: "Day 3",
            title: "Desert Safari ",
            description:
               "The Evening Desert Safari is a must-do for any adventure seekers visiting Dubai. Convenient round trip transportation will pick you up from your hotel and take you out to explore the Arabian desert. Test your balancing skills in an exhilarating sand boarding experience or try out the other many fun activities available for you to do including camel riding, dune bashing and henna painting. Take time to look around and take pictures, this tour is a great opportunity to capture breathtaking views of the desert during sunset. End the night with belly dancing show under the stars while indulging in a delicious BBQ dinner with unlimited soft drinks and shisha smoking (at extra cost).  "
         },
         {
            day: "Day 4",
            title: "Abu Dhabi Grand Mosque Visit + Ferrari Theme Park with Transfers ",
            description:
               "Proceed for full day tour of Abu Dhabi with Ferrari Theme Park. We start our Abu Dhbai City tour in the morning and our journey will start from Dubai will take you past the Jebel Ali Port, the largest man-made port in the entire world on the road to Abu Dhabi. On arrival at Abu Dhabi head to the Sheikh Zayed Grand Mosque, to admire the white marble courtyards and prayer rooms of this vast, modern masterpiece. Please ensure proper dress code while visiting. In the afternoon visit Ferrari World. Ferrari World is Situated on the Yas island, FWAD has a surface area of 200,000 square meters, all under cover, which makes it the biggest indoor park in the world. There are over 20 attractions for visitors to enjoy, from the must futuristic such as Formula Rossa, the worlds fastest rollercoaster, which can accelerate its cars from 0 to 240 kmh in the same time as a Formula 1 car, to the four dimensional Speed of Magic. Return back to hotel in the evening.  "
         },
         {
            day: "Day 5",
            title: "Visit to Museum of Future",
            description:
               "The Museum of the future is as unique as it sounds and offers the visitors extraordinary sensory and visual experiences while being educational. The best part about this place is that unlike other museums, you do not have to be cautious about what you touch. On the other hand, this is an interactive museum and the more you touch and engage with the exhibits, the more fun you would have.  "
         },
         {
            day: "Day 6",
            title: "Miracle Garden and Global Village  ",
            description:
               "Get lost in a one-of-a-kind world of wonderment at Dubai Miracle Garden. Located in Al Barsha South, the park is home to the world’s biggest flower garden with over 45 million blooming flowers across 72,000 square metres showcased in a variety of immense sculptures and designs. Feast your eyes on blooming pyramids, stars, igloos, and hearts. Marvel at the record-breaking wall of flowers, or take a stroll under a ceiling of colorful umbrellas. Bursting with vibrant displays, the park feels more like an immersive art exhibit than a tourist attraction. You’ll leave knowing you’ve truly witnessed a miracle: a mega garden in the middle of a desert. Proceed for Global Village in the afternoon. Global Village is the largest seasonal cultural extravaganza in the region that offers visitors an amazing array of festivals, shopping and entertainment in an open-air theme park. This entertainment and shopping destination is open from November through to April and hosts over 70 participating countries presented in over 36 pavilions, with more than 50 fun rides and 26 restaurants offering food from around the world. "
         },
         {
            day: "Day 7",
            title: "Departure from Dubai",
            description:
               "You will be picked up from Hotel's lobby at the time confirmed. Please be available at the lobby 15 minutes before the time given and you will be transferred to the airport for your flight.  "
         },
      ],

      inclusions: [
         "Dubai ",
         "6 nights in Dubai  ",
         "Stay at Grand Excelsior Hotel Bur Dubai (4 star) ",
         "Room Included - Deluxe, Deluxe, Deluxe, ",
         "Bed and Breakfast ",
         "No Extra Bed ",
         "One-way Transfer from Airport to Dubai Hotel - Private from Dubai International Airport",
         "Dhow Cruise with Dinner - Marina Cruise - 3 Star Experience with Private Transfers ",
         "Top of Burj Khalifa - 124th Floor (Non-Prime Hours Ticket)(Between 10:00 AM - 7:00 PM slot) with Cafe Treat and Ticket With Two Way Private Transfers ",
         "Half Day Dubai City Tour - Private Vehicle ",
         "Desert Safari with Dune Bashing, Belly Dancing and Barbeque Dinner - Ticket With Private Transfers - Exclusive 4x4 Vehicle with Deluxe Camp",
         "Abu Dhabi Tour with Ferrari World From Dubai - Private - General Ticket with Grand Mosque Visit And Meal",
         "Visit to Museum of Future - Private Transfers with Entry Ticket (Subject to Availability) ",
         "Miracle Garden and Global Village - Tickets with Three Way Private Transfers  ",
         "One-way Transfer from Dubai Hotel to Airport - Private to Dubai International Airport ",
      ],

      exclusions: [
         "Airfare , ",
         "Visa  , ",
         "Gst (05%) , ",
         "Tcs (02%) , ",
         "Lunch & Dinner   , ",
         "Personal expenses such as shopping, Phone call, Laundry Etc. ",
      ]
   },
   {
      id: 66,
      destination: "dubai",
      thumb: imgDubai4,
      tag: "Adventure",
      time: "6 Nights / 7 Days",
      title: "Dubai & Abu Dhabi Ultimate Adventure & Attractions",
      location: "Dubai, UAE",
      price: "₹32500/- Per Person X 2 Adults",
      review: 4.8,
      total_review: "(32 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival into Dubai - Check-in - Marina Dhow Cruise  ",
            description:
               "You will be met by our representative at the Airport Arrival Terminal. Our representative will be holding a signage card with your Name written on it. You will then be escorted to waiting vehicle for transfer to hotel. A daily evening two hour cruise along the man made Dubai Marina for sightseeing of luxurious and modern landmarks which have soured Dubai in the shape of sky touching towers for residential and commercial purpose over the past decade. This cruise is also accompanied by complimentary International Buffet dinner from a five star hotel, soft drinks, mineral water & live entertainment - tanoura dance show. The dhows are fully insured, safety fitted and fully air-conditioned for your safety and enjoyment. Ladies and gents washrooms as well as an open air upper deck are also part of the dhow structure. You can not miss these dhows and you find them elegantly gliding the Marina Promenade and into the open sea where the splendid Palm Island floats in front of you. "
         },
         {
            day: "Day 2",
            title: " Burj Khalifa - Morning Half Day City Tour ",
            description:
               "The Burj Khalifa is an iconic structure. Known to be the tallest building in the world, it is one of the most popular spots in Dubai. With this tour, you not only get the opportunity to enter the building but also visit the Observation Deck on the 124th floor and get a 360 degree view of the entire city. The tour begins with a multimedia presentation that gives you a glimpse of the history of Dubai as well as the story of the development of Burj Khalifa. After that, you would be whisked away to the 124th floor in the fastest elevator you have ever been. The Observation Deck is completely covered in glass, making it easier to view the city. You can get a closer look at the other iconic buildings through the viewing telescopes placed everywhere on the floor. For the brave ones, there is also the open-air terrace! At the end of the tour, you also get to visit The Cafe on the ground floor where you would be treated with a beverage of your choice. Embark on a 4-hour Dubai Half-Day City Tour that seamlessly blends the city's historic charm with its modern marvels. Begin by exploring heritage-rich neighborhoods such as Deira and Bur Dubai, where you'll pass by the Gold Souk, Spice Souk, Al Ghubaiba Historical and Heritage Site, Meena Bazaar, Al Fahidi Neighborhood, and Al Seef, offering a glimpse into Dubai's trading past and cultural heritage. Pause for a 15-minute photo opportunity at the Dubai Frame, a cultural landmark symbolizing the connection between the city's rich past and its ambitious future. Drive along Sheikh Zayed Road, flanked by towering skyscrapers and iconic structures, including the World Trade Centre. Take a 15-minute break to admire and photograph the Museum of the Future, an architectural and engineering marvel showcasing innovative design. Pass by the world's tallest building, the Burj Khalifa, and the scenic Dubai Water Canal, capturing the essence of modern Dubai. Observe the opulence of luxury car showrooms featuring brands like Ferrari and Lamborghini. Enjoy a 15-minute photo session at the Burj Al Arab, renowned as one of the world's most luxurious hotels. Drive through the man-made island of Palm Jumeirah and pass by the luxurious Atlantis The Palm resort, epitomizing Dubai's architectural innovation. Conclude with a 15-minute stop at The Cresent, Palm Jumeirah, an extraordinary seafront showcasing the city's modernity and waterfront development. On the way back, pass by the Mall of the Emirates, home to Ski Dubai, and admire the world-famous skyline along Sheikh Zayed Road. Please note that photo stops are subject to time availability and government authority permissions. This tour is designed to provide a snapshot of Dubai's key highlights, offering a balanced perspective of its historical roots and contemporary achievements.  "
         },
         {
            day: "Day 3",
            title: "Desert Safari ",
            description:
               "The Evening Desert Safari is a must-do for any adventure seekers visiting Dubai. Convenient round trip transportation will pick you up from your hotel and take you out to explore the Arabian desert. Test your balancing skills in an exhilarating sand boarding experience or try out the other many fun activities available for you to do including camel riding, dune bashing and henna painting. Take time to look around and take pictures, this tour is a great opportunity to capture breathtaking views of the desert during sunset. End the night with belly dancing show under the stars while indulging in a delicious BBQ dinner with unlimited soft drinks and shisha smoking (at extra cost).  "
         },
         {
            day: "Day 4",
            title: "Abu Dhabi Grand Mosque Visit + Ferrari Theme Park with Transfers ",
            description:
               "Proceed for full day tour of Abu Dhabi with Ferrari Theme Park. We start our Abu Dhbai City tour in the morning and our journey will start from Dubai will take you past the Jebel Ali Port, the largest man-made port in the entire world on the road to Abu Dhabi. On arrival at Abu Dhabi head to the Sheikh Zayed Grand Mosque, to admire the white marble courtyards and prayer rooms of this vast, modern masterpiece. Please ensure proper dress code while visiting. In the afternoon visit Ferrari World. Ferrari World is Situated on the Yas island, FWAD has a surface area of 200,000 square meters, all under cover, which makes it the biggest indoor park in the world. There are over 20 attractions for visitors to enjoy, from the must futuristic such as Formula Rossa, the worlds fastest rollercoaster, which can accelerate its cars from 0 to 240 kmh in the same time as a Formula 1 car, to the four dimensional Speed of Magic. Return back to hotel in the evening.  "
         },
         {
            day: "Day 5",
            title: "Visit to Museum of Future",
            description:
               "The Museum of the future is as unique as it sounds and offers the visitors extraordinary sensory and visual experiences while being educational. The best part about this place is that unlike other museums, you do not have to be cautious about what you touch. On the other hand, this is an interactive museum and the more you touch and engage with the exhibits, the more fun you would have.  "
         },
         {
            day: "Day 6",
            title: "Miracle Garden and Global Village  ",
            description:
               "Get lost in a one-of-a-kind world of wonderment at Dubai Miracle Garden. Located in Al Barsha South, the park is home to the world’s biggest flower garden with over 45 million blooming flowers across 72,000 square metres showcased in a variety of immense sculptures and designs. Feast your eyes on blooming pyramids, stars, igloos, and hearts. Marvel at the record-breaking wall of flowers, or take a stroll under a ceiling of colorful umbrellas. Bursting with vibrant displays, the park feels more like an immersive art exhibit than a tourist attraction. You’ll leave knowing you’ve truly witnessed a miracle: a mega garden in the middle of a desert. Proceed for Global Village in the afternoon. Global Village is the largest seasonal cultural extravaganza in the region that offers visitors an amazing array of festivals, shopping and entertainment in an open-air theme park. This entertainment and shopping destination is open from November through to April and hosts over 70 participating countries presented in over 36 pavilions, with more than 50 fun rides and 26 restaurants offering food from around the world. "
         },
         {
            day: "Day 7",
            title: "Departure from Dubai",
            description:
               "You will be picked up from Hotel's lobby at the time confirmed. Please be available at the lobby 15 minutes before the time given and you will be transferred to the airport for your flight.  "
         },
      ],

      inclusions: [
         "Dubai ",
         "6 nights in Dubai ",
         "Stay at Citymax Bur Dubai (3 star) ",
         "Bed and Breakfast ",
         "One-way Transfer from Airport to Dubai Hotel - Private from Dubai International Airport ",
         "Half Day Dubai City Tour - Private Vehicle",
         "Dhow Cruise with Dinner - Creek Cruise - 3 Star Experience with Two Way Private Transfers (Tickets Included) ",
         "Desert Safari with Dune Bashing, Belly Dancing and Barbeque Dinner - Ticket With Private Transfers - Exclusive 4x4 Vehicle with Deluxe Camp",
         "Top of Burj Khalifa - Non Prime Hours Ticket With Two Way Private Transfers - 124th Floor (Between 7 am - 12:30 PM or 7.30 PM- 11 pm slot) ",
         "Butterfly Garden - Tickets Only ",
         "One-way Transfer from Dubai Hotel to Airport - Private to Dubai International Airport ",

      ],

      exclusions: [
         "Airfare , ",
         "Gst (05%) , ",
         "Lunch & Dinner   , ",
         "Personal expenses such as shopping, Phone call, Laundry Etc. ",
      ]
   },
   {
      id: 48,
      destination: "maldives",
      thumb: imgMaldives,
      tag: "Leisure",
      time: "3 Nights / 4 Days",
      title: "Maldives 4 Days & 3 Nights – Tropical Leisure Escape",
      location: "Maldives",
      price: "₹92000/- Per Person X 2 adulTs",
      review: 4.8,
      total_review: "(32 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Maldives",
            description:
               "Welcome to Maldives - Indian Ocean's most sought-after beach escape, an archipelago of 1,190 coral islands south west of Sri Lanka. Upon arrival at Male Airport, get transferred to your hotel/resort by speedboat or seaplane (if included as part of the inclusions). "
         },
         {
            day: "Day 2",
            title: "Day at Leisure",
            description:
               "After an appetizing breakfast, you are free to relax on the beach or try some water activities like snorkelling, scuba diving, windsurfing, canoeing etc (at extra price).   "
         },
         {
            day: "Day 3",
            title: "..",
            description:
               ".. "
         },
         {
            day: "Day 4",
            title: "Departure from Maldives ",
            description:
               "Enjoy a hearty breakfast and check-out from the hotel/resort as you embark on your journey back home. You will be transferred (if transfers are included as part of the inclusions) to Male International Airport to catch your flight back home. "
         },
      ],

      inclusions: [
         "3 nights in Maldives ",
         "3 nights in Maldives ",
         ".All Inclusive  ",
      ],

      exclusions: [
         "Airfare , ",
         "Gst (05%) , ",
         "Tcs (02%)  , ",
         "Tcs (02%)  ",
      ]
   },
   {
      id: 52,
      destination: "hong-kong",
      thumb: imgHongkong,
      tag: "Leisure",
      time: "6 Nights / 7 Days",
      title: "Hong Kong 7 Days & 6 Nights – City & Leisure Escape",
      location: "Hong Kong",
      price: "₹79,000/- per person X 9 Adults / ₹21,500/- per child X 3",
      review: 4.8,
      total_review: "(32 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival at Hong Kong ",
            description:
               "Upon arrival at Hong Kong, you will be met and transferred to your hotel. Reach the hotel and check-in.  "
         },
         {
            day: "Day 2",
            title: "Day Trip to Macau from Hong Kong ",
            description:
               "Day trip to Macau from Hong Kong by catamaran or jetfoil. Explore evocative UNESCO World Heritage Sites like the Ruins of St Paul and the A-Ma Temple Drive along the Guia Circuit where the Macau Grand Prix is held. See modern developments like the Macau Tower, the 11th highest tower in the world. Visit Macau Casino and try your hand at a card table. Enjoy a delectable lunch in a local Macau restaurant Hotel pickup and drop-off included "
         },
         {
            day: "Day 3",
            title: "Hong Kong City Tour ",
            description:
               "Your Hong Kong experience starts with iconic Peak Tram to Victoria Peak for excellent views of the city. Discover Hong Kong from an elevated perspective at the Peak. Then cruise along the harbour on the famous Star Ferry. Stroll along the Avenue of Stars to admire the Victoria Harbour & Hong Kong Famous sky scrappers & Old Clock Tower. Lastly visit the world's second tallest building ( ICC ) "
         },
         {
            day: "Day 4",
            title: "Full Day Disneyland ",
            description:
               "Make the most of your Hong Kong Disneyland adventure with this package that includes admission. Experience the magic of characters coming to life with your full-day pass to all of the theme lands. Visit four amazing lands: Fantasyland, Adventureland, Tomorrowland and Toystoryland. Enjoy shops, eateries and entertainment on Main Street, USA "
         },
         {
            day: "Day 5",
            title: "Full Day Ocean Park Tour - Tickets Only ",
            description:
               "The Ocean Park Tour Ticket provides one-day access to all attractions and experiences at Ocean Park Hong Kong. "
         },
         {
            day: "Day 6",
            title: "Day Free for Shopping",
            description:
               "Today after breakfast you can proceed for some shopping in Hong Kong. The best places to find global designer brands and luxury stores are in malls, such as the IFC and the Landmark in Central, Times Square in Causeway Bay, Pacific Place in Admiralty, and Harbour City in Tsim Sha Tsui. Some of these shops, such as Prada, have outlets at Horizon Plaza in Ap Lei Chau selling off-season items at discounted prices. For something a little more unique, there are cool independent shops opened by local designers and retailers in Sheung Wan, Wan Chai and Tsim Sha Tsui. For a truly local shopping experience, the minimalls in Tsim Sha Tsui are teeming with all things young and trendy, both locally designed or imported from the mainland or Korea. In the evening you can head to the night markets of Temple Street and Ladies Street to do bargain shopping. Overnight stay at hote"
         },
         {
            day: "Day 7",
            title: "Departure from Hong Kong ",
            description:
               "Today check out from your hotel and you will be transferred to the airport to catch your flight. "
         },
      ],

      inclusions: [
         "6 nights in Hong Kong ",
         "6 nights in Hong Kong ",
         ".Room Included - Superior City View Room Double Or Twin, Superior City View Room Double Or Twin, Superior City View Room Double Or Twin, Superior City View Room Double Or Twin, ",
         ".Bed And Breakfast ",
         ".Non-refundable",
         "Hong Kong Airport to Hotel Transfers - Private Vehicle ",
         "Day trip to Macau - with Sightseeing & Return Ferry Tickets from Hong Kong ",
         "Hong Kong City Tour - Private Day Tour, including (1 way Peak Tram, Victoria Peak) ",
         "Full Day Disneyland Tour - Tickets Only ",
         "Ocean Park Tour - Tickets Only ",
         "Hong Kong Hotel To Airport Transfers - Private Vehicle ",
      ],

      exclusions: [
         "Airfare , ",
         "Gst (05%) , ",
         "Visa   , ",
         "Tcs (02%) , ",
         "Lunch & Dinner , ",
         "Personal expenses such as shopping, Phone call, Laundry Etc. ",
      ]
   },
   {
      id: 56,
      destination: "mauritius",
      thumb: imgmauritius,
      tag: "Leisure",
      time: "6 Nights / 7 Days",
      title: "Mauritius 7 Days & 6 Nights – Tropical Leisure Escape",
      location: "Mauritius",
      price: "₹90000/- PeR PeRson X 4 adults / 28000/- PeR child",
      review: 4.8,
      total_review: "(32 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival at Mauritius",
            description:
               "Representative who will assist you with the transfer to the hotel in Mauritius where you check-in. Rest of the day is at leisure to explore this beautiful city on your own. Mauritius, a sparkling crystal in the turquoise waters of the Indian Ocean, will fascinate you. The contrast of colours, cultures and tastes makes the island so charming that the scene is set for an unforgettable holiday. Mauritius, a melting pot where past and present are smoothly blended together, offers an essential beauty that will compel to return to its shores time and time again. Overnight at Mauritius"
         },
         {
            day: "Day 2",
            title: " Full Day Catamaran West Coast - Dolphins Encounter ",
            description:
               "Full day Catamaran cruise, Dolphins Expedition, BBQ Lunch, Unlimited Drinks, Sail by Benitier Island & Snorkel by Crystal Rock "
         },
         {
            day: "Day 3",
            title: "Full day catamaran cruise ",
            description:
               "sail by the 3 northern island - Gunners Coin Island, Flat Island & Gabriel Island, BBQ lunch on boat, unlimited drinks and snorkeling "
         },
         {
            day: "Day 4",
            title: "Crocodile Park and Gris Gris Beach",
            description:
               "The Crocodile & Giant Tortoises Park which is home to various species of animals, reptiles and plants is set in a beautiful rain forested valley with natural freshwater springs, full of prawns and fish. As part of your visit to the Crocodile & Giant Tortoises Park, the park’s guides will guide you through some unforgettable walks, and you will stroll through luxuriant greenery where banana trees, palm trees and giant bamboos provide shade for the crocodiles and the giant tortoises. During your stay in the park you can also experience a firsthand unique encounter with the giant tortoises, and get a rare chance to feed, pet and play with them. Also thousands of Nile crocodiles and giant tortoises are found in the park and you can watch them in maximum safety. "
         },
         {
            day: "Day 5",
            title: " Visit a La Rhumerie & Rum Tasting and visit chamarel 7 coloured earth ",
            description:
               "Overnight stay at Manisa Hotel "
         },
         {
            day: "Day 6",
            title: "North Island Tour ",
            description:
               "After breakfast, proceed on a panoramic city tour of Port Louis, the capital of Mauritius, via the Citadel & its surrounding area. View the Champ de Mars race course, inaugurated in 1812, it the oldest horse-racing club in the Southern Hemisphere, and one of the oldest in the world. Afterwards drive to Le Caudan/Port Louis Waterfront, with some 170 shops, it is a must shopping stop. Drive back to hotel. "
         },
         {
            day: "Day 7",
            title: "Departure from Mauritius",
            description:
               "Check-out from your hotel and transfer to airport"
         },
      ],

      inclusions: [
         "6 nights in Mauritius ",
         "6 nights in Mauritius ",
         ".Room Included - Double room, Double room, ",
         ".Bed and Breakfast ",
         "One Way Airport Transfer From Mauritius Airport to Mauritius Hotel - Private Transfers ",
         "Full Day Catamaran West Coast - Dolphins Encounter - Private Transfers ",
         "Full Day Catamaran North Island Cruise - Shared ",
         "Visit Gris Gris Beach and Crocodile Park - Private Transfers ",
         "Visit a La Rhumerie & Rum Tasting and visit chamarel 7 coloured earth - Private Transfers ",
         "North Island Tour - Private Transfers ",
         "One Way Transfer from Mauritius Hotel to Mauritius Airport - Private Transfers ",
      ],

      exclusions: [
         "Airfare , ",
         "Gst (05%) , ",
         "Visa   , ",
         "Tcs (02%) , ",
         "Lunch & Dinner , ",
         "Personal expenses such as shopping, Phone call, Laundry Etc. ",
      ]
   },
   {
      id: 58,
      destination: "malaysia",
      thumb: imgMalaysia,
      tag: "Leisure",
      time: "6 Nights / 7 Days",
      title: "Malaysia 7 Days & 6 Nights – Kuala Lumpur & Langkawi Escape",
      location: "Kuala Lumpur & Langkawi",
      price: "₹41500/- Per person X 5 Adults / ₹9500 /- Per Child X 4 Child",
      review: 4.8,
      total_review: "(32 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Kuala Lumpur – Check-in",
            description: "Our airport representative will be waiting at the arrival hall to greet and welcome you. Proceed to the arrival hall after completing immigration and baggage formalities. Pick up from KLIA 1 or KLIA 2 and transfer to your Kuala Lumpur hotel. Explore the vibrant city of Kuala Lumpur, Malaysia's federal capital and largest city. Valid for pickups between 6:00 AM and 11:00 PM. Pickups between 11:00 PM and 6:00 AM will attract an additional surcharge."
         },

         {
            day: "Day 2",
            title: "Kuala Lumpur City Sightseeing",
            description: "Pick up from your KL hotel and proceed for a Kuala Lumpur City Tour with KL Tower Observation Deck. Visit KL Tower, Merdeka Square, National Mosque, King Palace, National Monument, Sultan Abdul Samad Building and the Malayan Railway Administration Building. Enjoy a stop at Beryl's Chocolate Kingdom, where you can explore and sample a variety of Malaysian chocolates. After the sightseeing tour, return to your hotel."
         },

         {
            day: "Day 3",
            title: "Batu Caves – Full-Day Genting Highlands Tour",
            description: "After breakfast, depart for Genting Highlands. En route, make a short photo stop at Batu Caves, a famous limestone hill and Hindu shrine dedicated to Lord Murugan. Continue to Genting Skyway Lower Station and board the cable car to Genting Highlands. Enjoy the cool climate, entertainment and attractions before returning to your Kuala Lumpur hotel."
         },

         {
            day: "Day 4",
            title: "Kuala Lumpur to Langkawi – Flight Transfer",
            description: "After breakfast, check out from your Kuala Lumpur hotel and transfer to KLIA 1 or KLIA 2 for your flight to Langkawi. Upon arrival at Langkawi International Airport, our driver will meet you at the arrival hall and transfer you to your beach or city hotel. Langkawi, known as the Jewel of Kedah, is famous for its beautiful beaches, lush landscapes and scenic attractions. Overnight stay at Hotel Grand Continental Langkawi or similar."
         },

         {
            day: "Day 5",
            title: "Langkawi Full-Day Island Tour with Lunch",
            description: "Enjoy a full-day private tour of Langkawi covering some of the island's popular attractions. Visit Atma Alam Batik Art Village, Eagle Square, Kuah Town for duty-free shopping and Underwater World Langkawi (entrance ticket not included). Enjoy lunch at an Indian restaurant. Continue to Oriental Village and Langkawi SkyCab (ticket not included) before returning to your hotel."
         },

         {
            day: "Day 6",
            title: "Langkawi Mangrove Tour & Sunset Cruise",
            description: "After breakfast, enjoy a private transfer from your beach or city hotel to the mangrove tour jetty. Later in the evening, experience a beautiful sunset cruise with cocktails and dinner. Enjoy scenic views of the Andaman Sea along with opportunities to spot wildlife. Relax in the saltwater jacuzzi and enjoy a BBQ dinner and salad bar onboard. Return to your hotel for an overnight stay."
         },

         {
            day: "Day 7",
            title: "Departure from Langkawi",
            description: "After breakfast, check out from your hotel. You will be transferred to Langkawi International Airport for your return flight back home."
         }
      ],

      inclusions: [
         "Kuala Lumpur",
         "3 nights accommodation in Kuala Lumpur",
         "Stay at Howard Johnson By Wyndham Kuala Lumpur or similar",
         "One-way transfer from Kuala Lumpur Airport to Hotel – On your own",
         "Kuala Lumpur City Tour with Private Transfers and KL Tower Observation Deck Ticket",
         "Full-Day Genting Highlands Tour including two-way Cable Car by Private Vehicle, excluding lunch, with en-route Batu Caves photo stop",
         "One-way private transfer from Kuala Lumpur Hotel to Airport, available between 6:00 AM and 11:00 PM",

         "Langkawi",
         "3 nights accommodation in Langkawi",
         "Stay at Hotel Grand Continental Langkawi or similar – Premium Double Bed Room with Breakfast",
         "One-way private transfer from Langkawi Airport to Beach or City Hotel",
         "Langkawi Full-Day Island Tour with Lunch",
         "Langkawi Sunset Dinner Cruise with Private Transfers"
      ],

      exclusions: [
         "Airfare",
         "GST (5%)",
         "Visa",
         "TCS (5%)",
         "Lunch & Dinner except where specifically mentioned in inclusions",
         "Personal expenses such as shopping, phone calls, laundry, etc."
      ]
   },
   {
      id: 59,
      destination: "malaysia",
      thumb: imgMalaysia2,
      tag: "Leisure",
      time: "6 Nights / 7 Days",
      title:
         "Malaysia 7 Days & 6 Nights – Kuala Lumpur, Genting & Langkawi Adventure Escape",
      location: "Kuala Lumpur & Langkawi",
      price: "₹37000/- Per Person X 2 Adults",
      review: 4.8,
      total_review: "(32 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Kuala Lumpur – Check-in",
            description:
               "Arrive in Kuala Lumpur and complete the check-in formalities at your hotel. Overnight stay at Hotel Sentral Kuala Lumpur."
         },

         {
            day: "Day 2",
            title:
               "Kuala Lumpur City Sightseeing & Half-Day Kuala Lumpur Night Tour",
            description:
               "Pick up from your Kuala Lumpur hotel and proceed for the city sightseeing tour. Visit the iconic Petronas Twin Towers for a photo stop. The observation deck ticket is not included. Continue to Merdeka Square, one of Kuala Lumpur's most historic and picturesque landmarks. Visit the National Mosque (Masjid Negara), known for its distinctive architecture and beautiful surroundings. Proceed to the King Palace (Istana Negara), the official royal residence of Malaysia, and see the National Monument, which commemorates those who lost their lives during Malaysia's struggle for freedom. Visit the Sultan Abdul Samad Building, a historic Moorish-style landmark located opposite Merdeka Square. Pass by the Malayan Railway Administration Building, an architectural landmark combining Eastern and Western design elements. Continue to Beryl's Chocolate Kingdom, where you can explore a wide variety of chocolates and enjoy complimentary samples. After the city tour, return to the hotel. Later, embark on a Kuala Lumpur Night Tour featuring an outside view of the Petronas Twin Towers, Lake Symphony at KLCC, the historic Malayan Railway Administration Building, Sri Maha Mariamman Temple and Chinatown Market. Conclude the evening with panoramic city views from KL Tower. KL Tower Observation Deck ticket is included. After the tour, return to your hotel."
         },

         {
            day: "Day 3",
            title: "Batu Caves – Full-Day Genting Highlands Tour with Cable Car",
            description:
               "After breakfast, depart for Genting Highlands. En route, make a short photo stop at Batu Caves, a famous limestone hill and Hindu shrine dedicated to Lord Murugan. Continue to Genting Skyway Lower Station and board the cable car to the peak. The cable car journey takes approximately 15 minutes and is subject to weather conditions. Enjoy the cool climate, entertainment and attractions of Genting Highlands before returning to your hotel in Kuala Lumpur."
         },

         {
            day: "Day 4",
            title: "Transfer from Kuala Lumpur to Langkawi by Flight",
            description:
               "Check out from your Kuala Lumpur hotel and transfer to KLIA 1 or KLIA 2 for your flight to Langkawi. Upon arrival at Langkawi International Airport, our driver will be waiting at the arrival hall to greet and welcome you. Transfer to your Langkawi beach or city hotel. Langkawi, known as the Jewel of Kedah, is an archipelago of 99 islands in the Andaman Sea, famous for its beautiful beaches, lush greenery and scenic mountain landscapes."
         },

         {
            day: "Day 5",
            title: "Half-Day Water Activities – Jet Ski, Parasailing & Banana Boat",
            description:
               "Get ready for an exciting half-day of water activities in Langkawi. Enjoy thrilling experiences on the Andaman Sea, including jet skiing, parasailing and a banana boat ride. Whether you prefer high-speed adventure or a relaxing view of the sea from above, these activities offer an exciting way to experience Langkawi's beautiful coastline. Private transfer from your Langkawi hotel is included."
         },

         {
            day: "Day 6",
            title: "Langkawi City Tour & Crocodile Adventureland",
            description:
               "Pick up from your Langkawi beach or city hotel and proceed for a half-day Langkawi Island City Tour. Visit Atma Alam Batik Art Village and experience the traditional Malaysian batik-making process. Continue to Eagle Square, home to Langkawi's iconic eagle statue. Stop at Kuah Town for optional duty-free shopping. Visit Underwater World Langkawi from outside; entrance ticket is not included. Later, enjoy a half-day visit to Crocodile Adventureland, where you can see crocodiles and other wildlife up close and enjoy exciting shows and educational experiences. After the tour, return to your hotel."
         },

         {
            day: "Day 7",
            title: "Departure from Langkawi",
            description:
               "After breakfast, check out from your hotel. You will be transferred to Langkawi International Airport to catch your return flight back home. Your memorable Malaysia holiday comes to an end."
         }
      ],

      inclusions: [
         "Kuala Lumpur",
         "3 nights accommodation in Kuala Lumpur",
         "Stay at Hotel Sentral Kuala Lumpur – 3 Star",
         "Breakfast and Free WiFi",
         "One-way transfer from Kuala Lumpur Airport to Hotel – On your own",
         "Kuala Lumpur City Tour – Seat-in-Coach Transfers, excluding entrance tickets",
         "Half-Day Kuala Lumpur Night Tour – Private Transfers with KL Tower Observation Deck Ticket",
         "Full-Day Genting Highlands Tour including two-way Cable Car – Seat-in-Coach Transfers with en-route Batu Caves photo stop",
         "One-way transfer from Kuala Lumpur Hotel to Airport – Private, available between 6:00 AM and 11:00 PM",

         "Langkawi",
         "3 nights accommodation in Langkawi",
         "Stay at Hotel Grand Continental Langkawi – 3 Star",
         "Bed and Breakfast",
         "One-way transfer from Langkawi Airport to Beach or City Hotel – Private Transfers",
         "Half-Day Water Activities including Jet Ski, Parasailing & Banana Boat – Private Transfer from LGK City or Beach Hotels",
         "Half-Day Langkawi Island City Tour – Private Transfers, excluding entrance tickets",
         "Half-Day Crocodile Adventureland Tour – Without Entrance Ticket, with Private Transfers from LGK Beach or City Hotel",
         "One-way transfer from Hotel to Langkawi Airport – Private Transfers from Beach or City Hotel"
      ],

      exclusions: [
         "Airfare",
         "GST (5%)",
         "Visa",
         "TCS (2%)",
         "Lunch & Dinner except where specifically mentioned in inclusions",
         "Entrance tickets not specifically mentioned in the inclusions",
         "Personal expenses such as shopping, phone calls, laundry, etc."
      ]
   },
   {
      id: 61,
      destination: "vietnam",
      thumb: imgvietnam,
      tag: "Leisure",
      time: "4 Nights / 5 Days",
      title: "Vietnam 5 Days & 4 Nights – Phu Quoc Island Escape",
      location: "Phu Quoc",
      price: "₹36500/- Per Person X 2 adults / 11500/- Per child",
      review: 4.8,
      total_review: "(32 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival at Phu Quoc – Transfer to Hotel",
            description:
               "On arrival at Phu Quoc International Airport, our local representative will be waiting outside the customs area to welcome you and transfer you to your hotel. Check-in time is 3:00 PM. The rest of the day is free for you to relax or explore Phu Quoc on your own."
         },

         {
            day: "Day 2",
            title: "Full-Day Vinpearl Safari",
            description:
               "Located in the Long Beach area in the northwest of Phu Quoc Island, Vinpearl Safari is Vietnam's first open zoo and conservation park designed according to international safari standards. Explore the Open Zoo, which is home to rare native species and wildlife from different regions including South Africa, Europe, India and Australia. Continue to the Wildlife Park, spread across a large area with diverse plant systems and specially designed habitats. Experience the wildlife through specialized safari vehicles while observing animals in a natural and protected environment."
         },

         {
            day: "Day 3",
            title: "Phu Quoc 4 Islands Day Tour by Speedboat",
            description:
               "Get picked up from your hotel lobby at approximately 8:30 AM and travel to Thoi Harbor. Board the speedboat and head towards Buom Island (Finger Nail Island), where you can relax, swim and enjoy the beautiful surroundings. Continue to Gham Ghi Island, known for its beautiful coral reefs and snorkeling opportunities. Visit May Rut Island, where you can enjoy lunch and spend time relaxing on the beach. The tour concludes with a return transfer to your hotel at approximately 4:00 PM."
         },

         {
            day: "Day 4",
            title: "Full-Day Grand World Phu Quoc",
            description:
               "Explore Grand World Phu Quoc at your own pace for the entire day. Enjoy colorful streets, entertainment, attractions and famous landmarks. Experience the vibrant atmosphere of this unique entertainment and leisure destination. The package includes tickets for the Teddy Bear Museum and Gondola Ride, along with round-trip private transfers."
         },

         {
            day: "Day 5",
            title: "Departure from Phu Quoc",
            description:
               "After breakfast, check out from your hotel. Later, you will be transferred to Phu Quoc International Airport to catch your return flight back home. Your memorable Phu Quoc holiday comes to an end."
         }
      ],

      inclusions: [
         "Phu Quoc",
         "4 nights accommodation in Phu Quoc",
         "Stay at Sea Star Resort Phu Quoc – 3 Star",
         "Breakfast, Parking, Coffee & Tea",
         "Express Check-in, Free WiFi and Drinking Water",
         "1 Extra Bed",
         "One-way transfer from Phu Quoc Airport to Hotel – Private",
         "Vinpearl Safari – Tickets with Private Transfers",
         "Phu Quoc 4 Islands Day Tour by Speedboat – Shared Transfers, including Lunch on the Island",
         "Full-Day Grand World – Round-Trip Private Transfers with Tickets for Teddy Bear Museum & Gondola Ride",
         "One-way transfer from Phu Quoc Hotel to Airport – Private"
      ],

      exclusions: [
         "Airfare",
         "GST (5%)",
         "Visa",
         "TCS (2%)",
         "Lunch & Dinner except where specifically mentioned in inclusions",
         "Personal expenses such as shopping, phone calls, laundry, etc."
      ]
   },
   {
      id: 62,
      destination: "vietnam",
      thumb: imghanoi,
      tag: "Leisure",
      time: "5 Nights / 6 Days",
      title:
         "Vietnam 6 Days & 5 Nights – Hanoi, Halong Bay & Da Nang Discovery",
      location: "Hanoi & Da Nang",
      price: "₹34,500/- Per Person X 2 Adults",
      review: 4.8,
      total_review: "(32 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival at Hanoi – Transfer to Hotel",
            description:
               "On arrival at Noi Bai International Airport, our local representative will be waiting outside the customs area to welcome you and transfer you to your hotel. The rest of the day is free for you to relax or explore Hanoi on your own."
         },

         {
            day: "Day 2",
            title: "Full-Day Tour of Halong Bay",
            description:
               "At approximately 8:15–8:50 AM, get picked up from your hotel in Hanoi Old Quarter or Opera House area and depart for Halong Bay. Travel via the Hanoi–Haiphong–Tuan Chau Highway, taking approximately 2.5 hours. Arrive at Tuan Chau Harbor around 12:00 PM and board the boat for your Halong Bay excursion. Enjoy a set-menu lunch featuring local specialties while cruising among the spectacular limestone formations, including Fighting Chicken and Incense Burner Islets. Around 2:00 PM, arrive at Bo Hon Island and visit Sung Sot Cave, famous for its impressive stalactites and stalagmites. Continue with kayaking or a bamboo boat ride through Luon Cave to explore its beautiful lagoon. At approximately 3:15 PM, visit Ti Top Island, where you can relax on the sandy beach, swim or climb to the viewpoint for panoramic views of Halong Bay. Around 4:00 PM, return to the boat and enjoy a sunset party with fruits, biscuits and refreshments while cruising back towards the harbor. Arrive at the harbor around 5:45 PM and return to Hanoi by bus. Drop off at your hotel at approximately 8:30 PM."
         },

         {
            day: "Day 3",
            title: "Half-Day Hanoi City Tour",
            description:
               "Choose between the morning or afternoon tour option. Morning option: Pick up from your hotel between 8:00 and 8:30 AM and visit Tran Quoc Pagoda, located on a small island in West Lake. Continue to the Ho Chi Minh Complex, where you can explore the surrounding gardens and see the Ho Chi Minh Mausoleum from outside, subject to opening conditions. Visit the One Pillar Pagoda, one of Hanoi's most distinctive architectural landmarks. Please dress modestly when visiting the mausoleum, temples and pagodas. The Ho Chi Minh Mausoleum is closed on Mondays and Fridays; an alternative attraction may be arranged on these days. Continue to the Vietnam Museum of Ethnology to learn about the diverse cultures of Vietnam's 54 ethnic groups. If the museum is closed on Monday, the Women's Museum will be visited instead. Enjoy lunch at a local Vietnamese restaurant. Afternoon option: Begin with lunch at a local restaurant, followed by a visit to the Temple of Literature, also known as Van Mieu-Quoc Tu Giam, founded in 1070. Explore its historic architecture and gardens before continuing to Hoa Lo Prison, historically known as the Hanoi Hilton. After the tour, return to your hotel."
         },

         {
            day: "Day 4",
            title: "Fly from Hanoi to Da Nang – Half-Day Marble Mountains Tour",
            description:
               "After arriving in Da Nang, proceed for your half-day Marble Mountains tour. Begin with hotel pickup and travel towards the Marble Mountains. Explore the scenic landscapes, caves and cultural attractions of this famous destination. Enjoy some time for photography before stopping for lunch at a local restaurant. After lunch, return to your Da Nang hotel and complete the tour."
         },

         {
            day: "Day 5",
            title: "Ba Na Hills Tour with Golden Bridge",
            description:
               "Enjoy a full-day excursion to Ba Na Hills, escaping the bustle of Da Nang and heading into the scenic mountains. Visit Linh Ung Pagoda and admire the impressive Bodhisattva statue. Continue through the mountain resort area and learn about its French colonial heritage. Board the cable car to Nui Chua Mountain and enjoy panoramic views of the surrounding region. Visit Nghinh Phong Peak and explore the attractions of Ba Na Hills. Enjoy lunch at a local restaurant before spending time at Fantasy Park, an indoor entertainment area featuring a variety of games and attractions. The tour also includes a visit to the famous Golden Bridge. Later, return to Da Nang with your guide."
         },

         {
            day: "Day 6",
            title: "Departure from Da Nang",
            description:
               "After breakfast, check out from your hotel. You will be transferred to Da Nang International Airport to catch your return flight back home. Your memorable Vietnam holiday comes to an end."
         }
      ],

      inclusions: [
         "Hanoi",
         "3 nights accommodation in Hanoi",
         "Stay at Hanoi Boutique Hotel & Spa – 3 Star",
         "Breakfast Buffet",
         "One-way transfer from Hanoi Airport to Hotel – Private",
         "Full-Day Halong Bay Tour with Lunch – Shared Transfers",
         "Half-Day Hanoi City Tour with English-Speaking Guide – Shared Basis with Local Lunch",
         "One-way transfer from Hanoi Hotel to Airport – Private",

         "Da Nang",
         "2 nights accommodation in Da Nang",
         "Stay at Sunny Ocean Hotel & Spa – 4 Star",
         "Bed and Breakfast",
         "One-way transfer from Da Nang Airport to Da Nang Hotel – Private",
         "Half-Day Marble Mountains Tour – Private Basis",
         "Ba Na Hills Tour with Cable Car – Shared Tour, including Golden Bridge and Lunch",
         "One-way transfer from Da Nang Hotel to Da Nang Airport – Private"
      ],

      exclusions: [
         "Airfare",
         "GST (5%)",
         "Visa",
         "TCS (2%)",
         "Lunch & Dinner except where specifically mentioned in inclusions",
         "Personal expenses such as shopping, phone calls, laundry, etc."
      ]
   },
   {
      id: 63,
      destination: "vietnam",
      thumb: imghanlog,
      tag: "Leisure",
      time: "5 Nights / 6 Days",
      title:
         "Vietnam 6 Days & 5 Nights – Hanoi, Halong Bay, Da Nang & Hoi An Escape",
      location: "Hanoi & Da Nang",
      price: "₹33,600/- Per Person X 4 Adults",
      review: 4.8,
      total_review: "(32 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival at Hanoi - Transfer to Hotel",
            description:
               "On arrival at Noi Bai International Airport, our local representative will be waiting outside the customs area to welcome you and to take you to your hotel. Rest of the day is free for you to explore Hanoi Town on your own. "
         },

         {
            day: "Day 2",
            title: "Full Day Hanoi City Tour ",
            description:
               "8.00- 8.30: Get picked up by our friendly guide and start to explore Hanoi City 08.45: Arrive at Tran Quoc Pagoda which built in the 6th century located on Golden Fish IsLand in West Lake 09.30: Visit Ho Chi Minh complex, you have a chance to see the embalmed body of Ho Chi Minh then walk around the garden to see 2 houses where he lived & worked from 1954 to 1969. Then visit One Pillar Pagoda where worships the Godess of Mercy – It is the most unique padoga in the world  Should dress modestly by covering from shoulders to knees when visiting Ho Chi Minh mausoleum, temples, pagodas…  Ho Chi Minh’s Mausoleum is closed on Mondays and Fridays.  Ho Chi Minh’s Mausoleum is closed at least 2 months (15thJune -15thAugust) for the annual maintaining but still can take picture Mausoleum and visit around that area 11.15: Visit Vietnam Ethnology Museum to learn about the culture of 54 ethnic groups living in the whole country of Vietnam Special Note : we will visit Women Museum instead of Ethnology Museum closed on Mondays 12.45: Have lunch at our restaurant. You have an opportunity to enjoy Vietnamese cuisine with 8 delicious dishes. 14.00-14.15 : Continue to visit Temple of Literature – the first university of Vietnam, established in the 11 century 15.15: Leave for Hoa Lo Prison Museum which originally used by the French colonists in Indochina for political prisoners, and later by North Vietnam for U.S. prisoners of war during the Vietnam War. During this later period, it was known to American POWs as the Hanoi Hilton 16.15 -16.30: Tour finishes. Back to hotel or get dropped off at Train Street. "
         },

         {
            day: "Day 3",
            title: "Full Day Tour of Halong Bay",
            description:
               "8.15-8.50: Get picked up at the hotel in Hanoi Old Quater/ Opera House to depart for Halong Bay Our journey follows Hanoi – Haiphong- Tuan Chau Highway (about a 2.5-hour drive) 12:00: Arrive at Tuan Chau Harbor, get on the boat to start the excursion discovering the beauty of the world heritage site 12:30: Enjoy set menu lunch on the boat with many special dishes of Halong. While having lunch, you all can see the beautiful scenery on both sides with thousands of limestone such as Fighting Chicken and Incense Buner Islets – 2 symbols of Halong Bay 14.00: Arrive at Bo Hon Island, and you will visit Sung Sot Cave – the most beautiful cave with a lot of stalagmites and stalactites 14.45: Do kayaking or bamboo boat through Luon Cave to discover the beautiful lagoon. 15.15: Visit TiTop Island with its sandy beach. You can go swimming here or trek up to the top of the island for sightseeing all of Halong bay 16.00: Back to the boat for the sunset party (some wine, fruits, and biscuits) meanwhile the boat is cruising back to the harbor 17.45: Arrive back at the harbor. Get on the bus and return to Hanoi 20:30: Get dropped off at the hotel.  "
         },

         {
            day: "Day 4",
            title: "Fly from Hanoi to Da Nang - Half Day Discovery Tour of Hoi An Ancient Town ",
            description:
               "The tourguide will pick-up you at hotel in the early morning/afternoon and take you for an interesting walk over the tile-roofed Japanese Bridge, visit taciturn Chinese Assembly Halls, enjoy the attractiveness of ancient houses or listen to folk music of Central Vietnam at old club-houses. Later we can stop at shrines or stroll into the market located by Thu Bon river, where you may find the same feelings of the artists, who see the rooftops of Hoian a magical old world of Oriental feel and source of inspiration. This is also a wonderful town to shop for lanterns, soft silk, raw silk, or get your clothes tailored within a day. "
         },

         {
            day: "Day 5",
            title: "Ba Na Hills Tour ",
            description:
               "Leave the bustle of Da Nang for a day and escape to the mountainous serenity of the Ba Na Hills. After visiting the Linh Ung Pagoda, take a cable car to the top of Nui Chua Mountain and grab lunch in a local restaurant. Spend the rest of your afternoon captivated by the attractions at Fantasy Park. Your morning begins with pickup from your hotel. A friendly guide drives you out of the city to Ba Na Hills, a resort founded in the 1920s by French colonists. On the way there, stop at Linh Ung Pagoda to marvel at a 220foot (67-m) statue of a Bodhisattva. Pass by old French villas and a historic wine cellar, learning about the French occupation of Vietnam from your guide. Once in the mountains, board a cable car and ride to the summit of Nui Chua Mountain. Make the easy trek to Nghinh Phong Peak and enjoy a panoramic view of the surrounding region, and then stop in a restaurant for a tasty lunch of Vietnamese cuisine. Later, venture to Ba Na Hill's Fantasy Park, an indoor entertainment zone with thrilling games for the whole family. Following an afternoon of adventure, make your way back to Da Nang with your guide. "
         },

         {
            day: "Day 6",
            title: "Departure from Da Nang",
            description:
               "Today morning check-out from your hotel. You will be transferred to the airport to catch your flight back. "
         }
      ],

      inclusions: [
         "Hanoi",
         "3 nights accommodation in Hanoi",
         "Stay at Hanoi Boutique Hotel & Spa – 3 Star",
         "Breakfast, Coffee & tea, Express check-in ",
         "Free Premium Wifi, Free WiFi, Drinking water",
         "One-way transfer from Hanoi Airport to Hotel – Private",
         "Full Day Hanoi City Tour - Shared Transfers (Including Local Lunch) ",
         "Full Day Tour of Halong Bay with Lunch - Shared Transfers",
         "One-way transfer from Hanoi Hotel to Airport - Private ",

         "Da Nang",
         "2 nights in Da Nang",
         "Stay at Sunny Ocean Hotel & Spa (4 star) ",
         "Room Included - Superior, Double Or Twin Bed, Superior, Double Or Twin Bed, ",
         "Bed and Breakfast ",
         "One-way transfer from Da Nang Airport to Da Nang Hotel – Private",
         "Half Day Discovery Tour of Hoi An Ancient Town - Private from Da Nang ",
         "Ba Na Hills Tour with Cable Car - Shared Tour (Includes Golden Bridge) Includes Lunch ",
         "One-way transfer from Da Nang Hotel to Da Nang Airport – Private "
      ],

      exclusions: [
         "Airfare",
         "GST (5%)",
         "Visa",
         "TCS (2%)",
         "Lunch & Dinner except where specifically mentioned in inclusions",
         "Personal expenses such as shopping, phone calls, laundry, etc."
      ]
   },
   {
      id: 67,
      destination: "thailand",
      thumb: imgthailand,
      tag: "Leisure",
      time: "",
      title: "Coming Soon...",
      location: "",
      price: "",
      review: 0,
      total_review: "",

      itinerary: [],
      inclusions: [],
      exclusions: []
   },
   {
      id: 69,
      destination: "singapore",
      thumb: imgsingapore,
      tag: "Leisure",
      time: "4 Nights / 5 Days",
      title: "Singapore Ultimate City & Island Experience",
      location: "Singapore",
      price: "₹41000/- Per Person X 2 Adults",
      review: 4.8,
      total_review: "(32 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Singapore - Check-in - Night Safari ",
            description:
               "On arrival at Singapore Airport, meet our representative and get transferred to hotel. (Check in time 2pm). In the night if you have time, you can visit the Clarke Quay, its a area bustling with eateries and lights. You can have dinner there and return back to your hotel for stay. Come and experience the night life with a difference. The world's first wildlife park built for visits at night, the Night Safari is not like any ordinary zoo illuminated by the night or a modern version of nocturnal houses found in many zoos around the globe. Nestled in 40 hectares of lush secondary forest, the Night Safari offers guests the unique experience of exploring wildlife in a tropical jungle at night. "
         },

         {
            day: "Day 2",
            title: " Full Day Sentosa Island Tour ",
            description:
               "Enjoy your day at Sentosa Island. Take a cable car across Sentosa Island. Relish gorgeous, 360-degree views of the country's southern regions with a Singapore Cable Car. The cable car is the most unique way to get to Sentosa – no Singapore trip is complete without it! "
         },

         {
            day: "Day 3",
            title: "Singapore City Tour  ",
            description:
               "Proceed for Singapore Half Day City Tour. Drive across Suntec City, Fountain of Wealth. Get clicked with the Merlion Park, Singapore’s most famous tourist spot and enjoy the view of Marina Bay. Next, get clicked in front of The Singapore Flyer, a giant observation wheel that features brilliant engineering breakthroughs a world apart from the traditional ferries wheel. Discover the Sacred Wonder of the Buddha Tooth Relic Temple. Drive-By: Suntec City (Fountain of Wealth), Esplanade Theatre Photo Stops: Merlion Park (15–20 mins), Singapore Flyer (10–20 mins), Chinatown – Buddha Tooth Relic Temple (20–30 mins) Optional (Time Permitting): Sovereign Shopping Centre "
         },

         {
            day: "Day 4",
            title: "Full Day Universal Studios Tour ",
            description:
               "Go beyond the screen and jump into the action at Universal Studios Singapore on Sentosa Island. Explore themed areas based on your favorite films, buckle into thrilling rides that make you feel like the star of your very own blockbuster hit, and find out how movie makers create stunning visual effects.Step into a world filled with characters and sets from animated flicks and high-octane hits as you arrive in Universal Studios Singapore. Get greeted like fairy-tale royalty by Shrek and Princess Fiona in the land Far Far Away, scale the walls of The Lost World to explore precious stones and fossilized insects, and join your favorite Madagascar characters aboard a wet-and-wild boat ride. In Sci-Fi City, experience intergalactic battles, then stroll through streets flanked by brownstones and bodegas in New York. Check out the stars Hollywood's Walk of Fame and look for mummies in Ancient Egypt. With 7 different themed areas to explore and 24 different rides to hop on, Universal Studios Singapore offers a slice of the silver screen that everyone can enjoy. "
         },

         {
            day: "Day 5",
            title: "Departure from Singapore ",
            description:
               "After check out, please meet our representative who will transfer you to the airport "
         },
      ],

      inclusions: [
         "Singapore",
         "4 nights in Singapore",
         "Stay at J8 Hotel (SG Clean) (3 star) ",
         "Bed and Breakfast ",
         "One-way Transfer Between Airport And Hotel - Private Vehicle - (6 am - 10 pm) - for Changi Airport ",
         "Night Safari - Ticket Only",
         "Full day Sentosa Tour - Shared Transfers (One way Cable Car) ",
         "Singapore City Tour - Seat in Coach ( Drop off at Little India) ",
         "Universal Studio Tour with Transfers - Seat in Coach",
         "One-way Airport Transfer between Hotel and Changi Airport - Private - (6 am - 10 pm) ",
      ],

      exclusions: [
         "Airfare",
         "GST (5%)",
         "Visa",
         "TCS (2%)",
         "Lunch & Dinner except where specifically mentioned in inclusions",
         "Personal expenses such as shopping, phone calls, laundry, etc."
      ]
   },
   {
      id: 70,
      destination: "singapore",
      thumb: imgsingapore2,
      tag: "Leisure",
      time: "4 Nights / 5 Days",
      title: "Singapore Ultimate Theme Park & Island Escape",
      location: "Singapore",
      price: "₹46000/- Per Person X 4 adults",
      review: 4.8,
      total_review: "(32 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Singapore - Check-in - Night Safari ",
            description:
               "On arrival at Singapore Airport, meet our representative and get transferred to hotel. (Check in time 2pm). In the night if you have time, you can visit the Clarke Quay, its a area bustling with eateries and lights. You can have dinner there and return back to your hotel for stay. Come and experience the night life with a difference. The world's first wildlife park built for visits at night, the Night Safari is not like any ordinary zoo illuminated by the night or a modern version of nocturnal houses found in many zoos around the globe. Nestled in 40 hectares of lush secondary forest, the Night Safari offers guests the unique experience of exploring wildlife in a tropical jungle at night.  "
         },

         {
            day: "Day 2",
            title: " Full Day Universal Studios Tour ",
            description:
               "Go beyond the screen and jump into the action at Universal Studios Singapore on Sentosa Island. Explore themed areas based on your favorite films, buckle into thrilling rides that make you feel like the star of your very own blockbuster hit, and find out how movie makers create stunning visual effects.Step into a world filled with characters and sets from animated flicks and high-octane hits as you arrive in Universal Studios Singapore. Get greeted like fairy-tale royalty by Shrek and Princess Fiona in the land Far Far Away, scale the walls of The Lost World to explore precious stones and fossilized insects, and join your favorite Madagascar characters aboard a wet-and-wild boat ride. In Sci-Fi City, experience intergalactic battles, then stroll through streets flanked by brownstones and bodegas in New York. Check out the stars Hollywood's Walk of Fame and look for mummies in Ancient Egypt. With 7 different themed areas to explore and 24 different rides to hop on, Universal Studios Singapore offers a slice of the silver screen that everyone can enjoy.  "
         },

         {
            day: "Day 3",
            title: "Full Day Sentosa Island Tour",
            description:
               "Enjoy your day at Sentosa Island. Enjoy your day at Sentosa Island. Take a cable car across Sentosa Island. Relish gorgeous, 360-degree views of the country's southern regions with a Singapore Cable Car. The cable car is the most unique way to get to Sentosa – no Singapore trip is complete without it! "
         },

         {
            day: "Day 4",
            title: "Singapore City Tour ",
            description:
               "Proceed for Singapore Half Day City Tour. Drive across Suntec City, Fountain of Wealth. Get clicked with the Merlion Park, Singapore’s most famous tourist spot and enjoy the view of Marina Bay. Next, get clicked in front of The Singapore Flyer, a giant observation wheel that features brilliant engineering breakthroughs a world apart from the traditional ferries wheel. Discover the Sacred Wonder of the Buddha Tooth Relic Temple. Drive-By: Suntec City (Fountain of Wealth), Esplanade Theatre Photo Stops: Merlion Park (15–20 mins), Singapore Flyer (10–20 mins), Chinatown – Buddha Tooth Relic Temple (Drive By) Optional (Time Permitting): Sovereign Shopping Centre "
         },

         {
            day: "Day 5",
            title: "Departure from Singapore ",
            description:
               "After check out, please meet our representative who will transfer you to the airport "
         },
      ],

      inclusions: [
         "Singapore",
         "4 nights in Singapore",
         "Stay at Aqueen Prestige Hotel Lavender (4 star) ",
         "Room Included - Superior Hollywood Twin (Breakfast), Superior Hollywood Twin (Breakfast), ",
         "Rooms are Subject to Availability at time of Booking  ",
         "Breakfast",
         "One-way Transfer Between Airport And Hotel - Private Vehicle - (6 am - 10 pm) - for Changi Airport ",
         "Night Safari - Ticket Only ",
         "Universal Studio Tour with Transfers - Seat in Coach ",
         "Full day Sentosa Tour - (One-way cable car) - Tickets Only ",
         "Singapore City Tour - Seat in Coach ( Drop off at Little India) ",
         "One-way Airport Transfer between Hotel and Changi Airport - Private - (6 am - 10 pm) ",
      ],

      exclusions: [
         "Airfare",
         "GST (5%)",
         "Visa",
         "TCS (2%)",
         "Lunch & Dinner except where specifically mentioned in inclusions",
      ]
   },
   {
      id: 71,
      destination: "singapore",
      thumb: imgsingapore3,
      tag: "Leisure",
      time: "3 Nights / 4 Days",
      title: "Singapore Adventure & Island Escape",
      location: "Singapore",
      price: "₹71000/- PER PERSON X 3 ADULTS",
      review: 4.8,
      total_review: "(32 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Singapore - Check-in - Night Safari ",
            description:
               "On arrival at Singapore Airport, meet our representative and get transferred to hotel. (Check in time 2pm). In the night if you have time, you can visit the Clarke Quay, its a area bustling with eateries and lights. You can have dinner there and return back to your hotel for stay. Come and experience the night life with a difference. The world's first wildlife park built for visits at night, the Night Safari is not like any ordinary zoo illuminated by the night or a modern version of nocturnal houses found in many zoos around the globe. Nestled in 40 hectares of lush secondary forest, the Night Safari offers guests the unique experience of exploring wildlife in a tropical jungle at night."
         },

         {
            day: "Day 2",
            title: " Full Day Universal Studios Tour",
            description:
               "Go beyond the screen and jump into the action at Universal Studios Singapore on Sentosa Island. Explore themed areas based on your favorite films, buckle into thrilling rides that make you feel like the star of your very own blockbuster hit, and find out how movie makers create stunning visual effects.Step into a world filled with characters and sets from animated flicks and high-octane hits as you arrive in Universal Studios Singapore. Get greeted like fairy-tale royalty by Shrek and Princess Fiona in the land Far Far Away, scale the walls of The Lost World to explore precious stones and fossilized insects, and join your favorite Madagascar characters aboard a wet-and-wild boat ride. In Sci-Fi City, experience intergalactic battles, then stroll through streets flanked by brownstones and bodegas in New York. Check out the stars Hollywood's Walk of Fame and look for mummies in Ancient Egypt. With 7 different themed areas to explore and 24 different rides to hop on, Universal Studios Singapore offers a slice of the silver screen that everyone can enjoy. "
         },

         {
            day: "Day 3",
            title: "Full Day Sentosa Island Tour",
            description:
               "Enjoy your day at Sentosa Island. Take a cable car across Sentosa Island. Relish gorgeous, 360-degree views of the country's southern regions with a Singapore Cable Car. The cable car is the most unique way to get to Sentosa – no Singapore trip is complete without it! There's no better way to complete a fabulous day at Sentosa than to take in a spectacular night show set outdoors against the backdrop of an open sea. Come, discover an awe-inspiring display of water, laser and fire effects, set to majestic music and a panorama of breathtaking vistas - Wings of Time. Weaved together by a tale of friendship and courage that will linger with you long after you leave the magical isle.  "
         },

         {
            day: "Day 4",
            title: "Departure from Singapore",
            description:
               "After check out, please meet our representative who will transfer you to the airport "
         },
      ],

      inclusions: [
         "Singapore",
         "3 nights in Singapore ",
         "Stay at ibis Singapore Novena (3 star)",
         "Room Included - Standard Triple & Family (Breakfast,),",
         "Room are subject to availability at the time of Booking ",
         "Breakfast",
         "One-way Transfer Between Airport And Hotel - Private Vehicle - (6 am - 10 pm) - for Changi Airport ",
         "Night Safari - Ticket Only",
         "Universal Studio Tour with Transfers - Seat in Coach  ",
         "Full day Sentosa Tour - Seat in Coach (One way Cable Car and Wings of Time @ 7:30pm) ",
         "One-way Airport Transfer between Hotel and Changi Airport - Private - (6 am - 10 pm) ",
      ],

      exclusions: [
         "Airfare",
         "GST (5%)",
         "Visa",
         "TCS (2%)",
         "Lunch & Dinner except where specifically mentioned in inclusions",
         "Other things not mentioned in itinerary ",
      ]
   },
   {
      id: 72,
      destination: "bali",
      thumb: imgbali,
      tag: "Leisure",
      time: "",
      title: "Coming Soon...",
      location: "",
      price: "",
      review: 4.8,
      total_review: "",

      itinerary: [],
      inclusions: [],
      exclusions: []
   },
   {
      id: 73,
      destination: "europe",
      thumb: imgeurope,
      tag: "Leisure",
      time: "",
      title: "Coming Soon...",
      location: "",
      price: "",
      review: 4.8,
      total_review: "",

      itinerary: [],
      inclusions: [],
      exclusions: []
   },
];

export default destination_data;
