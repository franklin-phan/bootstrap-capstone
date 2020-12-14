import React from 'react'
import './bootstrap.min.css'

import { Navbar,Nav} from 'react-bootstrap';

function NavBar() {
    return (
      <div className="Navbar">
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Tricksters</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#channels">Channels</Nav.Link>
                <Nav.Link href="#roles">Roles</Nav.Link>
                <Nav.Link href="#photos">Photos</Nav.Link>
                <Nav.Link href="#join">Join Now</Nav.Link>
            </Nav>
            
        </Navbar>
      </div>
    )
  }

export default NavBar