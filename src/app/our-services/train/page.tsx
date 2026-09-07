"use client";
import React, { useState } from 'react';
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterThree from "@/layouts/footers/FooterThree";
import BreadCrumb from "@/components/common/BreadCrumb";
import Wrapper from "@/layouts/Wrapper";
import { toast } from "react-toastify";
import { sendLead } from "@/utils/leadSender";
import imgVandeBharat from "@/assets/img/listing/listing-3/Vande_Bharat.jpg"
import imgKalka from "@/assets/img/hero/herobaner2.jpg"
import imgSuperfast from "@/assets/img/listing/listing-3/HanoitoSapaSleeperTrainTicket.jpg"
import imgTatkal from "@/assets/img/listing/listing-3/Tatkal-Booking-Rules-and-Timings.jpg"


const TrainServicePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    fromStation: '',
    toStation: '',
    date: '',
    coachClass: 'AC Chair Car (CC)',
    passengers: '1',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.fromStation || !formData.toStation || !formData.date) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    try {
      await sendLead({
        form_type: "Train Reservation Inquiry",
        name: formData.name,
        phone: formData.phone,
        from_station: formData.fromStation,
        to_station: formData.toStation,
        travel_date: formData.date,
        coach_class: formData.coachClass,
        passengers_count: formData.passengers,
        special_notes: formData.notes
      });

      toast.success("Train Reservation Inquiry Submitted! Our ticketing desk will check availability and get back to you.");
      setFormData({
        name: '',
        phone: '',
        fromStation: '',
        toStation: '',
        date: '',
        coachClass: 'AC Chair Car (CC)',
        passengers: '1',
        notes: ''
      });
    } catch (error) {
      console.error("Train inquiry submit error:", error);
      toast.error("Failed to submit inquiry. Please try again later.");
    }
  };

  const trainTypes = [
    {
      name: "Vande Bharat & Shatabdi Express",
      image: imgVandeBharat,
      description: "High-speed daytime luxury travel linking New Delhi, Ambala, and Chandigarh with Kalka, Una, and Jammu. Air-conditioned chair cars with meals.",
      speed: "Fastest travel times",
      meals: "On-board catering included",
      coaches: "Executive & CC Class"
    },
    {
      name: "Kalka - Shimla Toy Train (UNESCO Heritage)",
      image: imgKalka,
      description: "The historic narrow-gauge railway crossing 100+ tunnels and beautiful arched bridges. A must-experience romantic mountain journey.",
      speed: "Scenic slow leisure ride",
      meals: "Refreshments on deluxe trains",
      coaches: "First Class & Shivalik Deluxe"
    },
    {
      name: "Overnight Superfast Sleeper Trains",
      image: imgSuperfast,
      description: "Comfortable overnight sleeper options connecting Delhi, Mumbai, Kolkata, and Jaipur with key gateways like Pathankot, Jammu, and Haridwar.",
      speed: "Overnight convenient schedules",
      meals: "Pantry & station e-catering",
      coaches: "1AC, 2AC, 3AC, Sleeper"
    },
    {
      name: "Tatkal & Emergency Bookings",
      image: imgTatkal,
      description: "Dedicated assistance for urgent travel bookings opening just one day before departure. Maximized confirmation success rate.",
      speed: "Priority processing",
      meals: "Standard options",
      coaches: "Subject to availability"
    }
  ];

  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <BreadCrumb title="Train Booking Assistance" sub_title="Train Booking" />
        
        <section className="service-details-area pt-120 pb-120 bg-light">
          <div className="container">
            <div className="row">
              {/* Left Column: Details & Train Types */}
              <div className="col-lg-8 mb-50">
                <div className="service-content-box mb-40">
                  <div className="tg-section-title-vm mb-25">
                    <span className="icon mb-15 d-inline-flex align-items-center justify-content-center" style={{ width: '55px', height: '55px', borderRadius: '50%', background: 'rgba(255, 124, 8, 0.08)' }}>
                      <i className="fas fa-train" style={{ color: '#ff7c08', fontSize: '24px' }}></i>
                    </span>
                    <h3 className="title-vm text-uppercase" style={{ fontSize: '24px', fontWeight: '700', color: '#0b1c3f' }}>
                      Indian Railways & Toy Train Ticket Services
                    </h3>
                  </div>
                  <p style={{ color: '#555c6e', fontSize: '15px', lineHeight: '1.8' }}>
                    Avoid the frustration of waitlisted tickets, complicated schedules, and website downtimes. Horizon Bound Travels makes train booking across India incredibly convenient. We specialize in securing seats on the premium high-speed Vande Bharat and Shatabdi Expresses from New Delhi to Kalka (connecting to Shimla) or Pathankot (connecting to Dharamshala). Moreover, we handle bookings for the world-famous UNESCO Heritage Kalka-Shimla Toy Train. Our agents provide route planning, berth choices, meal bookings, and Tatkal services.
                  </p>
                </div>

                {/* Train Types Section */}
                <h4 className="mb-25 text-uppercase" style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '20px' }}>
                  Our Booking Options & Train Categories
                </h4>
                <div className="row mb-40">
                  {trainTypes.map((train, index) => (
                    <div key={index} className="col-md-6 mb-30">
                      <div className="service-fleet-card">
                        <div className="service-fleet-thumb">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={typeof train.image === 'string' ? train.image : train.image.src}
                            alt={train.name}
                          />
                        </div>
                        <div className="service-fleet-content">
                          <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '17px', marginBottom: '10px' }}>
                            {train.name}
                          </h5>
                          <p style={{ fontSize: '13.5px', color: '#555c6e', lineHeight: '1.6' }}>
                            {train.description}
                          </p>
                          <div className="service-fleet-specs">
                            <div className="service-fleet-spec-item">
                              <i className="fas fa-bolt"></i> {train.speed}
                            </div>
                            <div className="service-fleet-spec-item">
                              <i className="fas fa-utensils"></i> {train.meals}
                            </div>
                            <div className="service-fleet-spec-item">
                              <i className="fas fa-chair"></i> {train.coaches}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features & Benefits */}
                <h4 className="mb-25 text-uppercase" style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '20px' }}>
                  The Horizon Train Reservation Benefits
                </h4>
                <div className="row mb-40">
                  <div className="col-md-6 mb-20">
                    <div className="service-feature-card">
                      <div className="service-feature-icon">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '16px' }}>WL Confirmation Strategies</h5>
                      <p style={{ fontSize: '13.5px', color: '#555c6e', marginBottom: 0 }}>
                        We review booking trends and historic quota charts to select routes and coach categories that offer the highest possibility of confirmation.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="service-feature-card">
                      <div className="service-feature-icon">
                        <i className="fas fa-id-card-alt"></i>
                      </div>
                      <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '16px' }}>Tatkal Ticket Queue Advantage</h5>
                      <p style={{ fontSize: '13.5px', color: '#555c6e', marginBottom: 0 }}>
                        Our dedicated team handles booking inputs immediately as the IRCTC Tatkal window opens, securing tickets when seconds count.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="service-feature-card">
                      <div className="service-feature-icon">
                        <i className="fas fa-wallet"></i>
                      </div>
                      <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '16px' }}>Fast Cancellations & Refunds</h5>
                      <p style={{ fontSize: '13.5px', color: '#555c6e', marginBottom: 0 }}>
                        In case you cancel your tour or seats fail to confirm, refunds are processed securely and credited back to your account promptly.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="service-feature-card">
                      <div className="service-feature-icon">
                        <i className="fas fa-user-friends"></i>
                      </div>
                      <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '16px' }}>Berth & Seat Optimization</h5>
                      <p style={{ fontSize: '13.5px', color: '#555c6e', marginBottom: 0 }}>
                        We request lower berths for elders and pregnant passengers, ensure families are seated in the same coach, and arrange side-by-side toy train seating.
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
                        When do reservations open for the UNESCO Toy Train?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Standard reservation windows open 120 days before travel on IRCTC. However, special tourist engines or heritage steam runs may declare bookings just 15 to 30 days prior. We monitor announcements closely to secure tickets for you.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What is the cancellation charge on waitlisted and confirmed train tickets?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Waitlisted tickets that fail to confirm receive a automatic full refund minus a nominal IRCTC processing charge. For confirmed tickets, standard Indian Railways graded clerkage and cancellation rules apply based on the hour of request.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Which station is best for visiting Dharamshala, Shimla, or Manali?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        For Shimla, the nearest broad-gauge station is Kalka, from where you can take a road cab or the toy train. For Dharamshala and Dalhousie, Pathankot Cantt (PTKC) is the closest station. For Manali, Chandigarh or Kiratpur Sahib are the preferred stations before continuing by road.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Inquiry Form */}
              <div className="col-lg-4">
                <div className="service-inquiry-card">
                  <h4 className="service-inquiry-title">Quick Train Inquiry</h4>
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
                        name="fromStation"
                        value={formData.fromStation}
                        onChange={handleChange}
                        className="service-form-input"
                        placeholder="From Station (e.g. New Delhi)"
                        required
                      />
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Destination To *</label>
                      <input
                        type="text"
                        name="toStation"
                        value={formData.toStation}
                        onChange={handleChange}
                        className="service-form-input"
                        placeholder="To Station (e.g. Kalka, Pathankot)"
                        required
                      />
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Travel Date *</label>
                      <input
                        type="date"
                        lang="en-US"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="service-form-input"
                        required
                      />
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Select Coach Class</label>
                      <select
                        name="coachClass"
                        value={formData.coachClass}
                        onChange={handleChange}
                        className="service-form-input"
                      >
                        <option value="AC Chair Car (CC)">AC Chair Car (Shatabdi/Vande Bharat)</option>
                        <option value="Executive Chair Car (EC)">AC Executive Class (Vande Bharat)</option>
                        <option value="Toy Train First Class (FC)">Toy Train First Class / Shivalik</option>
                        <option value="AC 3-Tier (3A)">AC 3-Tier Sleeper</option>
                        <option value="AC 2-Tier (2A)">AC 2-Tier Sleeper</option>
                        <option value="AC First Class (1A)">AC First Class Luxury Sleeper</option>
                        <option value="Sleeper Class (SL)">Standard Sleeper Class (Non-AC)</option>
                      </select>
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">No. of Passengers</label>
                      <input
                        type="number"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        className="service-form-input"
                        min="1"
                        max="10"
                        required
                      />
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Special Requests</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="service-form-input"
                        placeholder="Berth preferences (Lower/Side), senior citizen discount details..."
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

export default TrainServicePage;
