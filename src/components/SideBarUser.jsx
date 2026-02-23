import React from "react";
import styles from "./Sidbar.module.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RxActivityLog } from "react-icons/rx";
import { TfiDashboard } from "react-icons/tfi";

function SideBar() {
  return (
    <div className={styles.containersidbar}>
      <ul>
        <li>
          <span>
            <TfiDashboard size={28} color=" rgb(28, 39, 102)"/>
          </span>
          <Link to="/user/dashboard">Dashboard</Link>
        </li>
        <li>
          <span><RxActivityLog size={28} color=" rgb(28, 39, 102)" /></span>
          <Link to="/user/profile">My profile</Link>
        </li>
        <li>
          <span><FaUser size={28} color=" rgb(28, 39, 102)" /></span>
          <Link to="/user/orders">My Orders</Link>
        </li>
         {/* <li>
          <span><FaUser size={28} color=" rgb(28, 39, 102)" /></span>
          <Link to="/admin/user">Users</Link>
        </li> */}
      </ul>
    </div>
  );
}

export default SideBar;

