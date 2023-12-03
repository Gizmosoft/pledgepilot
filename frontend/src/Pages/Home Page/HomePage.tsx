import React from 'react';
// import logo from './logo.svg';
import './HomePage.css';
// import { Button } from 'react-bootstrap';
import Header from '../../Components/Navbar2/NavBar';
import Search from '../../Components/SearchBar/SearchBar';
import Footer from '../../Components/Footer/Footer';
import Stats from '../../Components/Stats/Stats';
// import Test from './components/Test';

function HomePage() {
  return (
    <div className="App">
      {/* NavBar */}
      <Header />
      {/* Search Bar */}
      {/* <Stats/> */}
        <Stats />
        <Search />
      {/* Footer */}
      <Footer />

    </div>
  );
}

export default HomePage;
