import Image from "next/image"
import Link from "next/link"

interface SidebarProps {
   sidebar: boolean;
   setSidebar: (offCanvas: boolean) => void;
}

const Sidebar = ({ sidebar, setSidebar }: SidebarProps) => {
   return (
      <>
         <div className={`offCanvas__info ${sidebar ? "active" : ""}`}>
            <div className="offCanvas__close-icon menu-close">
               <button onClick={() => setSidebar(false)}><i className="fa-sharp fa-regular fa-xmark"></i></button>
            </div>
            <div className="offCanvas__logo mb-30">
               <Link href="/"><Image src="/horizon-logo.png" alt="Horizon Bound Travels" width={150} height={150} /></Link>
            </div>
            <div className="offCanvas__side-info mb-30">
               <div className="contact-list mb-30">
                  <h4>Office Address</h4>
                  <p>Karsogsfnfndndndnn District Mandi Himachal Pradesh 175011</p>
               </div>
               <div className="contact-list mb-30">
                  <h4>Phone Number</h4>
                  <p>+91 82190-98536</p>
               </div>
               <div className="contact-list mb-30">
                  <h4>Email Address</h4>
                  <p>info@horizonboundtravels.com</p>
               </div>
            </div>
            <div className="offCanvas__social-icon mt-30">
               <Link href="/"><i className="fab fa-facebook-f"></i></Link>
               <Link href="/"><i className="fab fa-instagram"></i></Link>
            </div>
         </div>
         <div onClick={() => setSidebar(false)} className={`offCanvas__overly ${sidebar ? "active" : ""}`}></div>
      </>
   )
}

export default Sidebar
