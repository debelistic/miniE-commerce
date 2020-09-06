import React from "react"
import "./App.css"
import { Container } from "react-bootstrap"
import Header from "./commons/Header"
import Footer from "./commons/Footer"
import Products from "./components/Products"

function App() {
  return (
    <div>
      <Header />
      <Products />
      <Footer />
    </div>
  )
}

export default App
