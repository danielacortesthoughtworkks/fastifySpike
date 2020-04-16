const helloService = require('../service/helloService')

const helloHandler = function (request, reply) {
    reply.send(
      helloService()
    )
}
module.exports = {
    helloHandler
}
