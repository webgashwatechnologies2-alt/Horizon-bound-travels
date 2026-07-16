"use client";
import React, { useState, useEffect } from 'react';
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterThree from "@/layouts/footers/FooterThree";
import BreadCrumb from "@/components/common/BreadCrumb";
import Wrapper from "@/layouts/Wrapper";
import { toast } from "react-toastify";
import { sendLead } from "@/utils/leadSender";
import imgsedan from "@/assets/img/listing/listing-3/swiftcar.jpg"
import imgSUV from "@/assets/img/listing/listing-3/innova-crysta.jpg"
import imgsuvErtiga from "@/assets/img/listing/listing-3/ertiga.jpg"
import imgTraveller from "@/assets/img/listing/listing-3/tempo-traveller.jpg"

const TaxiCabServicePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    pickup: '',
    drop: '',
    cabType: 'SUV (Innova Crysta)',
    notes: ''
  });

  // ✅ Bootstrap JS ko sirf browser mein load karo, server pe nahi
  useEffect(() => {
     // @ts-expect-error - no type declarations available for bootstrap JS bundle
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.pickup || !formData.drop || !formData.date) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      await sendLead({
        form_type: "Taxi Booking Inquiry",
        name: formData.name,
        phone: formData.phone,
        travel_date: formData.date,
        pickup_location: formData.pickup,
        drop_location: formData.drop,
        cab_type: formData.cabType,
        special_notes: formData.notes
      });

      toast.success("Taxi Booking Inquiry Submitted Successfully! Our executive will contact you shortly.");
      setFormData({
        name: '',
        phone: '',
        date: '',
        pickup: '',
        drop: '',
        cabType: 'SUV (Innova Crysta)',
        notes: ''
      });
    } catch (error) {
      console.error("Taxi inquiry submit error:", error);
      toast.error("Failed to submit inquiry. Please try again later.");
    }
  };

  const fleet = [
    {
      name: "Sedan (Swift Dzire / Toyota Etios)",
      image: imgsedan,
      description: "Comfortable, fuel-efficient, and budget-friendly. Best suited for couples or small families of up to 4 travelers.",
      capacity: "4 Passengers",
      luggage: "2 Standard Bags",
      ac: "Fully Air Conditioned"
    },
    {
      name: "SUV (Toyota Innova Crysta)",
      image: imgSUV,
      description: "The gold standard of luxury travel in Indian hilly terrains. Delivers supreme comfort, safety, and power.",
      capacity: "6-7 Passengers",
      luggage: "4 Large Bags",
      ac: "Dual AC Controls"
    },
    {
      name: "Standard SUV (Maruti Ertiga / Mahindra Scorpio)",
      image: imgsuvErtiga,
      description: "Rugged and dependable with high ground clearance. Ideal for adventure trails and group sightseeing.",
      capacity: "6 Passengers",
      luggage: "3 Bags",
      ac: "Fully Air Conditioned"
    },
    {
      name: "Tempo Traveller (9-16 Seater)",
      image: imgTraveller,
      description: "Spacious luxury coach with push-back seats, high headroom, and state-of-the-art entertainment systems.",
      capacity: "9 to 16 Passengers",
      luggage: "10+ Bags (Roof Carrier)",
      ac: "Individual AC Vents"
    }
  ];

  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <BreadCrumb title="Taxi & Cab Service" sub_title="Taxi & Cab Service" />

        <section className="service-details-area pt-120 pb-120 bg-light">
          <div className="container">
            <div className="row">
              {/* Left Column: Details & Fleet */}
              <div className="col-lg-8 mb-50">
                <div className="service-content-box mb-40">
                  <div className="tg-section-title-vm mb-25">
                    <span className="icon mb-15 d-inline-flex align-items-center justify-content-center" style={{ width: '55px', height: '55px', borderRadius: '50%', background: 'rgba(255, 124, 8, 0.08)' }}>
                      <i className="fas fa-car" style={{ color: '#ff7c08', fontSize: '24px' }}></i>
                    </span>
                    <h3 className="title-vm text-uppercase" style={{ fontSize: '24px', fontWeight: '700', color: '#0b1c3f' }}>
                      Reliable Taxi & Cab Services
                    </h3>
                  </div>
                  <p style={{ color: '#555c6e', fontSize: '15px', lineHeight: '1.8' }}>
                    Horizon Bound Travels takes pride in offering the most dependable, safe, and comfortable cab service in Himachal Pradesh and neighboring states. Whether you require airport pickups from Chandigarh or Delhi, station drops at Kalka, local sightseeing in Shimla, Manali, and Dharamshala, or a custom outstation road trip, we have you covered. Our fleet comprises pristine, well-maintained vehicles driven by certified professional chauffeurs who excel in navigating challenging mountain routes.
                  </p>
                </div>

                {/* Fleet Section */}
                <h4 className="mb-25 text-uppercase" style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '20px' }}>
                  Our Diverse Vehicle Fleet
                </h4>
                <div className="row mb-40">
                  {fleet.map((car, index) => (
                    <div key={index} className="col-md-6 mb-30">
                      <div className="service-fleet-card">
                        <div className="service-fleet-thumb">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={typeof car.image === 'string' ? car.image : car.image.src}
                            alt={car.name}
                          />
                        </div>
                        <div className="service-fleet-content">
                          <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '17px', marginBottom: '10px' }}>
                            {car.name}
                          </h5>
                          <p style={{ fontSize: '13.5px', color: '#555c6e', lineHeight: '1.6' }}>
                            {car.description}
                          </p>
                          <div className="service-fleet-specs">
                            <div className="service-fleet-spec-item">
                              <i className="fas fa-users"></i> {car.capacity}
                            </div>
                            <div className="service-fleet-spec-item">
                              <i className="fas fa-briefcase"></i> {car.luggage}
                            </div>
                            <div className="service-fleet-spec-item">
                              <i className="fas fa-wind"></i> {car.ac}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features & Benefits */}
                <h4 className="mb-25 text-uppercase" style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '20px' }}>
                  Why Ride With Horizon Bound Travels?
                </h4>
                <div className="row mb-40">
                  <div className="col-md-6 mb-20">
                    <div className="service-feature-card">
                      <div className="service-feature-icon">
                        <i className="fas fa-user-shield"></i>
                      </div>
                      <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '16px' }}>Safe & Skilled Drivers</h5>
                      <p style={{ fontSize: '13.5px', color: '#555c6e', marginBottom: 0 }}>
                        Our chauffeurs are certified, background-verified local specialists with years of experience navigating high-altitude mountain highways safely.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="service-feature-card">
                      <div className="service-feature-icon">
                        <i className="fas fa-coins"></i>
                      </div>
                      <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '16px' }}>Transparent Pricing</h5>
                      <p style={{ fontSize: '13.5px', color: '#555c6e', marginBottom: 0 }}>
                        No hidden costs or nasty surprises. The pricing quoted is comprehensive, taking tolls, driver allowance, and basic taxes into account.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="service-feature-card">
                      <div className="service-feature-icon">
                        <i className="fas fa-soap"></i>
                      </div>
                      <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '16px' }}>Clean & Sanitized Fleet</h5>
                      <p style={{ fontSize: '13.5px', color: '#555c6e', marginBottom: 0 }}>
                        Vehicles undergo thorough sanitization and washing before every single dispatch. Enjoy fresh interiors, tissue boxes, and mineral water.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="service-feature-card">
                      <div className="service-feature-icon">
                        <i className="fas fa-headset"></i>
                      </div>
                      <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '16px' }}>24/7 Roadside Assistance</h5>
                      <p style={{ fontSize: '13.5px', color: '#555c6e', marginBottom: 0 }}>
                        A dedicated support team is always available to monitor status, check progress, and address any immediate replacement requests on route.
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
                        Are toll charges, state entry taxes, and parking fees included in the fare?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Our pricing plans can be structured either way. Usually, we include tolls, driver night allowances, and fuel costs directly in your package for a hassle-free trip. Parking fees at monuments/hotels are typically paid directly, but we outline this explicitly in your booking voucher.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Can we modify our itinerary or route during the journey?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Yes, you can coordinate itinerary extensions or modifications directly with our booking experts. Chauffeurs follow our pre-approved trip sheets, so any major alterations should be routed through support for mileage recalculations.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What happens if the vehicle encounters a mechanical issue on the way?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        We have deep localized tie-ups. In the rare event of a breakdown, we will coordinate a replacement vehicle immediately from the nearest hub, ensuring minimal disruption to your travel itinerary.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Inquiry Form */}
              <div className="col-lg-4">
                <div className="service-inquiry-card">
                  <h4 className="service-inquiry-title">Quick Cab Inquiry</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="service-form-group">
                      <label className="service-form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="service-form-input"
                        placeholder="Enter Your Name"
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
                      <label className="service-form-label">Travel Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="service-form-input"
                        required
                      />
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Pickup Location *</label>
                      <input
                        type="text"
                        name="pickup"
                        value={formData.pickup}
                        onChange={handleChange}
                        className="service-form-input"
                        placeholder="e.g. Delhi Airport, Chandigarh"
                        required
                      />
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Drop Location *</label>
                      <input
                        type="text"
                        name="drop"
                        value={formData.drop}
                        onChange={handleChange}
                        className="service-form-input"
                        placeholder="e.g. Shimla Mall Road, Manali"
                        required
                      />
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Select Car Category</label>
                      <select
                        name="cabType"
                        value={formData.cabType}
                        onChange={handleChange}
                        className="service-form-input"
                      >
                        <option value="Sedan (Dzire/Etios)">Sedan (4 Seater)</option>
                        <option value="SUV (Innova Crysta)">SUV (6-7 Seater Innova)</option>
                        <option value="Standard SUV (Ertiga/Scorpio)">SUV (6 Seater Standard)</option>
                        <option value="Tempo Traveller (9-16 Seater)">Tempo Traveller (9-16 Seater)</option>
                      </select>
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Additional Requests</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="service-form-input"
                        placeholder="Luggage details, infant seats, custom route stops..."
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

export default TaxiCabServicePage;