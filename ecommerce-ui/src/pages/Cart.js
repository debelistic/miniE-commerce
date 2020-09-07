import React from "react"
import { useSelector } from "react-redux"
import Header from "../commons/Header"
import Footer from "../commons/Footer"
import "../App.css"

const usStl = {
  listStyle: "none",
  padding: 10,
}

export default function Cart() {
  const cart = useSelector((state) => state.cart)
  const mp = new Map(cart.map((o) => [o.id, { ...o, count: 0 }]))
  for (const { id } of cart) mp.get(id).count++
  const result = Array.from(mp.values())

  return (
    <div>
      <Header />
      <div className=" container-fluid min-vh-85">
        <ul style={usStl}>
        {result.map((item) => (
          <li key={item.id}>

            {item.name} {item.count}
            <p>{item.count * item.price}</p>
          </li>
        ))}
        </ul>
        
      </div>
      <Footer />
    </div>
  )
}
