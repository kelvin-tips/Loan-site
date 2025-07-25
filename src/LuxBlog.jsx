import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The LuxLoan App Is Live on iOS and Android!",
    excerpt: "After months of planning, the LuxLoan App is now officially live on both the App Store and Google Play. Enjoy seamless, luxury lending at your fingertips.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    tags: ["Product Update"],
    author: "Olivia Gold",
    date: "June 18, 2025",
  },
  {
    id: 2,
    title: "Top Security Features on the LuxLoan App",
    excerpt: "Your privacy and security are our top priorities. Discover the advanced security features built into the LuxLoan App.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    tags: ["Security", "Product Update"],
    author: "James Lee",
    date: "June 10, 2025",
  },
  {
    id: 3,
    title: "3 Ways LuxLoan Can Boost Your Business Growth",
    excerpt: "Explore how LuxLoan’s tailored solutions can help your business scale, innovate, and thrive in a competitive market.",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80",
    tags: ["Business Solutions"],
    author: "Hannah Kim",
    date: "May 25, 2025",
  },
  {
    id: 4,
    title: "How LuxLoan Is Powering Businesses Globally",
    excerpt: "LuxLoan’s business solutions are trusted by companies worldwide. Learn how we’re enabling growth and innovation.",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    tags: ["Business", "Product Update"],
    author: "Michael Chen",
    date: "May 10, 2025",
  },
  {
    id: 5,
    title: "How to Estimate Your Monthly Repayment",
    excerpt: "Use our advanced loan calculator to estimate your monthly repayments and plan your finances with confidence.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    tags: ["Financial Tips"],
    author: "Priya Singh",
    date: "April 28, 2025",
  },
];

const recentPosts = blogPosts.slice(0, 3);

function LuxBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#dbeafe] font-['Inter'] text-[#18122B]">
      {/* Header */}
      <header className="w-full py-10 bg-white/80 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <span className="text-3xl font-extrabold text-[#2563eb] tracking-wider">LuxLoan</span>
            <div className="text-lg text-gray-500 mt-1">LuxBlog – Insights & Updates</div>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/login" className="bg-white border border-[#2563eb] text-[#2563eb] px-5 py-2 rounded-full font-bold shadow hover:scale-105 transition">Sign In</Link>
            <Link to="/signup" className="bg-[#2563eb] text-white px-5 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition">Sign Up</Link>
          </div>
        </div>
      </header>

      {/* Blog Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-2xl overflow-hidden shadow-xl bg-white flex flex-col md:flex-row items-center">
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="w-full md:w-2/5 h-56 md:h-64 object-cover"
          />
          <div className="flex-1 p-8">
            <div className="flex gap-2 mb-2">
              {blogPosts[0].tags.map((tag) => (
                <span key={tag} className="bg-[#2563eb]/10 text-[#2563eb] text-xs px-2 py-1 rounded-full font-semibold">{tag}</span>
              ))}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{blogPosts[0].title}</h1>
            <p className="text-gray-700 mb-4">{blogPosts[0].excerpt}</p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>{blogPosts[0].author}</span>
              <span>•</span>
              <span>{blogPosts[0].date}</span>
            </div>
            <Link to="#" className="inline-block mt-4 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] text-white font-bold px-4 py-2 rounded-full shadow hover:from-[#60a5fa] hover:to-[#2563eb] transition text-sm">
              Continue Reading
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Nav */}
      <nav className="max-w-6xl mx-auto flex flex-wrap gap-2 md:gap-4 px-6 mb-8">
        <span className="text-xl font-bold text-[#2563eb] py-2">LuxBlog</span>
        <Link to="#" className="text-gray-500 hover:text-[#2563eb] px-3 py-2 rounded transition">Home</Link>
        <Link to="#" className="text-gray-500 hover:text-[#2563eb] px-3 py-2 rounded transition">Inside LuxLoan</Link>
        <Link to="#" className="text-gray-500 hover:text-[#2563eb] px-3 py-2 rounded transition">Product Updates</Link>
        <Link to="#" className="text-gray-500 hover:text-[#2563eb] px-3 py-2 rounded transition">Money Solutions</Link>
        <Link to="#" className="text-gray-500 hover:text-[#2563eb] px-3 py-2 rounded transition">Financial Tips</Link>
        <Link to="#" className="bg-[#2563eb] text-white font-bold px-3 py-2 rounded transition">LuxPro</Link>
      </nav>

      {/* Main Blog Content */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Blog Posts */}
        <section className="md:col-span-2 flex flex-col gap-8">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col md:flex-row">
              <img
                src={post.image}
                alt={post.title}
                className="w-full md:w-1/3 h-48 md:h-40 object-cover"
              />
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex gap-2 mb-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-[#2563eb]/10 text-[#2563eb] text-xs px-2 py-1 rounded-full font-semibold">{tag}</span>
                  ))}
                </div>
                <h2 className="text-lg md:text-xl font-bold mb-1">{post.title}</h2>
                <p className="text-gray-700 mb-2 flex-1">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Sidebar */}
        <aside className="flex flex-col gap-8">
          {/* Search */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-[#2563eb] mb-2">Search</h3>
            <input
              type="text"
              placeholder="Search blog..."
              className="w-full rounded-lg px-4 py-2 bg-gray-50 text-[#2563eb] border border-[#2563eb]/20 focus:ring-2 focus:ring-[#2563eb] transition"
            />
          </div>
          {/* Recent Posts */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-[#2563eb] mb-2">Recent Posts</h3>
            <ul className="space-y-2">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link to="#" className="text-gray-700 hover:text-[#2563eb] transition text-sm">{post.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>

      {/* Pagination */}
      <div className="max-w-6xl mx-auto flex justify-center items-center gap-2 mt-10 mb-8">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
              num === 1
                ? "bg-[#2563eb] text-white"
                : "bg-white text-[#2563eb] hover:bg-[#2563eb] hover:text-white transition"
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      {/* You May Have Missed */}
      <section className="max-w-6xl mx-auto mb-12 px-6">
        <h3 className="text-lg font-bold text-[#2563eb] mb-4">You May Have Missed</h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {blogPosts.map((post) => (
            <div key={post.id} className="min-w-[220px] bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-28 object-cover" />
              <div className="p-3">
                <div className="flex gap-1 mb-1">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-[#2563eb]/10 text-[#2563eb] text-xs px-2 py-0.5 rounded-full font-semibold">{tag}</span>
                  ))}
                </div>
                <Link to="#" className="text-sm font-bold text-gray-700 hover:text-[#2563eb] transition">{post.title}</Link>
              </div>
            </div>
          ))}
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
            <div className="font-bold mb-2">Categories</div>
            <ul className="text-sm text-gray-500 space-y-1">
              <li><Link to="#" className="hover:text-[#2563eb]">Home</Link></li>
              <li><Link to="#" className="hover:text-[#2563eb]">Inside LuxLoan</Link></li>
              <li><Link to="#" className="hover:text-[#2563eb]">Product Updates</Link></li>
              <li><Link to="#" className="hover:text-[#2563eb]">Money Solutions</Link></li>
              <li><Link to="#" className="hover:text-[#2563eb]">Financial Tips</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Quick links</div>
            <ul className="text-sm text-gray-500 space-y-1">
              <li><Link to="#" className="hover:text-[#2563eb]">Download App</Link></li>
              <li><Link to="#" className="hover:text-[#2563eb]">Visit our website</Link></li>
              <li><Link to="#" className="hover:text-[#2563eb]">Find Answer on FAQ</Link></li>
              <li><Link to="#" className="hover:text-[#2563eb]">Contact Support</Link></li>
              <li><Link to="#" className="hover:text-[#2563eb]">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold mb-2">Follow Us</div>
            <div className="flex gap-3">
              <a href="#" className="text-[#2563eb] hover:text-[#60a5fa] text-xl">Facebook</a>
              <a href="#" className="text-[#2563eb] hover:text-[#60a5fa] text-xl">Twitter</a>
              <a href="#" className="text-[#2563eb] hover:text-[#60a5fa] text-xl">Instagram</a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">
          Copyright 2025 – LuxLoan Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default LuxBlog;