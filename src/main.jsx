import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from './ContactUs.jsx'
import About from './AboutUs.jsx'
import Quick from './QuickLoan.jsx'
import PublicLending from './PublicLending.jsx'
import PrivateLending from './PrivateLending.jsx'
import Business from './Business.jsx'
import SignUp from './SignUp.jsx'
import Login from './Login.jsx'
import UserDashboard from './UserDashboard.jsx'
import ProfilePanel from './ProfilePanel.jsx'
import AnalyticsPanel from './AnalyticsPanel.jsx'
import ApplicationsPanel from './ApplicationsPanel.jsx'
import SettingsPanel from './SettingsPanel.jsx'
import AdminDashboard from './AdminDashboard.jsx'
import NotificationPanel from './NotificationPanel.jsx'
import View from './View.jsx'
import { DarkModeProvider } from './DarkModeContext.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyProvider from './MyContext.jsx'

createRoot(document.getElementById('root')).render(
  <DarkModeProvider>
  <StrictMode>
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/QuickLoan" element={<Quick />} />
          <Route path="/PublicLending" element={<PublicLending />} />
          <Route path="/PrivateLending" element={<PrivateLending />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/ProfilePanel" element={<ProfilePanel />} />
          <Route path="/AnalyticsPanel" element={<AnalyticsPanel />} />
          <Route path="/ApplicationsPanel" element={<ApplicationsPanel />} />
          <Route path="/SettingsPanel" element={<SettingsPanel />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/NotificationPanel" element={<NotificationPanel />} />
          <Route path="/View" element={<View />} />
        </Routes>
      </BrowserRouter>
    </MyProvider>
  </StrictMode>
</DarkModeProvider>
)
