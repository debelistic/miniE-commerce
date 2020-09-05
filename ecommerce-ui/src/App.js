import React from "react"
import "./App.css"
import { Container } from "react-bootstrap"
import Header from "./commons/Header"
import Products from "./components/Products"

function App() {
  return (
    <Container>
      <Header />
      <Products />
    </Container>
  )
}

export default App
