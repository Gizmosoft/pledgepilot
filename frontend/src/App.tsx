import React from 'react';
import './App.css';
import LoginPage from './Pages/Login/LoginPage';
import SignUp from './Components/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from  'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import ProtectedRoutes from './Utils/ProtectedRoutes';
import CampaignPage from './Pages/Campaign/CampaignPage';
import DiscoverPage from './Pages/Discover/DiscoverPage';
import HomePage from './Pages/Home/HomePage';
import NavBar2 from './Components/Navbar2/NavBar2';
import CreateCampaign from './Pages/CreateCampaign/CreateCampaign';

function App() {
  return (
    <div className='App'>
      {/* <NavBar2 /> */}
      
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={
            <>
            <HomePage />
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
          <Route path='/discover' element={
            <DiscoverPage />
          }>
          </Route>
          {/* /dashboard goes through a protected route - only authenticated users can access this URL */}
          {/* <Route element={
            <ProtectedRoutes />
          }> */}
            <Route path='/dashboard' element={
              <Dashboard />
            }>
            {/* </Route> */}
          </Route>
          <Route path='/campaigns/campaign/:campaignId' element={
            <CampaignPage />
          }>
          </Route>
          <Route path='/test' element={
            <>
            <NavBar2 />
            </>
          }></Route>
          <Route path= '/create' element={
            <CreateCampaign/>
          }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
