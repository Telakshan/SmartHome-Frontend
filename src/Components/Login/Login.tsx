import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

import "./Login.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="log-in">
      <h2 className="title">Log in</h2>
      <span>Log in with your email and password</span>
      <form>
        <Input
          name="email"
          value={email}
          label="email"
          onChange={handleChange}
        />
        <Input
          name="password"
          value={password}
          label="password"
          onChange={handleChange}
        />
        <Button inverted={false}>
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
