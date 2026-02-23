import { useState } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";
import styles from "./Layout.module.css";

function Layout({ sidebar: SideBar }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.layout}>
      <TopBar onMenuClick={() => setMenuOpen((prev) => !prev)} />
      <div className={styles.row}>
        <div className={`${styles.sidebar} ${menuOpen ? styles.open : ""}`}   >
       
          <SideBar />
        </div>

        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Layout;
