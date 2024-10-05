import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" expand="lg">
    <Navbar.Brand href="#" className="mx-3">Unravel WebApp Challenge
      
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto d-flex justify-content-center">
        <Nav.Link href="#home" className="mx-3">Home</Nav.Link>
        <Nav.Link href="#about" className="mx-3">About Us</Nav.Link>
        <Nav.Link href="#rooms" className="mx-3">Room Listings</Nav.Link>
        <Nav.Link href="#featured" className="mx-3">Featured Rooms</Nav.Link>
        <Nav.Link href="#contact" className="mx-3">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Header;