import React, { forwardRef, useContext, useState } from "react";
import styles from "./Notification.module.css";
import { UserContext } from "../context/UserContext";
import { ImNotification } from "react-icons/im";

const Notification = forwardRef(({ open, setOpen }, ref) => {
  const { adminData, setAdminData, currentUser } = useContext(UserContext);

  // فیلتر کردن نوتیفیکیشن‌ها بسته به نقش
  const notifications =
    currentUser.role === "admin"
      ? adminData.notifications
      : adminData.notifications.filter((n) => n.user === currentUser.username);

  const [showCount, setShowCount] = useState(4);

  const viewAllHandler = () =>
    setShowCount(showCount === 4 ? notifications.length : 4);

  const clearHandler = () => {
    if (currentUser.role === "admin") {
      setAdminData((prev) => ({ ...prev, notifications: [] }));
    } else {
      setAdminData((prev) => ({
        ...prev,
        notifications: prev.notifications.filter(
          (n) => n.user !== currentUser.username
        ),
      }));
    }
  };

  if (notifications.length === 0) {
    return (
      <div ref={ref} className={styles.containernoinfo}>
        <p>No notifications</p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={styles.panel}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className={styles.firstcol}>
        <h3>Notifications</h3>
        <button onClick={viewAllHandler}>
          {showCount === 4 ? "View All" : "View Less"}
        </button>
      </div>

      <div className={styles.datalogs}>
        {notifications.slice(0, showCount).map((n, i) => (
          <div key={i} className={styles.dataRow}>
            <ImNotification style={{ color: "red", marginRight: 15 }} />
            <span style={{ marginRight:-8,fontWeight:600 }}>{n.title}</span>
            {n.user && <span style={{ marginLeft:10 ,fontWeight:600}}>:{n.user}</span>}
            <p style={{ marginLeft: "auto"  }}>{n.time}</p>
          </div>
        ))}

        <button className={styles.clearBtn} onClick={clearHandler}>
          Clear All
        </button>
      </div>
    </div>
  );
});

export default Notification;
