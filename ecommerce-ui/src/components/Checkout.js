import React, { useState } from "react"
import { PaystackButton } from "react-paystack"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { resetCart } from "../utils/reducer"

import "./App.css"

const App = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const publicKey = "pk_test_84eeb368c319c8a29e62e58955d222ca81ace75f"
  const amount = `${useSelector((state) => state.total)}00`
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      dispatch(resetCart())
      history.push("/")
    },
    onClose: () => alert("Wait! Don't leave :("),
  }
  return (
    <div className="App">
      <div className="pay-container">
        <div className="item">
          <div className="overlay-effect">
            <img
              className="item-image"
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="product"
            />
          </div>

          <div className="item-details">
            <p className="item-details__title">Shop Now</p>
            <p className="item-details__amount">NGN {amount / 100}.00</p>
          </div>
        </div>
        <div className="checkout">
          <div className="checkout-form">
            <div className="checkout-field">
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
