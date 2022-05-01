import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import warehouse from '../../../../Images/warehouse.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='fs-5 fw-bold '>
            <Navbar className='fixed-top mb-3' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'><img className='rounded mt-' style={{ height: 45 }} src={warehouse} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;