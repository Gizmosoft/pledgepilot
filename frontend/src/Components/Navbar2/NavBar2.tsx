import  { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import './NavBar2.css';

const logo_nav=require('../../assets/logo.png')

const NavBar2: FC = () => {
  return (
    <Navbar expand="lg" className="navbar-container">
      <Container>
        <Nav.Link href="#discover" className='navbar-text'>Discover</Nav.Link>
        <img src={logo_nav} alt='NavBar logo' className='navbar_logo'/>
        <Navbar.Brand href="#home" className='navbar-brand navbar-text'>PledgePilot</Navbar.Brand>
        <Nav className="ms-auto end-links">
            <Nav.Link href="#login" className='navbar-text'>Login/Register</Nav.Link>
        </Nav>
      </Container>
      {/* This mx-auto class in Bootstrap represents margin: auto on both left and right sides, effectively centering the content horizontally within the parent Container. */}
    </Navbar>
  );
}

export default NavBar2;