import React from "react"
import { Navbar, Form, FormControl, Nav } from "react-bootstrap"

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Shop Now</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        {/* <Button variant="outline-success">Search</Button> */}
      </Form>
      <Navbar.Collapse id="basic-navbar-nav" className="float-right">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Supplier</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
