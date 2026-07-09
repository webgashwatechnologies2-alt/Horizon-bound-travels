"use client";
import React, { useState } from 'react';
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterThree from "@/layouts/footers/FooterThree";
import BreadCrumb from "@/components/common/BreadCrumb";
import Wrapper from "@/layouts/Wrapper";
import { toast } from "react-toastify";

const HotelServicePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: '',
    checkIn: '',
    checkOut: '',
    rooms: '1',
    guests: '2',
    hotelCat: 'Premium (4 Star)',
    mealPlan: 'MAP (Breakfast + Dinner)',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.destination || !formData.checkIn || !formData.checkOut) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    // Simulate successful form submission
    toast.success("Hotel Booking Inquiry Submitted! Our accommodation planner will check room inventories and contact you.");
    setFormData({
      name: '',
      phone: '',
      destination: '',
      checkIn: '',
      checkOut: '',
      rooms: '1',
      guests: '2',
      hotelCat: 'Premium (4 Star)',
      mealPlan: 'MAP (Breakfast + Dinner)',
      notes: ''
    });
  };

  const stays = [
    {
      name: "Luxury Resorts & Wellness Retreats",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600",
      description: "Premium 5-star properties offering breathtaking views of the snow-clad peaks, infinity pools, fine-dining restaurants, and rejuvenating spa treatments.",
      rating: "Elite 5★ Comfort",
      features: "Spa, Dining, Heated Rooms",
      locations: "Shimla, Manali, Dharamshala"
    },
    {
      name: "Boutique Wood Cottages & Villas",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=600",
      description: "Combining traditional stone-and-timber Himachali designs with modern amenities, fireplaces, private verandas, and lawn access.",
      rating: "Charming Boutique Vibe",
      features: "Fireplace, Balcony, Private Lawn",
      locations: "Manali, Old Manali, Dalhousie"
    },
    {
      name: "Cultural Homestays & Apple Orchards",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600",
      description: "Immerse yourself in mountain hospitality. Stay with local families, pluck fresh apples, and savor home-cooked Siddu and other local delicacies.",
      rating: "Authentic Cultural Stay",
      features: "Home Cooked Food, Apple Gardens",
      locations: "Jibhi, Spiti Valley, Kalpa"
    },
    {
      name: "Adventure Camps & Luxury Glamping",
      image: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?auto=format&fit=crop&q=80&w=600",
      description: "Sleep under millions of stars in Swiss tents or premium geodesic domes. Enjoy campfires, stargazing, and attached modern washrooms.",
      rating: "Nature Immersion",
      features: "Stargazing, Campfires, Attached Baths",
      locations: "Jispa, Sarchu, Kasol, Spiti"
    }
  ];

  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <BreadCrumb title="Hotel Reservations & Stays" sub_title="Hotel Booking" />
        
        <section className="service-details-area pt-120 pb-120 bg-light">
          <div className="container">
            <div className="row">
              {/* Left Column: Details & Accommodation Categories */}
              <div className="col-lg-8 mb-50">
                <div className="service-content-box mb-40">
                  <div className="tg-section-title-vm mb-25">
                    <span className="icon mb-15 d-inline-flex align-items-center justify-content-center" style={{ width: '55px', height: '55px', borderRadius: '50%', background: 'rgba(255, 124, 8, 0.08)' }}>
                      <i className="fas fa-hotel" style={{ color: '#ff7c08', fontSize: '24px' }}></i>
                    </span>
                    <h3 className="title-vm text-uppercase" style={{ fontSize: '24px', fontWeight: '700', color: '#0b1c3f' }}>
                      Handpicked Hotels, Resorts, & Camps
                    </h3>
                  </div>
                  <p style={{ color: '#555c6e', fontSize: '15px', lineHeight: '1.8' }}>
                    Avoid the disappointment of mismatched reviews, bad service, or subpar views. At Horizon Bound Travels, we physically inspect and vet every single hotel, resort, cottage, and camp we recommend to our travelers. From boutique wooden retreats tucked inside deep pine forests to high-end luxury resorts in Shimla and rugged adventure camps in Spiti or Ladakh, we guarantee unmatched comfort, hygiene, and hospitality at competitive direct-contract pricing.
                  </p>
                </div>

                {/* Stays Categories Section */}
                <h4 className="mb-25 text-uppercase" style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '20px' }}>
                  Our Accommodation Collections
                </h4>
                <div className="row mb-40">
                  {stays.map((stay, index) => (
                    <div key={index} className="col-md-6 mb-30">
                      <div className="service-fleet-card">
                        <div className="service-fleet-thumb">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={stay.image} alt={stay.name} />
                        </div>
                        <div className="service-fleet-content">
                          <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '17px', marginBottom: '10px' }}>
                            {stay.name}
                          </h5>
                          <p style={{ fontSize: '13.5px', color: '#555c6e', lineHeight: '1.6' }}>
                            {stay.description}
                          </p>
                          <div className="service-fleet-specs">
                            <div className="service-fleet-spec-item">
                              <i className="fas fa-star"></i> {stay.rating}
                            </div>
                            <div className="service-fleet-spec-item">
                              <i className="fas fa- concierge-bell"></i> {stay.features}
                            </div>
                            <div className="service-fleet-spec-item">
                              <i className="fas fa-map-marker-alt"></i> {stay.locations}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features & Benefits */}
                <h4 className="mb-25 text-uppercase" style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '20px' }}>
                  The Horizon Accommodation Standard
                </h4>
                <div className="row mb-40">
                  <div className="col-md-6 mb-20">
                    <div className="service-feature-card">
                      <div className="service-feature-icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '16px' }}>Vetted & Verified Stays</h5>
                      <p style={{ fontSize: '13.5px', color: '#555c6e', marginBottom: 0 }}>
                        We confirm room hygiene, geyser/heating functionality, bathroom cleanliness, and safety standard before adding properties to our catalog.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="service-feature-card">
                      <div className="service-feature-icon">
                        <i className="fas fa-handshake"></i>
                      </div>
                      <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '16px' }}>Direct Contract Tariffs</h5>
                      <p style={{ fontSize: '13.5px', color: '#555c6e', marginBottom: 0 }}>
                        Enjoy rates that are lower than or matching online hotel booking platforms. We pass on our direct corporate volumes savings directly to you.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="service-feature-card">
                      <div className="service-feature-icon">
                        <i className="fas fa-utensils"></i>
                      </div>
                      <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '16px' }}>Flexible Meal Plans</h5>
                      <p style={{ fontSize: '13.5px', color: '#555c6e', marginBottom: 0 }}>
                        Pre-book rooms with your choice of meal packages: EP (Room only), CP (with Breakfast), MAP (Breakfast + Dinner), or AP (all meals).
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="service-feature-card">
                      <div className="service-feature-icon">
                        <i className="fas fa-user-clock"></i>
                      </div>
                      <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '16px' }}>Early Check-in Priority</h5>
                      <p style={{ fontSize: '13.5px', color: '#555c6e', marginBottom: 0 }}>
                        Overnight travel brings travelers early. We coordinate directly with hotel front desks to prioritize room readiness upon early morning arrivals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <h4 className="mb-25 text-uppercase" style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '20px' }}>
                  Frequently Asked Questions
                </h4>
                <div className="accordion service-accordion" id="faqAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What are the check-in and check-out timings in these properties?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        The industry standard across most resorts is a 12:00 PM (noon) check-in and 11:00 AM check-out. If you require early check-in (e.g. at 7:00 AM after an overnight Volvo journey), we advise informing us beforehand. Rooms are subject to availability, but we pre-alert the hotel.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Are rooms equipped with heaters during winters?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        For all winter bookings in high-altitude zones (Shimla, Manali, Spiti, Leh), heating systems (electric blower heaters, radiators, or traditional firewood bukharis) are either included in our premium packages or can be provided directly by the property at a nominal daily charge.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What is your policy regarding booking cancellations?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Cancellation terms vary by property and travel season. Usually, bookings cancelled 15 days or more prior to arrival date are eligible for full refund minus processing fees. In peak seasons (June, December), hotels follow strict non-refundable policies which we declare during booking confirmations.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Inquiry Form */}
              <div className="col-lg-4">
                <div className="service-inquiry-card">
                  <h4 className="service-inquiry-title">Quick Stay Inquiry</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="service-form-group">
                      <label className="service-form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="service-form-input"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Mobile Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="service-form-input"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Destination / City *</label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="service-form-input"
                        placeholder="e.g. Manali, Shimla, Kasol"
                        required
                      />
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Check-In Date *</label>
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className="service-form-input"
                        required
                      />
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Check-Out Date *</label>
                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className="service-form-input"
                        required
                      />
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Stay Category Preference</label>
                      <select
                        name="hotelCat"
                        value={formData.hotelCat}
                        onChange={handleChange}
                        className="service-form-input"
                      >
                        <option value="Premium (4 Star)">Premium (4 Star Resorts)</option>
                        <option value="Luxury (5 Star)">Luxury (5 Star / Heritage Resorts)</option>
                        <option value="Standard (3 Star)">Standard (3 Star Cozy Hotels)</option>
                        <option value="Boutique Cottage">Boutique wooden cottages/villas</option>
                        <option value="Apple Orchard Homestay">Traditional orchard homestays</option>
                        <option value="Adventure Glamping Camps">Glamping / Dome Adventure camps</option>
                      </select>
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Preferred Meal Plan</label>
                      <select
                        name="mealPlan"
                        value={formData.mealPlan}
                        onChange={handleChange}
                        className="service-form-input"
                      >
                        <option value="MAP (Breakfast + Dinner)">MAP (Room + Breakfast + Dinner)</option>
                        <option value="CP (Breakfast only)">CP (Room + Breakfast)</option>
                        <option value="EP (Room only)">EP (Room only - No meals)</option>
                        <option value="AP (All Meals included)">AP (Room + Breakfast + Lunch + Dinner)</option>
                      </select>
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">No. of Rooms & Guests</label>
                      <div className="row g-2">
                        <div className="col-6">
                          <input
                            type="number"
                            name="rooms"
                            value={formData.rooms}
                            onChange={handleChange}
                            className="service-form-input"
                            min="1"
                            placeholder="Rooms"
                            required
                          />
                        </div>
                        <div className="col-6">
                          <input
                            type="number"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="service-form-input"
                            min="1"
                            placeholder="Guests"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Special Requests</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="service-form-input"
                        placeholder="Balcony view, extra bed, heater setup, honeymoon decoration..."
                        rows={3}
                      />
                    </div>
                    <button type="submit" className="service-form-submit">
                      Submit Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterThree />
    </Wrapper>
  );
};

export default HotelServicePage;
