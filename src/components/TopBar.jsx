import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Notification from "./Notification";
import styles from "./TopBar.module.css"
import { CiGrid41, CiBellOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

function TopBar({ onMenuClick }) {
  const { currentUser, setCurrentUser, adminData } = useContext(UserContext);

  const [openNotif, setOpenNotif] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);

  const notifRef = useRef(null);
  const menuRef = useRef(null);

  const navigate = useNavigate();

  // بستن Notification با کلیک بیرون
  useEffect(() => {
    function handleOutsideClick(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setOpenNotif(false);
      }
    }
    if (openNotif) document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [openNotif]);

  // بستن Dropdown منو با کلیک بیرون
  useEffect(() => {
    function handleOutsideMenuClick(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest(`.${styles.avatar}`)
      ) {
        setVisibleMenu(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideMenuClick);
    return () =>
      document.removeEventListener("mousedown", handleOutsideMenuClick);
  }, []);

  const displayHandler = () => setVisibleMenu((v) => !v);

  const logoutHandler = () => {
    setCurrentUser(null);
    navigate("/");
  };

  const profileHandler = () => {
    setVisibleMenu(false);
    if (currentUser.role === "admin") {
      navigate("/admin/profile"); // مسیر ادمین
    } else {
      navigate("/user/profile"); // مسیر کاربر
    }
  };

  if (!currentUser) return null;

  return (
    <div className={styles.containertop}>
      <div className={styles.cont}>
        <div className={styles.wellcome}>
          <button className={styles.hamburger} onClick={onMenuClick}>
            <FiMenu size={24} />
          </button>
          <div>
            <CiGrid41 size={30} />
            <h2>
              {currentUser.role === "admin"
                ? "Admin Dashboard"
                : "User Dashboard"}
            </h2>
          </div>
        </div>

        <div className={styles.secondpart}>
          <h3>Welcome, {currentUser.username}!</h3>
        </div>

        <div className={styles.thierdpart}>
          <p className={styles.divider}>|</p>

          {/* Notification Icon */}
          <span
            className={styles.notibell}
            onClick={() => setOpenNotif((prev) => !prev)}
          >
            <CiBellOn size={32} />
            <span className={styles.notifi}>
              {currentUser.role === "admin"
                ? adminData.notifications.length
                : adminData.notifications.filter(
                    (n) => n.user === currentUser.username,
                  ).length}
            </span>
          </span>

          {openNotif && (
            <Notification
              ref={notifRef}
              open={openNotif}
              setOpen={setOpenNotif}
            />
          )}

          {/* Avatar + Menu */}
          <span className={styles.avatar}>
            <span onClick={displayHandler}>
              <img src={currentUser.avatar} alt="avatar" width="40px" />
              <MdKeyboardArrowDown size={16} />
            </span>
          </span>
        </div>

        {/* Dropdown Menu */}
        <div
          ref={menuRef}
          className={`${styles.adminMenu} ${visibleMenu ? styles.show : ""}`}
        >
          <div className={styles.info}>
            <img src={currentUser.avatar} alt="avatar" width="40px" />
            <span>
              <p className={styles.username}>{currentUser.username}</p>
              <p>{currentUser.email}</p>
              <p>Role: {currentUser.role}</p>
            </span>
          </div>

          <div className={styles.btnlogout}>
            <button onClick={profileHandler}>Profile</button>
            <button onClick={logoutHandler}>Log out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
