import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from "../Components/AdminPanel";
import StoreAdd from "../Screens/StoreAdd";
export default function AppRouter() {
  return (
    <div>
      <Router>
        <AdminPanel />
        <Routes>
          {/* <Route path="/" element={} /> */}
          <Route path="/store-add" element={<StoreAdd />} />
        </Routes>
      </Router>
    </div>
  );
}
