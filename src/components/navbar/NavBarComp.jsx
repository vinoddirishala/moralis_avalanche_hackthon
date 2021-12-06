import React,{Component} from 'react';
import { Button,Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default class NavBarComp extends Component{
    render(){
        return(
            <>
                    <Navbar bg="light" sticky="top">
                        <Container fluid>

                        <Navbar.Brand>
                             Moralis Avalanche Hackathon
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                            <Navbar.Collapse id="basic-navbar-nav">

                               <Nav className="ms-auto">

                                <Nav id="navBarMenuItemsList">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about-us">About Us</Nav.Link>
                                <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                                <Nav.Link href="/faq">Faq</Nav.Link>
                                </Nav>

                                <Nav.Item >
                                    <Button variant="warning" id="nav-connect-wallet-btn">Connect Wallet</Button>
                                </Nav.Item>

                                <Nav.Item >
                                    <NavDropdown title="0x8u********H89Y" id="nav-profile-dropdown">
                                        <NavDropdown.Item>
                                            Profile
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item>
                                            My Tickets
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item>
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav.Item>


                               </Nav>

                                
                               
                                
                            </Navbar.Collapse>

                        </Container>
                        
                    </Navbar>
            </>
        );
    }
}