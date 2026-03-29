"use client";
import React, { useState } from "react";
import {
  Send,
  Phone,
  Email,
  LocationOn,
  Schedule,
  VerifiedUser,
  SupportAgent,
  ArrowRight,
  CheckCircle,
} from "@mui/icons-material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    consentSms: false,
    consentYes: false,
    consentNo: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";
    if (!formData.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      // Reset form after submission if needed
      // setFormData({ name: "", email: "", phoneNumber: "", message: "", consentSms: false, consentYes: false, consentNo: false });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-[1360px] mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white px-6 py-3 rounded-full mb-6">
            <SupportAgent className="mr-2" />
            <span className="font-semibold">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We love to hear from you! Please fill out the form below and we will
            get in touch with you shortly.
          </p>
        </div>

        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#59c7b5] to-[#0095d4] rounded-3xl p-8 text-white shadow-2xl">
                <h2 className="text-2xl font-bold mb-8">Get Connected</h2>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="bg-white/20 p-3 rounded-2xl mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Call Us</h3>
                      <p className="text-white/80">+1 (888) 851-6444</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="bg-white/20 p-3 rounded-2xl mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Email className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email Us</h3>
                      <p className="text-white/80">
                        support@hewlettprinterssolution.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="bg-white/20 p-3 rounded-2xl mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Schedule className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Business Hours</h3>
                      <p className="text-white/80">Mon-Fri: 9AM-6PM</p>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <VerifiedUser className="text-white mr-3" />
                    <h3 className="font-bold text-lg">Why Choose Us?</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="text-white/90 mr-2 text-sm" />
                      <span className="text-white/90 text-sm">
                        Customer Support
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-white/90 mr-2 text-sm" />
                      <span className="text-white/90 text-sm">
                        Expert Technicians
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-white/90 mr-2 text-sm" />
                      <span className="text-white/90 text-sm">
                        Quick Response Time
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
  <div className="lg:col-span-2">
  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
    {/* Header */}
    <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-2 rounded-xl">
          <Send className="text-white text-lg" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
      </div>
    </div>

    <form className="p-6 space-y-5" onSubmit={handleSubmit}>
      {/* 2-Column Grid for Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name Field */}
        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Name:
          </label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:border-[#59c7b5] focus:ring-2 focus:ring-[#59c7b5]/20 transition-all duration-200 outline-none text-gray-800 placeholder-gray-400 text-sm bg-white hover:border-gray-300"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
              <span className="w-1 h-1 bg-red-500 rounded-full"></span>
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email:
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:border-[#59c7b5] focus:ring-2 focus:ring-[#59c7b5]/20 transition-all duration-200 outline-none text-gray-800 placeholder-gray-400 text-sm bg-white hover:border-gray-300"
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
              <span className="w-1 h-1 bg-red-500 rounded-full"></span>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Phone Number Field */}
      <div className="group">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number:
        </label>
        <input
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:border-[#59c7b5] focus:ring-2 focus:ring-[#59c7b5]/20 transition-all duration-200 outline-none text-gray-800 placeholder-gray-400 text-sm bg-white hover:border-gray-300"
          placeholder="Enter your phone number"
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
            <span className="w-1 h-1 bg-red-500 rounded-full"></span>
            {errors.phoneNumber}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div className="group">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Message:
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:border-[#59c7b5] focus:ring-2 focus:ring-[#59c7b5]/20 transition-all duration-200 outline-none text-gray-800 placeholder-gray-400 text-sm bg-white hover:border-gray-300 resize-none"
          placeholder="Tell us how we can help you..."
          rows="4"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
            <span className="w-1 h-1 bg-red-500 rounded-full"></span>
            {errors.message}
          </p>
        )}
      </div>

      {/* Consent Section - All Original Text Preserved */}
      <div className="space-y-4 p-5 bg-gray-50/80 rounded-xl border border-gray-100">
        {/* First Checkbox - SMS Consent */}
        <div className="flex gap-3">
          <input
            type="checkbox"
            name="consentSms"
            checked={formData.consentSms}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 text-[#59c7b5] rounded border-gray-300 focus:ring-2 focus:ring-[#59c7b5]/30 cursor-pointer flex-shrink-0"
          />
          <label className="text-xs text-gray-700 leading-relaxed cursor-pointer">
            Hewlett Printers Solution llc would like your consent to send text message communications from +18888516444 to your mobile number listed above, regarding informational messages. Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. Reply 'STOP' to unsubscribe at any time. Reply 'HELP' for assistance or more information.
          </label>
        </div>

        {/* Second Checkbox - Yes Consent */}
        <div className="flex gap-3">
          <input
            type="checkbox"
            name="consentYes"
            checked={formData.consentYes}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 text-[#59c7b5] rounded border-gray-300 focus:ring-2 focus:ring-[#59c7b5]/30 cursor-pointer flex-shrink-0"
          />
          <label className="text-xs text-gray-700 leading-relaxed cursor-pointer">
            Yes, I consent to receive informational messages from Hewlett Printers Solution llc regarding informational messages.
          </label>
        </div>

        {/* Third Checkbox - No Consent */}
        <div className="flex gap-3">
          <input
            type="checkbox"
            name="consentNo"
            checked={formData.consentNo}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 text-[#59c7b5] rounded border-gray-300 focus:ring-2 focus:ring-[#59c7b5]/30 cursor-pointer flex-shrink-0"
          />
          <label className="text-xs text-gray-700 leading-relaxed cursor-pointer">
            No, I do not want to receive any text messages from Hewlett Printers Solution llc
          </label>
        </div>

        {/* Privacy Notice */}
        <div className="pt-3 mt-1 border-t border-gray-200">
          <p className="text-xs text-gray-500 leading-relaxed">
            We do not share your mobile opt-in information with anyone. See our Privacy Policy for more information on how we handle your data.
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#59c7b5] to-[#0095d4] hover:from-[#4ab8a5] hover:to-[#0085c4] text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
      >
        <Send className="text-base" />
        Submit
        <ArrowRight className="text-base group-hover:translate-x-0.5 transition-transform" />
      </button>
    </form>

    {/* Success Message */}
    {submitted && (
      <div className="mx-6 mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3">
        <CheckCircle className="text-green-500 text-lg flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-sm">Message Sent Successfully!</h3>
          <p className="text-green-600 text-xs">Your response has been submitted! We will get back to you shortly.</p>
        </div>
      </div>
    )}
  </div>
</div>
          </div>

          {/* Additional Contact Methods */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#59c7b5]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-[#59c7b5] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Call Us Directly
              </h3>
              <p className="text-gray-600 mb-4">
                Speak with our support team immediately
              </p>
              <p className="text-2xl font-bold text-[#0095d4]">+1 (888) 851-6444</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#0095d4]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Email className="text-[#0095d4] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Email Support
              </h3>
              <p className="text-gray-600 mb-4">
                Send us an email for detailed inquiries
              </p>
              <p className="text-lg font-bold text-[#59c7b5]">
                support@hewlettprinterssolution.com
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-[#59c7b5]/10 to-[#0095d4]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Schedule className="text-[#59c7b5] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Business Hours
              </h3>
              <p className="text-gray-600 mb-2">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;