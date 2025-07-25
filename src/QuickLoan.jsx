import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Images
const heroImg =
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80";
const phoneImg =
  "https://images.pexels.com/photos/6078120/pexels-photo-6078120.jpeg?auto=compress&w=600&q=80";
const phoneImg2 =
  "https://images.pexels.com/photos/6078121/pexels-photo-6078121.jpeg?auto=compress&w=600&q=80";

function QuickLoan() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#18122B] font-sans">
      {/* Navbar */}
      <nav className="bg-white/80 border-b border-gray-100 fixed w-full z-20 px-8 py-5 flex justify-between items-center backdrop-blur-md">
        <div className="text-2xl font-extrabold text-[#2563eb] tracking-wide cursor-pointer">
          <Link to="/">LuxLoan</Link>
        </div>
        <ul className="hidden md:flex gap-10 text-lg">
          <li>
            <Link to="/" className="hover:text-[#2563eb] hover:underline transition">Home</Link>
          </li>
          <li>
            <Link to="/business" className="hover:text-[#2563eb] hover:underline transition">Business</Link>
          </li>
          <li>
            <Link to="/QuickLoan" className="hover:text-[#2563eb] hover:underline transition">Quick Loan</Link>
          </li>
        </ul>
        <div className="flex gap-3">
          <Link to="/login" className="bg-white border border-[#2563eb] text-[#2563eb] px-5 py-2 rounded-full font-bold shadow hover:scale-105 transition">Sign In</Link>
          <Link to="/signup" className="bg-[#2563eb] text-white px-5 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-12 px-4 md:px-0 flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        <div className="flex-1 z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-100 text-[#2563eb] px-2 py-1 rounded-full text-xs font-semibold shadow">
              Control is at your hands
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-sm text-[#18122B]">
            Get quick and easy <span className="text-[#2563eb]">LuxLoan</span> loans
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-lg">
            Access up to <span className="font-bold">₦10,000,000</span> with no paperwork within a minute to cater for unplanned expenses.
          </p>
          <div className="flex gap-4 mb-8">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-gray-900 transition"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6" />
              Google Play
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-gray-900 transition"
            >
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-6" />
              App Store
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center relative mt-8 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl shadow-2xl w-80 h-80 overflow-hidden border-4 border-white bg-gradient-to-tr from-blue-100 via-white to-blue-200">
              <img
                src={heroImg}
                alt="Happy customer"
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-2xl shadow-xl flex flex-col items-center w-64 border border-blue-100">
              <span className="text-xs text-gray-500 mb-1">Loan approved</span>
              <span className="text-2xl font-bold text-[#2563eb] mb-1">₦225,000.75</span>
              <div className="flex justify-between w-full text-xs text-gray-600">
                <span>Term: 12mo</span>
                <span>Next: 20th Feb</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern way to money */}
      <section className="bg-white py-8 px-4 border-y border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 md:mb-0 text-[#2563eb]">
            The modern way to <span className="text-[#60a5fa]">money</span> in everything
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">We're Online!</span>
            <button className="bg-[#2563eb] text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-[#1d4ed8] transition">
              Chat Now
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-400 text-center mt-4 max-w-3xl mx-auto">
          We take your privacy seriously and only process your personal information to improve your banking experience. By continuing to use this platform, you consent to the processing of your personal data as defined in our <a href="#" className="text-[#2563eb] underline">privacy policy</a>.
        </p>
      </section>

      {/* Loan Types */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#e0e7ef]/60 to-[#f8fafc]/80">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-[#2563eb]/10 text-[#2563eb] px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block shadow">
              Loans
            </span>
            <h2 className="text-3xl font-extrabold mb-4 text-[#2563eb]">
              Get access to different types of loans.
            </h2>
            <p className="text-gray-600 mb-6">
              Discover a range of money solutions to meet your specific needs.
            </p>
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-4 border border-[#2563eb]/10">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Quick Loans"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3 className="font-bold text-lg text-[#2563eb]">Quick Loans Fast</h3>
                  <p className="text-gray-500 text-sm">Get started with a LuxLoan account in minutes</p>
                  <Link to="/apply/quick" className="text-[#2563eb] font-semibold hover:underline text-sm">Apply Now</Link>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-4 border border-[#2563eb]/10">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
                  alt="Salary Earner"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3 className="font-bold text-lg text-[#2563eb]">Salary Earner?</h3>
                  <p className="text-gray-500 text-sm">Get started with a LuxLoan account in minutes</p>
                  <Link to="/apply/salary" className="text-[#2563eb] font-semibold hover:underline text-sm">Apply Now</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-2xl shadow-2xl w-72 h-96 overflow-hidden border-4 border-[#2563eb]/20 bg-gradient-to-tr from-blue-100 via-white to-blue-200">
              <img
                src={phoneImg}
                alt="Phone showing loan app"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Repayment Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="rounded-2xl shadow-2xl w-72 h-96 overflow-hidden border-4 border-[#2563eb]/20 bg-gradient-to-tr from-blue-100 via-white to-blue-200">
              <img
                src={phoneImg2}
                alt="Repayment on phone"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div>
            <span className="bg-[#2563eb]/10 text-[#2563eb] px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block shadow">
              Easy repayments
            </span>
            <h2 className="text-3xl font-extrabold mb-4 text-[#2563eb]">
              Make repayments at your convenience.
            </h2>
            <p className="text-gray-600 mb-6">
              Settle loan payments on schedule anywhere with ease.
            </p>
            <div className="bg-[#f8fafc] rounded-xl shadow-lg p-4 flex items-center gap-4 border border-[#2563eb]/10">
              <img
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                alt="Repayment"
                className="h-10 w-10 object-contain"
              />
              <div>
                <span className="block text-gray-500 text-xs mb-1">Loan repaid</span>
                <span className="font-bold text-lg text-[#2563eb]">₦225,000.75</span>
                <div className="text-xs text-gray-400">Buy now, pay later transfer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Loans CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#e0e7ef]/60 to-[#f8fafc]/80">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold mb-4 text-[#2563eb]">
              Get <span className="text-[#60a5fa]">instant loans</span> with just a tap.
            </h2>
            <p className="text-gray-600 mb-6">
              Experience money solutions that meet your financial lifestyle and help achieve your financial goals.
            </p>
            <div className="flex gap-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-gray-900 transition"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6" />
                Google Play
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-gray-900 transition"
              >
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-6" />
                App Store
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="rounded-2xl shadow-2xl w-72 h-96 overflow-hidden border-4 border-[#2563eb]/20 bg-gradient-to-tr from-blue-100 via-white to-blue-200">
              <img
                src={phoneImg}
                alt="Quick loan app"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-[#18122B] py-12 px-4 mt-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
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
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Personal account</li>
              <li>Private Payroll Loan</li>
              <li>Public Payroll Loan</li>
              <li>Quick Loans</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Business solutions</div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Business Account</li>
              <li>Business Loans</li>
              <li>Payment Tools</li>
              <li>Partnership Financing</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Company</div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><Link to="/AboutUS" className="hover:underline">About Us</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/LuxBlog" className="hover:underline">Blog</Link></li>
              <li><Link to="/ContactUs" className="hover:underline">Contact</Link></li>
            </ul>
            <div className="font-bold mt-4 mb-2">Resources</div>
            <ul className="text-sm text-gray-600 space-y-1">
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

export default QuickLoan;