"use client"
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { sendLead } from '@/utils/leadSender';
import shape_1 from "@/assets/img/banner/banner-2/shape.png";

// Define the Designation interface
interface Designation {
   id: number;
   title: string;
   iconClass: string;
   iconBg: string;
   desc: string;
   requirements: string[];
}

const designationsData: Designation[] = [
   {
      id: 1,
      title: "HR Department",
      iconClass: "fas fa-user-friends",
      iconBg: "rgba(13, 110, 253, 0.1)", // Blue tint
      desc: "Shape our organizational culture, manage talent acquisition, and foster a supportive, productive work environment for our global travel team.",
      requirements: [
         "MBA / Bachelor's in Human Resources",
         "2+ years of experience in talent acquisition",
         "Excellent communication & interpersonal skills"
      ]
   },
   {
      id: 2,
      title: "Sales & Marketing",
      iconClass: "fas fa-ad",
      iconBg: "rgba(25, 135, 84, 0.1)", // Green tint
      desc: "Drive Horizon Bound Travels growth by crafting innovative marketing campaigns, generating sales leads, and building solid customer relations.",
      requirements: [
         "Degree in Marketing, Business, or related field",
         "Experience in digital marketing & SEO strategies",
         "Proven track record in travel sales is a plus"
      ]
   },
   {
      id: 3,
      title: "Accounts & Finance Department",
      iconClass: "fas fa-file-invoice-dollar",
      iconBg: "rgba(13, 202, 240, 0.1)", // Cyan tint
      desc: "Ensure seamless financial operations, manage billing, bookkeeping, budgets, payroll, and compile compliant audit/tax reports.",
      requirements: [
         "Bachelor's in Accounting or Finance (CA/CPA preferred)",
         "Familiarity with Tally, QuickBooks, & GST filing",
         "Exceptional analytical skills and attention to detail"
      ]
   },
   {
      id: 4,
      title: "Customer Support Department",
      iconClass: "fas fa-headset",
      iconBg: "rgba(255, 193, 7, 0.1)", // Yellow/Gold tint
      desc: "Be the guiding light for our travelers. Provide round-the-clock support, assist with itinerary adjustments, and resolve inquiries with care.",
      requirements: [
         "1+ years in customer service (travel industry preferred)",
         "Proficiency in written and spoken English & Hindi",
         "Patience and strong problem-solving capabilities"
      ]
   },
   {
      id: 5,
      title: "Operation Department",
      iconClass: "fas fa-tasks",
      iconBg: "rgba(220, 53, 69, 0.1)", // Red tint
      desc: "Coordinate and manage booking logistics, transport arrangements, hotel tie-ups, and ensure all tour plans run flawlessly.",
      requirements: [
         "Bachelor's degree or travel operations certification",
         "Strong negotiation and vendor management skills",
         "Quick decision-making and crisis management skills"
      ]
   }
];

const CareerArea = () => {
   const [selectedDesignation, setSelectedDesignation] = useState<string>("");
   const [cvFile, setCvFile] = useState<File | null>(null);
   const [dragActive, setDragActive] = useState<boolean>(false);
   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      message: ""
   });
   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

   const fileInputRef = useRef<HTMLInputElement>(null);
   const formSectionRef = useRef<HTMLDivElement>(null);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
   };

   const handleApplyNowClick = (title: string) => {
      setSelectedDesignation(title);
      setTimeout(() => {
         formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
   };

   const validateAndSetFile = (file: File) => {
      const allowedTypes = [
         'application/pdf',
         'application/msword',
         'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      if (!allowedTypes.includes(file.type) && !file.name.endsWith('.pdf') && !file.name.endsWith('.doc') && !file.name.endsWith('.docx')) {
         toast.error("Invalid file type. Please upload a PDF or Word document (.doc, .docx).");
         return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
         toast.error("File is too large. Maximum size is 5MB.");
         return;
      }
      setCvFile(file);
      toast.success(`CV "${file.name}" uploaded successfully!`);
   };

   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
         validateAndSetFile(e.target.files[0]);
      }
   };

   const handleDrag = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
         setDragActive(true);
      } else if (e.type === "dragleave") {
         setDragActive(false);
      }
   };

   const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
         validateAndSetFile(e.dataTransfer.files[0]);
      }
   };

   const removeFile = (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      setCvFile(null);
      if (fileInputRef.current) {
         fileInputRef.current.value = "";
      }
      toast.info("CV removed.");
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      // Basic validation
      if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
         toast.error("Please fill in all the required fields.");
         return;
      }
      if (!selectedDesignation) {
         toast.error("Please select a designation.");
         return;
      }
      if (!cvFile) {
         toast.error("Please upload your CV/Resume.");
         return;
      }

      setIsSubmitting(true);

      // Read CV file as base64 and submit
      const reader = new FileReader();
      reader.readAsDataURL(cvFile);
      reader.onload = async () => {
         const base64Data = reader.result as string;
         try {
            await sendLead({
               form_type: "Job Application Submission",
               full_name: formData.fullName,
               email: formData.email,
               phone: formData.phone,
               designation: selectedDesignation,
               experience: formData.experience,
               message: formData.message,
               cv_file_name: cvFile.name,
               cv_file_data: base64Data
            });

            toast.success("Application submitted successfully! Our HR team will contact you soon.");
            // Reset state
            setFormData({
               fullName: "",
               email: "",
               phone: "",
               experience: "",
               message: ""
            });
            setSelectedDesignation("");
            setCvFile(null);
            if (fileInputRef.current) {
               fileInputRef.current.value = "";
            }
         } catch (error) {
            console.error("Career application submit error:", error);
            toast.error("Failed to submit application. Please try again later.");
         } finally {
            setIsSubmitting(false);
         }
      };
      reader.onerror = () => {
         toast.error("Failed to read CV file. Please try again.");
         setIsSubmitting(false);
      };
   };

   return (
      <section className="tg-about-area pt-50 pb-120 p-relative z-index-1">
         <Image className="tg-team-shape-2 d-none d-md-block" src={shape_1} alt="" />
         
         <div className="container">
            {/* Header intro section */}
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="tg-section-title text-center mb-60">
                     <span className="sub-title">Join Our Team</span>
                     <h2 className="title">Shape the Future of Travel With Us</h2>
                     <p className="mt-20">
                        At Horizon Bound Travels, we believe in adventure, discovery, and creating unforgettable journeys. 
                        We are looking for passionate, driven individuals to join our professional team and help us build 
                        extraordinary travel experiences. Explore our open designations below and apply now!
                     </p>
                  </div>
               </div>
            </div>

            {/* Designations Grid */}
            <div className="row g-4 mb-80">
               {designationsData.map((item) => (
                  <div className="col-lg-4 col-md-6" key={item.id}>
                     <div className="tg-career-card">
                        <span className="tg-career-badge full-time">Full Time</span>
                        <div className="tg-career-icon-box" style={{ backgroundColor: item.iconBg }}>
                           <i className={`${item.iconClass}`} style={{ color: item.id === 1 ? '#0d6efd' : item.id === 2 ? '#198754' : item.id === 3 ? '#0dcaf0' : item.id === 4 ? '#ffc107' : '#dc3545' }}></i>
                        </div>
                        <h3 className="tg-career-card-title">{item.title}</h3>
                        <p className="tg-career-card-desc">{item.desc}</p>
                        
                        <h4 className="tg-career-req-title">Key Responsibilities:</h4>
                        <ul className="tg-career-req-list">
                           {item.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                           ))}
                        </ul>
                        
                        <button 
                           onClick={() => handleApplyNowClick(item.title)}
                           className="tg-career-card-btn"
                        >
                           Apply Now
                        </button>
                     </div>
                  </div>
               ))}
            </div>

            {/* Form Section */}
            <div className="row justify-content-center" ref={formSectionRef}>
               <div className="col-lg-8">
                  <div className="tg-career-form-wrap">
                     <div className="tg-career-form-header">
                        <h3>Drop Your CV</h3>
                        <p>Submit your application and let&apos;s build amazing journeys together.</p>
                     </div>
                     
                     <div className="tg-career-form-body">
                        <form onSubmit={handleSubmit}>
                           <div className="row">
                              {/* Full name */}
                              <div className="col-md-6 mb-25">
                                 <label className="tg-booking-form-title">Full Name *</label>
                                 <input 
                                    type="text" 
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="input" 
                                    placeholder="Enter your full name" 
                                    required 
                                 />
                              </div>

                              {/* Email */}
                              <div className="col-md-6 mb-25">
                                 <label className="tg-booking-form-title">Email Address *</label>
                                 <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="input" 
                                    placeholder="Enter your email address" 
                                    required 
                                 />
                              </div>

                              {/* Phone */}
                              <div className="col-md-6 mb-25">
                                 <label className="tg-booking-form-title">Phone Number *</label>
                                 <input 
                                    type="tel" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="input" 
                                    placeholder="Enter your phone number" 
                                    required 
                                 />
                              </div>

                              {/* Designation Dropdown */}
                              <div className="col-md-6 mb-25">
                                 <label className="tg-booking-form-title">Select Designation *</label>
                                 <select 
                                    name="designation"
                                    value={selectedDesignation}
                                    onChange={(e) => setSelectedDesignation(e.target.value)}
                                    className="tg-career-select"
                                    required
                                 >
                                    <option value="" disabled>Choose Designation</option>
                                    {designationsData.map((d) => (
                                       <option key={d.id} value={d.title}>{d.title}</option>
                                    ))}
                                 </select>
                              </div>

                              {/* Experience level */}
                              <div className="col-md-12 mb-25">
                                 <label className="tg-booking-form-title">Experience Level *</label>
                                 <select 
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    className="tg-career-select"
                                    required
                                 >
                                    <option value="" disabled>Select your experience</option>
                                    <option value="Fresher / Entry Level">Fresher / Entry Level</option>
                                    <option value="1-3 Years">1-3 Years</option>
                                    <option value="3-5 Years">3-5 Years</option>
                                    <option value="5+ Years">5+ Years</option>
                                 </select>
                              </div>

                              {/* Drag and drop file CV upload */}
                              <div className="col-md-12 mb-25">
                                 <label className="tg-booking-form-title">Upload CV / Resume (PDF, DOCX) *</label>
                                 
                                 <input 
                                    type="file" 
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                    style={{ display: 'none' }}
                                 />

                                 {!cvFile ? (
                                    <div 
                                       className={`tg-cv-dropzone ${dragActive ? 'drag-active' : ''}`}
                                       onDragEnter={handleDrag}
                                       onDragOver={handleDrag}
                                       onDragLeave={handleDrag}
                                       onDrop={handleDrop}
                                       onClick={() => fileInputRef.current?.click()}
                                    >
                                       <div className="tg-cv-dropzone-icon">
                                          <i className="fas fa-cloud-upload-alt"></i>
                                       </div>
                                       <p className="tg-cv-dropzone-text">
                                          Drag & Drop your CV here or <span style={{ color: '#F46B08', textDecoration: 'underline' }}>Browse</span>
                                       </p>
                                       <p className="tg-cv-dropzone-subtext">Supports PDF, DOC, DOCX up to 5MB</p>
                                    </div>
                                 ) : (
                                    <div className="tg-selected-file-card">
                                       <div className="tg-selected-file-info">
                                          <div className="tg-selected-file-icon">
                                             <i className="fas fa-check-circle"></i>
                                          </div>
                                          <div>
                                             <div className="tg-selected-file-name" title={cvFile.name}>{cvFile.name}</div>
                                             <div className="tg-selected-file-size">{(cvFile.size / 1024).toFixed(1)} KB</div>
                                          </div>
                                       </div>
                                       <button 
                                          type="button" 
                                          className="tg-file-remove-btn" 
                                          onClick={removeFile}
                                          title="Remove file"
                                       >
                                          <i className="fas fa-trash-alt"></i>
                                       </button>
                                    </div>
                                 )}
                              </div>

                              {/* Message / Cover Letter */}
                              <div className="col-md-12 mb-30">
                                 <label className="tg-booking-form-title">Cover Letter / Message (Optional)</label>
                                 <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="textarea" 
                                    placeholder="Tell us a bit about yourself and why you'd like to join us..."
                                    rows={4}
                                 ></textarea>
                              </div>

                              {/* Submit button */}
                              <div className="col-md-12 text-center">
                                 <button 
                                    type="submit" 
                                    className="tg-btn w-100" 
                                    disabled={isSubmitting}
                                    style={{ opacity: isSubmitting ? 0.7 : 1 }}
                                 >
                                    {isSubmitting ? (
                                       <>
                                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                          Submitting Application...
                                       </>
                                    ) : (
                                       <>
                                          <i className="fas fa-paper-plane me-2"></i> Submit Application
                                       </>
                                    )}
                                 </button>
                              </div>

                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </section>
   );
};

export default CareerArea;
