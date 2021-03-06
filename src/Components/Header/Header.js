import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (        
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
               <Link to="/">
               <Navbar.Brand href="">
                    GHURI LOGO                                    
                </Navbar.Brand>
               </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Homepage</Nav.Link>
                        <Nav.Link href="#link">All Shoes</Nav.Link>
                        <Nav.Link href="#link">Brands</Nav.Link>
                        <Nav.Link href="#link">Campaigns</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Header;