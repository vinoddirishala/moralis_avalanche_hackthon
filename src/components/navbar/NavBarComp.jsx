import React,{Component} from 'react';
import { Button,Container, Nav, Navbar } from 'react-bootstrap';

export default class NavBarComp extends Component{
    render(){
        return(
            <>
                    <Navbar bg="light">
                        <Container fluid>

                        <Navbar.Brand>
                             Hackathon
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                               
                               <Nav>
                               <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#">About</Nav.Link>
                                <Nav.Link href="#">Contact</Nav.Link>
                                <Nav.Link href="#">Faq</Nav.Link>
                                
                                <Nav.Item className="ml-auto">
                                    <Button variant="warning">Connect Wallet</Button>

                                </Nav.Item>
                               </Nav>
                                
                                
                            </Navbar.Collapse>

                        </Container>
                        
                    </Navbar>
            </>
        );
    }
}