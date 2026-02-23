import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import styles from "./EditUserProfile.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function EditUserProfile({ formData, setFormData }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [massageSuccess, setMassageSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setFormData((prev) => ({
        ...prev,
        name: currentUser.name,
        family: currentUser.family,
        username: currentUser.username,
        email: currentUser.email,
        phone: currentUser.phone,
        avatar: currentUser.avatar,
        password: currentUser.password,
      }));
    }
  }, []);

  const editHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveHandler = () => {
    setCurrentUser(formData);
    setMassageSuccess("Changes saved ✅");
    setTimeout(() => setMassageSuccess(""), 2500);
  };

  const cancelHandler = () => {
    if (currentUser) {
      setFormData({
        name: currentUser.name,
        family: currentUser.family,
        username: currentUser.username,
        email: currentUser.email,
        phone: currentUser.phone,
        avatar: currentUser.avatar,
        password: currentUser.password,
      });
    }
    setMassageSuccess("Changes canceled ❌");

    setTimeout(() => setMassageSuccess(""), 2000);
  };

  return (
    <>
      {massageSuccess && (
        <div className={styles.successBox}>{massageSuccess}</div>
      )}
      <div className={styles.secondpart}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={editHandler}
        />
        <input
          type="text"
          placeholder="Family"
          name="family"
          value={formData.family}
          onChange={editHandler}
        />
        <input
          type="text"
          placeholder="UserName"
          name="username"
          value={formData.username}
          onChange={editHandler}
        />

        <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={editHandler}
          />
          <span
            className={styles.eyeIcon}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={editHandler}
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={editHandler}
        />
      </div>

      <div className={styles.theirdpart}>
        <button onClick={saveHandler}>Save</button>
        <button onClick={cancelHandler}>Cancel</button>
      </div>
    </>
  );
}

export default EditUserProfile;
