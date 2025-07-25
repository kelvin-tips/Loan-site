import React from "react";
import { useNavigate } from "react-router-dom";

const heroImg = "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80";

function Business() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#dbeafe] font-['Inter'] text-[#18122B]">
      {/* Header */}
      <header className="w-full py-10 bg-white/80 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <span className="text-3xl font-extrabold text-[#2563eb] tracking-wider">LuxLoan</span>
            <div className="text-lg text-gray-500 mt-1">Business Solutions for Growth</div>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button
              onClick={() => navigate("/login")}
              className="bg-white border border-[#2563eb] text-[#2563eb] px-5 py-2 rounded-full font-bold shadow hover:scale-105 transition"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="bg-[#2563eb] text-white px-5 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 pt-20 pb-10 px-6">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#2563eb]">
            LuxLoan Business<br />Empowering Your Enterprise
          </h1>
          <p className="text-gray-700 mb-6 text-lg">
            Fast payments, easy tools, and affordable business solutions for your growth. Unlock working capital, manage payroll, and access tailored financing for your business.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="bg-gradient-to-r from-[#2563eb] to-[#60a5fa] text-white font-bold px-6 py-3 rounded-full shadow hover:from-[#60a5fa] hover:to-[#2563eb] transition text-base"
          >
            Open a Business Account
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={heroImg} alt="Business Devices" className="w-[340px] max-w-full rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-[#2563eb]/10 rounded-xl shadow p-10 flex flex-col items-center border border-[#2563eb]/10 min-w-[220px]">
            <div className="bg-[#2563eb]/20 text-[#2563eb] font-bold rounded-full w-14 h-14 flex items-center justify-center mb-2 text-xl">01</div>
            <div className="font-bold mb-1 text-[#2563eb] text-lg">Business Loans</div>
            <div className="text-gray-600 text-base text-center">Access affordable working capital and asset financing for your business.</div>
          </div>
          <div className="bg-[#2563eb]/10 rounded-xl shadow p-10 flex flex-col items-center border border-[#2563eb]/10 min-w-[220px]">
            <div className="bg-[#2563eb]/20 text-[#2563eb] font-bold rounded-full w-14 h-14 flex items-center justify-center mb-2 text-xl">02</div>
            <div className="font-bold mb-1 text-[#2563eb] text-lg">Payroll & Salary Management</div>
            <div className="text-gray-600 text-base text-center">Automate payroll, manage staff loans, and simplify salary payments.</div>
          </div>
          <div className="bg-[#2563eb]/10 rounded-xl shadow p-10 flex flex-col items-center border border-[#2563eb]/10 min-w-[220px]">
            <div className="bg-[#2563eb]/20 text-[#2563eb] font-bold rounded-full w-14 h-14 flex items-center justify-center mb-2 text-xl">03</div>
            <div className="font-bold mb-1 text-[#2563eb] text-lg">Payment Tools</div>
            <div className="text-gray-600 text-base text-center">POS, transfers, and digital payment solutions for seamless business operations.</div>
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
              <div className="font-bold mb-1 text-yellow-200">Register</div>
              <div className="text-gray-300 text-sm text-center">Create your business account online.</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-200 text-orange-700 font-bold rounded-full w-10 h-10 flex items-center justify-center mb-2">02</div>
              <div className="font-bold mb-1 text-yellow-200">Apply</div>
              <div className="text-gray-300 text-sm text-center">Request loans or payment solutions.</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-200 text-green-700 font-bold rounded-full w-10 h-10 flex items-center justify-center mb-2">03</div>
              <div className="font-bold mb-1 text-yellow-200">Get Approved</div>
              <div className="text-gray-300 text-sm text-center">Quick review and approval for eligible businesses.</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-200 text-blue-700 font-bold rounded-full w-10 h-10 flex items-center justify-center mb-2">04</div>
              <div className="font-bold mb-1 text-yellow-200">Grow</div>
              <div className="text-gray-300 text-sm text-center">Access funds and tools to grow your business.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#fff7e6] via-[#f8f6ff] to-[#e9e6f3]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold mb-4 text-[#18122B]">
              Ready to take your business to the next level?
            </h2>
            <p className="text-gray-700 mb-6">
              Open a LuxLoan Business Account and access the best financial tools for your enterprise.
            </p>
            <button
              onClick={() => navigate("/signup")}
              className="bg-gradient-to-r from-[#2563eb] to-[#60a5fa] text-white font-bold px-6 py-3 rounded-full shadow hover:from-[#60a5fa] hover:to-[#2563eb] transition text-base"
            >
              Get Started
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="Business Growth"
              className="rounded-2xl shadow-2xl w-56 h-96 object-cover border-4 border-white"
            />
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
            <div className="font-bold mb-2">Business</div>
            <ul className="text-sm text-gray-500 space-y-1">
              <li><a href="#" className="hover:text-[#2563eb]">Business Account</a></li>
              <li><a href="#" className="hover:text-[#2563eb]">POS</a></li>
              <li><a href="#" className="hover:text-[#2563eb]">Financing</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Company</div>
            <ul className="text-sm text-gray-500 space-y-1">
              <li><a href="#" className="hover:text-[#2563eb]">About</a></li>
              <li><a href="#" className="hover:text-[#2563eb]">Careers</a></li>
              <li><a href="#" className="hover:text-[#2563eb]">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Resource</div>
            <ul className="text-sm text-gray-500 space-y-1">
              <li><a href="#" className="hover:text-[#2563eb]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#2563eb]">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#2563eb]">Help Center</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">
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

export default Business;