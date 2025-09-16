import React, { useState, useEffect } from "react";
import {
  UserCircleIcon,
  ArrowDownTrayIcon,
  ArrowLeftOnRectangleIcon,
  BellIcon,
  CheckCircleIcon,
  XCircleIcon,
  EyeIcon,
  BanknotesIcon,
  ChartBarIcon,
  DocumentDuplicateIcon,
  CalendarDaysIcon,
  ArrowTrendingUpIcon,
  Squares2X2Icon,
  Bars3Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FireIcon,
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { toast, Toaster } from "react-hot-toast";
import ProfilePanel from "./ProfilePanel";
import AnalyticsPanel from "./AnalyticsPanel";
import SettingsPanel from "./SettingsPanel";
import NotificationPanel from "./NotificationPanel";
import { useNavigate } from "react-router-dom";

// --- Utility Functions and Constants ---
function getLoanSchedule({ amount, duration, rate, createdAt }) {
  const interest = Math.round(amount * rate);
  const total = amount + interest;
  const monthly = Math.round(total / duration);
  const start = createdAt ? new Date(createdAt) : new Date();
  const schedule = Array.from({ length: duration }, (_, i) => {
    const dueDate = new Date(start);
    dueDate.setMonth(start.getMonth() + i + 1);
    return {
      month: i + 1,
      due: dueDate.toISOString().slice(0, 10),
      paid: false,
      notificationSent: false,
      penalty: 0,
      paidAt: null,
    };
  });
  return { interest, total, monthly, schedule };
}

const penaltyPerDay = 500;

const statusColors = {
  Active: "#2563eb",
  Completed: "#60a5fa",
  Overdue: "#ef4444",
};

const deals = [
  {
    title: "Quick Loan - 0% for 1st Month",
    desc: "Get up to ₦50,000 instantly. No interest for the first month.",
    icon: <FireIcon className="w-8 h-8 text-[#ef4444]" />,
  },
  {
    title: "Business Booster",
    desc: "Special rates for SMEs. Up to ₦5,000,000.",
    icon: <BanknotesIcon className="w-8 h-8 text-[#2563eb]" />,
  },
  {
    title: "Student Flexi-Loan",
    desc: "Flexible repayment for students. Up to ₦200,000.",
    icon: <ChartBarIcon className="w-8 h-8 text-[#60a5fa]" />,
  },
];

// Floating, auto-sliding daily deals
function DailyDealsSlider() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % deals.length), 15000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="fixed right-4 top-24 z-40 w-[320px] max-w-full">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <FireIcon className="w-5 h-5 text-[#ef4444]" />
          <span className="font-bold text-base text-gray-700">Daily Deals</span>
        </div>
        <div className="flex gap-1">
          <button
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
            onClick={() => setIdx(i => (i === 0 ? deals.length - 1 : i - 1))}
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>
          <button
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
            onClick={() => setIdx(i => (i === deals.length - 1 ? 0 : i + 1))}
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="rounded-xl p-4 bg-white shadow-xl flex items-center gap-4 border border-gray-100">
        <div>{deals[idx].icon}</div>
        <div>
          <div className="font-bold text-gray-800">{deals[idx].title}</div>
          <div className="text-xs text-gray-500">{deals[idx].desc}</div>
        </div>
      </div>
    </div>
  );
}

// Quick Actions bar
function QuickActions({ onApply, onAnalytics, onCalendar, showNotifications, setShowNotifications }) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <button
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition"
        onClick={onApply}
      >
        <BanknotesIcon className="w-5 h-5 text-[#2563eb]" />
        <span className="font-semibold text-[#2563eb]">New Loan</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition">
        <DocumentDuplicateIcon className="w-5 h-5 text-[#2563eb]" />
        <span className="font-semibold text-[#2563eb]">Documents</span>
      </button>
      <button
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition"
        onClick={onCalendar}
      >
        <CalendarDaysIcon className="w-5 h-5 text-[#2563eb]" />
        <span className="font-semibold text-[#2563eb]">Calendar</span>
      </button>
      <button
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition"
        onClick={onAnalytics}
      >
        <ChartBarIcon className="w-5 h-5 text-[#2563eb]" />
        <span className="font-semibold text-[#2563eb]">Analytics</span>
      </button>
      {/* Notification Button */}
      <div className="relative">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition"
          onClick={() => window.dispatchEvent(new CustomEvent("NotificationPanel"))}
        >
          <BellIcon className="w-5 h-5 text-[#2563eb]" />
          <span className="font-semibold text-[#2563eb]">Notifications</span>
        </button>
        {showNotifications && (
          <NotificationPanel onClose={() => setShowNotifications(false)} />
        )}
      </div>
      <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition">
        <UserCircleIcon className="w-5 h-5 text-[#2563eb]" />
        <span className="font-semibold text-[#2563eb]">Support</span>
      </button>
    </div>
  );
}

function StatCard({ icon, label, value, color, sub }) {
  return (
    <div className="bg-white rounded-xl shadow border border-gray-100 px-6 py-6 flex flex-col gap-2 min-w-[180px]">
      <div className={`w-10 h-10 flex items-center justify-center rounded-xl`} style={{backgroundColor: color + "22"}}>
        {icon}
      </div>
      <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
      {sub && <div className="text-xs text-gray-400">{sub}</div>}
    </div>
  );
}

function OverlayPanel({ open, onClose, children }) {
  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-end transition-all duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 backdrop-blur-[2px] bg-black/10"
        onClick={onClose}
        aria-label="Close overlay"
      />
      <div
        className={`relative h-full w-full max-w-md bg-transparent transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 201 }}
      >
        <div className="relative h-full flex flex-col">
          <button
            className="absolute top-5 right-7 text-3xl font-bold text-gray-400 hover:text-blue-600 z-10"
            onClick={onClose}
            aria-label="Close"
            tabIndex={open ? 0 : -1}
          >
            ×
          </button>
          <div className="pt-16 px-2 pb-4 h-full overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}

function LoanApplicationForm({ onApply }) {
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [purpose, setPurpose] = useState("");
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (amount && duration) {
      const a = parseInt(amount, 10);
      const d = parseInt(duration, 10);
      if (a > 0 && d > 0) {
        const { interest, total, monthly } = getLoanSchedule({
          amount: a,
          duration: d,
          rate: 0.1,
        });
        setPreview({ interest, total, monthly });
      } else {
        setPreview(null);
      }
    } else {
      setPreview(null);
    }
  }, [amount, duration]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onApply({
      amount: parseInt(amount),
      duration: parseInt(duration),
      purpose,
      rate: 0.1,
    });
    setAmount("");
    setDuration("");
    setPurpose("");
    setPreview(null);
  };

  return (
    <form
      id="loan-form"
      className="bg-white rounded-xl shadow border border-gray-100 p-6 mb-8 max-w-2xl mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center gap-3 mb-4">
        <AdjustmentsHorizontalIcon className="w-7 h-7 text-[#2563eb]" />
        <span className="text-xl font-bold">One-Step Loan Application</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          min={1}
          className="p-2 rounded border focus:ring-2 focus:ring-blue-400"
          placeholder="Amount (₦)"
        />
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
          min={1}
          className="p-2 rounded border focus:ring-2 focus:ring-blue-400"
          placeholder="Duration (months)"
        />
        <input
          type="text"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          required
          className="p-2 rounded border focus:ring-2 focus:ring-blue-400"
          placeholder="Purpose"
        />
      </div>
      {preview && (
        <div className="mb-4 p-3 rounded bg-blue-50 text-blue-900 flex flex-col gap-1">
          <span>
            <b>Interest:</b> ₦{preview.interest}
          </span>
          <span>
            <b>Total Repayable:</b> ₦{preview.total}
          </span>
          <span>
            <b>Monthly Payment:</b> ₦{preview.monthly}
          </span>
        </div>
      )}
      <button
        type="submit"
        className="bg-[#2563eb] text-white px-8 py-2 rounded-full font-bold hover:bg-[#1d4ed8] transition"
      >
        Apply Now
      </button>
    </form>
  );
}

// --- Main Dashboard Component ---
function UserDashboard() {
  const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
    const [showNotifications, setShowNotifications] = useState(false);

  const [user, setUser] = useState(currentUser);
  const currentUserId = currentUser._id;

  const [darkMode, setDarkMode] = useState(
    () =>
      window.localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [loan, setLoans] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentUserName, setCurrentUserName] = useState(currentUser.name || "User");
  const [currentUserEmail, setCurrentUserEmail] = useState(currentUser.email || "Email");
  const [reminders, setReminders] = useState([]);
  const [gridView, setGridView] = useState(true);
  const navigate = useNavigate();

  // Calendar logic
  const today = new Date();
  const [calendarMonth, setCalendarMonth] = useState(today.getMonth());
  const [calendarYear, setCalendarYear] = useState(today.getFullYear());

  function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }
  function getFirstDayOfWeek(month, year) {
    return new Date(year, month, 1).getDay();
  }
  function handlePrevMonth() {
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear((y) => y - 1);
    } else {
      setCalendarMonth((m) => m - 1);
    }
  }
  function handleNextMonth() {
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear((y) => y + 1);
    } else {
      setCalendarMonth((m) => m + 1);
    }
  }

   useEffect(() => {
    const handler = () => setShowNotifications(true);
    window.addEventListener("NotificationPanel", handler);
    return () => window.removeEventListener("NotificationPanel", handler);
  }, []);

 useEffect(() => {
  let isMounted = true;
  document.body.classList.toggle("dark", darkMode);
  window.localStorage.setItem("darkMode", darkMode);

  // Use deployed API and send userId as query param
  fetch(`https://loan-ends.onrender.com/loan/get?userId=${currentUserId}`)
    .then((res) => res.json())
    .then((data) => {
      const loansArr = Array.isArray(data) ? data : data.loans || [];
      if (isMounted) setLoans(loansArr);
      console.log("Fetched loans:", loansArr, "Current user:", currentUserId);
    })
    .catch((err) => {
      if (isMounted && !currentUserId) {
        // Only show demo loans if user is not logged in
        setLoans([
          { id: 1, userId: currentUserId, amount: 50000, duration: 6, interestRate: 0.1, status: "approved", purpose: "Personal", createdAt: new Date().toISOString(), schedule: getLoanSchedule({ amount: 50000, duration: 6, rate: 0.1, createdAt: new Date() }).schedule },
          { id: 2, userId: currentUserId, amount: 200000, duration: 12, interestRate: 0.15, status: "paid", purpose: "Business", createdAt: new Date().toISOString(), schedule: getLoanSchedule({ amount: 200000, duration: 12, rate: 0.15, createdAt: new Date() }).schedule },
          { id: 3, userId: currentUserId, amount: 100000, duration: 3, interestRate: 0.12, status: "rejected", purpose: "Education", createdAt: new Date().toISOString(), schedule: getLoanSchedule({ amount: 100000, duration: 3, rate: 0.12, createdAt: new Date() }).schedule },
        ]);
      } else if (isMounted) {
        setLoans([]);
      }
    });
  return () => {
    isMounted = false;
  };
}, [darkMode, currentUserId]);

  const myLoans = Array.isArray(loan)
    ? loan.filter(l =>
        String(l.userId) === String(currentUserId) ||
        String(l.userId?._id) === String(currentUserId)
      )
    : [];

  function mapStatus(status) {
    if (status === "approved") return "Active";
    if (status === "paid") return "Completed";
    if (status === "rejected") return "Overdue";
    if (status === "pending") return "Pending";
    return status;
  }

  const mappedLoans = myLoans.map(l => ({
    ...l,
    status: mapStatus(l.status),
    interest: l.interest ?? Math.round((l.amount ?? 0) * (l.interestRate ?? l.rate ?? 0.1)),
    total: l.total ?? ((l.amount ?? 0) + Math.round((l.amount ?? 0) * (l.interestRate ?? l.rate ?? 0.1))),
    monthly: l.monthly ?? Math.round(((l.amount ?? 0) + Math.round((l.amount ?? 0) * (l.interestRate ?? l.rate ?? 0.1))) / (l.duration ?? 1)),
  }));

  const totalActive = mappedLoans
    .filter((l) => l.status === "Active")
    .reduce((acc, cur) => acc + (cur.amount ?? 0), 0);
  const totalPaid = mappedLoans
    .filter((l) => l.status === "Completed")
    .reduce((acc, cur) => acc + (cur.amount ?? 0), 0);
  const totalOverdue = mappedLoans
    .filter((l) => l.status === "Overdue")
    .reduce((acc, cur) => acc + (cur.amount ?? 0), 0);

  const pieData = [
    ...(totalActive
      ? [{ name: "Active", value: totalActive, color: statusColors.Active }]
      : []),
    ...(totalPaid
      ? [{ name: "Completed", value: totalPaid, color: statusColors.Completed }]
      : []),
    ...(totalOverdue
      ? [{ name: "Overdue", value: totalOverdue, color: statusColors.Overdue }]
      : []),
  ];
  const barData = [
    { name: "Jan", Budget: 12000, Expense: 9000 },
    { name: "Feb", Budget: 15000, Expense: 10500 },
    { name: "Mar", Budget: 16000, Expense: 8000 },
    { name: "Apr", Budget: 12000, Expense: 9000 },
    { name: "May", Budget: 14000, Expense: 7000 },
    { name: "Jun", Budget: 18000, Expense: 14000 },
  ];

  /// Submit loan application
const handleApplyLoan = async ({ amount, duration, purpose, rate }) => {
  try {
    const res = await fetch("https://loan-ends.onrender.com/loan/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: currentUserId,
        amount,
        interestRate: rate,
        termMonths: duration,
        purpose,
      }),
    });
    const data = await res.json();
    if (res.ok && data) {
      setLoans((loans) => [...loans, data.loan || data]);
      toast.success("Loan application submitted!");
    } else {
      toast.error(data.message || "Failed to apply for loan.");
    }
  } catch (err) {
    toast.error("Network error. Please try again.");
  }
};

// Repayment handler
const handleRepay = async (loanId, monthIdx) => {
  const loanObj = mappedLoans.find(l => (l.id || l._id) === loanId);
  if (!loanObj || !loanObj.schedule || monthIdx >= loanObj.schedule.length) {
    toast.error("Invalid repayment index or missing schedule.");
    return;
  }
  try {
    const res = await fetch("https://loan-ends.onrender.com/loan/mark", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ loanId, monthIdx }),
    });
    const data = await res.json();
    if (res.ok) {
      setLoans((prev) =>
        prev.map((loan) => (loan._id === loanId ? data.loan : loan))
      );
      toast.success("Repayment marked!");
    } else {
      toast.error(data.message || "Failed to mark repayment.");
    }
  } catch (err) {
    console.error(err);
    toast.error("Network error during repayment.");
  }
};

  const exportCSV = () => {
    const headers = "Amount,Status,Duration,Purpose\n";
    const rows = mappedLoans.map(
      (l) => `${l.amount},${l.status},${l.duration},${l.purpose}`
    );
    const blob = new Blob([headers + rows.join("\n")], {
      type: "text/csv;charset=utf-8",
    });
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, "my_loan_dashboard.csv");
    } else {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "my_loan_dashboard.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    toast.success("CSV downloaded");
  };

  const handleLogout = () => {
    navigate("/Login");
  };

  const canRepay = (status) =>
    status === "Active" ||
    status === "Approved" ||
    status === "approved" ||
    status === "active";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] text-[#18122B] font-['Inter'] transition">
      <Toaster position="top-right" />
      <DailyDealsSlider />
      {/* Sidebar */}
      <aside className="fixed z-30 top-0 left-0 h-full w-[90px] md:w-64 bg-white border-r border-gray-100 flex flex-col items-center md:block shadow-lg">
        {/* ...sidebar code unchanged... */}
        <div className="flex flex-col gap-7 pt-8 pb-4 items-center md:items-start md:px-8">
          <div className="flex gap-2 items-center mb-8">
            <img
              src="https://th.bing.com/th/id/OSK.HEROwwc7fTpKzlyuGtYZwkFkwXyFPycuh6FZxw32sLteq9o?w=472&h=280&c=13&rs=2&o=6&pid=SANGAM"
              className="w-10 h-10 rounded-2xl"
              alt="logo"
            />
            <span className="text-2xl font-bold hidden md:inline bg-gradient-to-r from-[#2563eb] to-[#60a5fa] bg-clip-text text-transparent">
              LuxLoan
            </span>
          </div>
          <nav className="flex flex-col gap-3 w-full">
            <button className="flex items-center gap-4 px-3 py-2 rounded-xl text-lg hover:bg-[#f3f4f6] font-semibold transition">
              <Squares2X2Icon className="h-6 w-6 text-[#2563eb]" />
              <span className="hidden md:inline">Dashboard</span>
            </button>
            <button className="flex items-center gap-4 px-3 py-2 rounded-xl text-lg hover:bg-[#f3f4f6] font-semibold transition">
              <BanknotesIcon className="h-6 w-6 text-[#2563eb]" />
              <span className="hidden md:inline">My Loans</span>
            </button>
            <button
              className="flex items-center gap-4 px-3 py-2 rounded-xl text-lg hover:bg-[#f3f4f6] font-semibold transition"
              onClick={() => setShowAnalytics(true)}
            >
              <ChartBarIcon className="h-6 w-6 text-[#2563eb]" />
              <span className="hidden md:inline">Analytics</span>
            </button>
            <button
              className="flex items-center gap-4 px-3 py-2 rounded-xl text-lg hover:bg-[#f3f4f6] font-semibold transition"
              onClick={() => setShowSettings(true)}
            >
              <AdjustmentsHorizontalIcon className="h-6 w-6 text-[#2563eb]" />
              <span className="hidden md:inline">Settings</span>
            </button>
            {/* Mega-menu */}
            <div className="mt-6">
              <div className="text-xs text-gray-400 uppercase mb-2">Mega Menu</div>
              <div className="flex flex-col gap-2">
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#2563eb]">
                  <DocumentDuplicateIcon className="w-4 h-4" /> Documents
                </button>
                <button
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#2563eb]"
                  onClick={() => setShowCalendar(true)}
                >
                  <CalendarDaysIcon className="w-4 h-4" /> Calendar
                </button>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#2563eb]">
                  <ArrowTrendingUpIcon className="w-4 h-4" /> Trends
                </button>
              </div>
            </div>
          </nav>
        </div>
        <div className="mt-auto mb-6 flex flex-col gap-2 items-center md:items-start md:px-8 w-full">
          <button
            className="flex items-center gap-2 text-gray-400 hover:text-[#2563eb] transition"
            onClick={handleLogout}
          >
            <ArrowLeftOnRectangleIcon className="w-5 h-5" />
            <span className="hidden md:inline">Logout</span>
          </button>
        </div>
      </aside>
      {/* Main Content */}
      <div className="md:ml-64 ml-[90px] min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-white/90 border-b border-gray-100 flex items-center justify-between px-4 md:px-8 py-5 shadow backdrop-blur">
          <div className="flex items-center gap-3">
            <button className="relative">
              <BellIcon className="h-7 w-7 text-[#2563eb]" />
              {reminders.length > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#ef4444] text-xs rounded-full text-white flex items-center justify-center font-bold">
                  {reminders.length}
                </span>
              )}
            </button>
            <div className="hidden md:block">
              <span className="text-2xl font-bold text-[#2563eb] flex items-center gap-2">
                <ArrowTrendingUpIcon className="w-6 h-6 text-[#2563eb]" />
                Welcome back
              </span>
              <span className="ml-4 text-gray-400 font-semibold text-md">
                Your latest loan summary and activity
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowProfile(true)}
              className="flex items-center gap-2 bg-white rounded-full px-3 py-2 hover:shadow transition"
            >
              <UserCircleIcon className="w-8 h-8 text-[#2563eb]" />
              <span className="hidden md:block font-bold">Profile</span>
            </button>
            <button
              onClick={() => setDarkMode((d) => !d)}
              className={`${
                darkMode ? "bg-[#2563eb]" : "bg-gray-200"
              } relative inline-flex items-center h-7 rounded-full w-14`}
            >
              <span className="sr-only">Toggle dark mode</span>
              <span
                className={`${
                  darkMode ? "translate-x-7" : "translate-x-1"
                } inline-block w-6 h-6 transform bg-white rounded-full transition-transform`}
              />
            </button>
          </div>
        </header>
        {/* Content */}
        <main className="p-4 md:p-7 min-h-[calc(100vh-80px)]">
          {/* Quick Actions */}
          <QuickActions
            onApply={() => document.getElementById('loan-form')?.scrollIntoView({behavior:'smooth'})}
            onAnalytics={() => setShowAnalytics(true)}
            onCalendar={() => setShowCalendar(true)}
            showNotifications={showNotifications}
            setShowNotifications={setShowNotifications}
          />
          {/* Stat Cards */}
          <section className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatCard
              icon={<BanknotesIcon className="w-7 h-7 text-[#2563eb]" />}
              label="Active Loans"
              value={`₦${(totalActive ?? 0).toLocaleString()}`}
              color="#2563eb"
              sub="Currently in use"
            />
            <StatCard
              icon={<CheckCircleIcon className="w-7 h-7 text-[#60a5fa]" />}
              label="Total Paid"
              value={`₦${(totalPaid ?? 0).toLocaleString()}`}
              color="#60a5fa"
              sub="All time"
            />
            <StatCard
              icon={<XCircleIcon className="w-7 h-7 text-[#ef4444]" />}
              label="Overdue"
              value={`₦${(totalOverdue ?? 0).toLocaleString()}`}
              color="#ef4444"
              sub="Missed payments"
            />
          </section>
          {/* Analytics */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-xl shadow border border-gray-100 p-4">
              <div className="font-bold text-md mb-2 flex items-center gap-2">
                <PieChart width={20} height={20}>
                  <Pie
                    data={[{ value: 1 }]}
                    dataKey="value"
                    cx={10}
                    cy={10}
                    outerRadius={10}
                    fill="#2563eb"
                  />
                </PieChart>
                Loan Status Overview
              </div>
              <ResponsiveContainer width="100%" height={140}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="35%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={55}
                    label={({ name, percent }) =>
                      `${name} (${(percent * 100).toFixed(0)}%)`
                    }
                  >
                    {pieData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                    iconType="circle"
                    iconSize={14}
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-xl shadow border border-gray-100 p-4">
              <div className="font-bold text-md mb-2 flex items-center gap-2">
                <BarChart width={20} height={20} data={[]} barGap={5}>
                  <Bar dataKey="Budget" fill="#2563eb" radius={[8, 8, 0, 0]} />
                </BarChart>
                Budget vs Expense
              </div>
              <ResponsiveContainer width="100%" height={140}>
                <BarChart data={barData} barGap={5}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="Budget"
                    fill="#2563eb"
                    radius={[8, 8, 0, 0]}
                  />
                  <Bar
                    dataKey="Expense"
                    fill="#60a5fa"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
          {/* Loan Application */}
          <LoanApplicationForm onApply={handleApplyLoan} />
          {/* Grid/List Toggle */}
          <div className="flex items-center justify-between mb-3">
            <div className="font-bold text-lg flex items-center gap-2">
              <DocumentDuplicateIcon className="w-6 h-6 text-[#2563eb]" />
              My Loans
            </div>
            <div className="flex gap-2">
              <button
                className={`p-2 rounded-full ${gridView ? "bg-[#2563eb] text-white" : "bg-gray-100 text-gray-500"}`}
                onClick={() => setGridView(true)}
                title="Grid View"
              >
                <Squares2X2Icon className="w-5 h-5" />
              </button>
              <button
                className={`p-2 rounded-full ${!gridView ? "bg-[#2563eb] text-white" : "bg-gray-100 text-gray-500"}`}
                onClick={() => setGridView(false)}
                title="List View"
              >
                <Bars3Icon className="w-5 h-5" />
              </button>
              <button
                onClick={exportCSV}
                className="bg-[#2563eb]/10 text-[#2563eb] hover:bg-[#2563eb]/20 font-semibold px-6 py-2 rounded-full flex items-center gap-2"
              >
                <ArrowDownTrayIcon className="w-5 h-5" />
                Download CSV
              </button>
            </div>
          </div>

          {/* Loan Grid/List */}
          {gridView ? (
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {mappedLoans.length === 0 && (
                <div key="no-loans-table" className="text-center text-gray-400 py-6">
                  No loans yet.
                </div>
              )}
              {mappedLoans.map((loan) => (
                <div
                  key={loan.id || loan._id}
                  className="bg-white rounded-xl shadow border border-gray-100 p-5 flex flex-col gap-2 max-w-md mx-auto"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <BanknotesIcon className="w-6 h-6 text-[#2563eb]" />
                    <span className="font-bold text-lg">
                      ₦{(loan.amount ?? 0).toLocaleString()}
                    </span>
                    <span className="ml-auto px-2 py-1 text-xs rounded bg-[#2563eb]/10 text-[#2563eb] font-semibold">
                      {loan.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mb-1">
                    {loan.purpose}
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      Interest: ₦{(loan.interest ?? 0).toLocaleString()}
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      Duration: {loan.duration} mo
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      Monthly: ₦{(loan.monthly ?? 0).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    {/* Repay Next button */}
                    <button
                      className={`px-4 py-2 rounded-full text-white font-semibold transition ${
                        canRepay(loan.status)
                          ? "bg-[#2563eb] hover:bg-[#1d4ed8]"
                          : "bg-gray-300 cursor-not-allowed"
                      }`}
                      onClick={() =>
                        canRepay(loan.status) && loan.schedule && !loan.schedule[0]?.paid && handleRepay(loan.id || loan._id, 0)
                      }
                      disabled={!canRepay(loan.status) || !loan.schedule || loan.schedule[0]?.paid}
                    >
                      mark
                    </button>
                    <span className="ml-auto text-xs text-red-500">
                      Penalty: ₦
                      {(loan.schedule
                        ? loan.schedule.reduce(
                            (sum, s) => sum + (s.penalty || 0),
                            0
                          )
                        : 0
                      ).toLocaleString()}
                    </span>
                  </div>
     <div className="flex flex-col items-center gap-3 mt-4 w-full">
      <div className="flex flex-wrap justify-center gap-2 w-full">
        {loan.schedule && loan.schedule.length > 0 ? (
          loan.schedule.map((r, idx) => (
            <button
              key={`${loan.id || loan._id}-${idx}`}
              className={`w-8 h-8 rounded-full border ${
                r.paid
                  ? "bg-[#60a5fa] border-[#60a5fa]"
                  : "bg-gray-200 border-gray-300"
              } flex items-center justify-center transition`}
              title={
                r.paid
                  ? `Paid (Due: ${r.due})`
                  : `Mark as paid (Due: ${r.due})`
              }
              onClick={() => {
                if (
                  loan.status !== "Active" ||
                  !loan.schedule ||
                  idx >= loan.schedule.length ||
                  r.paid
                ) {
                  toast.error("You can only mark repayment for active loans.");
                  return;
                }
                handleRepay(loan.id || loan._id, idx);
              }}
              disabled={
                loan.status !== "Active" ||
                !loan.schedule ||
                idx >= loan.schedule.length ||
                r.paid
              }
            >
              {r.paid ? (
                <CheckCircleIcon className="h-5 w-5 text-white" />
              ) : (
                <CalendarDaysIcon className="h-5 w-5 text-gray-400" />
              )}
            </button>
          ))
        ) : (
          <div className="text-red-500 text-xs mt-2">
            This loan cannot be repaid (missing schedule).
          </div>
        )}
      </div>
      {/* Repayment schedule details */}
      <div className="w-full max-w-sm mx-auto mt-2">
        {loan.schedule?.map((repay, idx) => (
          <div key={idx} className="flex items-center justify-between my-2 px-2">
            <span>Month {repay.month}: Due {repay.due}</span>
            {repay.paid ? (
              <span className="text-green-600 font-semibold">Paid</span>
            ) : (
              <button
                onClick={() => {
                  if (
                    loan.status !== "Active" ||
                    !loan.schedule ||
                    idx >= loan.schedule.length
                  ) {
                    toast.error("You can only mark repayment for active loans.");
                    return;
                  }
                  handleRepay(loan.id || loan._id, idx);
                }}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                disabled={
                  loan.status !== "Active" ||
                  !loan.schedule ||
                  idx >= loan.schedule.length
                }
              >
                Mark as Repaid
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
                </div>
              ))}
            
            </section>
          ) : (
            <section className="bg-white rounded-xl shadow border border-gray-100 p-6 mb-8 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-3 px-2 font-semibold">Amount</th>
                    <th className="py-3 px-2 font-semibold">Interest</th>
                    <th className="py-3 px-2 font-semibold">Duration</th>
                    <th className="py-3 px-2 font-semibold">Monthly</th>
                    <th className="py-3 px-2 font-semibold">Total Repay</th>
                    <th className="py-3 px-2 font-semibold">Status</th>
                    <th className="py-3 px-2 font-semibold">Repayment</th>
                    <th className="py-3 px-2 font-semibold">Penalties</th>
                    <th className="py-3 px-2 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mappedLoans.map((loan) => (
                    <tr
                      key={loan.id || loan._id}
                      className="border-t border-gray-100 hover:bg-gray-50 transition"
                    >
                      <td className="py-2 px-2 font-semibold text-base">
                        ₦{(loan.amount ?? 0).toLocaleString()}
                      </td>
                      <td className="py-2 px-2">
                        ₦{(loan.interest ?? 0).toLocaleString()}
                      </td>
                      <td className="py-2 px-2">{loan.duration} mo</td>
                      <td className="py-2 px-2">
                        ₦{(loan.monthly ?? 0).toLocaleString()}
                      </td>
                      <td className="py-2 px-2">
                        ₦{(loan.total ?? 0).toLocaleString()}
                      </td>
                      <td className="py-2 px-2">
                        <span className="flex items-center gap-2 text-sm font-semibold">
                          {loan.status === "Active" && (
                            <CheckCircleIcon className="w-5 h-5 text-[#2563eb]" />
                          )}
                          {loan.status === "Completed" && (
                            <CheckCircleIcon className="w-5 h-5 text-[#60a5fa]" />
                          )}
                          {loan.status === "Overdue" && (
                            <XCircleIcon className="w-5 h-5 text-[#ef4444]" />
                          )}
                          {loan.status}
                        </span>
                      </td>
                      <td className="py-2 px-2 max-w-md mx-auto">
                        <div className="flex flex-wrap items-center gap-1">
                          {loan.schedule && loan.schedule.length > 0 ? (
                            loan.schedule.map((r, idx) => (
                              <button
                                key={`${loan.id || loan._id}-${idx}`}
                                className={`w-6 h-6 rounded-full border ${
                                  r.paid
                                    ? "bg-[#60a5fa] border-[#60a5fa]"
                                    : "bg-gray-200 border-gray-300"
                                } flex items-center justify-center transition`}
                                title={
                                  r.paid
                                    ? `Paid (Due: ${r.due})`
                                    : `Mark as paid (Due: ${r.due})`
                                }
                                onClick={() => {
                                  if (!loan.schedule || idx >= loan.schedule.length) {
                                    toast.error("Invalid repayment index or missing schedule.");
                                    return;
                                  }
                                  canRepay(loan.status) && !r.paid && handleRepay(loan.id || loan._id, idx);
                                }}
                                disabled={!canRepay(loan.status) || !loan.schedule || idx >= loan.schedule.length || r.paid}
                              >
                                {r.paid ? (
                                  <CheckCircleIcon className="h-4 w-4 text-white" />
                                ) : (
                                  <CalendarDaysIcon className="h-4 w-4 text-gray-400" />
                                )}
                              </button>
                            ))
                          ) : (
                            <div className="text-red-500 text-xs mt-2">
                              This loan cannot be repaid (missing schedule).
                            </div>
                          )}
                        </div>
                        {/* Repayment schedule details for table view */}
                        {loan.schedule?.map((repay, idx) => (
                          <div key={idx} className="flex items-center justify-between my-2">
                            <span>Month {repay.month}: Due {repay.due}</span>
                            {repay.paid ? (
                              <span className="text-green-600 font-semibold">Paid</span>
                            ) : (
                              <button
                                onClick={() => handleRepay(loan.id || loan._id, idx)}
                                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                                disabled={!loan.schedule || idx >= loan.schedule.length}
                              >
                                Mark as Repaid
                              </button>
                            )}
                          </div>
                        ))}
                      </td>
                      <td className="py-2 px-2">
                        {(loan.schedule
                          ? loan.schedule.reduce(
                              (sum, s) => sum + (s.penalty || 0),
                              0
                            )
                          : 0
                        ) > 0 ? (
                          <span className="text-[#ef4444]">
                            ₦
                            {(loan.schedule
                              ? loan.schedule.reduce(
                                  (sum, s) => sum + (s.penalty || 0),
                                  0
                                )
                              : 0
                            ).toLocaleString()}
                          </span>
                        ) : (
                          "₦0"
                        )}
                      </td>
                      <td className="py-2 px-2">
                        <button className="text-[#2563eb] hover:underline flex items-center gap-1">
                          <EyeIcon className="w-4 h-4" />
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {mappedLoans.length === 0 && (
                <div key="no-loans-table" className="text-center text-gray-400 py-6">
                  No loans yet.
                </div>
              )}
            </section>
          )}
        </main>
      </div>
      {/* Overlay Profile Panel */}
      <OverlayPanel open={showProfile} onClose={() => setShowProfile(false)}>
        <ProfilePanel />
      </OverlayPanel>
      {/* Overlay Settings Panel */}
      <OverlayPanel open={showSettings} onClose={() => setShowSettings(false)}>
        <SettingsPanel />
      </OverlayPanel>
      {/* Overlay Analytics Panel */}
      <OverlayPanel open={showAnalytics} onClose={() => setShowAnalytics(false)}>
        <AnalyticsPanel />
      </OverlayPanel>
      {/* Overlay Calendar Panel */}
      <OverlayPanel open={showCalendar} onClose={() => setShowCalendar(false)}>
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrevMonth}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label="Previous Month"
            >
              <ChevronLeftIcon className="w-5 h-5 text-[#2563eb]" />
            </button>
            <div className="font-bold text-lg text-[#2563eb]">
              {new Date(calendarYear, calendarMonth).toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </div>
            <button
              onClick={handleNextMonth}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label="Next Month"
            >
              <ChevronRightIcon className="w-5 h-5 text-[#2563eb]" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-gray-500 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {Array(getFirstDayOfWeek(calendarMonth, calendarYear))
              .fill(null)
              .map((_, i) => (
                <div key={`empty-${calendarMonth}-${calendarYear}-${i}`} />
              ))}
            {Array(getDaysInMonth(calendarMonth, calendarYear))
              .fill(null)
              .map((_, i) => {
                const day = i + 1;
                const isToday =
                  day === today.getDate() &&
                  calendarMonth === today.getMonth() &&
                  calendarYear === today.getFullYear();
                return (
                  <div
                    key={`day-${calendarMonth}-${calendarYear}-${day}`}
                    className={`py-2 rounded-full ${
                      isToday
                        ? "bg-[#2563eb] text-white font-bold border-2 border-[#60a5fa]"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
          </div>
        </div>
      </OverlayPanel>
    </div>
  );
}

export default UserDashboard;