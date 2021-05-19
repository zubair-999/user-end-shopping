import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../../assets/logo/ebazzar.jpg'
import SearchBox from "../SearchBox/SearchBox";
import {Route} from "react-router-dom";
import {ShoppingCartOutlined } from '@ant-design/icons'


const Header = () => {
    return (
        <header className="fixed-top">
            <Navbar bg="white" variant='dark' collapseOnSelect expand="lg" className='pt-2' >
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand> <img src={Logo} height='40px' /></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Route render={({history}) => <SearchBox history={history}/>}/>
                        <Nav className="ml-auto">
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <ShoppingCartOutlined style={{ fontSize: '25px', color: 'black' }}/>
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
