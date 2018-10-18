require("dotenv").config()
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET)

module.exports.handler = (event, _, callback) => {
  const body = JSON.parse(event.body)
  const { token, amount } = body
  const currency = "usd"

  try {
    const charge = stripe.charges.create({
      amount,
      currency,
      description: "Stripe Test charge",
      source: token
    })

    callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        message: "Charge processed succesfully!",
        charge
      })
    })
  } catch (err) {
    callback(null, {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        error: err.message
      })
    })
  }
}
