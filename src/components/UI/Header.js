import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../../assets/logo/e-bazzz.png'
import SearchBox from "../SearchBox/SearchBox";
import {Route} from "react-router-dom";
import HeaderCart from "../HeaderCart/HeaderCart";
import Men from '../../assets/logo/men.png'
import Women from '../../assets/logo/female.png'
import Baby from '../../assets/logo/couple.jpg'


const Header = () => {
    return (

        <header >
            <Navbar  variant='light' collapseOnSelect expand="lg" className='pt-1 pb-0' >
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand> <img src={Logo} height='30px' /></Navbar.Brand>
                    </LinkContainer>
                        <LinkContainer to='/cart' >
                            <Nav.Link>
                                <HeaderCart/>
                            </Nav.Link>
                        </LinkContainer>
                    {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
                    {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                    {/*</Navbar.Collapse>*/}
                </Container>
            </Navbar>
            <Navbar variant='light'  collapseOnSelect expand="lg" className='pt-1 pb-1'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ml-auto mr-auto'>
                            <LinkContainer to='/clothing'>
                                <Nav.Link>
                                    <img src={Men} height='30px'/>
                                    <span style={{fontSize:'15px'}}>Men's Clothing</span>
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/baby'>
                                <Nav.Link>
                                    <img src={Women} height='30px'/>
                                    <span style={{fontSize:'15px'}}>Women's Garments</span>
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/clothing'>
                                <Nav.Link>
                                    <img src={Baby} height='30px'/>
                                    <span style={{fontSize:'15px'}}>Kid's Garments</span>
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;
