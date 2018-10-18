const obj = {
  foo: "bar"
}

exports.handler = (event, ctx, callback) => {
  // console.log(event)
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello world!", ...obj })
  })
}
