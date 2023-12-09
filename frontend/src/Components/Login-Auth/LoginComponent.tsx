import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import "./LoginComponent.css";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { loginUser } from "../../services/userServices";
function LoginComponent() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginUser(formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <h2 className="login-text">Login to your Account</h2>
      <p className="welcome-text">
        Login to experience a new world of PledgePilot
      </p>
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          className="login-input"
          type="text"
          id="login-username"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={formData.email}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          className="login-input"
          type="password"
          id="login-password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={formData.password}
          required
        />

        <div className="btn-forgot-password">
          <button type="submit">Login</button>
          <GoogleLoginComponent />
          <br />
          <div className="forgot-password">
            <a className="forgot-password-link" href="#">Forgot Password?</a>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginComponent;
