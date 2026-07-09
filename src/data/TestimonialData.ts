import { StaticImageData } from "next/image";

import avatar_1 from "@/assets/img/testimonial/avatar.png"
import avatar_2 from "@/assets/img/testimonial/avatar-2.png"
import avatar_3 from "@/assets/img/testimonial/avatar-3.png"

interface DataType {
   id: number;
   page:string;
   avatar: StaticImageData;
   name: string;
   designation: string;
   desc: string;
}

const testi_data: DataType[] = [
   {
      id: 1,
      page:"home_2",
      avatar: avatar_1,
      name: "Sakshi Sharma",
      designation: "Traveller, Himachal Trip",
      desc: "Our Himachal trip with Horizon Bound Travels was absolutely magical. From the snow-capped mountains to the cozy stays, every detail was well planned. The driver was punctual and friendly throughout the journey.",
   },
   {
      id: 2,
      page:"home_2",
      avatar: avatar_2,
      name: "Harshit",
      designation: "Traveller, Spiti Valley Trip",
      desc: "Spiti Valley was on our bucket list for years, and Horizon Bound Travels made it happen seamlessly. The rugged landscapes, monasteries, and local experiences were curated perfectly. Highly recommend for adventure lovers!",
   },
   {
      id: 3,
      page:"home_2",
      avatar: avatar_3,
      name: "Priya Agarwaal",
      designation: "Traveller, Kashmir Trip",
      desc: "Kashmir truly felt like paradise on earth. The team took care of every small detail, from houseboat stays in Srinagar to the drive through Gulmarg. A wonderful and hassle-free experience overall.",
   },
   {
      id: 4,
      page:"home_2",
      avatar: avatar_2,
      name: "Neha Sharma",
      designation: "Traveller, Kerala Trip",
      desc: "Our Kerala backwaters tour with Horizon Bound Travels was refreshing and well organized. The houseboat stay, local cuisine, and scenic routes made it an unforgettable family holiday.",
   },
];

export default testi_data;