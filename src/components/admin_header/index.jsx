import React from "react";
import "./style.scss";
import { FaRegBell } from "react-icons/fa";
import dpImg from "../../assets/dp_img/dp.png";
function AdminHeader({heading}) {
  return (
    <div className="admin-header">
      <span className="admin-header-left-span">{heading}</span>
      <span className="admin-header-right-span">
        <span className="admin-header-right-div-icon-span">
          <FaRegBell />
        </span>
        <img src={dpImg} alt="dp" />
      </span>
    </div>
  );
}

export default AdminHeader;
