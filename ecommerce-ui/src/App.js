import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import { Home, Cart, Checkout, Login } from "./pages"
// import { Container } from "react-bootstrap"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/signup" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Home} />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>
    </Router>
  )
}

export default App
