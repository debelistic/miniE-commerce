import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import { Home, Cart } from "./pages"
// import { Container } from "react-bootstrap"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/signup" exact component={Home} />
        <Route path="/signin" exact component={Home} />
        <Route path="/logout" exact component={Home} />
      </Switch>
    </Router>
  )
}

export default App
