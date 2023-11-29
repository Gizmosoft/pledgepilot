import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import "./LoginComponent.css";
function LoginComponent() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Access the form data using refs
    setFormData({...formData, username: usernameRef.current?.value || ''});
    setFormData({...formData, password: passwordRef.current?.value || ''})
    // console.log(usernameRef.current?.value , passwordRef.current?.value);

  };

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  return (
    <>
      <h2 className="login-text">Login to your Account</h2>
      <p className="welcome-text">
        Welcome to PledgePilot
      </p>
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="login-username"
          name="username"
          placeholder="username"
          ref={usernameRef}
          // onChange={handleChange}
          // value={formData.username}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="login-password"
          name="password"
          placeholder="password"
          ref={passwordRef}
          // onChange={handleChange}
          // value={formData.password}
          required
        />

        <div className="btn-forgot-password">
          <button type="submit">Login</button>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginComponent;
