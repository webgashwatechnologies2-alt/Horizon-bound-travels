import { StaticImageData } from "next/image";

import listing_img1 from "@/assets/img/listing/su/hm1.jpg"
import listing3_img1 from "@/assets/img/listing/spt.jpg"
import listing3_img4 from "@/assets/img/listing/su/kashmirimage.jpg"
import listing3_img7 from "@/assets/img/listing/rajasthan-camel.jpg"
import listing5_img1 from "@/assets/img/listing/listing-3/lehimage.jpg"
import listing5_img4 from "@/assets/img/listing/listing-3/uk.jpg"
import listing5_img8 from "@/assets/img/listing/listing-3/Kerala.jpg"
import listing_imggoa from "@/assets/img/listing/listing-3/goa.jpg"
import imgkullunew from "@/assets/img/listing/listing-3/bliskullu.jpg"
import imhgheavhm from "@/assets/img/listing/listing-3/heavenhm.jpg"
import imgdharamshala from "@/assets/img/listing/listing-3/dshand.jpg"
import imghimchal from "@/assets/img/listing/listing-3/adventure.jpg"
import imgtvalley from "@/assets/img/listing/listing-3/tirthan.jpg"
import imgbike from "@/assets/img/listing/listing-3/sptbike.jpg"
import imgknrroad from "@/assets/img/listing/listing-3/knrroad.jpg"
import imgPangong from "@/assets/img/listing/listing-3/panjonglake.jpg"
import imgSrinagar from "@/assets/img/listing/listing-3/srngr.jpg"
import imgKashmir from "@/assets/img/listing/listing-3/ksmirr.jpg"
import imgEscape from "@/assets/img/listing/listing-3/Kashmir.jpg"
import imguk from "@/assets/img/listing/listing-3/rishikesh1.jpg"
import imgHaridwar from "@/assets/img/listing/listing-3/hd.jpg"
import imgDeserts from "@/assets/img/listing/listing-3/laxmi.jpg"
import imgUdaipur from "@/assets/img/listing/listing-3/Udaipur.jpg"
import imgKerala from "@/assets/img/listing/listing-3/keralaimage.jpg"
import imgMunnar from "@/assets/img/listing/listing-3/mur.jpg"
import imggoa from "@/assets/img/listing/listing-3/goaaroup.jpg"
import imgBackpacking from "@/assets/img/listing/listing-3/Goanre.jpg"


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
   // Himachal - 6 packages
   {
      id: 1,
      destination: "himachal",
      thumb: listing_img1,
      tag: "Popular",
      time: "6 Days",
      guest: "10 Guests",
      title: "Shimla Manali from Delhi Tour",
      location: "Shimla & Manali, Himachal Pradesh",
      price: "Price On Request",
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
            title: "Solang Valley & Rohtang Pass Excursion",
            description: "After breakfast, enjoy a full-day excursion to Solang Valley and, subject to permit and weather conditions, Rohtang Pass. Experience adventure activities like paragliding, ziplining, ATV rides, snow scooter rides, and skiing (seasonal). Return to Manali for an overnight stay."
         },
         {
            day: "Day 6",
            title: "Manali to Delhi Departure",
            description: "After breakfast, check out from the hotel and proceed to the Manali Volvo Bus Stand or private transfer point for your return journey to Delhi, marking the end of your memorable Shimla Manali tour."
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
      time: "5 Days",
      guest: "8 Guests",
      title: "Blissful Kullu Manali Tour",
      location: "Kullu & Manali, Himachal Pradesh",
      price: "Price On Request",
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
            title: "Manali Local Sightseeing",
            description: "Arrive in Manali and check in to your hotel. Later, visit the famous Hadimba Devi Temple, Vashisht Hot Springs, Tibetan Monastery, Van Vihar, Club House, and enjoy shopping at Mall Road. Overnight stay in Manali."
         },
         {
            day: "Day 3",
            title: "Solang Valley & Rohtang Pass Excursion",
            description: "After breakfast, proceed for a full-day excursion to Solang Valley and, subject to weather and permit availability, Rohtang Pass. Enjoy adventure activities like paragliding, ATV rides, ziplining, snow scooter rides, and skiing (seasonal). Return to Manali for an overnight stay."
         },
         {
            day: "Day 4",
            title: "Kullu Valley Sightseeing",
            description: "After breakfast, explore the beautiful Kullu Valley. Visit the Kullu Shawl Factory, Vaishno Devi Temple, Naggar Castle, and enjoy optional river rafting on the Beas River. Return to Manali in the evening for an overnight stay."
         },
         {
            day: "Day 5",
            title: "Manali to Delhi",
            description: "After breakfast, check out from the hotel. Spend some leisure time exploring the local market before boarding your evening Volvo or private transfer back to Delhi with unforgettable memories of your Kullu Manali tour."
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
      time: "7 Days",
      guest: "12 Guests",
      title: "Heaven Himachal Tour Package",
      location: "Shimla, Manali & Dharamshala, Himachal Pradesh",
      price: "Price On Request",
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
            title: "Manali Local Sightseeing",
            description: "Explore Hadimba Devi Temple, Vashisht Hot Springs, Tibetan Monastery, Van Vihar, Club House, and Mall Road. Overnight stay in Manali."
         },
         {
            day: "Day 5",
            title: "Solang Valley Excursion",
            description: "Enjoy a full-day excursion to Solang Valley. Experience adventure activities such as paragliding, ziplining, ATV rides, skiing, and snow scooter rides (seasonal and at an additional cost). Return to Manali for an overnight stay."
         },
         {
            day: "Day 6",
            title: "Manali to Dharamshala",
            description: "After breakfast, drive to Dharamshala via Palampur. Visit the beautiful tea gardens en route. Check in to your hotel and enjoy the peaceful surroundings."
         },
         {
            day: "Day 7",
            title: "Dharamshala Sightseeing & Departure",
            description: "Visit the Dalai Lama Temple, Namgyal Monastery, Bhagsunag Temple, Bhagsu Waterfall, St. John in the Wilderness Church, and the HPCA Cricket Stadium. Later depart for Delhi with unforgettable memories of your Himachal tour."
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
      time: "6 Days",
      guest: "10 Guests",
      title: "Dharamshala Dalhousie Amritsar Tour",
      location: "Amritsar, Dalhousie & Dharamshala",
      price: "Price On Request",
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
            title: "Khajjiar & Kalatop Excursion",
            description: "Enjoy a full-day excursion to Khajjiar, popularly known as the 'Mini Switzerland of India'. Visit Kalatop Wildlife Sanctuary and admire the lush green meadows, dense deodar forests, and panoramic Himalayan views. Return to Dalhousie for an overnight stay."
         },
         {
            day: "Day 4",
            title: "Dalhousie to Dharamshala",
            description: "After breakfast, drive to Dharamshala. En route enjoy the scenic beauty of Kangra Valley. Visit Bhagsunag Temple, Bhagsu Waterfall, Dal Lake, Naddi View Point, and explore the Tibetan Market in McLeod Ganj."
         },
         {
            day: "Day 5",
            title: "Dharamshala Local Sightseeing",
            description: "Visit Namgyal Monastery, Dalai Lama Temple Complex, St. John in the Wilderness Church, HPCA Cricket Stadium, Brajeshwari Temple, and Chamunda Devi Temple. Return to the hotel for an overnight stay."
         },
         {
            day: "Day 6",
            title: "Dharamshala to Amritsar Departure",
            description: "After breakfast, check out from the hotel and drive back to Amritsar Railway Station or Airport for your onward journey with unforgettable memories of your Himachal and Punjab tour."
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
      time: "8 Days",
      guest: "15 Guests",
      title: "Himachal Adventure Tour Package",
      location: "Shimla, Manali & Kasol, Himachal Pradesh",
      price: "Price On Request",
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
            title: "Kasol & Tosh Excursion",
            description: "Explore the beautiful villages of Tosh and Kasol. Enjoy short nature trails, riverside cafés, mountain views, and the serene atmosphere of Parvati Valley before returning to your hotel."
         },
         {
            day: "Day 8",
            title: "Departure",
            description: "After breakfast, check out from the hotel and proceed to Delhi/Chandigarh with unforgettable memories of your Himachal adventure tour."
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
      time: "5 Days",
      guest: "8 Guests",
      title: "Tirthan Valley Tour Package",
      location: "Tirthan Valley & Jibhi, Himachal Pradesh",
      price: "Price On Request",
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
            title: "Chehni Kothi & Tirthan Valley Exploration",
            description: "Check out from the hotel and visit the historic Chehni Kothi, one of Himachal's tallest traditional wooden towers. Later explore the beautiful Tirthan River, Banjar Valley, and nearby villages before heading to Aut to board your overnight Volvo for Delhi."
         },
         {
            day: "Day 5",
            title: "Arrival in Delhi",
            description: "Arrive in Delhi early morning with unforgettable memories of the peaceful landscapes, scenic treks, and charming villages of Tirthan Valley."
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

   // Spiti - 3 packages
   {
      id: 7,
      destination: "spiti",
      thumb: listing3_img1,
      tag: "Adventure",
      time: "10 Days",
      guest: "12 Guests",
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
      guest: "10 Guests",
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
      guest: "15 Guests",
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
      time: "10 Days",
      guest: "12 Guests",
      title: "Best of Ladakh Tour Package",
      location: "Leh, Nubra Valley, Pangong Lake & Tso Moriri",
      price: "Price On Request",
      review: 4.9,
      total_review: "(89 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Leh",
            description: "Arrive at Leh Airport and transfer to your hotel. Spend the day resting and acclimatizing to the high altitude. In the evening, explore Leh Market at your own pace. Overnight stay in Leh."
         },
         {
            day: "Day 2",
            title: "Leh Local Sightseeing",
            description: "Visit Shanti Stupa, Leh Palace, Hall of Fame Museum, Magnetic Hill, Gurudwara Pathar Sahib, Sangam Point, and the local market. Return to the hotel for an overnight stay in Leh."
         },
         {
            day: "Day 3",
            title: "Leh to Nubra Valley via Khardung La",
            description: "Drive across the famous Khardung La Pass, one of the world's highest motorable roads, to reach Nubra Valley. Visit Diskit Monastery and enjoy a camel ride at the Hunder Sand Dunes. Overnight stay in Nubra Valley."
         },
         {
            day: "Day 4",
            title: "Nubra Valley to Pangong Lake",
            description: "Travel via the scenic Shyok route to the breathtaking Pangong Lake. Spend the evening enjoying the changing colors of the crystal-clear lake. Overnight stay in camps near Pangong."
         },
         {
            day: "Day 5",
            title: "Pangong Lake to Leh",
            description: "Witness the beautiful sunrise over Pangong Lake before driving back to Leh via Chang La Pass. Enjoy the scenic journey and overnight stay in Leh."
         },
         {
            day: "Day 6",
            title: "Leh to Tso Moriri",
            description: "Drive through Chumathang and the beautiful Indus Valley to reach the pristine Tso Moriri Lake. Visit Korzok Village and enjoy the peaceful surroundings. Overnight stay near Tso Moriri."
         },
         {
            day: "Day 7",
            title: "Tso Moriri to Leh",
            description: "After breakfast, return to Leh while enjoying the stunning landscapes of Ladakh. Evening free for shopping or café hopping. Overnight stay in Leh."
         },
         {
            day: "Day 8",
            title: "Leh to Uleytokpo via Alchi",
            description: "Visit the famous Alchi Monastery, Likir Monastery, Basgo Palace, and Sangam Point before reaching the peaceful village of Uleytokpo. Overnight stay in Uleytokpo."
         },
         {
            day: "Day 9",
            title: "Uleytokpo to Leh",
            description: "After breakfast, return to Leh. Spend the rest of the day exploring local cafés, shopping for souvenirs, or relaxing at your hotel. Overnight stay in Leh."
         },
         {
            day: "Day 10",
            title: "Departure from Leh",
            description: "After breakfast, check out from the hotel and transfer to Leh Airport for your onward flight with unforgettable memories of your Ladakh adventure."
         }
      ],

      inclusions: [
         "Accommodation in hotels, guesthouses & camps",
         "Daily Breakfast & Dinner",
         "Private vehicle for all transfers and sightseeing",
         "Inner Line Permits",
         "Airport pick-up & drop",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare",
         "Lunch and personal expenses",
         "Camel ride and other adventure activities",
         "Monument entry fees",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 11,
      destination: "leh",
      thumb: imgPangong,
      time: "7 Days",
      guest: "10 Guests",
      title: "Leh Ladakh with Pangong Lake Tour",
      location: "Leh & Pangong Lake, Ladakh",
      price: "Price On Request",
      review: 4.8,
      total_review: "(56 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Leh",
            description: "Arrive at Leh Airport and transfer to your hotel. Spend the day resting and acclimatizing to the high altitude. In the evening, visit Shanti Stupa, Leh Palace, and explore the vibrant Leh Market. Overnight stay in Leh."
         },
         {
            day: "Day 2",
            title: "Sham Valley Sightseeing",
            description: "After breakfast, explore Hall of Fame Museum, Gurudwara Pathar Sahib, Magnetic Hill, Sangam Point (Indus & Zanskar Rivers), SECMOL Campus, and Spituk Monastery. Return to Leh for an overnight stay."
         },
         {
            day: "Day 3",
            title: "Khardung La Excursion",
            description: "Drive to the iconic Khardung La Pass, one of the world's highest motorable roads. Enjoy spectacular Himalayan views before returning to Leh. Spend the evening shopping or relaxing at local cafés."
         },
         {
            day: "Day 4",
            title: "Leh to Pangong Lake",
            description: "Travel to the breathtaking Pangong Lake via Chang La Pass. Visit Changla Baba Temple and enjoy the changing shades of the crystal-clear lake. Overnight stay in camps near Pangong Lake."
         },
         {
            day: "Day 5",
            title: "Pangong Lake to Leh",
            description: "Enjoy a beautiful sunrise at Pangong Lake before returning to Leh. En route visit Thiksey Monastery, Shey Palace, and Druk Padma Karpo School (Rancho School). Overnight stay in Leh."
         },
         {
            day: "Day 6",
            title: "Leh Local Leisure",
            description: "Spend the day exploring Leh at your own pace. Visit local monasteries, traditional markets, Tibetan handicraft shops, cafés, or simply relax at the hotel. Overnight stay in Leh."
         },
         {
            day: "Day 7",
            title: "Departure from Leh",
            description: "After breakfast, check out from the hotel and transfer to Leh Airport for your onward flight with unforgettable memories of the magical landscapes of Ladakh."
         }
      ],

      inclusions: [
         "Accommodation in hotels & deluxe camps",
         "Daily Breakfast & Dinner",
         "Private vehicle for all transfers and sightseeing",
         "Inner Line Permits",
         "Airport pick-up & drop",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare",
         "Lunch and personal expenses",
         "Monument entry fees",
         "Adventure activities",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 12,
      destination: "leh",
      thumb: imgSrinagar,
      tag: "Bestseller",
      time: "10 Days",
      guest: "15 Guests",
      title: "Manali Leh Srinagar Bike Adventure",
      location: "Manali, Leh & Srinagar",
      price: "Price On Request",
      review: 4.9,
      total_review: "(34 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Delhi to Manali (Overnight Volvo Journey)",
            description: "Board your overnight Volvo bus from Delhi and enjoy a comfortable journey through the Himalayan foothills towards Manali."
         },
         {
            day: "Day 2",
            title: "Arrival in Manali & Bike Allocation",
            description: "Reach Manali, check in to your hotel, complete bike allocation and briefing. Explore Hadimba Temple, Mall Road, Old Manali, and relax before the expedition begins."
         },
         {
            day: "Day 3",
            title: "Manali to Jispa via Atal Tunnel",
            description: "Ride through the famous Atal Tunnel, passing Sissu Waterfall and Keylong before reaching Jispa. Enjoy stunning mountain scenery and overnight stay in Jispa."
         },
         {
            day: "Day 4",
            title: "Jispa to Sarchu",
            description: "Ride across Deepak Tal, Suraj Tal, Baralacha La Pass and Zing Zing Bar before reaching the vast plains of Sarchu. Overnight stay in camps."
         },
         {
            day: "Day 5",
            title: "Sarchu to Leh",
            description: "Cross Gata Loops, Nakee La, Lachulung La, Pang, More Plains and Tanglang La before arriving in Leh. Overnight stay in Leh."
         },
         {
            day: "Day 6",
            title: "Leh Local Sightseeing",
            description: "Visit Shanti Stupa, Leh Palace, Hall of Fame Museum, Leh Market, and enjoy local cafés before returning to your hotel."
         },
         {
            day: "Day 7",
            title: "Leh to Nubra Valley via Khardung La",
            description: "Ride across the legendary Khardung La Pass to Nubra Valley. Visit Diskit Monastery and enjoy a camel ride at Hunder Sand Dunes. Overnight stay in Nubra."
         },
         {
            day: "Day 8",
            title: "Nubra Valley to Pangong Lake",
            description: "Ride through the scenic Shyok route to Pangong Lake. Spend the evening enjoying the crystal-clear lake surrounded by majestic mountains. Overnight stay in camps."
         },
         {
            day: "Day 9",
            title: "Pangong Lake to Leh",
            description: "Witness the beautiful sunrise over Pangong Lake before riding back to Leh via Chang La Pass. Enjoy the evening at leisure."
         },
         {
            day: "Day 10",
            title: "Leh to Srinagar Departure",
            description: "Ride towards Srinagar via Lamayuru Monastery, Magnetic Hill, Kargil, Drass War Memorial and the beautiful Zojila Pass, concluding your unforgettable Himalayan bike expedition."
         }
      ],

      inclusions: [
         "Royal Enfield Bike (as per package)",
         "Fuel for the entire expedition",
         "Accommodation in hotels, guesthouses & camps",
         "Daily Breakfast & Dinner",
         "Experienced Ride Captain",
         "Backup Support Vehicle",
         "Experienced Mechanic",
         "Inner Line Permits",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare / Train Fare / Volvo Tickets",
         "Lunch and personal expenses",
         "Bike security deposit (if applicable)",
         "Fuel for personal use or detours",
         "Adventure activities",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },

   // Kashmir - 3 packages
   {
      id: 13,
      destination: "kashmir",
      thumb: listing3_img4,
      tag: "Paradise",
      time: "6 Days",
      guest: "10 Guests",
      title: "Trails of Kashmir | Shikara Rides, Glaciers & Meadows",
      location: "Srinagar, Gulmarg, Sonamarg & Pahalgam",
      price: "Price On Request",
      review: 4.8,
      total_review: "(78 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Srinagar | Mughal Gardens & Shikara Ride",
            description: "Arrive at Srinagar Airport and transfer to your hotel/houseboat. Visit the famous Mughal Gardens including Nishat Bagh, Shalimar Bagh, Pari Mahal, and Shankaracharya Temple. In the evening, enjoy a relaxing Shikara ride on Dal Lake. Overnight stay in Srinagar."
         },
         {
            day: "Day 2",
            title: "Excursion to Sonamarg",
            description: "After breakfast, drive to Sonamarg, also known as the 'Meadow of Gold'. Visit the beautiful Thajiwas Glacier by pony (optional) and explore the breathtaking Zero Point near Zojila Pass (subject to road conditions). Return to Srinagar for an overnight stay."
         },
         {
            day: "Day 3",
            title: "Srinagar to Gulmarg",
            description: "Drive to Gulmarg, one of India's most beautiful hill stations. Visit Gulmarg Golf Course, St. Mary's Church, and enjoy the famous Gulmarg Gondola ride (tickets at own cost). Overnight stay in Gulmarg."
         },
         {
            day: "Day 4",
            title: "Gulmarg to Pahalgam",
            description: "After breakfast, drive to Pahalgam via saffron fields and apple orchards. Explore Betaab Valley, Aru Valley, and Baisaran Valley (by local union cab at own cost). Overnight stay in Pahalgam."
         },
         {
            day: "Day 5",
            title: "Pahalgam to Srinagar | Houseboat Experience",
            description: "Return to Srinagar after breakfast. Spend the evening relaxing on a traditional Kashmiri houseboat, explore the local market, and enjoy the peaceful atmosphere of Dal Lake. Overnight stay in a houseboat."
         },
         {
            day: "Day 6",
            title: "Departure from Srinagar",
            description: "After breakfast, check out from the houseboat and transfer to Srinagar Airport for your onward journey with unforgettable memories of Kashmir."
         }
      ],

      inclusions: [
         "Accommodation in hotels & one-night deluxe houseboat",
         "Daily Breakfast & Dinner",
         "Private cab for all transfers & sightseeing",
         "One Shikara Ride on Dal Lake",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare",
         "Gulmarg Gondola tickets",
         "Union cab charges in Gulmarg & Pahalgam",
         "Pony rides",
         "Lunch and personal expenses",
         "Travel insurance",
         "Anything not mentioned under 'Inclusions'"
      ]
   },
   {
      id: 14,
      destination: "kashmir",
      thumb: imgKashmir,
      time: "7 Days",
      guest: "12 Guests",
      title: "Kashmir Family Tour Package",
      location: "Srinagar, Gulmarg, Pahalgam & Sonmarg",
      price: "Price On Request",
      review: 4.7,
      total_review: "(45 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Srinagar | Shikara Ride",
            description: "Arrive at Srinagar Airport and transfer to your hotel. After check-in and some rest, enjoy a relaxing Shikara ride on the beautiful Dal Lake. Spend the evening exploring the local market before an overnight stay in Srinagar."
         },
         {
            day: "Day 2",
            title: "Srinagar to Gulmarg",
            description: "After breakfast, drive to Gulmarg. Visit the famous Gulmarg Golf Course, Strawberry Valley, Drung Waterfall, and enjoy the scenic Gondola Ride (optional). Overnight stay in Gulmarg."
         },
         {
            day: "Day 3",
            title: "Gulmarg to Pahalgam",
            description: "After breakfast, drive to Pahalgam. Visit the ancient Mamleshwar Temple and spend the evening exploring the local market famous for saffron, dry fruits, and Kashmiri handicrafts. Overnight stay in Pahalgam."
         },
         {
            day: "Day 4",
            title: "Pahalgam Sightseeing",
            description: "Explore the scenic beauty of Aru Valley, Betaab Valley, and Chandanwari (via local union cab). Adventure lovers can also enjoy river rafting on the Lidder River (optional). Overnight stay in Pahalgam."
         },
         {
            day: "Day 5",
            title: "Pahalgam to Srinagar",
            description: "Return to Srinagar and visit the famous Mughal Gardens including Nishat Bagh, Shalimar Bagh, Chashme Shahi, Pari Mahal, and the historic Shankaracharya Temple. Overnight stay in Srinagar."
         },
         {
            day: "Day 6",
            title: "Sonmarg Excursion & Houseboat Stay",
            description: "After breakfast, enjoy a full-day excursion to Sonmarg. Visit Thajiwas Glacier (optional pony ride), enjoy the breathtaking Himalayan scenery, and return to Srinagar in the evening. Check in to a traditional Kashmiri houseboat on Dal Lake for an unforgettable overnight stay."
         },
         {
            day: "Day 7",
            title: "Departure from Srinagar",
            description: "After breakfast, check out from the houseboat and transfer to Srinagar Airport for your onward journey with wonderful memories of Kashmir."
         }
      ],

      inclusions: [
         "Accommodation in hotels & one-night deluxe houseboat",
         "Daily Breakfast & Dinner",
         "Private cab for all transfers & sightseeing",
         "One Shikara Ride on Dal Lake",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare",
         "Gulmarg Gondola tickets",
         "Union cab charges in Gulmarg & Pahalgam",
         "Pony ride & rafting charges",
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
      time: "8 Days",
      guest: "15 Guests",
      title: "Romantic Escape to Kashmir | Peaks, Valleys & Meadows",
      location: "Srinagar, Gulmarg, Pahalgam & Sonmarg",
      price: "Price On Request",
      review: 4.9,
      total_review: "(62 Reviews)",

      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Srinagar | Mughal Gardens & Shikara Ride",
            description: "Arrive at Srinagar Airport and transfer to your hotel. Visit the famous Mughal Gardens including Nishat Bagh, Shalimar Bagh, Pari Mahal, and Shankaracharya Temple. In the evening, enjoy a romantic Shikara ride on Dal Lake. Overnight stay in Srinagar."
         },
         {
            day: "Day 2",
            title: "Excursion to Sonmarg",
            description: "After breakfast, drive to the picturesque Sonmarg, also known as the 'Meadow of Gold'. Enjoy an optional pony ride to Thajiwas Glacier and admire the breathtaking Himalayan scenery. Return to Srinagar for an overnight stay."
         },
         {
            day: "Day 3",
            title: "Srinagar to Gulmarg",
            description: "Drive to Gulmarg after breakfast. Visit the famous Gulmarg Golf Course, St. Mary's Church, Strawberry Valley, and enjoy the Gondola Cable Car ride (optional). Overnight stay in Gulmarg."
         },
         {
            day: "Day 4",
            title: "Gulmarg Sightseeing",
            description: "Spend the day exploring Gulmarg. Visit Drung Waterfall, enjoy nature walks, or indulge in optional adventure activities like skiing, ATV rides, and Gondola rides. Overnight stay in Gulmarg."
         },
         {
            day: "Day 5",
            title: "Gulmarg to Pahalgam",
            description: "Drive to Pahalgam via saffron fields and apple orchards. Visit the historic Mamleshwar Temple and spend the evening exploring the local market. Overnight stay in Pahalgam."
         },
         {
            day: "Day 6",
            title: "Pahalgam Sightseeing",
            description: "Explore the beautiful Aru Valley, Betaab Valley, Baisaran Valley, and Chandanwari (via local union cab at own cost). Adventure lovers can also enjoy river rafting on the Lidder River. Overnight stay in Pahalgam."
         },
         {
            day: "Day 7",
            title: "Return to Srinagar | Houseboat Stay",
            description: "After breakfast, drive back to Srinagar. Check in to a traditional Kashmiri houseboat on Dal Lake. Spend the evening enjoying the peaceful surroundings and shopping in the local floating market. Overnight stay in the houseboat."
         },
         {
            day: "Day 8",
            title: "Departure from Srinagar",
            description: "After breakfast, check out from the houseboat and transfer to Srinagar Airport for your onward journey with unforgettable memories of the Paradise on Earth."
         }
      ],

      inclusions: [
         "Accommodation in hotels & one-night deluxe houseboat",
         "Daily Breakfast & Dinner",
         "Private cab for all transfers & sightseeing",
         "One Shikara Ride on Dal Lake",
         "Driver allowance, toll tax & parking charges"
      ],

      exclusions: [
         "Airfare",
         "Gulmarg Gondola tickets",
         "Union cab charges in Gulmarg & Pahalgam",
         "Pony ride & rafting charges",
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
      guest: "10 Guests",
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
      guest: "12 Guests",
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
      guest: "15 Guests",
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
      guest: "12 Guests",
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
      guest: "10 Guests",
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
      guest: "15 Guests",
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
      time: "6 Days",
      guest: "10 Guests",
      title: "Kerala Delight | Discover the Charm of Backwaters",
      location: "Alleppey, Kerala",
      price: "Price On Request",
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
            description: "After breakfast, drive to Munnar through scenic hills and tea plantations. En route visit Cheeyappara Waterfalls and Valara Waterfalls. Check in to the hotel and enjoy the peaceful surroundings."
         },
         {
            day: "Day 3",
            title: "Munnar Sightseeing",
            description: "Explore the beautiful attractions of Munnar including Echo Point, Mattupetty Dam, Kundala Lake, Blossom Park, Sevenmallay Tea Estate, and Eravikulam National Park. Return to the hotel for an overnight stay."
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
         "Hotel & houseboat accommodation",
         "Daily breakfast in hotels",
         "All meals on the houseboat",
         "Private cab for transfers & sightseeing",
         "Driver allowance, toll taxes & parking"
      ],
      exclusions:
         "Airfare/train fare, monument entry fees, boating charges (except houseboat), personal expenses, tips, and anything not mentioned in the inclusions."
   },
   {
      id: 23,
      destination: "kerala",
      thumb: imgKerala,
      time: "6 Days",
      guest: "12 Guests",
      title: "Classic Kerala Tour with FREE Visit to Tea Estate",
      location: "Munnar, Kerala",
      price: "Price On Request",
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
            description: "After breakfast, explore the beauty of Munnar. Visit Echo Point, Mattupetty Dam, Kundala Lake, Blossom Park, Sevenmallay Tea Estate, and Eravikulam National Park. Enjoy panoramic views of lush green valleys before returning to the hotel."
         },
         {
            day: "Day 3",
            title: "Munnar to Thekkady",
            description: "Drive to Thekkady after breakfast. Visit Periyar Wildlife Sanctuary and enjoy an optional boat safari on Periyar Lake. Explore the famous spice plantations and Elephant Junction before checking into your hotel for an overnight stay."
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
         "Hotel & houseboat accommodation",
         "Daily breakfast in hotels",
         "All meals on the houseboat",
         "Private cab for sightseeing & transfers",
         "Driver allowance, toll taxes & parking"
      ],
      exclusions:
         "Airfare/train fare, monument entry fees, boating charges (except houseboat), personal expenses, tips, and anything not mentioned in the inclusions."
   },
   {
      id: 24,
      destination: "kerala",
      thumb: imgMunnar,
      tag: "Nature",
      time: "7 Days",
      guest: "15 Guests",
      title: "Munnar Weekend Escape from Chennai",
      location: "Munnar, Kerala",
      price: "Price On Request",
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
            description: "After breakfast, explore Munnar's famous attractions including the Tata Tea Museum, lush tea plantations, 2nd Mile Viewpoint, Carmelagiri Elephant Park, Mattupetty Dam, Echo Point, Pullu Medu Elephant Viewpoint, and Kundala Lake. Return to the hotel for an overnight stay."
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
            description: "After breakfast, drive to Kovalam. Relax at the famous Lighthouse Beach, Hawa Beach, and Samudra Beach. Enjoy the beautiful sunset and peaceful seaside atmosphere. Overnight stay in Kovalam."
         },
         {
            day: "Day 6",
            title: "Kovalam & Trivandrum Sightseeing",
            description: "Visit Padmanabhaswamy Temple, Napier Museum, Kuthiramalika Palace, Shangumugham Beach, and the nearby Vizhinjam Lighthouse. Spend the evening shopping for local handicrafts before returning to your hotel."
         },
         {
            day: "Day 7",
            title: "Departure",
            description: "After breakfast, check out from the hotel and transfer to Trivandrum Airport/Railway Station for your onward journey with wonderful memories of Kerala."
         }
      ],
      inclusions: [
         "Hotel & houseboat accommodation",
         "Daily breakfast",
         "All meals on the houseboat",
         "Private cab for sightseeing & transfers",
         "Driver allowance, toll taxes & parking"
      ],
      exclusions:
         "Airfare/train fare, monument entry fees, boating charges (except houseboat), personal expenses, tips, and anything not mentioned in the inclusions."
   },

   // Goa - 3 packages
   {
      id: 25,
      destination: "goa",
      thumb: listing_imggoa,
      tag: "Beach",
      time: "4 Days",
      guest: "8 Guests",
      title: "Weekend Trip to Goa with Dudhsagar Excursion",
      location: "North Goa, Goa",
      price: "Price On Request",
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
            description: "After breakfast, head towards the magnificent Dudhsagar Waterfalls by jeep safari. Witness one of India's tallest waterfalls surrounded by lush forests. Later, visit a traditional spice plantation, learn about aromatic spices, and enjoy an authentic Goan lunch before returning to the hotel."
         },
         {
            day: "Day 4",
            title: "Departure",
            description: "After breakfast, check out from the hotel and transfer to Goa Airport or Railway Station for your onward journey with unforgettable memories of your beach vacation."
         }
      ],
      inclusions: [
         "Hotel accommodation",
         "Daily breakfast",
         "Private transfers & sightseeing",
         "Mandovi River Cruise",
         "Driver allowance, toll taxes & parking"
      ],
      exclusions:
         "Airfare/train fare, entry tickets, jeep safari charges, water sports, personal expenses, tips, and anything not mentioned in the inclusions."
   },
   {
      id: 26,
      destination: "goa",
      thumb: imggoa,
      time: "6 Days",
      guest: "10 Guests",
      title: "Goa Group Tour Package",
      location: "South Goa, Goa",
      price: "Price On Request",
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
            description: "After breakfast, enjoy a full-day South Goa sightseeing tour. Visit the Basilica of Bom Jesus, Se Cathedral, Dona Paula View Point, Miramar Beach, and Panjim City. In the evening, enjoy a lively Mandovi River Cruise with music and cultural performances before returning to the hotel."
         },
         {
            day: "Day 3",
            title: "North Goa Sightseeing",
            description: "Explore the famous attractions of North Goa including Fort Aguada, Sinquerim Beach, Calangute Beach, Baga Beach, Anjuna Beach, and Vagator Beach. Spend the evening enjoying Goa's nightlife or beach cafés. Overnight stay in Goa."
         },
         {
            day: "Day 4",
            title: "Water Sports & Leisure",
            description: "After breakfast, head to Candolim Beach or Calangute Beach to enjoy exciting water sports like Jet Ski, Parasailing, Banana Boat Ride, Speed Boat Ride, and Bumper Ride (optional). Spend the rest of the day shopping or relaxing by the beach."
         },
         {
            day: "Day 5",
            title: "Dudhsagar Waterfalls & Spice Plantation",
            description: "Visit the spectacular Dudhsagar Waterfalls by jeep safari. Later, explore a traditional spice plantation, learn about Kerala and Goan spices, and enjoy an authentic local lunch before returning to the hotel."
         },
         {
            day: "Day 6",
            title: "Departure",
            description: "After breakfast, check out from the hotel and transfer to Goa Airport or Railway Station for your onward journey with unforgettable memories of your Goa vacation."
         }
      ],
      inclusions: [
         "Hotel accommodation",
         "Daily breakfast",
         "Private cab for transfers & sightseeing",
         "Mandovi River Cruise",
         "Driver allowance, toll taxes & parking"
      ],
      exclusions:
         "Airfare/train fare, entry tickets, water sports charges, jeep safari charges, personal expenses, tips, and anything not mentioned in the inclusions."
   },
   {
      id: 27,
      destination: "goa",
      thumb: imgBackpacking,
      tag: "Adventure",
      time: "6 Days",
      guest: "12 Guests",
      title: "Backpacking Trip to Goa with Watersports Activities",
      location: "Panaji, Goa",
      price: "Price On Request",
      review: 4.7,
      total_review: "(45 Reviews)",
      itinerary: [
         {
            day: "Day 1",
            title: "Arrival in Goa | Let the Fun Begin!",
            description: "Arrive in Goa and meet our representative for a smooth transfer to your hotel. Complete the check-in formalities and relax after your journey. Spend the rest of the day exploring nearby beaches, local markets, or simply unwind at the resort. Enjoy your first evening soaking in Goa's vibrant atmosphere before returning for an overnight stay."
         },
         {
            day: "Day 2",
            title: "North Goa Sightseeing Tour",
            description: "After breakfast, head out to discover the best of North Goa. Visit Aguada Fort, Sinquerim Beach, Candolim Beach, Calangute Beach, Baga Beach, Tito's Lane, Anjuna Beach, and the scenic Vagator Beach. Enjoy stunning coastal views, beachside cafés, and Goa's famous nightlife before returning to your hotel."
         },
         {
            day: "Day 3",
            title: "Water Sports Adventure",
            description: "Fuel up with breakfast before heading to Calangute Beach for an exciting day of adventure. Enjoy thrilling activities like Jet Ski, Parasailing, Banana Boat Ride, Bumper Ride, and Speed Boat Ride (subject to weather and package inclusions). Spend your evening relaxing at beach shacks or shopping at nearby markets before heading back to your hotel."
         },
         {
            day: "Day 4",
            title: "Dudhsagar Waterfall Excursion",
            description: "Today, visit the spectacular Dudhsagar Waterfalls. Travel through Mollem Wildlife Sanctuary by jeep and enjoy a short trek to the magnificent falls. Witness one of India's tallest waterfalls and later explore a nearby spice plantation to experience Goa's rich spice heritage. Return to the hotel for an overnight stay."
         },
         {
            day: "Day 5",
            title: "Butterfly Beach Excursion",
            description: "After breakfast, visit the beautiful Butterfly Beach, one of Goa's hidden gems. Reach via boat from Palolem Beach or trek through the scenic forest trail. Relax on the pristine beach, enjoy swimming, kayaking, snorkeling (optional), and admire the peaceful surroundings. Return to your hotel in the evening."
         },
         {
            day: "Day 6",
            title: "Departure",
            description: "Enjoy your final breakfast in Goa before checking out from the hotel. You will be transferred to Goa Airport or Railway Station for your onward journey with unforgettable memories of beaches, adventure, and relaxation."
         }
      ],
      inclusions: [
         "Hotel accommodation",
         "Daily breakfast",
         "Airport/Railway Station transfers",
         "North Goa sightseeing",
         "Dudhsagar waterfall excursion",
         "Water sports (as per package)",
         "Private/shared transportation"
      ],
      exclusions: [
         "Airfare or train tickets",
         "Lunch and dinner",
         "Personal expenses",
         "Optional activities",
         "Travel insurance",
         "Anything not mentioned in inclusions"
      ]
   },
];

export default destination_data;
