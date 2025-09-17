import React, { useEffect, useState } from 'react';
import { useMyContext } from './MyContext.jsx';

const NotificationPanel = ({ onClose }) => {
  const { user } = useMyContext();
  const [notifications, setNotifications] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    async function fetchNotifications() {
      if (!user?._id) return;
      try {
        const res = await fetch(`https://loan-ends.onrender.com/notification/get/${user._id}`);
        const data = await res.json();
        const filtered = Array.isArray(data)
          ? data.filter(n =>
              n.message &&
              (
                n.message.toLowerCase().includes("loan accepted") ||
                n.message.toLowerCase().includes("welcome to luxloan") ||
                n.message.toLowerCase().includes("thank you for choosing luxloan")
              )
            )
          : Array.isArray(data.notifications)
            ? data.notifications.filter(n =>
                n.message &&
                (
                  n.message.toLowerCase().includes("loan accepted") ||
                  n.message.toLowerCase().includes("welcome to luxloan") ||
                  n.message.toLowerCase().includes("thank you for choosing luxloan")
                )
              )
            : [];
        // Remove duplicate greeting messages
        const seen = new Set();
        const deduped = filtered.filter(n => {
          if (n.message.toLowerCase().includes("welcome to luxloan")) {
            if (seen.has("welcome")) return false;
            seen.add("welcome");
          }
          return true;
        });
        setNotifications(deduped);
      } catch (err) {
        setNotifications([]);
        console.error("Failed to fetch notifications:", err);
      }
    }
    fetchNotifications();
  }, [user]);

  async function handleMarkAsRead(id) {
    try {
      // FIX: Remove extra quote and typo in URL
      await fetch(`https://loan-ends.onrender.com/notification/${id}/read`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" }
      });
      setNotifications(notifications =>
        notifications.map(n =>
          n._id === id ? { ...n, isRead: true } : n
        )
      );
    } catch (err) {
      console.error("Failed to mark notification as read:", err);
    }
  }

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 300);
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-end transition-all duration-300 ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
        aria-label="Close notifications"
      />
      <div
        className={`relative mt-16 mr-4 w-80 bg-white shadow-2xl rounded-xl p-5 z-50 transition-transform duration-300 ${
          visible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}
        style={{ minHeight: '300px' }}
      >
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          Notifications
          {notifications && notifications.length > 0 && (
            <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold bg-[#2563eb] text-white rounded-full">
              {notifications.length}
            </span>
          )}
        </h2>
        <div className="space-y-2">
          {(!notifications || notifications.length === 0) ? (
            <p className="text-gray-400 text-center py-10">No notifications</p>
          ) : (
            notifications.map((notification, index) => (
              <div
                key={notification._id || index}
                className={`border-b border-gray-100 py-3 px-2 rounded transition ${
                  !notification.isRead ? 'bg-blue-50' : ''
                }`}
              >
                <p className={`text-sm ${!notification.isRead ? 'font-bold text-blue-600' : 'text-gray-700'}`}>
                  {notification.message.toLowerCase().includes("welcome to luxloan") && user?.name
                    ? `Welcome ${user.name}, ${notification.message}`
                    : notification.message}
                </p>
                <span className="text-xs text-gray-400 block mt-1">
                  {notification.createdAt
                    ? new Date(notification.createdAt).toLocaleString()
                    : notification.date}
                </span>
                {!notification.isRead && (
                  <button
                    onClick={() => handleMarkAsRead(notification._id)}
                    className="mt-2 px-3 py-1 rounded bg-green-500 text-white text-xs font-semibold hover:bg-green-600 transition"
                  >
                    Mark as Read
                  </button>
                )}
              </div>
            ))
          )}
        </div>
        <button
          onClick={handleClose}
          className="mt-6 w-full py-2 rounded bg-[#2563eb] text-white font-semibold hover:bg-[#1d4ed8] transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationPanel;