import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MyContext } from "./MyContext";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  let { setUser } = useContext(MyContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const API_URL = "http://localhost:2009";

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // Login request
      const res = await fetch(`${API_URL}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });
      if (res.ok) {
        const data = await res.json();

        setUser(data.user); // Set user in context

        // Save user to localStorage for dashboard use
        localStorage.setItem("user", JSON.stringify(data.user));

        if (data.user.role === "Admin") {
          navigate("/AdminDashboard");
        } else {
          navigate("/UserDashboard");
        }
      } else {
        const errData = await res.json().catch(() => ({}));
        setError(errData.message || "Invalid credentials.");
      }
    } catch (err) {
      setError("Network error.");
    }
    setLoading(false);
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
          <div className="text-xl font-bold mb-1 text-gray-800">Sign In</div>
          <div className="text-sm text-gray-400">Welcome back to luxury lending</div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
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
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#2563eb] to-[#60a5fa] text-white py-2 rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <div className="text-center mt-6 text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-[#2563eb] hover:underline">Sign Up</Link>
        </div>
      </motion.div>
    </div>
  );
}