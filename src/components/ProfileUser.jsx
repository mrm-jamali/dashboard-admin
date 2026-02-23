import { useState, useEffect, useContext } from "react";
import styles from "./ProfileUser.module.css";
import AvatarUserChange from "./AvatarUserChange";
import EditUserProfile from "./EditUserProfile";
import UserChangePassword from "./UserChangePassword";
import { UserContext } from "../context/UserContext";

function ProfileUser() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    family: "",
    username: "",
    email: "",
    phone: "",
    avatar: "",
    password: "",
  });

  const [openFileDialogFn, setOpenFileDialogFn] = useState(null);


  useEffect(() => {
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
  }, [currentUser]);

  const changePassword = () => setIsChangingPassword(true);

 
  const handlePasswordChange = (newPassword) => {
    const updatedUser = { ...currentUser, password: newPassword };
    setCurrentUser(updatedUser);
    setFormData((prev) => ({ ...prev, password: newPassword }));
    setIsChangingPassword(false);
  };

  return (
    <div className={styles.container}>
      <h1>User Profile</h1>

      <div className={styles.firstpart}>
        <AvatarUserChange
          formData={formData}
          setFormData={setFormData}
          onOpenFileDialog={(fn) => setOpenFileDialogFn(() => fn)}
        />
        <button onClick={() => openFileDialogFn && openFileDialogFn()}>
          Edit Photo
        </button>
        <button onClick={changePassword}>Change Password</button>
      </div>

      {isChangingPassword ? (
        <UserChangePassword
          currentPassword={formData.password}
          onPasswordChange={handlePasswordChange}
        />
      ) : (
        <EditUserProfile formData={formData} setFormData={setFormData} />
      )}
    </div>
  );
}

export default ProfileUser;
