import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  BanknotesIcon,
  ChartBarIcon,
  UserCircleIcon,
  DocumentDuplicateIcon,
  CalendarDaysIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

// Static Data
const heroImages = [
  "https://th.bing.com/th/id/OIP.tPg4Fe0h4nGMrfBFBy5MZwHaE7?w=255&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  "https://th.bing.com/th/id/OIP.UBjst41fzQAALmATuyjKAgHaFL?w=261&h=183&c=7&r=0&o=7&pid=1.7&rm=3"
];
const loanCriteria = [
  { icon: <UserCircleIcon className="w-8 h-8 text-[#2563eb]" />, title: "Valid ID", desc: "Government-issued ID." },
  { icon: <DocumentDuplicateIcon className="w-8 h-8 text-[#2563eb]" />, title: "Proof of Income", desc: "Payslip or business doc." },
  { icon: <BanknotesIcon className="w-8 h-8 text-[#2563eb]" />, title: "Bank Statement", desc: "3–6 months of statements." },
  { icon: <CalendarDaysIcon className="w-8 h-8 text-[#2563eb]" />, title: "Active Contact", desc: "Phone & email." },
];
const products = [
  { icon: <BanknotesIcon className="w-8 h-8 text-[#2563eb]" />, title: "Quick Loan", desc: "Instant cash.", link: "/QuickLoan" },
  { icon: <ChartBarIcon className="w-8 h-8 text-[#2563eb]" />, title: "Public Payroll", desc: "For public workers.", link: "/PublicLending" },
  { icon: <ArrowTrendingUpIcon className="w-8 h-8 text-[#2563eb]" />, title: "Private Payroll", desc: "For private sector.", link: "/PrivateLending" },
  { icon: <CheckCircleIcon className="w-8 h-8 text-[#2563eb]" />, title: "Investment", desc: "Grow wealth.", link: "/Investments" },
];
const faqs = [
  { q: "How fast can I get a loan?", a: "Within 24 hours of approval." },
  { q: "Do I need collateral?", a: "No, most loans are unsecured." },
  { q: "Is LuxLoan safe?", a: "Yes, we use bank-level encryption and are fully licensed." },
  { q: "Can I repay early?", a: "Absolutely! There are no penalties for early repayment." },
];

function App() {
  const [dropdown, setDropdown] = useState(null);
  const [heroIndex, setHeroIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);
  const [faqOpen, setFaqOpen] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => setHeroIndex(i => (i + 1) % heroImages.length), 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (dropdown) document.addEventListener("mousedown", e => { if (!e.target.closest(".dropdown-parent")) setDropdown(null); });
    return () => document.removeEventListener("mousedown", () => {});
  }, [dropdown]);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "bg-[#18122B] text-white" : "bg-[#f8fafc] text-[#18122B]"} min-h-screen font-['Inter'] transition-colors`}>
      {/* Navbar */}
      <nav className={`${darkMode ? "bg-[#23203b]/80 border-[#23203b]" : "bg-white/70 border-gray-100"} fixed w-full z-20 px-8 py-5 flex justify-between items-center backdrop-blur-md border-b`}>
        <div className="text-2xl font-extrabold text-[#2563eb] tracking-wide cursor-pointer" onClick={() => navigate("/")}>LuxLoan</div>
        <ul className="hidden md:flex gap-10 text-lg">
          <li><button onClick={() => navigate("/")} className="hover:text-[#2563eb] hover:underline transition">Home</button></li>
          <li><button onClick={() => navigate("/business")} className="hover:text-[#2563eb] hover:underline transition">Business</button></li>
          <li className="relative dropdown-parent">
            <button onClick={() => setDropdown(dropdown === "loans" ? null : "loans")} className="hover:text-[#2563eb] hover:underline transition">Loans</button>
            {dropdown === "loans" && (
              <div className="absolute mt-2 w-44 bg-white dark:bg-[#23203b] border shadow-xl rounded-2xl z-20">
                <Link to="/QuickLoan" className="block px-6 py-3 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-xl">Quick Loan</Link>
                <Link to="/PublicLending" className="block px-6 py-3 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-xl">Public Payroll</Link>
              </div>
            )}
          </li>
        </ul>
        <div className="flex gap-3">
          <button onClick={() => setDarkMode(d => !d)} className="p-2 border rounded-full bg-gradient-to-tr from-[#e0e7ef] to-[#2563eb] text-xl shadow hover:scale-105 transition">
            {darkMode ? "🌙" : "☀️"}
          </button>
          <Link to="/login" className="bg-white border border-[#2563eb] text-[#2563eb] px-5 py-2 rounded-full font-bold shadow hover:scale-105 transition">Sign In</Link>
          <Link to="/signup" className="bg-[#2563eb] text-white px-5 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition">Sign Up</Link>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="pt-36 pb-16 px-4 max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#60a5fa]"
          >
            Experience <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#2563eb]">Luxury Lending</span> with LuxLoan
          </motion.h1>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 max-w-lg">
            Simple. Transparent. Fast. For those who value time and elegance, LuxLoan is the premium way to access financial empowerment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/signup" className="bg-[#2563eb] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition">Apply Now</Link>
            <Link to="/signup" className="bg-white/80 border border-[#2563eb] text-[#2563eb] px-8 py-3 rounded-full shadow hover:bg-blue-50 dark:bg-[#23203b] dark:text-[#2563eb] dark:border-[#2563eb]">Contact Me</Link>
            <Link to="/login" className="underline text-[#2563eb] font-semibold px-4 py-2">Sign In</Link>
          </div>
        </div>
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.img
              key={heroIndex}
              src={heroImages[heroIndex]}
              className="w-full h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/90 dark:border-[#23203b] transition-all"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.7 }}
              alt="Hero"
            />
          </AnimatePresence>
        </div>
      </section>

      {/* About LuxLoan */}
      <section className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-center text-[#2563eb] mb-6">Why LuxLoan?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <h3 className="font-semibold text-[#2563eb] mb-2">Premium Experience</h3>
            <p className="text-sm text-gray-600">Enjoy a seamless, elegant, and intuitive platform designed for your comfort and speed.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <h3 className="font-semibold text-[#2563eb] mb-2">Transparent & Secure</h3>
            <p className="text-sm text-gray-600">No hidden fees, no surprises. Your data and transactions are protected with bank-level security.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <h3 className="font-semibold text-[#2563eb] mb-2">Fast Approval</h3>
            <p className="text-sm text-gray-600">Get decisions in minutes and funds in your account within 24 hours of approval.</p>
          </div>
        </div>
      </section>

      {/* Extra Info Section */}
      <section className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-center text-[#2563eb] mb-6">More About LuxLoan</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <h3 className="font-semibold text-[#2563eb] mb-2">Who We Are</h3>
            <p className="text-sm text-gray-600">
              LuxLoan is a leading digital lending platform in Nigeria, dedicated to providing fast, secure, and affordable loans to individuals and businesses. Our mission is to empower your financial journey with technology, transparency, and trust.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <h3 className="font-semibold text-[#2563eb] mb-2">Our Promise</h3>
            <p className="text-sm text-gray-600">
              We promise no hidden fees, fair interest rates, and a customer-first approach. Our support team is always available to guide you, and our platform is built with your privacy and security in mind.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100 md:col-span-2">
            <h3 className="font-semibold text-[#2563eb] mb-2">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>24/7 online application and support</li>
              <li>Flexible repayment options</li>
              <li>Instant eligibility checks</li>
              <li>Licensed and regulated by Nigerian authorities</li>
              <li>Trusted by thousands of satisfied customers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-center text-[#2563eb] mb-6">How LuxLoan Works</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="bg-[#2563eb]/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2">
              <UserCircleIcon className="w-8 h-8 text-[#2563eb]" />
            </div>
            <h4 className="font-semibold mb-1">1. Sign Up</h4>
            <p className="text-xs text-gray-600">Create your free LuxLoan account in minutes.</p>
          </div>
          <div>
            <div className="bg-[#2563eb]/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2">
              <DocumentDuplicateIcon className="w-8 h-8 text-[#2563eb]" />
            </div>
            <h4 className="font-semibold mb-1">2. Apply</h4>
            <p className="text-xs text-gray-600">Fill out a simple application and upload your documents.</p>
          </div>
          <div>
            <div className="bg-[#2563eb]/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2">
              <CheckCircleIcon className="w-8 h-8 text-[#2563eb]" />
            </div>
            <h4 className="font-semibold mb-1">3. Get Approved</h4>
            <p className="text-xs text-gray-600">Receive a decision and sign your agreement digitally.</p>
          </div>
          <div>
            <div className="bg-[#2563eb]/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2">
              <BanknotesIcon className="w-8 h-8 text-[#2563eb]" />
            </div>
            <h4 className="font-semibold mb-1">4. Receive Funds</h4>
            <p className="text-xs text-gray-600">Money is sent directly to your bank account.</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-5xl mx-auto py-14 px-4">
        <h2 className="text-2xl font-bold text-center text-[#2563eb] mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map(p => (
            <div key={p.title} className="bg-white p-7 rounded-2xl shadow-xl border border-gray-100 text-center hover:shadow-2xl transition">
              <div className="mb-3 flex justify-center">{p.icon}</div>
              <h3 className="font-semibold text-[#2563eb] mb-1">{p.title}</h3>
              <p className="text-sm mb-4">{p.desc}</p>
              <Link to={p.link} className="text-sm text-[#2563eb] font-semibold hover:underline">Get started</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Criteria */}
      <section className="max-w-4xl mx-auto py-14 px-4">
        <h2 className="text-2xl font-bold text-center text-[#2563eb] mb-8">Loan Requirements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {loanCriteria.map((item, idx) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} className="bg-white p-7 rounded-2xl shadow-xl border border-gray-100 text-center hover:shadow-2xl transition">
              <div className="mb-2 flex justify-center">{item.icon}</div>
              <h3 className="font-semibold text-[#2563eb] mb-1">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto py-14 px-4">
        <h2 className="text-2xl font-bold text-center text-[#2563eb] mb-8">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100"
            >
              <button
                className="w-full flex justify-between px-6 py-4 text-[#2563eb] font-semibold text-left text-base focus:outline-none"
                onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                aria-expanded={faqOpen === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                {faq.q}
                <span>{faqOpen === idx ? "−" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {faqOpen === idx && (
                  <motion.div
                    id={`faq-panel-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden px-6 pb-4 text-sm"
                  >
                    <div>{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-sm text-center py-10 border-t mt-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-left px-4">
          <div>
            <span className="font-bold text-[#2563eb] text-xl">LuxLoan</span>
            <p className="mt-2 text-gray-500">Luxury Lending, Redefined.<br />Empowering your financial journey with speed, trust, and style.</p>
            <div className="mt-4">
              <span className="block font-semibold text-[#2563eb] mb-1">Newsletter</span>
              <form className="flex gap-2">
                <input type="email" placeholder="Your email" className="border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb]" />
                <button type="submit" className="bg-[#2563eb] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#1d4ed8] transition">Subscribe</button>
              </form>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-[#2563eb] mb-2">Company</h4>
            <ul className="space-y-1">
              <li><Link to="/AboutUs" className="hover:underline text-gray-600">About Us</Link></li>
              <li><Link to="/PublicLending" className="hover:underline text-gray-600">Public Lending</Link></li>
              <li><Link to="/ContactUs" className="hover:underline text-gray-600">Contact Us</Link></li>
              <li><Link to="/PrivateLending" className="hover:underline text-gray-600">Private Lending</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#2563eb] mb-2">Legal</h4>
            <ul className="space-y-1">
              <li><Link to="/privacy" className="hover:underline text-gray-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:underline text-gray-600">Terms of Service</Link></li>
              <li><a href="https://ndic.gov.ng/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-600">NDIC Insured</a></li>
              <li><a href="https://cbn.gov.ng/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-600">CBN Licensed</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#2563eb] mb-2">Contact</h4>
            <li><Link to="/LuxBlog" className="hover:underline text-gray-600">Lux Loan Blog</Link></li>
            <p className="text-gray-600">support@luxloan.com<br />+234 800 000 0000<br />123 Elegance Ave, Lagos</p>
            <div className="flex gap-2 mt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] hover:underline">Twitter</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] hover:underline">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] hover:underline">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] hover:underline">LinkedIn</a>
              
            </div>
            <div className="mt-4">
              <span className="block font-semibold text-[#2563eb] mb-1">Download App</span>
              <div className="flex gap-2">
                <a href="#" className="bg-gray-100 px-3 py-1 rounded-full text-xs text-[#2563eb] font-semibold hover:bg-blue-50">Google Play</a>
                <a href="#" className="bg-gray-100 px-3 py-1 rounded-full text-xs text-[#2563eb] font-semibold hover:bg-blue-50">App Store</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-gray-400 text-xs">
          © {new Date().getFullYear()} LuxLoan. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;