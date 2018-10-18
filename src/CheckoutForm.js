import React, { Component } from "react"
import { CardElement, injectStripe } from "react-stripe-elements"

const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: "18px",
        color: "#424770",
        letterSpacing: "0.025em",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#9e2146"
      }
    }
  }
}

class CheckoutForm extends Component {
  state = { amount: 100 }

  submit = async e => {
    e.preventDefault()

    let { token } = await this.props.stripe.createToken({ name: "John" })
    let res = await fetch("/.netlify/functions/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        token: token.id,
        amount: this.state.amount
      })
    })

    if (res.ok) {
      console.log("Purchase complete")
      console.log(res)
    }
  }

  handleChange = e => {
    const { name, type, value } = e.target
    const val = type === "number" ? parseFloat(value) : value
    this.setState({
      [name]: val
    })
  }

  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <input
          type="number"
          name="amount"
          value={this.state.amount}
          onChange={this.handleChange}
        />
        <CardElement {...createOptions()} />
        <button onClick={this.submit}>Send</button>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)
