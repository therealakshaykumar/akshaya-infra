"use client";
import { useState, useRef } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, User, Phone, Mail, MessageSquare, AlertCircle } from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (formData: FormData): boolean => {
    const newErrors: FormErrors = {};
    
    // Name Validation: Letters and spaces only, max 50 chars
    const name = formData.get('entry.586361126') as string;
    if (!/^[a-zA-Z\s]{1,50}$/.test(name)) {
      newErrors.name = "Name should contain only letters and be max 50 characters.";
    }

    // Phone Validation: 10 digits
    const phone = formData.get('entry.131257919') as string;
    if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    // Email Validation: Basic email regex
    const email = formData.get('entry.1491408678') as string;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Message Validation: Optional, but max 500 chars if provided
    const message = formData.get('entry.224926441') as string;
    if (message && message.length > 500) {
      newErrors.message = "Message should not exceed 500 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    const formData = new FormData(formRef.current!);
    
    if (!validate(formData)) {
      e.preventDefault();
      return;
    }

    setIsSubmitting(true);
    // Note: The form will submit to the hidden iframe via the action attribute
  };

  return (
    <section className="py-24 bg-white px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50 rounded-full -ml-48 -mb-48 blur-3xl opacity-50"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#0F2A55] mb-4"
          >
            Request a Quote
          </m.h2>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Fill out the form below and our team will get back to you with a competitive proposal.
          </m.p>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <m.div
              key="form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12"
            >
              <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                style={{ display: 'none' }}
                onLoad={() => {
                  if (isSubmitting) {
                    setSubmitted(true);
                    setIsSubmitting(false);
                    setErrors({});
                  }
                }}
              ></iframe>

              <form 
                ref={formRef}
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScb6bmzml_JmolOi87nubeVYj1wkU5I0mIYB_YVFwEjkCfsEg/formResponse"
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name-input" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <User className="w-4 h-4 text-[#0F2A55]" /> Name *
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      name="entry.586361126"
                      required
                      placeholder="Your Full Name"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 ring-1 ring-red-100' : 'border-gray-200'} focus:border-[#0F2A55] focus:ring-2 focus:ring-[#0F2A55]/10 outline-none transition-all`}
                    />
                    {errors.name && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone-input" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#0F2A55]" /> Phone Number *
                    </label>
                    <input
                      id="phone-input"
                      type="tel"
                      name="entry.131257919"
                      required
                      placeholder="10-digit Mobile Number"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 ring-1 ring-red-100' : 'border-gray-200'} focus:border-[#0F2A55] focus:ring-2 focus:ring-[#0F2A55]/10 outline-none transition-all`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email-input" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#0F2A55]" /> Email
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="entry.1491408678"
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 ring-1 ring-red-100' : 'border-gray-200'} focus:border-[#0F2A55] focus:ring-2 focus:ring-[#0F2A55]/10 outline-none transition-all`}
                  />
                  {errors.email && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message-input" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#0F2A55]" /> Message
                  </label>
                  <textarea
                    id="message-input"
                    name="entry.224926441"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500 ring-1 ring-red-100' : 'border-gray-200'} focus:border-[#0F2A55] focus:ring-2 focus:ring-[#0F2A55]/10 outline-none transition-all resize-none`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                    isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#0F2A55] hover:bg-[#1a3d75] cursor-pointer text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? "Submitting..." : <>Submit Enquiry <Send className="w-5 h-5" /></>}
                </button>
              </form>
            </m.div>
          ) : (
            <m.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-12 text-center space-y-6"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold text-[#0F2A55]">Enquiry Received!</h3>
              <p className="text-xl text-gray-600 max-w-md mx-auto">
                Thank you for reaching out. Our technical team will review your requirements and contact you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-[#0F2A55] font-semibold cursor-pointer hover:underline"
              >
                Submit another enquiry
              </button>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
