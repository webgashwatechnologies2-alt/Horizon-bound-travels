/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import destination_data from "@/data/DestinationData";
import { useState } from "react";
import { Rating } from 'react-simple-star-rating';

interface FilterCriteria {
  destination: string;
  duration: string;
  rating: number | null;
}

interface FeatureSidebarProps {
  setProducts: (products: any[]) => void;
}

const FeatureSidebar = ({ setProducts }: FeatureSidebarProps) => {
  
  const allProducts = destination_data;
  const filterdProduct = allProducts;

  const [destinationSelected, setDestinationSelected] = useState('');
  const [durationSelected, setDurationSelected] = useState('');
  const [ratingSelected, setRatingSelected] = useState<number | null>(null);

  const destinationFilter = filterdProduct.map(product => product.destination);
  const durationFilter = filterdProduct.map(product => product.time);

  const allDestination = ['All Destination', ...Array.from(new Set(destinationFilter))];
  const allDuration = ['All Duration', ...Array.from(new Set(durationFilter))];

  // Handle destination selection
  const handleDestination = (destination: string) => {
    setDestinationSelected(prevDestination => prevDestination === destination ? '' : destination);
    filterProducts({ destination: destination === destinationSelected ? '' : destination, rating: ratingSelected, duration: durationSelected });
  };

  // Handle duration selection
  const handleDuration = (duration: string) => {
    setDurationSelected(prevDuration => prevDuration === duration ? '' : duration);
    filterProducts({ duration: duration === durationSelected ? '' : duration, destination: destinationSelected, rating: ratingSelected });
  };

  // Handle rating selection
  const handleRating = (rating: number) => {
    setRatingSelected(prevRating => prevRating === rating ? null : rating);
    filterProducts({ destination: destinationSelected, rating: rating === ratingSelected ? null : rating, duration: durationSelected });
  };

  const filterProducts = ({ destination, duration, rating }: FilterCriteria) => {
    let filteredProducts = allProducts;

    if (destination && destination !== 'All Destination') {
      filteredProducts = filteredProducts.filter(product => product.destination === destination);
    }

    if (duration && duration !== 'All Duration') {
      filteredProducts = filteredProducts.filter(product => product.time === duration);
    }

    if (rating !== null) {
      filteredProducts = filteredProducts.filter(product => product.review === rating);
    }

    setProducts(filteredProducts);
  };




  return (
    <div className="col-xl-3 col-lg-4 order-last order-lg-first">
      <div className="tg-filter-sidebar mb-40 top-sticky">
        <div className="tg-filter-item">

          {/* destination */}
          <h4 className="tg-filter-title mb-15">Destination</h4>
          <div className="tg-filter-list">
            <ul>
              {allDestination.map((destination, i) => (
                <li key={i} onClick={() => handleDestination(destination)}>
                  <div className="checkbox d-flex">
                    <input className="tg-checkbox" type="checkbox" checked={destination === destinationSelected} readOnly id={`cat_${i}`} />
                    <label htmlFor={`cat_${i}`} onClick={() => handleDestination(destination)} className="tg-label">{destination}</label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <span className="tg-filter-border mt-25 mb-25"></span>



          {/* duration */}
          <h4 className="tg-filter-title mb-15">Duration</h4>
          <div className="tg-filter-list">
            <ul>
              {allDuration.map((duration, i) => (
                <li key={i} onClick={() => handleDuration(duration)}>
                  <div className="checkbox d-flex">
                    <input className="tg-checkbox" type="checkbox" checked={duration === durationSelected} readOnly id={`duration_${i}`} />
                    <label className="tg-label" htmlFor={`duration_${i}`} onClick={() => handleDuration(duration)}>{duration}</label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <span className="tg-filter-border mt-25 mb-25"></span>



          {/* rating */}
          <h4 className="tg-filter-title mb-15">Top Reviews</h4>
          <div className="tg-filter-list">
            <ul>
              {[5, 4, 3, 2, 1].map((rating, i) => (
                <li key={i} onClick={() => handleRating(rating)}>
                  <div className="checkbox d-flex">
                    <input className="tg-checkbox" type="checkbox" checked={rating === ratingSelected} readOnly id={`rating_${i}`} />
                    <label htmlFor={`rating_${i}`} onClick={() => handleRating(rating)}>
                      <div className="tg-filter-review">
                        <Rating initialValue={rating} size={18} readonly />
                      </div>
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <span className="tg-filter-border mt-25 mb-25"></span>


        </div>
      </div>
    </div>
  )
}

export default FeatureSidebar