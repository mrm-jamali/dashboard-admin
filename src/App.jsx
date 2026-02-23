import { createContext, useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import AdminPage from "./AdminPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UsersInformation from "./components/UsersInformation";
import Layout from "./Layout";
import AdminData from "./data/MockDataAdmin";

import ActivityLog from "./components/ActivityLog";

import AddUsers from "./components/AddUsers";
import UserPage from "./UserPage";

import SideBarAdmin from "./components/SideBarAdmin"

import SideBarUser from "./components/SideBarUser"


import ProfileUser from "./components/ProfileUser";
import Orders from "./components/Orders";


import { UserContext } from "./context/UserContext";

function App() {
  // بارگذاری adminData از localStorage یا استفاده از داده پیشفرض
  const [adminData, setAdminData] = useState(() => {
    try {
      const savedAdminData = localStorage.getItem("adminData");
      return savedAdminData ? JSON.parse(savedAdminData) : AdminData;
    } catch (e) {
      console.error("Error parsing adminData from localStorage:", e);
      return AdminData;
    }
  });

  // بارگذاری currentUser از localStorage یا مقدار null
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("currentUser");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      console.error("Error parsing currentUser from localStorage:", e);
      return null;
    }
  });

  // ذخیره adminData در localStorage وقتی تغییر کرد
  useEffect(() => {
    localStorage.setItem("adminData", JSON.stringify(adminData));
  }, [adminData]);

  // ذخیره currentUser در localStorage وقتی تغییر کرد
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ adminData, setAdminData, currentUser, setCurrentUser }}
      >
        <Routes>
          <Route path="/" element={<LoginForm />} />

          <Route path="/user" element={<Layout sidebar={SideBarUser} />}>
            <Route index element={<UserPage />} />
            <Route path="dashboard" element={<UserPage />} />
            <Route path="profile" element={<ProfileUser />} />
            <Route path="orders" element={<Orders />} />
          </Route>

          <Route path="/admin" element={<Layout sidebar={SideBarAdmin} />}>
            <Route index element={<AdminPage />} />
            <Route path="dashboard" element={<AdminPage />} />
            <Route
              path="activity"
              element={<ActivityLog adminData={adminData} />}
            />
            <Route path="user" element={<UsersInformation />} />
            <Route path="user/add" element={<AddUsers />} />
            <Route path="profile" element={<ProfileUser />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
