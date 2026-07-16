"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { sendLead } from '@/utils/leadSender';

const ReviewForm = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
   });
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!formData.name || !formData.email || !formData.message) {
         toast.error("Please fill in all fields.");
         return;
      }
      setIsSubmitting(true);
      try {
         await sendLead({
            form_type: "Tour Review Submission",
            name: formData.name,
            email: formData.email,
            message: formData.message,
         });
         toast.success("Review submitted successfully! Thank you for your feedback.");
         setFormData({
            name: '',
            email: '',
            message: '',
         });
      } catch (error) {
         console.error("Review submit error:", error);
         toast.error("Failed to submit review. Please try again later.");
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className="row">
            <div className="col-lg-6 mb-15">
               <input 
                  className="input" 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required 
               />
            </div>
            <div className="col-lg-6 mb-15">
               <input 
                  className="input" 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mail Address" 
                  required 
               />
            </div>
            <div className="col-lg-12">
               <textarea 
                  className="textarea mb-5" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write Message"
                  required
               ></textarea>
               <div className="review-checkbox d-flex align-items-center mb-25">
                  <input className="tg-checkbox" type="checkbox" id="australia" />
                  <label htmlFor="australia" className="tg-label">Save my name, email, and website in this browser for the next time I comment.</label>
               </div>
               <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="tg-btn tg-btn-switch-animation"
               >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
               </button>
            </div>
         </div>
      </form>
   )
}

export default ReviewForm

