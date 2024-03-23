import React from 'react'
import { Navbar,NavbarOffcanvas, NavbarBrand, Button, Nav, OffcanvasHeader, OffcanvasTitle, OffcanvasBody, Container } from 'react-bootstrap';
import { Person } from 'react-bootstrap-icons';
import '../styles/header.css';

const Header = () => {
  return (
    <div>
      <Container>
      <Navbar className='bg'style={{display:"flex",alignItems:"center"}} expand='md'>
      <NavbarBrand className='h1' style={{fontSize:"3rem"}}>Electro</NavbarBrand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <NavbarOffcanvas>
        <OffcanvasHeader closeButton> 
            <OffcanvasTitle >Electro</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
        <Nav className='justify-content-center flex-grow-1 ' style={{fontSize:"1.5rem", width:"70%" ,gap:"1rem"}}>
          <Nav.Link to='/home' >Home</Nav.Link>
          <br/>
          <Nav.Link to='/mobiles' >Mobiles</Nav.Link>
          <br/>
          <Nav.Link to='/laptops' >Laptops</Nav.Link>
          <br/>
          <Nav.Link to='/headsets' >Headsets</Nav.Link>
          <br/>
          
    
        </Nav>
        <Button style={{backgroundColor: "rgb(244, 29, 29)", border:"none", height:"40px"}}>
          <Person /> Login
        </Button>
        </OffcanvasBody>
      </NavbarOffcanvas>
        
       
    </Navbar>
      </Container>
    </div>
  )
}

export default Header
