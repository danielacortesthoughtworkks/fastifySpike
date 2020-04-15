
const helloRoute = require('./src/route/helloRoute')
// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
  })

  // Run the server!
const start = async () => {
    try {
        fastify.register(helloRoute)
        await fastify.listen(3000)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()