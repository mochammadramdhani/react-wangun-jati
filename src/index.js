import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Admin from "./Admin";
import { AdminLayout } from "./layouts/admin/AdminLayout";
import { AuthProvider } from "./context/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Layput Umum */}
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <App />
                <Footer />
              </>
            }
          />

          {/* Layout Admin */}
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
