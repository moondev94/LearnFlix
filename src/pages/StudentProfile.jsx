import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function StudentProfile() {
  const user = useSelector((state) => state.auth.user);

  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || ""
  );

  useEffect(() => {
    if (profileImage) {
      localStorage.setItem("profileImage", profileImage);
    }
  }, [profileImage]);

  if (!user) {
    return <Navigate to="/" />;
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <section className="dashboard page-transition">
      <h2>Perfil do Aluno</h2>

      <div className="dashboard-grid">
        <div className="dashboard-card profile-card">
          <h3>Foto de Perfil</h3>

          <div className="profile-image-wrapper">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Foto de perfil"
                className="profile-image"
              />
            ) : (
              <div className="profile-placeholder">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          <label className="hero-btn profile-upload-btn">
            Alterar foto
            <input
              type="file"
              accept="image/*"
              capture="user"
              onChange={handleImageChange}
              hidden
            />
          </label>
        </div>

        <div className="dashboard-card">
          <h3>Nome</h3>
          <p>{user.name}</p>
        </div>

        <div className="dashboard-card">
          <h3>Perfil</h3>
          <p>{user.role}</p>
        </div>

        <div className="dashboard-card">
          <h3>Status</h3>
          <p>Ativo</p>
        </div>
      </div>
    </section>
  );
}