import { useState } from "react";
import styles from "./UserChangePassword.module.css";

function UserChangePassword({ currentPassword, onPasswordChange }) {
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const changePass = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const saveHandler = () => {
    if (passwords.oldPassword !== currentPassword) {
      setError("Old password is incorrect");
      setSuccess("");
      return;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      setError("New password and confirmation do not match");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Password changed successfully ✅");

    onPasswordChange && onPasswordChange(passwords.newPassword);

    setPasswords({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const cancelHandler = () => {
    setPasswords({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setError("");
    setSuccess("");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.secondpart}>
          <input
            type="password"
            placeholder="Current Password"
            name="oldPassword"
            value={passwords.oldPassword}
            onChange={changePass}
          />
          <input
            type="password"
            placeholder="New Password"
            name="newPassword"
            value={passwords.newPassword}
            onChange={changePass}
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={changePass}
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}

        <div className={styles.theirdpart}>
          <button onClick={saveHandler}>Save</button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      </div>
      <div className={styles.backbtn}>
        <button
          onClick={() => {
            onPasswordChange && onPasswordChange(currentPassword);
          }}
        >
          Back
        </button>
      </div>
    </>
  );
}

export default UserChangePassword;
