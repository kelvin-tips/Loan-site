import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  CheckCircleIcon,
  XCircleIcon,
  ArrowLeftIcon,
  CurrencyDollarIcon,
  ClockIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { toast, Toaster } from "react-hot-toast";

function View({ data, onClose, onApprove, onReject }) {
  const { userId: paramUserId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loans, setLoans] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [rejectReason, setRejectReason] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(userId) {
      setLoading(true);
      try {
        const userRes = await fetch(`http://localhost:2009/user/${userId}`);
        const userData = await userRes.json();
        setUser(userData);

        const loansRes = await fetch(`http://localhost:2009/loan/${userId}`);
        const loansData = await loansRes.json();
        setLoans(Array.isArray(loansData) ? loansData : []);
      } catch (err) {
        toast.error("Failed to fetch user or loans.");
      }
      setLoading(false);
    }

    if (data) {
      if (data.type === "user") {
        setUser(data.user); // Accepts { id, name, email, role, ... }
        setLoans(data.userLoans || []);
        setLoading(false);
      } else if (data.type === "loan") {
        setUser(data.loanUser || null);
        setLoans([data.loan]);
        setSelectedLoan(data.loan);
        setLoading(false);
      } else {
        setUser(null);
        setLoans([]);
        setLoading(false);
      }
    } else if (paramUserId) {
      fetchData(paramUserId);
    } else {
      setUser(null);
      setLoans([]);
      setLoading(false);
    }
  }, [data, paramUserId]);

  function getLoanStatusColor(status) {
    switch (status) {
      case "Active":
        return "bg-blue-100 text-blue-700";
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      case "Pending":
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  }

  // Only show loans for the current user or just the selected loan
  let userLoans = [];
  if (data) {
    if (data.type === "user") {
      userLoans = loans;
    } else if (data.type === "loan") {
      userLoans = [data.loan];
    }
  } else {
    userLoans = user ? loans.filter(l => l.applicant === user.id) : [];
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px]">
        <ClockIcon className="w-8 h-8 animate-spin text-[#2563eb] mb-2" />
        <span className="text-gray-500">Loading...</span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px]">
        <XCircleIcon className="w-8 h-8 text-red-500 mb-2" />
        <span className="text-gray-500">User not found.</span>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#23203b] rounded-2xl shadow-md p-6 max-w-xl mx-auto font-['Inter']">
      <Toaster position="top-right" />
      <button
        className="flex items-center gap-2 mb-4 text-[#2563eb] hover:underline"
        onClick={onClose ? onClose : () => (typeof navigate === "function" ? navigate(-1) : null)}
      >
        <ArrowLeftIcon className="w-5 h-5" />
        Back
      </button>
      <div>
        <img
          src={user.avatar || "https://ui-avatars.com/api/?name=" + encodeURIComponent(user.name)}
          alt={user.name}
          className="w-14 h-14 rounded-full border"
        />
        <div>{user.name}</div>
        <div>{user.email}</div>
        <div>{user.role}</div>
        <div>{user.phone}</div>
        <div>UserId: {user.id}</div>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <div className="flex items-center gap-1 bg-[#f3f4f6] dark:bg-[#23203b] px-3 py-1 rounded-lg text-xs">
          <CurrencyDollarIcon className="w-4 h-4 text-[#2563eb]" />
          Total Loans: <span className="font-bold">{userLoans.length}</span>
        </div>
        <div className="flex items-center gap-1 bg-[#f3f4f6] dark:bg-[#23203b] px-3 py-1 rounded-lg text-xs">
          <CheckCircleIcon className="w-4 h-4 text-green-500" />
          Approved: <span className="font-bold">{userLoans.filter(l => l.approvalStatus === "approved").length}</span>
        </div>
        <div className="flex items-center gap-1 bg-[#f3f4f6] dark:bg-[#23203b] px-3 py-1 rounded-lg text-xs">
          <XCircleIcon className="w-4 h-4 text-red-500" />
          Rejected: <span className="font-bold">{userLoans.filter(l => l.approvalStatus === "rejected").length}</span>
        </div>
      </div>
      <div>
        <div className="font-bold text-base mb-2 flex items-center gap-2">
          <InformationCircleIcon className="w-5 h-5 text-[#2563eb]" />
          Loan Applications
        </div>
        <div className="overflow-x-auto rounded-lg border border-gray-100 dark:border-[#23203b]">
          <table className="w-full text-left text-xs mb-2">
            <thead className="bg-[#f8fafc] dark:bg-[#23203b]">
              <tr>
                <th className="py-2 px-2">Amount</th>
                <th className="py-2 px-2">Status</th>
                <th className="py-2 px-2">Approval</th>
                <th className="py-2 px-2">Applied</th>
                <th className="py-2 px-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userLoans.map(loan => (
                <tr key={loan._id || loan.id} className="border-t border-gray-100 dark:border-[#23203b]">
                  <td className="py-2 px-2 font-semibold text-[#2563eb]">₦{(loan.amount ?? 0).toLocaleString()}</td>
                  <td className="py-2 px-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getLoanStatusColor(loan.status)}`}>
                      {loan.status}
                    </span>
                  </td>
                  <td className="py-2 px-2 capitalize">{loan.approvalStatus}</td>
                  <td className="py-2 px-2">{loan.createdAt ? new Date(loan.createdAt).toLocaleDateString() : ""}</td>
                  <td className="py-2 px-2">
                    <button
                      className="text-[#2563eb] hover:underline flex items-center gap-1"
                      onClick={() => setSelectedLoan(loan)}
                    >
                      <CheckCircleIcon className="w-4 h-4" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
              {userLoans.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center text-gray-400 py-4">
                    No loans.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Loan Modal */}
      {selectedLoan && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <div className="max-w-md w-full bg-white dark:bg-[#23203b] rounded-2xl shadow-xl p-6 relative">
            <button
              className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-red-500"
              onClick={() => setSelectedLoan(null)}
              title="Close"
            >
              ×
            </button>
            <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
              <CurrencyDollarIcon className="w-5 h-5 text-[#2563eb]" />
              Loan Details
            </h2>
            <div className="mb-2 grid grid-cols-2 gap-1 text-xs">
              <div>
                <b>Amount:</b> ₦{selectedLoan.amount}
              </div>
              <div>
                <b>Purpose:</b> {selectedLoan.purpose}
              </div>
              <div>
                <b>Status:</b>{" "}
                <span className={`px-2 py-1 rounded-full font-semibold ${getLoanStatusColor(selectedLoan.status)}`}>
                  {selectedLoan.status}
                </span>
              </div>
              <div>
                <b>Approval:</b> {selectedLoan.approvalStatus}
              </div>
              <div>
                <b>Duration:</b> {selectedLoan.duration} mo
              </div>
              <div>
                <b>Monthly:</b> ₦{selectedLoan.monthly}
              </div>
              <div>
                <b>Total:</b> ₦{selectedLoan.total}
              </div>
              <div>
                <b>Interest:</b> ₦{selectedLoan.interest}
              </div>
            </div>
            <div className="mb-2">
              <div className="font-semibold mb-1 text-xs">Repayment Schedule:</div>
              <div className="flex flex-wrap gap-1">
                {selectedLoan.schedule &&
                  selectedLoan.schedule.map((r, idx) => (
                    <span
                      key={r.due || idx}
                      className={`w-6 h-6 rounded-full border text-[10px] ${
                        r.paid
                          ? "bg-[#4ADE80] border-[#4ADE80] text-white"
                          : "bg-gray-200 border-gray-300 text-gray-800"
                      } flex items-center justify-center`}
                      title={r.paid ? `Paid (Due: ${r.due})` : `Due: ${r.due}`}
                    >
                      {r.paid ? <CheckCircleIcon className="h-3 w-3" /> : idx + 1}
                    </span>
                  ))}
              </div>
            </div>
            <div className="mb-2 text-xs">
              <b>Applicant:</b> {user.name} <span className="text-gray-400">({user.email})</span>
            </div>
            {selectedLoan.approvalStatus === "pending" && (
              <div className="flex gap-2 mt-2">
                <button
                  className="flex-1 bg-green-600 text-white py-1 rounded-xl font-bold hover:bg-green-700 text-xs"
                  onClick={() => onApprove && onApprove(selectedLoan._id || selectedLoan.id)}
                >
                  Approve
                </button>
                <button
                  className="flex-1 bg-red-600 text-white py-1 rounded-xl font-bold hover:bg-red-700 text-xs"
                  onClick={() => onReject && onReject(selectedLoan._id || selectedLoan.id, rejectReason)}
                >
                  Reject
                </button>
              </div>
            )}
            {selectedLoan.approvalStatus === "pending" && (
              <input
                className="w-full mt-2 p-1 border rounded text-xs"
                placeholder="Rejection reason"
                value={rejectReason}
                onChange={e => setRejectReason(e.target.value)}
              />
            )}
            {selectedLoan.approvalStatus === "rejected" && (
              <div className="text-red-600 text-center mt-2 text-xs">
                Reason: {selectedLoan.rejectionReason}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default View;