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
import CreateCampaign from './Pages/CreateCampaign/CreateCampaign';
import BlogPage from './Pages/Blog/CreateBlog';
import CreateBlog from './Pages/Blog/CreateBlog';
import { UserProfile } from './Pages/UserProfile/UserProfile';
import About from './Pages/About/About';
import Rewards from './Pages/Rewards/Rewards';
import BlogDashboard from './Pages/BlogDashboard/BlogDashboard';

function App() {
  return (
    <div className='App'>
   
      
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
          <Route path='/dashboard' element={
            <ProtectedRoutes />
          }>
            <Route path='/dashboard' element={
              <Dashboard />
            }>
            </Route>
          </Route>
          <Route path='/profile' element={
            <ProtectedRoutes />
          }>
            <Route path='/profile' element={
              <UserProfile />
            }>
            </Route>
          </Route>
          <Route path='/campaigns/campaign/:campaignId' element={
            <CampaignPage />
          }>
          </Route>
          <Route path= '/create/:campaignId' element={
            <CreateCampaign/>
          }></Route>
          <Route path= '/create' element={
            <CreateCampaign/>
          }></Route>
          <Route path= '/BlogDashboard/:campaignId' element={
            <BlogDashboard/>
          }></Route>
          <Route path= '/AddBlog/:campaignId' element={
            <CreateBlog/>
          }></Route>
          <Route path= '/about' element={
            <About/>
          }></Route>
          <Route path= '/rewards' element={
            <Rewards/>
          }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
