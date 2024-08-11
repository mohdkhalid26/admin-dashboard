import React, { useState } from "react";
import "./style.scss";
import logo from "../../assets/logo_img/logo.png";
import { GoSidebarCollapse } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { FaRegEdit } from "react-icons/fa";
import { GrDocumentUpload } from "react-icons/gr";
import { RiChatDeleteFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function AdminSidebar() {
  const [sidebarOption] = useState([
    { name: "Dashboard", icon: <RxDashboard /> },
    {
      name: "Upload",
      icon: <GrDocumentUpload />,
    },
    {
      name: "Edit",
      icon: <FaRegEdit />,
    },
    {
      name: "Delete",
      icon: <RiChatDeleteFill />,
    },
  ]);
  return (
    <div className="admin-sidebar">
      <div className="admin-sidebar-head-div">
        <span className="logo-span">
          <img width={120} src={logo} alt="logo" />
        </span>
        <span className="icon-span">
          <GoSidebarCollapse />
        </span>
      </div>
      <div className="admin-sidebar-option-div">
        {sidebarOption.map((option, index) => {
          return (
            <NavLink
              className={`option-div ${option.name}`}
              key={index}
              to={option.name === "Dashboard" ? "" : option.name}
            >
              <span className="option-icon-span">{option.icon}</span>
              <span className="option-name-span">{option.name}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default AdminSidebar;
