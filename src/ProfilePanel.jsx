import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "./MyContext";

function ProfilePanel() {
  const { user } = useContext(MyContext)
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState(user || {});
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // Fetch user if not in context (for direct visits/bookmarks)
  useEffect(() => {
    // if (!user) {
    //   fetch("http://localhost:2009/user/get", { credentials: "include" })
    //     .then(res => res.ok ? res.json() : null)
    //     .then(data => { if (data) setUser(data); });
    // }
    console.log("User context:", user);
  }, [user]);

  // Keep form in sync with user context
  useEffect(() => {
    if (user) setForm(user);
  }, [user]);

  async function handleEdit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:2009/user/edit/${user._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });
      const data = await res.json();
      console.log("Edit response:", data);  
      setLoading(false);
      if (res.ok) {
        setEdit(false);
        setMsg("Profile updated!");
        setTimeout(() => setMsg(""), 2000);
      } else {
        setMsg(data?.error || "Update failed");
        setTimeout(() => setMsg(""), 2000);
      }
    } catch (err) {
      setLoading(false);
      setTimeout(() => setMsg(""), 2000);
      console.log("Edit error:", err);
    }
  }

  if (!user) {
    return <div className="p-8 text-center text-gray-400">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-[#23203b] rounded-3xl shadow-2xl overflow-hidden">
      <div className="flex flex-col items-center py-8 px-6">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-24 h-24 rounded-full border-4 border-[#2563eb] mb-4"
        />
        {!edit ? (
          <>
            <h2 className="text-2xl font-bold text-[#2563eb] mb-1">{user.fullname}</h2>
            <div className="text-gray-500 dark:text-gray-300 mb-2">{user.email}</div>
            <span className="px-3 py-1 rounded-xl bg-[#2563eb]/10 text-[#2563eb] text-xs font-semibold">
              {user.accountType}
            </span>
            <button
              className="mt-6 bg-[#2563eb] text-white px-6 py-2 rounded-full font-bold hover:bg-[#1d4ed8] transition"
              onClick={() => setEdit(true)}
            >
              Edit Profile
            </button>
          </>
        ) : (
          <form className="w-full" onSubmit={handleEdit}>
            <input
              className="w-full mb-2 p-2 rounded-xl border border-gray-200"
              value={form.fullname || ""}
              onChange={e => setForm(f => ({ ...f, fullname: e.target.value }))}
              placeholder="fullname"
              required
            />
            <input
              className="w-full mb-2 p-2 rounded-xl border border-gray-200"
              value={form.email || ""}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              placeholder="Email"
              required
            />
            <input
              className="w-full mb-2 p-2 rounded-xl border border-gray-200"
              value={form.avatar || ""}
              onChange={e => setForm(f => ({ ...f, avatar: e.target.value }))}
              placeholder="Avatar URL"
            />
            <button
              type="submit"
              className="bg-[#2563eb] text-white px-6 py-2 rounded-full font-bold hover:bg-[#1d4ed8] transition w-full"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              className="mt-2 w-full text-gray-500 hover:text-[#2563eb] underline"
              onClick={() => setEdit(false)}
            >
              Cancel
            </button>
          </form>
        )}
        {msg && <div className="mt-4 text-green-600 font-semibold">{msg}</div>}
      </div>
    </div>
  );
}

export default ProfilePanel;