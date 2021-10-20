import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth'



const NavBar = () => {
  const { user, signOutt } = useAuth()
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Labaid Hospital</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 font-size-40px text-light"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="text-light" as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/services">Services</Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/appoinment">Apponment</Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/more">More</Nav.Link>
            <h6>{user?.displayName || 'empty user'}</h6>
            <img style={{ height: '40px', width: '40px', borderRadius: '30px' }} src={user.photoURL || 'Broken img'} alt="" />
            {
              user.email ? <Nav.Link className="text-light" as={Link} onClick={signOutt} to="/log">Log out</Nav.Link> : <Nav.Link as={Link} to="/log">Log in</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;