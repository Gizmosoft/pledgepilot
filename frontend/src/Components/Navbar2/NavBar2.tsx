import  { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import './NavBar2.css';

const NavBar2: FC = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav.Link href="#discover">Discover</Nav.Link>
        <Navbar.Brand href="#home" className='navbar-brand'>PledgePilot</Navbar.Brand>
        <Nav className="ms-auto end-links">
            <Nav.Link href="#login">Login</Nav.Link>
        </Nav>
      </Container>
      {/* This mx-auto class in Bootstrap represents margin: auto on both left and right sides, effectively centering the content horizontally within the parent Container. */}
    </Navbar>
  );
}

export default NavBar2;