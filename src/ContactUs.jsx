import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#dbeafe] font-['Inter'] text-[#18122B]">
      {/* Header */}
      <header className="w-full py-10 bg-white/80 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <span className="text-3xl font-extrabold text-[#2563eb] tracking-wider">LuxLoan</span>
            <div className="text-lg text-gray-500 mt-1">Contact Our Team</div>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/login" className="bg-white border border-[#2563eb] text-[#2563eb] px-5 py-2 rounded-full font-bold shadow hover:scale-105 transition">Sign In</Link>
            <Link to="/signup" className="bg-[#2563eb] text-white px-5 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition">Sign Up</Link>
          </div>
        </div>
      </header>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-[#2563eb] mb-4 text-center"
        >
          Get in Touch
        </motion.h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto text-center mb-12">
          Our team is here to help you with any questions, support, or partnership opportunities.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-xl p-10 border border-[#2563eb]/20 flex flex-col gap-6"
          >
            <div>
              <div className="text-[#2563eb] font-bold mb-1">Email</div>
              <a href="mailto:support@luxloan.com" className="text-gray-700 hover:underline font-medium">support@luxloan.com</a>
            </div>
            <div>
              <div className="text-[#2563eb] font-bold mb-1">Phone</div>
              <a href="tel:+1234567890" className="text-gray-700 hover:underline font-medium">+1 234 567 890</a>
            </div>
            <div>
              <div className="text-[#2563eb] font-bold mb-1">Address</div>
              <div className="text-gray-700 font-medium">123 Luxury Ave, Suite 100, New York, NY</div>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-[#2563eb] hover:text-[#60a5fa] transition">Facebook</a>
              <a href="#" className="text-[#2563eb] hover:text-[#60a5fa] transition">Twitter</a>
              <a href="#" className="text-[#2563eb] hover:text-[#60a5fa] transition">Instagram</a>
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-10 border border-[#2563eb]/20"
          >
            <h3 className="text-2xl font-bold text-[#2563eb] mb-4">Send a Message</h3>
            {submitted ? (
              <div className="text-green-500 font-semibold text-lg">Thank you! We have received your message.</div>
            ) : (
              <>
                <div className="mb-4">
                  <label className="block text-[#2563eb] mb-1 font-semibold">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-2 bg-gray-50 text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-[#2563eb] mb-1 font-semibold">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-2 bg-gray-50 text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-[#2563eb] mb-1 font-semibold">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-2 bg-gray-50 text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-[#2563eb] mb-1 font-semibold">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-2 bg-gray-50 text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2563eb] to-[#60a5fa] text-white font-bold py-2 rounded-full shadow-lg hover:from-[#60a5fa] hover:to-[#2563eb] transition"
                >
                  Send Message
                </button>
              </>
            )}
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-10 mt-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
          <div>
            <div className="text-2xl font-extrabold text-[#2563eb] mb-2">LuxLoan</div>
            <div className="text-sm text-gray-500 mb-2">
              65 Marina Street, Victoria Island, Lagos<br />
              0700 100 1000<br />
              <a href="mailto:customercare@luxloan.ng" className="underline text-[#2563eb]">customercare@luxloan.ng</a>
            </div>
            <div className="text-xs text-gray-400 mt-4">
              &copy; 2025 LuxLoan. All rights reserved.
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">Retail solutions</div>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>Personal account</li>
              <li>Private Payroll Loan</li>
              <li>Public Payroll Loan</li>
              <li>Quick Loans</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Business solutions</div>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>Business Account</li>
              <li>Business Loans</li>
              <li>Payment Tools</li>
              <li>Partnership Financing</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Company</div>
            <ul className="text-sm text-gray-500 space-y-1">
              <li><Link to="/AboutUS" className="hover:underline">About Us</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/LuxBlog" className="hover:underline">Blog</Link></li>
              <li><Link to="/ContactUs" className="hover:underline">Contact</Link></li>
            </ul>
            <div className="font-bold mt-4 mb-2">Resources</div>
            <ul className="text-sm text-gray-500 space-y-1">
              <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/help" className="hover:underline">Help Center</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-gray-400 mt-8 max-w-4xl mx-auto text-center">
          Disclaimer: Dear customer, kindly note that LuxLoan will never request for conversation or any other personal favor or benefits to process your loan application or inquiries. Do not make a loan repayment to any account except official account numbers with the name "LuxLoan". Kindly disregard any information that is not communicated via our official channels or customer care unit. The Company shall bear no liability for any losses or consequences from interaction with fraudulent individuals who falsely claim to be representatives of the Company.
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <a href="#" className="text-gray-400 hover:text-[#2563eb] transition">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-[#2563eb] transition">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-[#2563eb] transition">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;