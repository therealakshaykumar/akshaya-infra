"use client";
import { useState, useRef } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Building2, User, Phone, Mail, MapPin, Package, AlertCircle } from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  gst?: string;
  address?: string;
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

    // Company Name: Alphanumeric and spaces, max 100 chars
    const company = formData.get('entry.937622207') as string;
    if (!/^[a-zA-Z0-9\s\.\-]{1,100}$/.test(company)) {
      newErrors.company = "Company name should be alphanumeric and max 100 characters.";
    }

    // GST Number: 15 chars, standard GSTIN format
    const gst = formData.get('entry.1945559581') as string;
    if (!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(gst)) {
      newErrors.gst = "Please enter a valid 15-digit GST number.";
    }

    // Delivery Address: Max 300 chars, basic punctuation allowed
    const address = formData.get('entry.22132404') as string;
    if (address && address.length > 300) {
      newErrors.address = "Address should not exceed 300 characters.";
    } else if (address && /[<>{}[\]\\^|]/.test(address)) {
      newErrors.address = "Address contains invalid special characters.";
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
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <User className="w-4 h-4 text-[#0F2A55]" /> Name *
                    </label>
                    <input
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
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#0F2A55]" /> Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="entry.131257919"
                      required
                      placeholder="10-digit Mobile Number"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 ring-1 ring-red-100' : 'border-gray-200'} focus:border-[#0F2A55] focus:ring-2 focus:ring-[#0F2A55]/10 outline-none transition-all`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#0F2A55]" /> Email
                    </label>
                    <input
                      type="email"
                      name="entry.1491408678"
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 ring-1 ring-red-100' : 'border-gray-200'} focus:border-[#0F2A55] focus:ring-2 focus:ring-[#0F2A55]/10 outline-none transition-all`}
                    />
                    {errors.email && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#0F2A55]" /> Company Name *
                    </label>
                    <input
                      type="text"
                      name="entry.937622207"
                      required
                      placeholder="Organization Name"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.company ? 'border-red-500 ring-1 ring-red-100' : 'border-gray-200'} focus:border-[#0F2A55] focus:ring-2 focus:ring-[#0F2A55]/10 outline-none transition-all`}
                    />
                    {errors.company && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> {errors.company}</p>}
                  </div>
                </div>

                {/* GST Number */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Package className="w-4 h-4 text-[#0F2A55]" /> Company GST Number *
                  </label>
                  <input
                    type="text"
                    name="entry.1945559581"
                    required
                    placeholder="15-digit GSTIN (e.g., 22AAAAA0000A1Z5)"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.gst ? 'border-red-500 ring-1 ring-red-100' : 'border-gray-200'} focus:border-[#0F2A55] focus:ring-2 focus:ring-[#0F2A55]/10 outline-none transition-all`}
                    onChange={(e) => e.target.value = e.target.value.toUpperCase()}
                  />
                  {errors.gst && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> {errors.gst}</p>}
                </div>

                {/* Materials Required */}
                <div className="space-y-4">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Package className="w-4 h-4 text-[#0F2A55]" /> Materials Required *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {["Bitumen VG 30", "Bitumen VG 40", "RS-1 Emulsion", "Others"].map((item) => (
                      <label 
                        key={item}
                        className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors"
                      >
                        <input
                          type="radio"
                          name="entry.1069059552"
                          value={item}
                          required
                          className="w-4 h-4 text-[#0F2A55] border-gray-300 focus:ring-[#0F2A55]"
                        />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#0F2A55]" /> Delivery Address
                  </label>
                  <textarea
                    name="entry.22132404"
                    rows={3}
                    placeholder="Provide detailed delivery address..."
                    className={`w-full px-4 py-3 rounded-xl border ${errors.address ? 'border-red-500 ring-1 ring-red-100' : 'border-gray-200'} focus:border-[#0F2A55] focus:ring-2 focus:ring-[#0F2A55]/10 outline-none transition-all resize-none`}
                  ></textarea>
                  {errors.address && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> {errors.address}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                    isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#0F2A55] hover:bg-[#1a3d75] text-white shadow-lg hover:shadow-xl'
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
                className="text-[#0F2A55] font-semibold hover:underline"
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
