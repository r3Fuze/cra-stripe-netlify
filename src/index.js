import React from "react"
import ReactDOM from "react-dom"
import { StripeProvider } from "react-stripe-elements"

import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

const WrappedApp = () => {
  return (
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC}>
      <App />
    </StripeProvider>
  )
}

ReactDOM.render(<WrappedApp />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
