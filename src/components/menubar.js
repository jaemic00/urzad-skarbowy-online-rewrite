import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
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
            <Nav.Link  className="NavLink"><Link className="NavLink" to='/program-pit'>Program PIT</Link></Nav.Link>
            <Nav.Link className="NavLink" ><Link className="NavLink" to='/rozliczenie-pit'>Rozliczenie PIT</Link></Nav.Link>
            <Nav.Link className="NavLink" ><Link className="NavLink" to='/urzad-skarbowy-online'>Urząd Skarbowy Online</Link></Nav.Link>
            <Nav.Link className="NavLink" ><Link className="NavLink" to='/e-deklaracje'>e-Deklaracje</Link></Nav.Link>
            <Nav.Link className="NavLink" ><Link className="NavLink" to='/e-pity'>e-PITy</Link></Nav.Link>
            <Nav.Link className="NavLink" ><Link className="NavLink" to='/pit-online'>PIT Online</Link></Nav.Link>
            <Nav.Link className="NavLink" ><Link className="NavLink" to='/pit-28'>PIT-28</Link></Nav.Link>
            <Nav.Link className="NavLink" ><Link className="NavLink" to='/pit-36'>PIT-36</Link></Nav.Link>
            <Nav.Link className="NavLink" ><Link className="NavLink" to='/pit-36l'>PIT-36L</Link></Nav.Link>
            <Nav.Link className="NavLink" ><Link className="NavLink" to='/pit-37'>PIT-37</Link></Nav.Link>
            <Nav.Link className="NavLink" ><Link className="NavLink" to='/pit-38'>PIT-38</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Menubar