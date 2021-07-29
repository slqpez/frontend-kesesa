import React, { useContext } from "react";
import "./profile.css";
import UserContext from "../../context/userContext"

function Profile() {

  const {user:{user}} = useContext(UserContext)
  return <div>
    <p>Bienvenido: {user.name}</p>
    <img src={user.profileImage} alt="profile" />
  </div>;
}

export default Profile;
