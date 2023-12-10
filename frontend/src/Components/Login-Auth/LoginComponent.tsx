import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import "./LoginComponent.css";
import GoogleLoginComponent from "./GoogleLoginComponent";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin} from "../../store/UserSlice";
import { loginUser } from "../../services/userServices";
import { AppDispatch } from "../../store/store";

function LoginComponent() {
  const navigate = useNavigate();
  const [formData, setFormData]  = useState({
    emailAddress: "",
    password: "",
  });
  const dispatch : AppDispatch = useDispatch();
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userLogin(formData)).then((result)=>{
      if(result.payload){
        navigate("/discover");
      }
    });
    // const user = await loginUser(formData);
    // console.log(user);
    // if (user) {
    //   navigate("/discover");
    // }
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
        <label htmlFor="emailAddress">Email:</label>
        <input
          className="login-input"
          type="text"
          id="login-username"
          name="emailAddress"
          placeholder="email"
          onChange={handleChange}
          value={formData.emailAddress}
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
            <a className="forgot-password-link" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginComponent;
