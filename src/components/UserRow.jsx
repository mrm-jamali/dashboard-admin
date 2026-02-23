import { useState } from "react";

import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import styles from "./UserRow.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

function UserRow({ user, onSaveRole }) {
  const { adminData, setAdminData } = useContext(UserContext);
  const { users } = adminData;

  const [isEdit, setIsedit] = useState(false);
  const [tempRole, setTempRole] = useState(user.role);

  const saveHandler = () => {
    onSaveRole(user.username, tempRole);
    setIsedit(false);
  };
  const editHandler = () => {
    setIsedit(!isEdit);
    console.log(isEdit);
  };

  // const deleteHandler=()=>{
  //   const newItem=users.filter(u=>u.username!==user.username)
  //   setUsers(newItem)
  // }
  const deleteHandler = () => {
    const newList = users.filter((u) => u.username !== user.username);

    setAdminData({
      ...adminData,
      users: newList,
    });
  };

  return (
    <>
      <div className={styles.row} key={user.username}>
        <span className={styles.col1}>
          <img src={user.avatar} width="40" />
        </span>
        <span className={styles.col2}>{user.username}</span>
        <span className={styles.col3}>{user.email}</span>

        <span className={styles.col4}>
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

          {isEdit ? (
            <button onClick={saveHandler} className={styles.savebtn}>
              Save
            </button>
          ) : (
            <button onClick={() => setIsedit(true)} className={styles.editbtn}>
              <MdEdit />
            </button>
          )}
        </span>

        <span className={styles.col5}>date</span>

        <div className={styles.col6}>
          <p>|</p>
          <span>
            <FaRegTrashAlt />
          </span>
          <button className={styles.delbtn} onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default UserRow;
