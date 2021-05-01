import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

import "./Register.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="register">
      <h2>Don't have an account?</h2>
      <span>Register with your email and password</span>

      <form>
        <Input
          name="name"
          value={name}
          label="display name"
          onChange={handleChange}
        />
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
        <Button>Register</Button>
      </form>
    </div>
  );
};

export default Register;
