import { useRef, useEffect } from "react";

function AvatarUserChange({ formData, setFormData, onOpenFileDialog }) {
  const fileInputRef = useRef();
  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    onOpenFileDialog(openFileDialog);
  }, []);
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setFormData((prev) => ({ ...prev, avatar: imageURL }));
  };

  return (
    <div>
      <img src={formData.avatar} width="80" />

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleAvatarChange}
      />
    </div>
  );
}

export default AvatarUserChange;
