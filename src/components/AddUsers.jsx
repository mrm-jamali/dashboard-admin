import styles from "./AddUsers.module.css";
import { useContext, useState } from "react";

import { UserContext } from "../context/UserContext";


function AddUsers() {
  const { adminData, setAdminData } = useContext(UserContext);

  const [avatar, setAvatar] = useState(null);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  // هندل تغییر input ها
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // هندل آپلود آواتار
  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setAvatar(imageUrl);
  };

  // اضافه کردن کاربر
  const addHandler = (e) => {
    e.preventDefault();

    // اضافه کردن فرم + آواتار به adminData
    setAdminData((prev) => ({
      ...prev,
      users: [...prev.users, { ...form, avatar }],
    }));

    alert("User Added");

    // ریست فرم و آواتار
    setForm({
      username: "",
      email: "",
      password: "",
      role: "user",
    });
    setAvatar(null);
  };

  return (
    <div className={styles.container}>
      <h2>Add New User</h2>

      <form className={styles.form} onSubmit={addHandler}>
        <div className={styles.inputGroup}>
          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder="Enter username..."
            value={form.username}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email..."
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password..."
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Role</label>
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label>Avatar</label>
          <input type="file" accept="image/*" onChange={handleAvatar} />
          {avatar && <img src={avatar} alt="preview" className={styles.preview} />}
        </div>

        <button className={styles.addBtn} type="submit">
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUsers;
