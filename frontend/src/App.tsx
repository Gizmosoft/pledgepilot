import React from 'react';
import './App.css';
import LoginPage from './Pages/Login Page/LoginPage';
import SignUp from './Components/Signup Component/Signup';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <LoginPage/>
      {/* <SignUp/> */}
    </div>
  );
}

export default App;
