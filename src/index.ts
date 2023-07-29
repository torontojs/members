// Import the framework and instantiate it
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

fastify.route<{
  Params: { name : string }
}>({
  method: 'GET',
  url: '/~:name',
  schema: {
    // request needs to have a querystring with a `name` parameter
    params: {
      type: 'object',
      properties: {
          name: { type: 'string'}
      },
      required: ['name'],
    },
  },
  handler: async (request, reply) => {
    reply.header('Content-Type', 'text/html');
    return '<h1>Hi</h1>';
  }
})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

