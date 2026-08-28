interface DestinationHeroProps {
  destination: string;
}
const DestinationHero = ({ destination }: DestinationHeroProps) => {
  const destinationName = destination.charAt(0).toUpperCase() + destination.slice(1);
  const heroImages: Record<string, string> = {
    himachal: "/assets/img/hero/tu/herothree.jpg",
    spiti: "/assets/img/hero/tu/spt.jpg",
    uttarakhand: "/assets/img/hero/tu/ukbaner.jpg",
    kashmir: "/assets/img/hero/tu/kashmir1.jpg",
    leh : "/assets/img/hero/tu/ladakhbanner.jpg",
    goa: "/assets/img/hero/tu/Goa-India.jpg",
    rajasthan: "/assets/img/hero/tu/rajsthan.jpg",
    kerala: "/assets/img/hero/tu/kashmirbaner.jpeg",
    default: "/assets/img/hero/tu/default.jpg",
    dubai: "/assets/img/listing/listing-3/dbhero.jpg",
    maldives: "/assets/img/listing/listing-3/maldives.jpg",
    "hong-kong": "/assets/img/listing/listing-3/hkbaner.jpg",
    mauritius: "/assets/img/listing/listing-3/mauritius.jpg",
    malaysia: "/assets/img/listing/listing-3/mylsiahero.jpg",
    vietnam: "/assets/img/listing/listing-3/vthero.jpg",
    thailand: "/assets/img/listing/listing-3/thailandhero.jpg",
    singapore: "/assets/img/listing/listing-3/spurhero.jpg",
    bali: "/assets/img/listing/listing-3/balihero.jpg",
    europe: "/assets/img/listing/listing-3/europerhero.jpg",
};
const heroImage =
  heroImages[destinationName?.toLowerCase()] || heroImages.default;
  return (
    <div 
      className="tg-hero-area include-bg" 
      style={{ 
         backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 0',
        position: 'relative'
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tg-hero-content text-center">
              <div className="tg-hero-title-box">
                <h2 className="tg-hero-title">{destinationName} Tour Packages</h2>
                <p className="tg-hero-subtitle">Explore our curated travel packages for {destinationName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationHero;
