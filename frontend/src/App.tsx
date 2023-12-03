import React from 'react';
import './App.css';
import LoginPage from './Pages/Login Page/LoginPage';
import SignUp from './Components/Signup Component/Signup';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from  'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={
            <>
            <Home />
            </>
          }>
          </Route>
          <Route path='/login' element={
            <>
            <LoginPage />
            </>
          }>
          </Route>
          <Route path='/register' element={
            <SignUp />
          }>
          </Route>
          <Route path='/dashboard' element={
            <Dashboard />
          }>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
