"use client";
import React, { useState } from 'react';
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterThree from "@/layouts/footers/FooterThree";
import BreadCrumb from "@/components/common/BreadCrumb";
import Wrapper from "@/layouts/Wrapper";
import { toast } from "react-toastify";
import { sendLead } from "@/utils/leadSender";
import imgVolvo from "@/assets/img/listing/listing-3/volvo-ac-bus.jpg"
import imgVolvonew from "@/assets/img/listing/listing-3/non-ac-luxury-bus.jpg"
import imgLuxury from "@/assets/img/listing/listing-3/Luxurymini.jpeg"


const BusVolvoServicePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    fromCity: '',
    toCity: '',
    busType: 'Volvo AC Multi-Axle (Semi-Sleeper)',
    seats: '2',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.fromCity || !formData.toCity || !formData.date) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    try {
      await sendLead({
        form_type: "Bus Booking Inquiry",
        name: formData.name,
        phone: formData.phone,
        travel_date: formData.date,
        from_city: formData.fromCity,
        to_city: formData.toCity,
        bus_type: formData.busType,
        seats_count: formData.seats,
        special_notes: formData.notes
      });

      toast.success("Bus Booking Inquiry Submitted Successfully! Our reservation desk will reach out shortly.");
      setFormData({
        name: '',
        phone: '',
        date: '',
        fromCity: '',
        toCity: '',
        busType: 'Volvo AC Multi-Axle (Semi-Sleeper)',
        seats: '2',
        notes: ''
      });
    } catch (error) {
      console.error("Bus inquiry submit error:", error);
      toast.error("Failed to submit inquiry. Please try again later.");
    }
  };

  const busFleet = [
    {
      name: "Volvo AC Multi-Axle (Semi-Sleeper 2+2)",
      image: imgVolvo,
      description: "Equipped with premium push-back seats, calf support, USB chargers, and entertainment screens. Best for overnight journeys.",
      seats: "40-45 Reclining Seats",
      amenities: "Blanket, Water, Charging Points",
      safety: "GPS tracking & CCTV cameras"
    },
    {
      name: "Luxury Volvo AC Sleeper (2+1)",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=600",
      description: "Fully flat sleeper berths with individual curtains, reading lights, and pillows. Experience absolute comfort while traveling.",
      seats: "30 Luxury Berths",
      amenities: "Bedding package, Water, USB port",
      safety: "Emergency exit, fire extinguisher"
    },
    {
      name: "Deluxe AC / Non-AC Passenger Coaches",
      image: imgVolvonew,
      description: "Cost-efficient, reliable high-back coaches suitable for group budget travel, pilgrimage tours, or family picnics.",
      seats: "35 to 50 Seater options",
      amenities: "Luggage space, Sound system",
      safety: "Standard first-aid kits"
    },
    {
      name: "Luxury Mini Coach (21-27 Seater)",
      image: imgLuxury,
      description: "Compact size makes it perfect for hill station bends. Very popular for destination wedding guests and corporate events.",
      seats: "21-27 Premium Seats",
      amenities: "AC, Sound system, LED TV",
      safety: "Speed governor & experienced hill crew"
    }
  ];

  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <BreadCrumb title="Bus & Volvo Services" sub_title="Bus & Volvo Services" />
        
        <section className="service-details-area pt-120 pb-120 bg-light">
          <div className="container">
            <div className="row">
              {/* Left Column: Details & Bus Types */}
              <div className="col-lg-8 mb-50">
                <div className="service-content-box mb-40">
                  <div className="tg-section-title-vm mb-25">
                    <span className="icon mb-15 d-inline-flex align-items-center justify-content-center" style={{ width: '55px', height: '55px', borderRadius: '50%', background: 'rgba(255, 124, 8, 0.08)' }}>
                      <i className="fas fa-bus" style={{ color: '#ff7c08', fontSize: '24px' }}></i>
                    </span>
                    <h3 className="title-vm text-uppercase" style={{ fontSize: '24px', fontWeight: '700', color: '#0b1c3f' }}>
                      Luxury Bus & Volvo Bookings
                    </h3>
                  </div>
                  <p style={{ color: '#555c6e', fontSize: '15px', lineHeight: '1.8' }}>
                    Avoid the hassle of sold-out tickets and unreliable bus operators. Horizon Bound Travels provides instant booking confirmation and assistance on premium Volvo, Scania, and luxury sleeper buses. Connect Delhi, Chandigarh, and Amritsar seamlessly with popular destinations like Manali, Shimla, Dharamshala, Katra (Vaishno Devi), and Srinagar. We also offer customized private bus charter packages for large tour groups, families, corporate retreats, and school excursions.
                  </p>
                </div>

                {/* Fleet Section */}
                <h4 className="mb-25 text-uppercase" style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '20px' }}>
                  Our Featured Bus & Coach Classes
                </h4>
                <div className="row mb-40">
                  {busFleet.map((bus, index) => (
                    <div key={index} className="col-md-6 mb-30">
                      <div className="service-fleet-card">
                        <div className="service-fleet-thumb">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                         <img
                            src={typeof bus.image === 'string' ? bus.image : bus.image.src}
                            alt={bus.name}
                          />
                        </div>
                        <div className="service-fleet-content">
                          <h5 style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '17px', marginBottom: '10px' }}>
                            {bus.name}
                          </h5>
                          <p style={{ fontSize: '13.5px', color: '#555c6e', lineHeight: '1.6' }}>
                            {bus.description}
                          </p>
                          <div className="service-fleet-specs">
                            <div className="service-fleet-spec-item">
                              <i className="fas fa-couch"></i> {bus.seats}
                            </div>
                            <div className="service-fleet-spec-item">
                              <i className="fas fa-concierge-bell"></i> {bus.amenities}
                            </div>
                            <div className="service-fleet-spec-item">
                              <i className="fas fa-shield-alt"></i> {bus.safety}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Major Routes */}
                <h4 className="mb-25 text-uppercase" style={{ fontWeight: '700', color: '#0b1c3f', fontSize: '20px' }}>
                  Popular Luxury Volvo Routes
                </h4>
                <div className="service-routes-box mb-40">
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="tg-vm-list list-unstyled mb-0">
                        <li className="d-flex align-items-center mb-15">
                          <span className="icon-list" style={{ color: '#ff7c08' }}><i className="fas fa-chevron-right"></i></span>
                          <span style={{ fontSize: '14.5px', color: '#0b1c3f' }}><strong>Delhi ⇋ Manali</strong> (Overnight / ~14 Hours)</span>
                        </li>
                        <li className="d-flex align-items-center mb-15">
                          <span className="icon-list" style={{ color: '#ff7c08' }}><i className="fas fa-chevron-right"></i></span>
                          <span style={{ fontSize: '14.5px', color: '#0b1c3f' }}><strong>Delhi ⇋ Shimla</strong> (Day/Night / ~9 Hours)</span>
                        </li>
                        <li className="d-flex align-items-center mb-15">
                          <span className="icon-list" style={{ color: '#ff7c08' }}><i className="fas fa-chevron-right"></i></span>
                          <span style={{ fontSize: '14.5px', color: '#0b1c3f' }}><strong>Delhi ⇋ Dharamshala</strong> (Overnight / ~11 Hours)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="tg-vm-list list-unstyled mb-0">
                        <li className="d-flex align-items-center mb-15">
                          <span className="icon-list" style={{ color: '#ff7c08' }}><i className="fas fa-chevron-right"></i></span>
                          <span style={{ fontSize: '14.5px', color: '#0b1c3f' }}><strong>Chandigarh ⇋ Manali</strong> (Day/Night / ~8 Hours)</span>
                        </li>
                        <li className="d-flex align-items-center mb-15">
                          <span className="icon-list" style={{ color: '#ff7c08' }}><i className="fas fa-chevron-right"></i></span>
                          <span style={{ fontSize: '14.5px', color: '#0b1c3f' }}><strong>Delhi ⇋ Katra</strong> (Overnight / ~12 Hours)</span>
                        </li>
                        <li className="d-flex align-items-center mb-15">
                          <span className="icon-list" style={{ color: '#ff7c08' }}><i className="fas fa-chevron-right"></i></span>
                          <span style={{ fontSize: '14.5px', color: '#0b1c3f' }}><strong>Delhi ⇋ Srinagar</strong> (Sleeper Coach / ~20 Hours)</span>
                        </li>
                      </ul>
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
                        Where are the boarding points in Delhi for overnight Volvo buses?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        The principal boarding hubs in Delhi are Majnu ka Tilla (near Vidhan Sabha Metro Station) and Kashmiri Gate ISBT. Some buses also offer boarding options near RK Ashram Metro Station or Karol Bagh. Your boarding point details will be explicitly listed on the ticket.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What is the cancellation and refund policy?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Cancellations done 24 hours prior to departure are eligible for a 70% refund. Cancellations done within 12-24 hours are eligible for 50% refund. No refunds are available for cancellations done within 12 hours of the journey or in case of a no-show.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What happens if the road is blocked due to heavy snow or landslides?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Safety is our top priority. In case of major roadblocks, the bus operator may delay the trip or choose alternative routes. If a trip gets completely cancelled by the operator, a full refund of the bus ticket is processed, and our customer desk will assist you with alternative travel options.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Inquiry Form */}
              <div className="col-lg-4">
                <div className="service-inquiry-card">
                  <h4 className="service-inquiry-title">Quick Bus Inquiry</h4>
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
                      <label className="service-form-label">Journey Date *</label>
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
                      <label className="service-form-label">Departure From *</label>
                      <input
                        type="text"
                        name="fromCity"
                        value={formData.fromCity}
                        onChange={handleChange}
                        className="service-form-input"
                        placeholder="e.g. Delhi, Chandigarh"
                        required
                      />
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Destination To *</label>
                      <input
                        type="text"
                        name="toCity"
                        value={formData.toCity}
                        onChange={handleChange}
                        className="service-form-input"
                        placeholder="e.g. Manali, Shimla, Katra"
                        required
                      />
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Bus Category Preference</label>
                      <select
                        name="busType"
                        value={formData.busType}
                        onChange={handleChange}
                        className="service-form-input"
                      >
                        <option value="Volvo AC Multi-Axle (Semi-Sleeper)">Volvo AC Semi-Sleeper (2+2)</option>
                        <option value="Luxury Volvo AC Sleeper (2+1)">Volvo AC Luxury Sleeper (2+1)</option>
                        <option value="Deluxe AC Coach">Deluxe AC Coach</option>
                        <option value="Private Mini Coach Charter">Private Mini Coach Charter (21-27 Seater)</option>
                        <option value="Private Large Volvo Charter">Private Large Volvo Charter (45 Seater)</option>
                      </select>
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Seats Required</label>
                      <input
                        type="number"
                        name="seats"
                        value={formData.seats}
                        onChange={handleChange}
                        className="service-form-input"
                        min="1"
                        max="100"
                        required
                      />
                    </div>
                    <div className="service-form-group">
                      <label className="service-form-label">Special Demands</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="service-form-input"
                        placeholder="Preferred boarding time, seat preferences, custom pick up..."
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

export default BusVolvoServicePage;
