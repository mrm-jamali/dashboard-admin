import React, { useState, useContext } from "react";
import styles from "./UserInformation.module.css";
import { UserContext } from "../context/UserContext";

import { AiOutlinePlus } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import UserRowMobile from "./UserRowMobile";

import UserRow from "./UserRow";
import Pageination from "./Pageination";

const UsersInformation = () => {
  const navigate = useNavigate();
  const { adminData, setAdminData } = useContext(UserContext);
  const { users } = adminData;

  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 5;


  const filteredUsers = users.filter((user) => {
    const matchUsers =
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = user.role === role || role === "";
    return matchUsers && matchRole;
  });


  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentUsers = filteredUsers.slice(start, end);

 
  const onSaveRole = (username, newRole) => {
    const updatedUsers = users.map((u) =>
      u.username === username ? { ...u, role: newRole } : u
    );
    setAdminData({
      ...adminData,
      users: updatedUsers,
    });
    console.log("Updated user:", username, newRole);
  };

  
  const searchHandler = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); 
  };

 
  const filterHandler = (e) => {
    setRole(e.target.value);
    setCurrentPage(1); 
  };

  return (
    <>
   

 <div className={styles.firstcon}>
  <div className={styles.title}> <h2>Users Management</h2></div>
    
{/* desktop design */}
  <div className={`${styles.desktopVersion}`}>
    <div className={styles.topNav}>
      <button onClick={() => navigate("add")}>
        <AiOutlinePlus size={22} /> Add Users
      </button>

      <div className={styles.topActions}>
        <span className={styles.Search}>
          <IoSearchSharp />
          <input
            type="text"
            placeholder="Search Users..."
            value={search}
            onChange={searchHandler}
          />
        </span>

        <select value={role} onChange={filterHandler}>
          <option value="">Filter: All roles</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
    </div>

    <div className={styles.usersinfo}>
      <div className={`${styles.row} ${styles.header}`}>
        <span className={styles.col1}>Avatar</span>
        <span className={styles.col2}>Username</span>
        <span className={styles.col3}>Email</span>
        <span className={styles.col4}>Role</span>
        <span className={styles.col5}>Date Joined</span>
        <span className={styles.col6}>Action</span>
      </div>

      {currentUsers.map((user) => (
        <UserRow key={user.id} user={user} onSaveRole={onSaveRole} />
      ))}
    </div>
  </div>

{/* mobile design */}
 <div className={styles.mobileVersion}>
  <div className={styles.usersinfo}>
    {currentUsers.map((user) => (
      <UserRowMobile key={user.id} user={user} onSaveRole={onSaveRole} />
    ))}
  </div>
</div>

  <Pageination
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
    totalItems={filteredUsers.length}
  />
</div>


    </>
  );
};

export default UsersInformation;
