import React, { useState, useEffect } from "react";
import View from "./View";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loans, setLoans] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(
    () =>
      window.localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [selectedUser, setSelectedUser] = useState(null);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectLoanId, setRejectLoanId] = useState(null);
  const [rejectReason, setRejectReason] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    Promise.all([
      fetch("http://localhost:2009/user/get", { credentials: "include" }).then((res) => res.json()),
      fetch("http://localhost:2009/loan/get", { credentials: "include" }).then((res) => res.json()),
    ])
      .then(([usersData, loansData]) => {
        const usersArr = Array.isArray(usersData) ? usersData : usersData.users || [];
        setUsers(
          usersArr.map(({ _id, fullname, email, role }) => ({
            id: _id,
            name: fullname,
            email,
            role: role || "User",
          }))
        );
        const loansArr = Array.isArray(loansData) ? loansData : loansData.loans || [];
        setLoans(
          loansArr.map(({ _id, userId, amount, interestRate, termMonths, status, approvalStatus, purpose, duration, monthly, total, interest, createdAt, schedule, rejectionReason }) => ({
            id: _id,
            userId,
            amount,
            interestRate,
            termMonths,
            status,
            approvalStatus,
            purpose,
            duration,
            monthly,
            total,
            interest,
            createdAt,
            schedule,
            rejectionReason,
          }))
        );
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data from server.");
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((u) =>
    u.name?.toLowerCase().includes(search.toLowerCase())
  );

  const handleDarkMode = () => {
    setDarkMode((d) => {
      window.localStorage.setItem("darkMode", !d);
      return !d;
    });
  };

  const handleApprove = async (loanId) => {
    try {
      const res = await fetch(`http://localhost:2009/loan/${loanId}/approve`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (res.ok) {
        const updatedLoans = await fetch("http://localhost:2009/loan/get", {
          credentials: "include"
        }).then((r) => r.json());
        setLoans(Array.isArray(updatedLoans) ? updatedLoans : updatedLoans.loans || []);
        alert("Loan approved!");
      } else {
        alert("Failed to approve loan.");
      }
    } catch (err) {
      alert("Error approving loan.");
    }
  };

  const handleReject = async (loanId, reason) => {
    try {
      const res = await fetch(`http://localhost:2009/loan/${loanId}/decline`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ reason }),
      });
      if (res.ok) {
        const updatedLoans = await fetch("http://localhost:2009/loan/get", {
          credentials: "include"
        }).then((r) => r.json());
        setLoans(Array.isArray(updatedLoans) ? updatedLoans : updatedLoans.loans || []);
        alert("Loan rejected!");
      } else {
        alert("Failed to reject loan.");
      }
    } catch (err) {
      alert("Error rejecting loan.");
    }
  };

  if (loading) {
    return (
      <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} min-h-screen flex items-center justify-center`}>
        <h2 className="text-xl font-bold">Loading LuxLoan Admin Dashboard...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} min-h-screen flex items-center justify-center`}>
        <h2 className="text-xl font-bold text-red-500">{error}</h2>
      </div>
    );
  }

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} min-h-screen`}>
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow bg-white dark:bg-gray-800 sticky top-0 z-10">
        <h2 className="text-2xl font-bold tracking-tight">LuxLoan Admin Dashboard</h2>
        <div className="flex items-center gap-4">
          <button
            onClick={handleDarkMode}
            className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <button
            className="px-4 py-2 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition"
            onClick={() => window.location.reload()}
            title="Refresh Data"
          >
            Refresh
          </button>
        </div>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-6">
        <StatCard label="Total Users" value={users.length} />
        <StatCard label="Total Loans" value={loans.length} />
        <StatCard label="Pending Loans" value={loans.filter((l) => l.status === "pending").length} />
        <StatCard label="Repaid Loans" value={loans.filter((l) => l.status === "paid").length} />
      </div>

      {/* Users Table */}
      <section className="px-6 mb-8">
        <h3 className="text-lg font-bold mb-3">Users</h3>
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4 p-2 rounded border border-gray-300 w-full max-w-xs focus:ring-2 focus:ring-blue-400"
        />
        <div className="overflow-x-auto rounded-xl shadow border border-gray-100 bg-white dark:bg-gray-800">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50 dark:bg-gray-700">
                <th className="py-3 px-2 font-semibold">Full Name</th>
                <th className="py-3 px-2 font-semibold">Email</th>
                <th className="py-3 px-2 font-semibold">Role</th>
                <th className="py-3 px-2 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-6 text-gray-400">No users found.</td>
                </tr>
              )}
              {filteredUsers.map((u) => (
                <tr key={u.id} className="border-b border-gray-50 hover:bg-blue-50 dark:hover:bg-gray-700 transition">
                  <td className="py-2 px-2">{u.name}</td>
                  <td className="py-2 px-2">{u.email}</td>
                  <td className="py-2 px-2">{u.role}</td>
                  <td className="py-2 px-2">
                    <button
                      onClick={() => setSelectedUser(u)}
                      className="px-3 py-1 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* View Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-lg w-full relative">
            <button
              onClick={() => setSelectedUser(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <View
              data={{
                type: "user",
                user: selectedUser,
                userLoans: loans.filter(l => {
                  if (typeof l.userId === "object") {
                    return l.userId._id === selectedUser.id;
                  }
                  return l.userId === selectedUser.id;
                }),
              }}
              onApprove={handleApprove}
              onReject={handleReject}
              onClose={() => setSelectedUser(null)}
            />
          </div>
        </div>
      )}

      {/* Loans Table */}
      <section className="px-6 mb-8">
        <h3 className="text-lg font-bold mb-3">Loans</h3>
        <div className="overflow-x-auto rounded-xl shadow border border-gray-100 bg-white dark:bg-gray-800">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50 dark:bg-gray-700">
                <th className="py-3 px-2 font-semibold">ID</th>
                <th className="py-3 px-2 font-semibold">User</th>
                <th className="py-3 px-2 font-semibold">Amount</th>
                <th className="py-3 px-2 font-semibold">Interest Rate (%)</th>
                <th className="py-3 px-2 font-semibold">Term (months)</th>
                <th className="py-3 px-2 font-semibold">Status</th>
                <th className="py-3 px-2 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {loans.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-6 text-gray-400">No loans found.</td>
                </tr>
              )}
              {loans.map((l) => (
                <tr key={l.id} className="border-b border-gray-50 hover:bg-blue-50 dark:hover:bg-gray-700 transition">
                  <td className="py-2 px-2">{l.id}</td>
                  <td className="py-2 px-2">
                    {typeof l.userId === "object"
                      ? l.userId.fullname || l.userId.email || l.userId._id
                      : l.userId}
                  </td>
                  <td className="py-2 px-2">₦{l.amount}</td>
                  <td className="py-2 px-2">{l.interestRate}</td>
                  <td className="py-2 px-2">{l.termMonths}</td>
                  <td className="py-2 px-2 capitalize">{l.status}</td>
                  <td className="py-2 px-2 flex gap-2">
                    {l.status === "pending" && (
                      <>
                        <button
                          className="flex-1 bg-green-600 text-white py-1 rounded-xl font-bold hover:bg-green-700 text-xs"
                          onClick={async () => {
                            await handleApprove(l.id);
                          }}
                        >
                          Approve
                        </button>
                        <button
                          className="flex-1 bg-red-600 text-white py-1 rounded-xl font-bold hover:bg-red-700 text-xs"
                          onClick={() => {
                            setRejectLoanId(l.id);
                            setShowRejectModal(true);
                          }}
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {l.status !== "pending" && (
                      <span className="text-xs text-gray-400">No action</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Reject Reason Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-sm w-full relative">
            <button
              onClick={() => {
                setShowRejectModal(false);
                setRejectReason("");
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">Reject Loan</h3>
            <label className="block mb-2 font-semibold">Rejection Reason:</label>
            <textarea
              className="w-full p-2 rounded border border-gray-300 mb-4 dark:bg-gray-700 dark:text-white"
              rows={3}
              value={rejectReason}
              onChange={e => setRejectReason(e.target.value)}
              placeholder="Enter reason..."
            />
            <button
              className="bg-red-600 text-white px-4 py-2 rounded font-bold hover:bg-red-700 mr-2"
              onClick={async () => {
                if (rejectReason.trim()) {
                  await handleReject(rejectLoanId, rejectReason.trim());
                  setShowRejectModal(false);
                  setRejectReason("");
                } else {
                  alert("Please enter a reason.");
                }
              }}
            >
              Submit
            </button>
            <button
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded font-bold hover:bg-gray-400"
              onClick={() => {
                setShowRejectModal(false);
                setRejectReason("");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

function StatCard({ label, value }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-100 px-6 py-6 flex flex-col gap-2 min-w-[120px]">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-300 font-semibold">{label}</div>
    </div>
  );
}

export default AdminDashboard;