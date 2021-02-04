import style from './NavBar.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';
import icon from '../../../assets/img/f-logo.png';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function NavBar(props) {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/">
                    <img 
                        alt="Death Star"
                        src={icon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    &nbsp;
                     F-Shop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/catalogue">Catalogue</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                        {/*
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        */}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                    
                    <Nav.Link href="/cart" variant="dark">
                        <FontAwesomeIcon icon={faShoppingCart} style={{color: '#555'}}/>
                    </Nav.Link>
                    
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
       
    );
}

export default NavBar;