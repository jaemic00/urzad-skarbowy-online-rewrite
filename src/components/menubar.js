import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"
import '../css/menubar.css'

const Menubar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="none" variant="light">
        <Navbar.Brand href="https://pitax.pl/online/?krs=0000435915">
          <StaticImage 
            src="../images/navbar_e_deklaracje.png" 
            alt="eDeklaracje zapewnia Ministerstwo Finansów"
            height={40} />
        </Navbar.Brand>
        <Navbar.Toggle className="NavbarToggle" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="NavbarCollapse" id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="NavLink" href="#home">Program PIT</Nav.Link>
            <Nav.Link className="NavLink" href="#link">Rozliczenie PIT</Nav.Link>
            <Nav.Link className="NavLink" href="#link">Urząd Skarbowy Online</Nav.Link>
            <Nav.Link className="NavLink" href="#link">e-Deklaracje</Nav.Link>
            <Nav.Link className="NavLink" href="#link">e-PITy</Nav.Link>
            <Nav.Link className="NavLink" href="#link">PIT Online</Nav.Link>
            <Nav.Link className="NavLink" href="#link">PIT-28</Nav.Link>
            <Nav.Link className="NavLink" href="#link">PIT-36</Nav.Link>
            <Nav.Link className="NavLink" href="#link">PIT-36L</Nav.Link>
            <Nav.Link className="NavLink" href="#link">PIT-37</Nav.Link>
            <Nav.Link className="NavLink" href="#link">PIT-38</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Menubar