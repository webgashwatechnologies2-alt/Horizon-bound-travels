"use client";
import React, { useState } from 'react';
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterThree from "@/layouts/footers/FooterThree";
import BreadCrumb from "@/components/common/BreadCrumb";
import Wrapper from "@/layouts/Wrapper";
import { toast } from "react-toastify";
import { sendLead } from "@/utils/leadSender";

const FlightServicePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    fromAirport: '',
    toAirport: '',
    tripType: 'One Way',
    depDate: '',
    retDate: '',
    cabinClass: 'Economy',
    passengers: '1',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.fromAirport || !formData.toAirport || !formData.depDate) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    try {
      await sendLead({
        form_type: "Flight Reservation Inquiry",
        name: formData.name,
        phone: formData.phone,
        from_airport: formData.fromAirport,
        to_airport: formData.toAirport,
        trip_type: formData.tripType,
        departure_date: formData.depDate,
        return_date: formData.retDate,
        cabin_class: formData.cabinClass,
        passengers_count: formData.passengers,
        special_notes: formData.notes
      });

      toast.success("Flight Booking Inquiry Submitted Successfully! Our ticketing desk will find the best fares and contact you shortly.");
      setFormData({
        name: '',
        phone: '',
        fromAirport: '',
        toAirport: '',
        tripType: 'One Way',
        depDate: '',
        retDate: '',
        cabinClass: 'Economy',
        passengers: '1',
        notes: ''
      });
    } catch (error) {
      console.error("Flight inquiry submit error:", error);
      toast.error("Failed to submit inquiry. Please try again later.");
    }
  };

  const categories = [
    {
      name: "Domestic Flight Tickets",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600",
      description: "Direct & connecting flights with consolidated fares on all Indian airlines including IndiGo, Air India, and SpiceJet.",
      badge1: "LCC & Full Service",
      badge2: "Instant E-Tickets",
      badge3: "Lowest Service Fees"
    },
    {
      name: "International Air Booking",
      image: "https://images.unsplash.com/photo-1483450388369-9ed95738483c?auto=format&fit=crop&q=80&w=600",
      description: "Flight tickets to any destination worldwide. Exclusive discounts for students, group bookings, and multi-city itineraries.",
      badge1: "Global Reach",
      badge2: "Visa Assistance",
      badge3: "Extra Bag Discounts"
    },
    {
      name: "Group Ticketing & Charters",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=600",
      description: "Special group travel services for companies, destination weddings, and school groups with flexible name additions.",
      badge1: "10+ Passenger Deals",
      badge2: "Partial Payments",
      badge3: "Custom Charters"
    },
    {
      name: "Himachal Heli-Taxi Reservations",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=600",
      description: "Special booking services for regional helicopter flights (Pawan Hans) linking Chandigarh, Shimla, Dharamshala, and Kullu.",
      badge1: "Heli-Sightseeing",
      badge2: "Fast Himalayan Transit",
      badge3: "Weather Refunds"
    }
  ];

  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <BreadCrumb title="Flight Booking Assistance" sub_title="Flight Booking" />
        
        <section className="service-details-area pt-120 pb-120 bg-light">
          <div className="container">
            <div className="row">
              {/* Left Column: Details & Flight categories */}
              <div className="col-lg-8 mb-50">
                <div className="service-content-box mb-40">
                  <div className="tg-section-title-vm mb-25">
                    <span className="icon mb-15 d-inline-flex align-items-center justify-content-center" style={{ width: '55px', height: '55px', borderRadius: '50%', background: 'rgba(255, 124, 8, 0.08)' }}>
                      <i className="fas fa-plane" style={{ color: '#ff7c08', fontSize: '24px' }}></i>
                    </span>
                    <h3 className="title-vm text-uppercase" style={{ fontSize: '24px', fontWeight: '700', color: '#0b1c3f' }}>
                      Seamless Flight Reservations
                    </h3>
                  </div>
                  <p style={{ color: '#555c6e', fontSize: '15px', lineHeight: '1.8' }}>
                    Skip the tedious comparison sites and confusing baggage policies. Horizon Bound Travels makes air travel planning simple, cost-effective, and entirely stress-free. From locking down seasonal domestic deals to organizing multi-destination international voyages or booking heli-taxi tickets in Himachal Pradesh, our ticketing specialists secure optimal routings and deals. We handle seat selection, meal preferences, excess baggage pre-booking, and offer direct assistance in case of flight delays or reschedule requests.
                  </p>
                </div>

                {/* Categories Section */}
                <h4 className="mb-25 text-uppercase" style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '20px' }}>
                  Our Ticket Booking Options
                </h4>
                <div className="row mb-40">
                  {categories.map((cat, index) => (
                    <div key={index} className="col-md-6 mb-30">
                      <div className="service-fleet-card">
                        <div className="service-fleet-thumb">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={cat.image} alt={cat.name} />
                        </div>
                        <div className="service-fleet-content">
                          <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '17px', marginBottom: '10px' }}>
                            {cat.name}
                          </h5>
                          <p style={{ fontSize: '13.5px', color: '#555c6e', lineHeight: '1.6' }}>
                            {cat.description}
                          </p>
                          <div className="service-fleet-specs">
                            <div className="service-fleet-spec-item">
                              <i className="fas fa-ticket-alt"></i> {cat.badge1}
                            </div>
                            <div className="service-fleet-spec-item">
                              <i className="fas fa-check-circle"></i> {cat.badge2}
                            </div>
                            <div className="service-fleet-spec-item">
                              <i className="fas fa-percent"></i> {cat.badge3}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features & Benefits */}
                <h4 className="mb-25 text-uppercase" style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '20px' }}>
                  The Horizon Flight Booking Advantage
                </h4>
                <div className="row mb-40">
                  <div className="col-md-6 mb-20">
                    <div className="service-feature-card">
                      <div className="service-feature-icon">
                        <i className="fas fa-tags"></i>
                      </div>
                      <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '16px' }}>Consolidated Agency Rates</h5>
                      <p style={{ fontSize: '13.5px', color: '#555c6e', marginBottom: 0 }}>
                        Through direct partnerships with leading consolidators and airlines, we are often able to secure fares lower than online retail sites.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="service-feature-card">
                      <div className="service-feature-icon">
                        <i className="fas fa-arrows-alt-h"></i>
                      </div>
                      <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '16px' }}>Hassle-Free Date Changes</h5>
                      <p style={{ fontSize: '13.5px', color: '#555c6e', marginBottom: 0 }}>
                        Forget sitting in long customer call queues. Contact our team directly via WhatsApp or call to process modifications in minutes.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="service-feature-card">
                      <div className="service-feature-icon">
                        <i className="fas fa-luggage-cart"></i>
                      </div>
                      <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '16px' }}>Pre-booked Baggage Savings</h5>
                      <p style={{ fontSize: '13.5px', color: '#555c6e', marginBottom: 0 }}>
                        Add excess weight check-in requirements during reservation at discounted rates. We explain custom baggage rules for different carriers.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="service-feature-card">
                      <div className="service-feature-icon">
                        <i className="fas fa-hand-holding-usd"></i>
                      </div>
                      <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '16px' }}>Corporate & GST Invoicing</h5>
                      <p style={{ fontSize: '13.5px', color: '#555c6e', marginBottom: 0 }}>
                        Get formal receipts with complete GST details of your company, enabling easy expense claims and tax offsets.
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
                        What are the main operational airports near Himachal Pradesh?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        The primary airports serving Himachal Pradesh are Chandigarh Airport (IXC, well connected globally), Gaggal-Dharamshala Airport (DHM, connecting Kangra valley), and Bhuntar-Kullu Airport (KUU, serving Kullu and Manali). Shimla Airport (SLV) is also operational for regional connectivity.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Are Heli-taxi services operational throughout the year?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Heli-taxi services in Himachal operates on specific days and schedules. However, flights are highly dependent on weather conditions. In the event of flight cancellation due to adverse weather conditions, passengers are eligible for a full refund of the heli ticket.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Do you arrange airport transfers from Chandigarh or Delhi to our resort?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Yes, we offer fully integrated travel solutions! When booking your flight, you can add an airport transfer cab from Chandigarh or Delhi directly to your hotel or resort.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Inquiry Form */}
              <div className="col-lg-4">
                <div className="service-inquiry-card">
                  <h4 className="service-inquiry-title">Quick Flight Inquiry</h4>
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
                      <label className="service-form-label">Departure From *</label>
                      <input
                        type="text"
                        name="fromAirport"
                        value={formData.fromAirport}
                        onChange={handleChange}
                        className="service-form-input"
                        placeholder="City or Airport (e.g. Mumbai, Delhi)"
                        required
                      />
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Destination To *</label>
                      <input
                        type="text"
                        name="toAirport"
                        value={formData.toAirport}
                        onChange={handleChange}
                        className="service-form-input"
                        placeholder="e.g. Dharamshala, Kullu, London"
                        required
                      />
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Trip Category</label>
                      <select
                        name="tripType"
                        value={formData.tripType}
                        onChange={handleChange}
                        className="service-form-input"
                      >
                        <option value="One Way">One Way Trip</option>
                        <option value="Round Trip">Round Trip</option>
                        <option value="Multi City">Multi-City / Custom Route</option>
                        <option value="Heli Taxi">Heli-Taxi Booking</option>
                      </select>
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Departure Date *</label>
                      <input
                        type="date"
                        name="depDate"
                        value={formData.depDate}
                        onChange={handleChange}
                        className="service-form-input"
                        required
                      />
                    </div>
                    {formData.tripType === 'Round Trip' && (
                      <div className="service-form-group">
                        <label className="service-form-label">Return Date *</label>
                        <input
                          type="date"
                          name="retDate"
                          value={formData.retDate}
                          onChange={handleChange}
                          className="service-form-input"
                          required
                        />
                      </div>
                    )}
                    <div className="service-form-group">
                      <label className="service-form-label">Cabin Class</label>
                      <select
                        name="cabinClass"
                        value={formData.cabinClass}
                        onChange={handleChange}
                        className="service-form-input"
                      >
                        <option value="Economy">Economy</option>
                        <option value="Premium Economy">Premium Economy</option>
                        <option value="Business">Business Class</option>
                        <option value="First Class">First Class</option>
                      </select>
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Number of Passengers</label>
                      <input
                        type="number"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        className="service-form-input"
                        min="1"
                        max="20"
                        required
                      />
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Additional Instructions</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="service-form-input"
                        placeholder="Preferred airline, meal demands, wheelchair assistance..."
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

export default FlightServicePage;
