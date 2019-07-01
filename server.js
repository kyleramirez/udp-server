const PORT = 33333
const dgram = require("dgram")

const server = dgram.createSocket("udp4")
server.on("listening", function() {
  const { address, port } = server.address()
  console.log(`UDP Server listening on ${address}:${port}`)
})

server.on("message", function(message, { address, port }) {
  console.log(`${message}`)
})

server.bind(PORT)
