
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMyContext } from "./MyContext";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Get setUser from context
  const { setUser } = useMyContext();

  const API_URL = "https://loan-ends.onrender.com";

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
     const response = await fetch(`${API_URL}/user/register`, { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          fullname: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonErr) {
        setLoading(false);
        alert("Signup succeeded, but server did not return JSON.");
        return;
      }

      if (response.ok) {
        // Use data.user from backend response
        if (data && data.user && data.user._id) {
          setUser(data.user);
        }
        setSubmitted(true);
        setLoading(false);
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setLoading(false);
        alert(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      alert("Network error. Please try again.");
      console.error("Error:", error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#dbeafe] font-['Inter']">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="bg-white shadow-2xl rounded-3xl px-10 py-12 w-full max-w-md border border-gray-100"
      >
        <div className="mb-8 text-center">
          <div className="text-3xl font-extrabold text-[#2563eb] mb-2 tracking-wider">LuxLoan</div>
          <div className="text-xl font-bold mb-1 text-gray-800">Create an Account</div>
          <div className="text-sm text-gray-400">Join the luxury lending experience</div>
        </div>
        {submitted ? (
          <div className="text-center text-green-500 font-semibold text-lg my-8">Account created! Redirecting...</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 rounded-xl border border-gray-200 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 rounded-xl border border-gray-200 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              required
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 rounded-xl border border-gray-200 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#2563eb] to-[#60a5fa] text-white py-2 rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition flex items-center justify-center"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
        )}
        <div className="text-center mt-6 text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-[#2563eb] hover:underline">Sign In</Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Signup;