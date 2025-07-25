import React, { useState } from "react";
import {
  Cog6ToothIcon,
  BellIcon,
  EyeIcon,
  LockClosedIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  ArrowRightOnRectangleIcon,
  MoonIcon,
  SunIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

function SettingsPanel({ darkMode, toggleDarkMode, onLogout }) {
  const [language, setLanguage] = useState("English");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("jane.doe@email.com");
  const [notif, setNotif] = useState(true);
  const [privacy, setPrivacy] = useState("public");
  const [loading, setLoading] = useState(false);

  function handlePasswordChange(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setMsg("Password changed successfully!");
      setPassword("");
      setLoading(false);
      setTimeout(() => setMsg(""), 1800);
    }, 1000);
  }

  function handleEmailChange(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setMsg("Email updated!");
      setLoading(false);
      setTimeout(() => setMsg(""), 1800);
    }, 1000);
  }

  function handleNotifToggle() {
    setNotif((n) => !n);
    setMsg(!notif ? "Notifications enabled" : "Notifications disabled");
    setTimeout(() => setMsg(""), 1600);
  }

  function handlePrivacyChange(e) {
    setPrivacy(e.target.value);
    setMsg(`Privacy set to ${e.target.value}`);
    setTimeout(() => setMsg(""), 1600);
  }

  function handleLogout() {
    if (onLogout) {
      onLogout();
    } else {
      window.location.href = "/login";
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-[#23203b] rounded-3xl shadow-2xl p-0 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-8 pt-8 pb-4 border-b border-gray-100 dark:border-[#28244a] bg-gradient-to-r from-[#f8fafc] to-[#e0e7ef] dark:from-[#23203b] dark:to-[#18122B]">
        <Cog6ToothIcon className="w-7 h-7 text-[#2563eb]" />
        <h2 className="text-2xl font-bold text-[#2563eb]">Settings</h2>
      </div>
      <div className="px-8 py-6">
        {/* Dark mode toggle */}
        <div className="flex items-center justify-between mb-7">
          <div className="flex items-center gap-2">
            <MoonIcon className="w-5 h-5 text-gray-400" />
            <span className="font-medium text-gray-700 dark:text-gray-200">Dark Mode</span>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`w-14 h-8 rounded-full p-1 flex items-center ${darkMode ? "bg-[#2563eb]" : "bg-gray-300"} transition`}
            aria-label="Toggle dark mode"
          >
            <span
              className={`inline-block w-6 h-6 rounded-full bg-white shadow transform transition-transform duration-200 ${
                darkMode ? "translate-x-6" : ""
              }`}
            />
            <span className="sr-only">Toggle dark mode</span>
          </button>
        </div>
        {/* Language select */}
        <div className="mb-7">
          <label className="font-medium mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <GlobeAltIcon className="w-5 h-5 text-gray-400" />
            Language
          </label>
          <select
            value={language}
            onChange={e => setLanguage(e.target.value)}
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#18122B] p-2 focus:ring-2 focus:ring-[#2563eb]"
          >
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
            <option>German</option>
            <option>Chinese</option>
          </select>
        </div>
        {/* Email change */}
        <form onSubmit={handleEmailChange} className="mb-7">
          <label className="block font-medium mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <EnvelopeIcon className="w-5 h-5 text-gray-400" />
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#18122B] p-2 mb-2 focus:ring-2 focus:ring-[#2563eb]"
          />
          <button
            type="submit"
            className="bg-[#2563eb] text-white px-5 py-2 rounded-full font-bold hover:bg-[#1d4ed8] transition w-full"
            disabled={loading}
          >
            Update Email
          </button>
        </form>
        {/* Password change */}
        <form onSubmit={handlePasswordChange} className="mb-7">
          <label className="block font-medium mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <LockClosedIcon className="w-5 h-5 text-gray-400" />
            Change Password
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="New Password"
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#18122B] p-2 mb-2 focus:ring-2 focus:ring-[#2563eb]"
          />
          <button
            type="submit"
            className="bg-[#4ADE80] text-white px-5 py-2 rounded-full font-bold hover:bg-[#22c55e] transition w-full"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
        {/* Notification toggle */}
        <div className="mb-7 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BellIcon className="w-5 h-5 text-gray-400" />
            <span className="font-medium text-gray-700 dark:text-gray-200">Notifications</span>
          </div>
          <button
            onClick={handleNotifToggle}
            className={`w-14 h-8 rounded-full p-1 flex items-center ${notif ? "bg-[#4ADE80]" : "bg-gray-300"} transition`}
            aria-label="Toggle notifications"
          >
            <span
              className={`inline-block w-6 h-6 rounded-full bg-white shadow transform transition-transform duration-200 ${
                notif ? "translate-x-6" : ""
              }`}
            />
            <span className="sr-only">Toggle notifications</span>
          </button>
        </div>
        {/* Privacy setting */}
        <div className="mb-7">
          <label className="block font-medium mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <EyeIcon className="w-5 h-5 text-gray-400" />
            Privacy
          </label>
          <select
            value={privacy}
            onChange={handlePrivacyChange}
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#18122B] p-2 focus:ring-2 focus:ring-[#2563eb]"
          >
            <option value="public">Public</option>
            <option value="friends">Friends Only</option>
            <option value="private">Private</option>
          </select>
        </div>
        {/* Status message */}
        {msg && (
          <div className="text-green-600 text-center pb-2 font-semibold">{msg}</div>
        )}
        {/* Logout */}
        <button
          className="mt-6 w-full bg-gradient-to-r from-[#2563eb] via-[#4ADE80] to-[#60a5fa] text-white py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition flex items-center justify-center gap-2"
          onClick={handleLogout}
          type="button"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          Log Out
        </button>
      </div>
      {/* Footer */}
      <div className="text-xs text-gray-400 text-center py-3 border-t border-gray-100 dark:border-[#28244a] bg-gradient-to-r from-[#f8fafc] to-[#e0e7ef] dark:from-[#23203b] dark:to-[#18122B]">
        <span className="flex items-center justify-center gap-1">
          <UserCircleIcon className="w-4 h-4" />
          LuxLoan &copy; {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
}

export default SettingsPanel;