import React, { useState, useEffect } from "react"
import { Navbar, Nav } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const products = [
  {
    id: 1,
    name: "tooth past",
    quantity: 3,
    price: 12,
    imageUrl: "http://dummyimage.com/218x159.png/5fa2dd/ffffff",
    supplier: "mac and cheese",
  },
  {
    id: 2,
    name: "brush",
    quantity: 3,
    price: 120,
    imageUrl: "http://dummyimage.com/218x159.png/5fa2dd/ffffff",
    supplier: "time and now",
  },
  {
    id: 3,
    name: "lg tv",
    quantity: 3,
    price: 123,
    imageUrl: "http://dummyimage.com/218x159.png/5fa2dd/ffffff",
    supplier: "favour stores",
  },
  {
    id: 4,
    name: "scan frost deep freez",
    quantity: 3,
    price: 132,
    imageUrl: "http://dummyimage.com/218x159.png/5fa2dd/ffffff",
    supplier: "scan frost",
  },
  {
    id: 5,
    name: "scan frost deep freez",
    quantity: 3,
    price: 134,
    imageUrl: "http://dummyimage.com/218x159.png/5fa2dd/ffffff",
    supplier: "scan frost",
  },
]

const searchLsStyleLi = {
  color: "#fff",
}

export default function Header() {
  const cart = useSelector((state) => state.cart)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const [searchTouch, setSearchTouch] = useState(false)
  const searchResultsStyles = searchTouch
    ? {
        display: "block",
        position: "absolute",
        zIndex: 1,
        backgroundColor: "rgba(0,0,0,.6)",
        listStyle: "none",
        padding: 10,
      }
    : {
        display: "none",
      }

  const handleChange = (event) => {
    if (event.target.value.length >= 1) {
      setSearchTerm(event.target.value)
      setSearchTouch(true)
    } else {
      setSearchTouch(false)
      setSearchTerm("")
    }
  }

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm])
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <Link to="/">Shope Now</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <Form inline> */}

      <div style={{ position: "relative" }}>
        <input
          value={searchTerm}
          onChange={handleChange}
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
        {/* <Button variant="outline-success">Search</Button> */}
        <ul style={searchResultsStyles}>
          {searchResults.length === 0 ? (
            <li style={searchLsStyleLi}>product not found</li>
          ) : null}

          {searchResults.map((item) => (
            <li style={searchLsStyleLi} key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      {/* </Form> */}
      <Link to="/cart">
        <button type="submit">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-cart"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
            />
          </svg>
          <span>cart {cart.length}</span>
        </button>
      </Link>

      <Navbar.Collapse id="basic-navbar-nav" className="float-right">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Supplier</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
