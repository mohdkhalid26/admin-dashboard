import React, { useState } from "react";
import "./style.scss";
import AdminSidebar from "../../components/admin_sidebar";
import AdminHeader from "../../components/admin_header";
import Dashboard from "./dashboard";
import { Route, Routes, useLocation } from "react-router-dom";
import UploadPost from "./upload_post";
import EditPost from "./edit_post";
import DeletePost from "./delete_post";
function AdminPanel() {
  const [heading, setHeading] = useState("Dashboard");
  function changeHeading(text) {
    setHeading(text);
  }
  return (
    <div className="admin-panel">
      <AdminSidebar setHeading={setHeading} />
      <AdminHeader heading={heading} />
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="Upload" element={<UploadPost />} />
        <Route path="Edit" element={<EditPost />} />
        <Route path="Delete" element={<DeletePost />} />
      </Routes>
    </div>
  );
}

export default AdminPanel;
