import React from "react"
import Products from "../components/Products"
import "../App.css"
import Header from "../commons/Header"
import Footer from "../commons/Footer"

export default function Home() {
  return (
    <div>
      <Header />
      <div className=" container-fluid min-vh-85">
        <Products />
      </div>
      <Footer />
    </div>
  )
}
