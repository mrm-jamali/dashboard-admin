import React, { useState, useContext } from "react";
import styles from "./UserRowMobile.module.css";
import { UserContext } from "../context/UserContext";
import { MdEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

function UserRowMobile({ user, onSaveRole }) {
  const { adminData, setAdminData } = useContext(UserContext);
  const { users } = adminData;

  const [isEdit, setIsEdit] = useState(false);
  const [tempRole, setTempRole] = useState(user.role);

  const saveHandler = () => {
    onSaveRole(user.username, tempRole);
    setIsEdit(false);
  };

  const deleteHandler = () => {
    const newList = users.filter((u) => u.username !== user.username);
    setAdminData({ ...adminData, users: newList });
  };

  return (
    <div className={styles.card}>
      
      <div className={styles.row}>
        <strong>Username:</strong> {user.username}
      </div>

      <div className={styles.row}>
        <strong>Email:</strong> {user.email}
      </div>

      <div className={styles.row}>
        <strong>Role:</strong>

        {!isEdit ? (
          <span>{user.role}</span>
        ) : (
          <select
            value={tempRole}
            onChange={(e) => setTempRole(e.target.value)}
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        )}
      </div>

      <div className={styles.row}>
        <strong>Date Joined:</strong> {user.dateJoined}
      </div>

      <div className={styles.actions}>
        {!isEdit ? (
          <button className={styles.edit} onClick={() => setIsEdit(true)}>
            <MdEdit />
          </button>
        ) : (
          <button className={styles.save} onClick={saveHandler}>
            Save
          </button>
        )}

        <button className={styles.delete} onClick={deleteHandler}>
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default UserRowMobile;