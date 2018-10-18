exports.handler = (event, ctx, callback) => {
  callback(null, {
    statusCode: 200,
    body: "Hello world!"
  })
}