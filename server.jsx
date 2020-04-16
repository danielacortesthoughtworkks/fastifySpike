
import helloRoute from './src/route/helloRoute'

const fastify = require('fastify')({
  logger: true
})

const start = async () => {
  try {
      fastify.register(helloRoute)
      await fastify.listen(3000)
      fastify.log.info(`Server listening on ${fastify.server.address().port}`)
  } catch (err) {
      fastify.log.error(err)
      process.exit(1)
  }
}

start()
