import React from "react";

const ApplicationsPanel = ({ applications = [], onRepay }) => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Your Applications</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Duration</th>
              <th className="px-4 py-2">Purpose</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Repay</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-2">${app.amount}</td>
                <td className="px-4 py-2">{app.duration}m</td>
                <td className="px-4 py-2">{app.purpose}</td>
                <td className="px-4 py-2">{app.status}</td>
                <td className="px-4 py-2">
                  <button onClick={() => onRepay(i)} className="bg-green-500 text-white px-3 py-1 rounded text-sm">Repay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationsPanel;