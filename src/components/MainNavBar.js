import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainNavBar = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            Matt McPhee
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/projects'>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to='/resume'>
              Resume
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>More deets</Nav.Link>
            <Nav.Link>Nice meme</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNavBar;
