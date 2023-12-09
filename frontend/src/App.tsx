import React from 'react';
import './App.css';
import LoginPage from './Pages/Login/LoginPage';
import SignUp from './Components/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from  'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import ProtectedRoutes from './Utils/ProtectedRoutes';
import CampaignPage from './Pages/Campaign/CampaignPage';
import DiscoverPage from './Pages/Discover/DiscoverPage';
import HomePage from './Pages/Home/HomePage';
import ImageUploadTest from './Pages/Tests/ImageUploadTest';

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
          <Route path='/discover' element={
            <DiscoverPage />
          }>
          </Route>
          {/* /dashboard goes through a protected route - only authenticated users can access this URL */}
          <Route path='/dashboard' element={
            <ProtectedRoutes />
          }>
            <Route path='/dashboard' element={
              <Dashboard />
            }>
            </Route>
          </Route>
          <Route path='/campaigns/campaign/:campaignId' element={
            <CampaignPage />
          }>
          </Route>
          <Route path='/test' element={
            // Test Component here...
            <ImageUploadTest />
          }>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
