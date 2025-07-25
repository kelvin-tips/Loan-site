import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function PrivateLending() {
  // Loan Calculator State
  const [amount, setAmount] = useState(500000);
  const [months, setMonths] = useState(12);
  const interestRate = 0.18; // 18% annual
  const monthlyInterest = interestRate / 12;
  const monthlyPayment =
    (amount * monthlyInterest) /
    (1 - Math.pow(1 + monthlyInterest, -months));
  const totalPayment = monthlyPayment * months;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#dbeafe] font-['Inter']">
      {/* Header */}
      <header className="w-full py-10 bg-white/80 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <span className="text-3xl font-extrabold text-[#2563eb] tracking-wider">LuxLoan</span>
            <div className="text-lg text-gray-500 mt-1">Empowering Private Sector Professionals</div>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/login" className="bg-white border border-[#2563eb] text-[#2563eb] px-5 py-2 rounded-full font-bold shadow hover:scale-105 transition">Sign In</Link>
            <Link to="/signup" className="bg-[#2563eb] text-white px-5 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition">Sign Up</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 min-w-[300px]"
        >
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block shadow">
            Salary Loan
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Private Sector Lending <span className="text-[#2563eb]">Redefined</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Get a salary loan with minimal collateral required to support your working advantage in life. Fast, flexible, and built for private professionals.
          </p>
          <div className="flex gap-4 mb-4">
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center relative mt-8 md:mt-0"
        >
          <div className="rounded-3xl shadow-2xl w-80 h-80 overflow-hidden border-4 border-white bg-gradient-to-tr from-orange-100 via-white to-purple-100 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
              alt="Private sector professional"
              className="object-cover object-top w-full h-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-[#2563eb]/10 rounded-xl shadow p-10 flex flex-col items-center border border-[#2563eb]/10 min-w-[220px]">
            <div className="bg-[#2563eb]/20 text-[#2563eb] font-bold rounded-full w-14 h-14 flex items-center justify-center mb-2 text-xl">01</div>
            <div className="font-bold mb-1 text-[#2563eb] text-lg">No Collateral Needed</div>
            <div className="text-gray-600 text-base text-center">Access loans up to ₦10,000,000 with no collateral required.</div>
          </div>
          <div className="bg-[#2563eb]/10 rounded-xl shadow p-10 flex flex-col items-center border border-[#2563eb]/10 min-w-[220px]">
            <div className="bg-[#2563eb]/20 text-[#2563eb] font-bold rounded-full w-14 h-14 flex items-center justify-center mb-2 text-xl">02</div>
            <div className="font-bold mb-1 text-[#2563eb] text-lg">Flexible Repayment</div>
            <div className="text-gray-600 text-base text-center">Repay over up to 18 months, tailored to your needs.</div>
          </div>
          <div className="bg-[#2563eb]/10 rounded-xl shadow p-10 flex flex-col items-center border border-[#2563eb]/10 min-w-[220px]">
            <div className="bg-[#2563eb]/20 text-[#2563eb] font-bold rounded-full w-14 h-14 flex items-center justify-center mb-2 text-xl">03</div>
            <div className="font-bold mb-1 text-[#2563eb] text-lg">Fast Approval</div>
            <div className="text-gray-600 text-base text-center">Get a decision and funds in your account within 24 hours.</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 bg-[#18122B]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-extrabold mb-8 text-yellow-300">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="flex flex-col items-center">
              <div className="bg-purple-200 text-purple-700 font-bold rounded-full w-10 h-10 flex items-center justify-center mb-2">01</div>
              <div className="font-bold mb-1 text-yellow-200">Create account</div>
              <div className="text-gray-300 text-sm text-center">Sign up with your email and phone number.</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-200 text-orange-700 font-bold rounded-full w-10 h-10 flex items-center justify-center mb-2">02</div>
              <div className="font-bold mb-1 text-yellow-200">Apply for loan</div>
              <div className="text-gray-300 text-sm text-center">Request your desired loan amount.</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-200 text-green-700 font-bold rounded-full w-10 h-10 flex items-center justify-center mb-2">03</div>
              <div className="font-bold mb-1 text-yellow-200">Application review</div>
              <div className="text-gray-300 text-sm text-center">Documents are reviewed for eligibility.</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-200 text-blue-700 font-bold rounded-full w-10 h-10 flex items-center justify-center mb-2">04</div>
              <div className="font-bold mb-1 text-yellow-200">Get funded</div>
              <div className="text-gray-300 text-sm text-center">Loan is disbursed to your account if successful.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#393053]/60 to-[#18122B]/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold mb-4 text-yellow-300">Requirements</h2>
            <ul className="list-disc pl-6 text-gray-200 mb-6 space-y-2">
              <li>Valid means of identification (National ID card, Driver’s License, International Passport, Voter’s Card)</li>
              <li>Employment letter/ID card</li>
              <li>Recent payslip</li>
              <li>Active salary account</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
              alt="Requirements"
              className="rounded-2xl shadow-2xl w-56 h-80 object-cover border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Loan Calculator */}
      <section className="py-16 px-6 bg-[#18122B]">
        <div className="max-w-4xl mx-auto bg-[#393053] rounded-3xl shadow-2xl p-8 border border-yellow-400/20">
          <h2 className="text-2xl font-bold text-yellow-300 mb-6 text-center">Loan Calculator</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <label className="block mb-2 text-yellow-200 font-semibold">Loan Amount</label>
              <input
                type="range"
                min={50000}
                max={10000000}
                step={10000}
                value={amount}
                onChange={e => setAmount(Number(e.target.value))}
                className="w-full mb-2"
              />
              <div className="text-gray-200 mb-4">₦{amount.toLocaleString()}</div>
              <label className="block mb-2 text-yellow-200 font-semibold">Duration (Months)</label>
              <input
                type="range"
                min={3}
                max={18}
                step={1}
                value={months}
                onChange={e => setMonths(Number(e.target.value))}
                className="w-full mb-2"
              />
              <div className="text-gray-200 mb-4">{months} Months</div>
            </div>
            <div className="flex-1 bg-[#18122B] rounded-xl p-6 shadow-lg border border-yellow-400/10">
              <div className="text-gray-400 mb-2">Estimated Monthly Repayment</div>
              <div className="text-3xl font-bold text-yellow-300 mb-4">
                ₦{monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
              <div className="text-gray-400 mb-2">Total Repayment</div>
              <div className="text-xl font-bold text-yellow-200">
                ₦{totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#fff7e6] via-[#f8f6ff] to-[#e9e6f3]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold mb-4 text-[#18122B]">
              Get instant loans with <span className="text-orange-400">just a tap</span>
            </h2>
            <p className="text-gray-700 mb-6">
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
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="App on phone"
              className="rounded-2xl shadow-2xl w-56 h-96 object-cover border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-10 mt-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
          <div>
            <div className="text-2xl font-extrabold text-[#2563eb] mb-2">LUXLOAN</div>
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

export default PrivateLending;