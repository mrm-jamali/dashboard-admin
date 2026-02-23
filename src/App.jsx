import { useState, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import LoginForm from "./LoginForm";
import AdminPage from "./AdminPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import UsersInformation from "./components/UsersInformation";
import Layout from "./Layout";
import AdminData from "./data/MockDataAdmin";
import ActivityLog from "./components/ActivityLog";
import AddUsers from "./components/AddUsers";
import UserPage from "./UserPage";
import SideBarAdmin from "./components/SideBarAdmin";
import SideBarUser from "./components/SideBarUser";
import ProfileUser from "./components/ProfileUser";
import Orders from "./components/Orders";


function App() {
  const [adminData, setAdminData] = useState(() => {
    try {
      const savedAdminData = localStorage.getItem("adminData");
      return savedAdminData ? JSON.parse(savedAdminData) : AdminData;
    } catch (e) {
      console.error("Error parsing adminData from localStorage:", e);
      return AdminData;
    }
  });

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("currentUser");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      console.error("Error parsing currentUser from localStorage:", e);
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem("adminData", JSON.stringify(adminData));
  }, [adminData]);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
