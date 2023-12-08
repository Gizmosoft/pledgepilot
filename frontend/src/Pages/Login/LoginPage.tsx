import React, { useState } from "react";
import "./LoginPage.css";
import LoginComponent from "../../Components/Login-Auth/LoginComponent";
import SignUp from "../../Components/Signup/Signup";
// import loginPageImage from '../../assets/LoginPageImg.jpeg';
const loginPageImage = require("../../assets/LoginPageImg.jpg");
function LoginPage() {
  const [isRegistered, setIsRegistered] = useState(false);

  function switchComponent(){
    if(isRegistered){
      setIsRegistered(false);
    }
    else{
      setIsRegistered(true);
    }
  }
  return (
    <>
      <div className="login-page">
        <div className="login-image-container">
          <img src={loginPageImage} alt="" />
        </div>
        <div className="login-page-right">
          <div className="login-form-container">
            {isRegistered ? <LoginComponent /> : <SignUp />}
          </div>
          <div className="create-account">
            {isRegistered ? (
              <>
                <span>Don't have an account? </span>
                <a href="#" onClick={switchComponent}>Create an Account</a>
              </>
            ) : (
              <>
                <span>Have an account? </span>
                <a href="#" onClick={switchComponent}>Log in</a>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
