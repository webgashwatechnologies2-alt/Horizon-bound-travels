import Image from "next/image"
import Link from "next/link"

import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getBestSearchUrl } from "@/utils/destinationSearch";

interface MobileSidebarProps {
   offCanvas: boolean;
   setOffCanvas: (offCanvas: boolean) => void;
}

const Offcanvas = ({ offCanvas, setOffCanvas }: MobileSidebarProps) => {
   const router = useRouter();
   const [searchValue, setSearchValue] = useState("");

   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (searchValue.trim()) {
         const targetUrl = getBestSearchUrl(searchValue);
         setOffCanvas(false);
         setSearchValue("");
         router.push(targetUrl);
      } else {
         setOffCanvas(false);
      }
   };

   return (
      <div className={offCanvas ? "mobile-menu-visible" : ""}>
         <div className="tgmobile__menu">
            <nav className="tgmobile__menu-box">
               <div onClick={() => setOffCanvas(false)} className="close-btn"><i className="fa-solid fa-xmark"></i></div>
               <div className="nav-logo">
                  <Link href="/"><Image src="/horizonlogo.jpeg" alt="Horizon Bound Travels" width={150} height={150} style={{ objectFit: 'contain' }} /></Link>
               </div>
               <div className="tgmobile__search">
                  <form onSubmit={handleSubmit}>
                     <input
                        type="text"
                        placeholder="Search here..."
                        value={searchValue}
                        onChange={handleSearchChange}
                     />
                  </form>
               </div>
               <div className="tgmobile__menu-outer">
                  <MobileMenu />
               </div>
               <div className="social-links">
                  <ul className="list-wrap">
                     <li><Link href="https://www.facebook.com/profile.php?id=61591492783445"><i className="fab fa-facebook-f"></i></Link></li>
                     <li><Link href="https://www.instagram.com/horizonboundtravels/?hl=en"><i className="fab fa-instagram"></i></Link></li>
                     <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                  </ul>
               </div>
            </nav>
         </div>
         <div onClick={() => setOffCanvas(false)} className="tgmobile__menu-backdrop"></div>
      </div>
   )
}

export default Offcanvas
