import { Metadata } from "next";
import HeaderThree from "@/layouts/headers/HeaderThree";
import DestinationHero from "@/components/common/DestinationHero";
import destination_data from "@/data/DestinationData";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    destination: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { destination } = await params;
  const destinationName = destination.charAt(0).toUpperCase() + destination.slice(1);
  return {
    title: `${destinationName} Packages - Horizon Bound Travels`,
  };
}

export function generateStaticParams() {
  const destinations = Array.from(new Set(destination_data.map(pkg => pkg.destination)));
  return destinations.map((dest) => ({
    destination: dest,
  }));
}


const page = async ({ params }: PageProps) => {
  const { destination } = await params;
  const destinationName = destination;
  const filteredPackages = destination_data.filter(pkg => pkg.destination === destinationName);

  return (
    <>
      <HeaderThree />
      <DestinationHero destination={destinationName} />
      <main className="pt-120 pb-120">
        <div className="container">
          <div className="row">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="col-xl-4 col-lg-6 col-md-6 mb-30">
                <div className="tg-listing-card-item h-80">
                  <div className="tg-listing-card-thumb fix mb-15 p-relative">
                    <Link href={`/tour-details/${pkg.id}`}>
                      <Image className="tg-card-border w-100 h-100" src={pkg.thumb} alt={pkg.title} />
                      {pkg.tag && <span className="tg-listing-item-price-discount shape">{pkg.tag}</span>}
                    </Link>
                  </div>
                  <div className="tg-listing-main-content">
                    <div className="tg-listing-card-content">
                      <h4 className="tg-listing-card-title"><Link href={`/tour-details/${pkg.id}`}>{pkg.title}</Link></h4>
                      <div className="tg-listing-card-duration-tour">
                        <span className="tg-listing-card-duration-map mb-5">
                          <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3329 6.7071C12.3329 11.2324 6.55512 15.1111 6.55512 15.1111C6.55512 15.1111 0.777344 11.2324 0.777344 6.7071C0.777344 5.16402 1.38607 3.68414 2.46962 2.59302C3.55316 1.5019 5.02276 0.888916 6.55512 0.888916C8.07438 0.888916 9.55708 1.5019 10.6406 2.59302C11.7242 3.68414 12.3329 5.16402 12.3329 6.7071Z" stroke="currentColor" strokeWidth="1.15556" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.55512 8.64649C7.61878 8.64649C8.48105 7.7782 8.48105 6.7071C8.48105 5.636 7.61878 4.7677 6.55512 4.7677C5.49146 4.7677 4.6292 5.636 4.6292 6.7071C4.6292 7.7782 5.49146 8.64649 6.55512 8.64649Z" stroke="currentColor" strokeWidth="1.15556" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {pkg.location}
                        </span>
                        <span className="tg-listing-card-duration-time">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00175 3.73329V7.99996L10.8462 9.42218M15.1128 8.00003C15.1128 11.9274 11.9291 15.1111 8.00174 15.1111C4.07438 15.1111 0.890625 11.9274 0.890625 8.00003C0.890625 4.07267 4.07438 0.888916 8.00174 0.888916C11.9291 0.888916 15.1128 4.07267 15.1128 8.00003Z" stroke="currentColor" strokeWidth="1.06667" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {pkg.time}
                        </span>
                      </div>
                    </div>
                    <div className="tg-listing-card-price d-flex align-items-end justify-content-between">
                      <div className="tg-listing-card-price-wrap price-bg d-flex align-items-center">
                        <span className="tg-listing-card-currency-amount mr-5">
                          {pkg.delete_price && <del className="tg-listing-card-currency-old">₹{pkg.delete_price}</del>}
                          <span className="currency-symbol">₹</span>{pkg.price}
                        </span>
                        {/* <span className="tg-listing-card-activity-person">/Person</span> */}
                      </div>
                      <div className="tg-listing-card-review space">
                        <span className="tg-listing-rating-icon"><i className="fa-sharp fa-solid fa-star"></i></span>
                        <span className="tg-listing-rating-percent">{pkg.review} ({pkg.total_review})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
