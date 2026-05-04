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

  // demo accounts
  const demoAccounts = {
    admin: {
      email: "jamali8820@yahoo.com",
      password: "345",
      role: "admin",
    },
    user: {
      email: "mj.jamali.it@gmail.com",
      password: "111",
      role: "user",
    },
  };

  const handleEmailClick = () => {
    if (!role) {
      setMessage(" Please select your role first");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!role) {
      setMessage(" Please select a role");
      return;
    }

    const list = role === "admin" ? admins : users;

    const foundUser = list.find((u) => u.email === email);

    if (!foundUser) {
      setMessage(" Email not found");
      return;
    }

    if (foundUser.password !== password) {
      setMessage(" Incorrect password");
      return;
    }

    setCurrentUser({ ...foundUser, role });

    setMessage("✔️ Login successful");

    if (role === "admin") navigate("/admin");
    else navigate("/user");
  };

  //  auto fill function
  const fillDemo = (type) => {
    const acc = demoAccounts[type];

    setRole(acc.role);
    setEmail(acc.email);
    setPassword(acc.password);
    setMessage("");
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

        {/* Email */}
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

        {/* Password */}
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

        <div className={styles.demoButtons}>
          <button type="button" onClick={() => fillDemo("admin")}>
            Login as Admin
          </button>

          <button type="button" onClick={() => fillDemo("user")}>
            Login as User
          </button>
        </div>

        {/*  demo info */}
        <div style={{ marginTop: "15px", fontSize: "13px", opacity: 0.8 }}>
          <p>
            <b>Demo Accounts:</b>
          </p>
          <p>Admin → jamali8820@yahoo.com / 456</p>
          <p>User → mj.jamali.it@gmail.com/ 111</p>
        </div>

        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
