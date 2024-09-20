import { useState } from 'react';
import './Topbar.css';
import Container from 'react-bootstrap/Container';
import pizza from '../../assets/pizza.jpg';
import { Button, Nav, Navbar, Offcanvas } from 'react-bootstrap';

const Topbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Navbar expand="lg" className="bg-transparent shadow-sm">
        <Container>
          <Navbar.Brand>
            <img src={pizza} alt="logo" style={{ width: '5rem', height: '3rem', objectFit: 'cover' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setShow(true)} />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={() => setShow(false)}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#home" className="text-secondary fw-bold">Home</Nav.Link>
                <Nav.Link href="#about" className="text-secondary fw-bold">About Us</Nav.Link>
                <Nav.Link href="#contact" className="text-secondary fw-bold">Contact</Nav.Link>
                {/* <Nav.Link href="#testimonials" className="text-secondary fw-bold">Testimonials</Nav.Link> */}
                <Nav.Link href="login" className="text-secondary fw-bold text-decoration-none border-0">
                  <Button className="bg_login fw-bold text-decoration-none border-0">Login</Button>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
