import React from 'react';
// import logo from './logo.svg';
import './HomePage.css';
import { Button } from 'react-bootstrap';
import Header from '../../Components/Navbar2/NavBar2';
import Search from '../../Components/SearchBar/SearchBar';
import Footer from '../../Components/Footer/Footer';
import Stats from '../../Components/Stats/Stats';
import { Link } from 'react-router-dom'
// import Test from './components/Test';

function HomePage() {
  return (
    <div className="HomePage">
      {/* NavBar */}
      {/* <Header /> */}
      {/* Search Bar */}
      <Stats/>
      <Link to='/login'>
        <Button variant="warning" className='dive_button'>Dive into PledgePilot</Button>{' '}
      </Link>
        {/* <Stats /> */}
        {/* <Search /> */}
      
      <Footer />

    </div>
  );
}

export default HomePage;
