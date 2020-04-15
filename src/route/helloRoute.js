const { helloHandler } = require('../handler/helloHandler')
const { helloSchema } = require('../schema/helloSchema')
  
  // Declare a route
  module.exports = async function (fastify) {
    fastify.route({
        method: 'GET',
        url: '/hello',
        schema: helloSchema,
        handler: helloHandler,
    })
}