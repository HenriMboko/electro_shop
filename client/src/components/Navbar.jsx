import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {useSelector} from 'react-redux'


const NavBarHeader = () => {

const {CardTotalQuantity} = useSelector((state)=>state.Card)


  return (
    <header>
         <Navbar bg="dark" variant='dark'  expand='lg' collapseOnSelect  >
      <Container>
        <Navbar.Brand href="/">ELECTRO SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-content">
            <Nav.Link href="/card" >
            <div className='nav-bag'>
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-handbag-fill" viewBox="0 0 16 16">
      <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"/>
      </svg>

      <span className="bag-quantify">
        <span>{CardTotalQuantity}</span>
      </span>
      </div>
            </Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default NavBarHeader