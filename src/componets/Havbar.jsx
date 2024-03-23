import React from 'react';
import { Navbar, NavbarBrand, Button, Nav } from 'react-bootstrap';
import { Person } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const Havbar = () => {
  return (
    <Navbar bg='info' expand='md'>
      <NavbarBrand>Electro</NavbarBrand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavLink to='/home' className='nav-link'>Home</NavLink>
          <NavLink to='/mobiles' className='nav-link'>Mobiles</NavLink>
          <NavLink to='/laptops' className='nav-link'>Laptops</NavLink>
          <NavLink to='/headsets' className='nav-link'>Headsets</NavLink>
        </Nav>
        <Button className='bg-danger'>
          <Person /> Login
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Havbar;
