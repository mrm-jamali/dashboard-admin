import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import styles from "./LoginForm.module.css";
import { FaUserAlt } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";

function LoginForm() {
  const navigate = useNavigate();
  const { adminData, setCurrentUser } = useContext(UserContext);

  const { users, admins } = adminData;

  const [role, setRole] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailClick = () => {
    if (!role) {
      setMessage("⚠️ Please select your role first");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!role) {
      setMessage("⚠️ Please select a role");
      return;
    }

    const list = role === "admin" ? admins : users;

    const foundUser = list.find((u) => u.email === email);

    if (!foundUser) {
      setMessage("❌ Email not found");
      return;
    }

    if (foundUser.password !== password) {
      setMessage("❌ Incorrect password");
      return;
    }

    setCurrentUser({ ...foundUser, role });

    setMessage("✔️ Login successful");

    if (role === "admin") navigate("/admin");
    else navigate("/user");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <h2>User/Admin Login</h2>
        <select
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
            setMessage("");
            setEmail("");
            setPassword("");
          }}
        >
          <option value=""> Choose A role...</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <div className={styles.inputWrapper}>
          <FaUserAlt className={styles.inputIcon} />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onClick={handleEmailClick}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!role}
          />
        </div>
        <div className={styles.inputWrapper}>
          <TbLockPassword className={styles.inputIcon} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={!role}
          />
        </div>
        <button disabled={!role}>Login</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
