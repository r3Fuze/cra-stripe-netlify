import React, { Component } from "react"
import { Elements } from "react-stripe-elements"

import CheckoutForm from "./CheckoutForm"
import logo from "./logo.svg"
import "./App.css"

class FunctionDemo extends Component {
  state = { loading: false, msg: null }

  handleClick = e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/hello")
      .then(res => res.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick}>
          {loading ? "Loading..." : "Call function"}
        </button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="checkout">
            <h1>React Stripe Elements Example</h1>
            <Elements>
              <CheckoutForm />
            </Elements>
          </div>

          <FunctionDemo />
        </header>
      </div>
    )
  }
}

export default App
