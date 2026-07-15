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
};

// destination slug ko lowercase me convert kar lo
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
