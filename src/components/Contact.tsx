import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};

    if (!formValues.name.trim()) {
      tempErrors.name = "Full name is required";
    } else if (formValues.name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 characters";
    }

    if (!formValues.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formValues.message.trim()) {
      tempErrors.message = "Message text is required";
    } else if (formValues.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate real API dispatch latency
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Clear inputs
        setFormValues({
          name: "",
          email: "",
          phone: "",
          subject: "General Inquiry",
          message: ""
        });
      }, 1200);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold uppercase tracking-widest text-orange-600 block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Let&apos;s Build Your Growth Architecture
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Have questions about SMM ads, SEO rank targets, or code pipelines? Inquire below and we will contact you in under 12 hours.
          </p>
        </div>

        {/* Contact Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Left Side Column (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800 p-6 sm:p-10 text-left">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Send Us a Message
            </h3>

            {isSubmitted ? (
              <div
                id="contact-success-banner"
                className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col items-start gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-900 text-base">Inquiry Submitted Successfully!</h4>
                  <p className="text-emerald-700 text-xs leading-relaxed mt-1">
                    Thank you for reaching out to Siltawi Digital. Our growth analysts have received your brief and will respond within 12 standard business hours with audit insights.
                  </p>
                </div>
                <button
                  id="submit-another-btn"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-3 px-4 py-2 text-xs font-bold bg-white text-emerald-800 rounded-lg shadow-sm border border-emerald-200 hover:bg-emerald-100 transition-colors"
                >
                  Submit Another Message
                </button>
              </div>
            ) : (
              <form id="contact-marketing-form" onSubmit={handleSubmit} className="space-y-5">
                
                {/* Double input row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label id="lbl-contact-name" htmlFor="contact-name" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mb-2 tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formValues.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Salim Atawi"
                      className={`px-4 py-3 rounded-lg border bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-white outline-none transition-all ${
                        errors.name
                          ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-200"
                          : "border-slate-250 dark:border-slate-800 focus:border-slate-800 dark:focus:border-slate-600"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] font-bold text-rose-600 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label id="lbl-contact-email" htmlFor="contact-email" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mb-2 tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      placeholder="e.g. salim@company.com"
                      className={`px-4 py-3 rounded-lg border bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-white outline-none transition-all ${
                        errors.email
                          ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-200"
                          : "border-slate-250 dark:border-slate-800 focus:border-slate-800 dark:focus:border-slate-600"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] font-bold text-rose-600 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label id="lbl-contact-phone" htmlFor="contact-phone" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mb-2 tracking-wide">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formValues.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +251 98 665 1229"
                      className="px-4 py-3 rounded-lg border border-slate-250 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-white outline-none focus:border-slate-800 dark:focus:border-slate-600 transition-all"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label id="lbl-contact-interest" htmlFor="contact-interest" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mb-2 tracking-wide">
                      Area of Interest
                    </label>
                    <select
                      id="contact-interest"
                      name="subject"
                      value={formValues.subject}
                      onChange={handleInputChange}
                      className="px-4 py-3 rounded-lg border border-slate-250 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-white outline-none focus:border-slate-800 dark:focus:border-slate-600 transition-all cursor-pointer"
                    >
                      <option value="General Inquiry">General Inquiries</option>
                      <option value="Digital Marketing Ads">Digital Marketing Ads</option>
                      <option value="Custom Web Dev">Custom Web Development</option>
                      <option value="SEO Operations">SEO Rank Optimization</option>
                      <option value="Branding Design">Branding & Logo Systems</option>
                    </select>
                  </div>
                </div>

                {/* Message Text area */}
                <div className="flex flex-col">
                  <label id="lbl-contact-msg" htmlFor="contact-msg" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mb-2 tracking-wide">
                    Project Brief / Details *
                  </label>
                  <textarea
                    id="contact-msg"
                    name="message"
                    rows={5}
                    value={formValues.message}
                    onChange={handleInputChange}
                    placeholder="We want to audit our acquisition channels and optimize our profile landing pages..."
                    className={`px-4 py-3 rounded-lg border bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-white outline-none transition-all resize-none ${
                      errors.message
                        ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-200"
                        : "border-slate-250 dark:border-slate-800 focus:border-slate-800 dark:focus:border-slate-600"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[10px] font-bold text-rose-600 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button bar */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 w-full py-4.5 rounded-xl bg-orange-600 text-white font-bold text-sm shadow-md hover:bg-orange-700 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2.5">
                      <span className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                      Saving Details...
                    </span>
                  ) : (
                    <>
                      Submit Project Brief
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

          {/* Contact Details & Map Right Side Column (5 cols) */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8 text-left w-full">
            
            {/* Context blocks */}
            <div className="rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Physical Location */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/40 flex items-center justify-center text-orange-600 flex-shrink-0 border border-orange-100 dark:border-orange-900/30">
                    <MapPin className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                      Main Headquarters
                    </span>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-300 mt-1 block">
                      Bole Road, Cameroon Street, Near Edna Mall
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Addis Ababa, Ethiopia
                    </span>
                  </div>
                </div>

                {/* Email Support */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/40 flex items-center justify-center text-orange-600 flex-shrink-0 border border-orange-100 dark:border-orange-900/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                      Operational Enquiries
                    </span>
                    <a
                      id="contact-email-link"
                      href="mailto:info@siltawi.com"
                      className="text-sm font-bold text-slate-800 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 mt-1 block"
                    >
                      info@siltawi.com
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/40 flex items-center justify-center text-orange-600 flex-shrink-0 border border-orange-100 dark:border-orange-900/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                      Growth Desk phone
                    </span>
                    <a
                      id="contact-phone-link"
                      href="tel:+251900000000"
                      className="text-sm font-bold text-slate-800 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 mt-1 block"
                    >
                      +251 900 000 000
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/40 flex items-center justify-center text-orange-600 flex-shrink-0 border border-orange-100 dark:border-orange-900/30">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                      Support Desk Hours
                    </span>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-300 mt-1 block">
                      Monday to Friday: 9:00 AM - 6:00 PM
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      EAT Timezone (UTC +3)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Graphic Mockup Placeholder */}
            <div className="rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm bg-slate-50 dark:bg-slate-900 relative aspect-[14/9]">
              
              {/* Fake Interactive map grid styling */}
              <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 flex flex-col justify-between p-4 bg-linear-to-b from-slate-200 to-slate-100 dark:from-slate-950 dark:to-slate-900 overflow-hidden">
                {/* SVG Route Line drawing path to Addis office */}
                <svg className="absolute inset-0 w-full h-full stroke-slate-200 dark:stroke-slate-800 stroke-[1.5]" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="10" y1="20" x2="90" y2="20" />
                  <line x1="30" y1="0" x2="30" y2="100" />
                  <line x1="70" y1="0" x2="70" y2="100" />
                  <line x1="0" y1="60" x2="100" y2="60" />
                  {/* Decorative map river or route path */}
                  <path d="M 10 30 Q 40 45 70 20 T 95 80" fill="none" className="stroke-orange-500/25 stroke-[3]" />
                </svg>

                {/* Floating Office Pointer Marker Pin */}
                <div className="absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="bg-slate-900 dark:bg-slate-950 text-white rounded-lg px-2.5 py-1.5 text-[10px] font-bold shadow-lg flex items-center gap-1.5 border border-slate-800 dark:border-slate-850 whitespace-nowrap">
                    <MapPin className="w-3.5 h-3.5 text-orange-400" />
                    Siltawi Digital Ltd
                  </div>
                  <div className="w-2.5 h-2.5 bg-slate-900 dark:bg-slate-950 rotate-45 -mt-1.5 shadow-md" />
                </div>

                {/* Map Interface Toggles */}
                <div className="relative z-10 flex justify-between w-full">
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-2 shadow-sm text-[9px] font-bold text-slate-800 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800">
                    Satellite View
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-1.5 shadow-sm text-slate-800 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800 flex flex-col font-mono text-[10px] font-bold">
                    <button className="px-1.5 py-0.5 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-850">+</button>
                    <button className="px-1.5 py-0.5 hover:bg-slate-100 dark:hover:bg-slate-850">-</button>
                  </div>
                </div>

                <div className="relative z-10 text-[9px] text-slate-400 dark:text-slate-500 font-semibold flex justify-between">
                  <span>© 2026 MapBox OpenSource data</span>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-orange-600 dark:text-orange-400 hover:underline">
                    View on Google Maps
                  </a>
                </div>

              </div>
              
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
