import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function PublicLending() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#dbeafe] font-['Inter']">
      {/* Header */}
      <header className="w-full py-10 bg-white/80 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <span className="text-3xl font-extrabold text-[#2563eb] tracking-wider">LuxLoan</span>
            <div className="text-lg text-gray-500 mt-1">Empowering Nigeria's Public Sector</div>
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
          <span className="bg-[#2563eb]/10 text-[#2563eb] px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block shadow">
            Salary Loan
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Public Sector Lending <span className="text-[#2563eb]">Redefined</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Easy, low-interest payroll loans for active parastatal and Federal civil servants. No internet required, 24/7 access, and instant approval. Experience the LuxLoan difference—fast, transparent, and built for you.
          </p>
          <a
            href="#ussd"
            className="bg-gradient-to-r from-[#2563eb] to-[#60a5fa] text-white px-8 py-3 rounded-full font-bold shadow hover:from-[#60a5fa] hover:to-[#2563eb] transition inline-block mb-2"
          >
            Dial *5858#
          </a>
          <div className="text-xs text-gray-400 mt-2">
            USSD service available only to Nigerian civil service.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex justify-center min-w-[300px]"
        >
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80"
            alt="Public sector employee"
            className="object-cover object-top w-[400px] h-[400px] rounded-2xl shadow-xl border-4 border-white"
          />
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-[#2563eb]/10 rounded-xl shadow p-10 flex flex-col items-center border border-[#2563eb]/10 min-w-[220px]">
            <div className="bg-[#2563eb]/20 text-[#2563eb] font-bold rounded-full w-14 h-14 flex items-center justify-center mb-2 text-xl">01</div>
            <div className="font-bold mb-1 text-[#2563eb] text-lg">No Internet Needed</div>
            <div className="text-gray-600 text-base text-center">Dial *5858# on any phone, anytime.</div>
          </div>
          <div className="bg-[#2563eb]/10 rounded-xl shadow p-10 flex flex-col items-center border border-[#2563eb]/10 min-w-[220px]">
            <div className="bg-[#2563eb]/20 text-[#2563eb] font-bold rounded-full w-14 h-14 flex items-center justify-center mb-2 text-xl">02</div>
            <div className="font-bold mb-1 text-[#2563eb] text-lg">Instant Approval</div>
            <div className="text-gray-600 text-base text-center">Get a decision and see your loan balance instantly.</div>
          </div>
          <div className="bg-[#2563eb]/10 rounded-xl shadow p-10 flex flex-col items-center border border-[#2563eb]/10 min-w-[220px]">
            <div className="bg-[#2563eb]/20 text-[#2563eb] font-bold rounded-full w-14 h-14 flex items-center justify-center mb-2 text-xl">03</div>
            <div className="font-bold mb-1 text-[#2563eb] text-lg">24/7 Access</div>
            <div className="text-gray-600 text-base text-center">Apply or repay your loan anytime, anywhere.</div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#2563eb] mb-2">Business Solutions for the Public Sector</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            LuxLoan is more than just loans. We empower government workers, parastatals, and public sector businesses with tailored financial products, payroll solutions, and business support.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col items-center">
            <svg className="w-10 h-10 text-[#2563eb] mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 1.343-3 3v1c0 1.657 1.343 3 3 3s3-1.343 3-3v-1c0-1.657-1.343-3-3-3z"/><path d="M19 11v2a7 7 0 11-14 0v-2"/></svg>
            <h3 className="font-semibold text-[#2563eb] mb-1">Payroll Integration</h3>
            <p className="text-gray-600 text-center">Seamless integration with government payroll for easy deductions and repayments.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col items-center">
            <svg className="w-10 h-10 text-[#2563eb] mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 10h18M9 16h6"/></svg>
            <h3 className="font-semibold text-[#2563eb] mb-1">Business Loans</h3>
            <p className="text-gray-600 text-center">Access affordable business loans for public sector entrepreneurs and cooperatives.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col items-center">
            <svg className="w-10 h-10 text-[#2563eb] mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
            <h3 className="font-semibold text-[#2563eb] mb-1">Financial Literacy</h3>
            <p className="text-gray-600 text-center">Workshops and resources to help public sector workers manage and grow their finances.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center text-[#2563eb] mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow border border-gray-100 p-6">
            <h4 className="font-semibold text-[#2563eb] mb-2">Who is eligible for LuxLoan Public Lending?</h4>
            <p className="text-gray-600 text-sm">All active Federal and parastatal civil servants in Nigeria are eligible. You must have a valid government payroll account.</p>
          </div>
          <div className="bg-white rounded-xl shadow border border-gray-100 p-6">
            <h4 className="font-semibold text-[#2563eb] mb-2">How do I apply for a loan?</h4>
            <p className="text-gray-600 text-sm">Simply dial <span className="font-bold text-[#2563eb]">*5858#</span> on your mobile phone and follow the prompts. No internet required.</p>
          </div>
          <div className="bg-white rounded-xl shadow border border-gray-100 p-6">
            <h4 className="font-semibold text-[#2563eb] mb-2">How fast is approval?</h4>
            <p className="text-gray-600 text-sm">Approval is instant. You will see your loan status and balance immediately after application.</p>
          </div>
          <div className="bg-white rounded-xl shadow border border-gray-100 p-6">
            <h4 className="font-semibold text-[#2563eb] mb-2">Can I get business loans as a public sector worker?</h4>
            <p className="text-gray-600 text-sm">Yes! LuxLoan offers business loans and support for public sector entrepreneurs, cooperatives, and side businesses.</p>
          </div>
        </div>
      </section>

      {/* Contact/Support */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="text-center text-base text-gray-500">
          Need help? <Link to="/ContactUs" className="text-[#2563eb] hover:underline">Contact Support</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-bold text-[#2563eb] text-xl">LuxLoan</span>
            <p className="mt-2 text-gray-500 text-sm">Luxury Lending, Redefined.<br />Empowering your financial journey with speed, trust, and style.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-[#2563eb] hover:underline text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-[#2563eb] hover:underline text-sm">Terms of Service</Link>
            <Link to="/ContactUs" className="text-[#2563eb] hover:underline text-sm">Contact</Link>
          </div>
          <div className="text-gray-400 text-xs mt-4 md:mt-0">
            © {new Date().getFullYear()} LuxLoan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PublicLending;