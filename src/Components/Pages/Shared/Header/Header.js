import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import warehouse from '../../../../Images/warehouse.jpg'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);

    }

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

                            {
                                user ?
                                    <Nav.Link as={Link} to='/manageitem'>ManageItem</Nav.Link>
                                    :
                                    <p></p>
                            }
                            {
                                user ?
                                    <Nav.Link as={Link} to='/additem'>AddItem</Nav.Link>
                                    :
                                    <p></p>
                            }

                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <Nav.Link as={Link} to='/showallproducts'>MyItems</Nav.Link>
                                    :
                                    <p></p>
                            }
                            {
                                user ?
                                    <Nav.Link onClick={handleSignOut} >Sign Out</Nav.Link>
                                    :
                                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;