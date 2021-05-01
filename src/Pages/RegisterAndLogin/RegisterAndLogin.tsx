import React from "react";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";

import "./RegisterAndLogin.scss";

const RegisterAndLogin = () => {
  return (
    <div>
      <Login />
      <Register />
    </div>
  );
};

export default RegisterAndLogin;
