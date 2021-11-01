import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
// import { useAuth } from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark " collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">ADMIRIC TOUR & TRAVELS</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#blogs">Our Blogs </Nav.Link>
                        <Nav.Link as={HashLink} to="/home#videos">Videos</Nav.Link>
                        {user?.email ? <Nav.Link as={Link} to="/myorder">My Orders</Nav.Link> : ''}
                        {user?.email ? <Nav.Link as={Link} to="/manageOrder">Manage Orders</Nav.Link> : ''}
                        {user?.email ? <Nav.Link as={Link} to="/addServices">Add Services</Nav.Link> : ''}

                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;