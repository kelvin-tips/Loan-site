import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#dbeafe] font-['Inter'] text-[#18122B]">
      {/* Header */}
      <header className="w-full py-10 bg-white/80 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <span className="text-3xl font-extrabold text-[#2563eb] tracking-wider">LuxLoan</span>
            <div className="text-lg text-gray-500 mt-1">Empowering Your Financial Journey</div>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/login" className="bg-white border border-[#2563eb] text-[#2563eb] px-5 py-2 rounded-full font-bold shadow hover:scale-105 transition">Sign In</Link>
            <Link to="/signup" className="bg-[#2563eb] text-white px-5 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition">Sign Up</Link>
          </div>
        </div>
      </header>

      {/* Hero/Headline */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-[#2563eb] mb-4"
        >
          Empowering Dreams, Enabling Possibilities
        </motion.h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          At <span className="text-[#2563eb] font-bold">LuxLoan</span>, we are dedicated to providing premium financial solutions that empower individuals and businesses to achieve their ambitions. Our legacy is built on trust, innovation, and a relentless pursuit of excellence.
        </p>
      </section>

      {/* Numbers/Stats */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-10 text-center border border-[#2563eb]/20"
        >
          <div className="text-3xl font-extrabold text-[#2563eb] mb-2">10,000+</div>
          <div className="text-gray-700 font-semibold">Happy Clients</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-10 text-center border border-[#2563eb]/20"
        >
          <div className="text-3xl font-extrabold text-[#2563eb] mb-2">₦5B+</div>
          <div className="text-gray-700 font-semibold">Loans Disbursed</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-10 text-center border border-[#2563eb]/20"
        >
          <div className="text-3xl font-extrabold text-[#2563eb] mb-2">50+</div>
          <div className="text-gray-700 font-semibold">Expert Team Members</div>
        </motion.div>
      </section>

      {/* Timeline/Story */}
      <section className="max-w-6xl mx-auto mb-20 px-6">
        <h3 className="text-2xl font-bold text-[#2563eb] mb-6 text-center">Our Story</h3>
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="flex-1">
            <div className="bg-white rounded-xl p-6 mb-4 border-l-4 border-[#2563eb]">
              <div className="text-[#2563eb] font-bold mb-2">2015</div>
              <div className="text-gray-700">LuxLoan was founded with a vision to redefine luxury lending and empower clients with bespoke financial solutions.</div>
            </div>
            <div className="bg-white rounded-xl p-6 mb-4 border-l-4 border-[#2563eb]">
              <div className="text-[#2563eb] font-bold mb-2">2018</div>
              <div className="text-gray-700">Expanded our reach globally, offering exclusive services to high-net-worth individuals and businesses worldwide.</div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-xl p-6 mb-4 border-l-4 border-[#2563eb]">
              <div className="text-[#2563eb] font-bold mb-2">2021</div>
              <div className="text-gray-700">Launched our digital platform, making luxury financing more accessible and seamless than ever before.</div>
            </div>
            <div className="bg-white rounded-xl p-6 mb-4 border-l-4 border-[#2563eb]">
              <div className="text-[#2563eb] font-bold mb-2">2024</div>
              <div className="text-gray-700">Celebrating a decade of excellence, innovation, and client success stories.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-6xl mx-auto mb-20 px-6">
        <h3 className="text-2xl font-bold text-[#2563eb] mb-6 text-center">What Drives Us</h3>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Happy LuxLoan Clients"
            className="rounded-2xl shadow-xl border-4 border-[#2563eb]/30 w-full md:w-1/2 object-cover h-56 md:h-64 mb-6 md:mb-0"
            style={{ objectPosition: "center" }}
          />
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <div className="text-[#2563eb] font-bold text-lg mb-1">Our Vision</div>
              <div className="text-gray-700">To be the most trusted luxury financial partner, delivering world-class experiences for every client.</div>
            </div>
            <div>
              <div className="text-[#2563eb] font-bold text-lg mb-1">Our Mission</div>
              <div className="text-gray-700">Providing innovative, secure, and flexible financial solutions that empower our clients to achieve their dreams.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto mb-20 px-6">
        <h3 className="text-2xl font-bold text-[#2563eb] mb-6 text-center">Our Core Values</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-xl p-6 border border-[#2563eb]/20">
            <div className="text-[#2563eb] font-bold mb-2">Trust</div>
            <div className="text-gray-700 text-sm">We build lasting relationships on integrity and transparency.</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-[#2563eb]/20">
            <div className="text-[#2563eb] font-bold mb-2">Innovation</div>
            <div className="text-gray-700 text-sm">We embrace technology to deliver exceptional service.</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-[#2563eb]/20">
            <div className="text-[#2563eb] font-bold mb-2">Excellence</div>
            <div className="text-gray-700 text-sm">We strive for the highest standards in everything we do.</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-[#2563eb]/20">
            <div className="text-[#2563eb] font-bold mb-2">Professionalism</div>
            <div className="text-gray-700 text-sm">We act with respect, responsibility, and expertise.</div>
          </div>
        </div>
      </section>

      {/* CEO Statement */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-20 px-6">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
          alt="CEO"
          className="rounded-2xl shadow-xl border-4 border-[#2563eb]/30 w-40 h-40 object-cover"
        />
        <div>
          <div className="text-[#2563eb] font-bold mb-2">CEO's Address</div>
          <div className="text-gray-700 mb-2">
            At LuxLoan, we are proud to celebrate a decade of making a significant impact on individuals, businesses, and communities. Our commitment to excellence, innovation, and trust remains unwavering as we continue to deliver world-class financial solutions.
          </div>
          <div className="text-[#2563eb] font-semibold">Jordan Maxwell, CFA</div>
        </div>
      </section>

      {/* Careers */}
      <section className="max-w-6xl mx-auto mb-20 px-6">
        <h3 className="text-2xl font-bold text-[#2563eb] mb-6 text-center">Careers</h3>
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          {[
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="LuxLoan Team"
              className="rounded-xl shadow-lg border-2 border-[#2563eb]/20 w-28 h-28 object-cover"
            />
          ))}
        </div>
        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-[#2563eb] to-[#60a5fa] text-white font-bold px-8 py-2 rounded-full shadow-lg hover:from-[#60a5fa] hover:to-[#2563eb] transition"
          >
            Join Our Team
          </a>
        </div>
      </section>

      {/* Office Location */}
      <section className="max-w-6xl mx-auto mb-20 px-6">
        <h3 className="text-2xl font-bold text-[#2563eb] mb-6 text-center">Drop by our office</h3>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#2563eb]/20">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
            alt="LuxLoan Office"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white/80 text-[#18122B] px-6 py-3 rounded-xl shadow-lg font-bold text-lg">
            Our head office<br />
            123 Luxury Ave, Suite 100, New York, NY
          </div>
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

export default AboutUs;