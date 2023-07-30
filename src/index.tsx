import Fastify from 'fastify'
import * as jsxRender from './middleware/jsx-render.js';
import * as React from 'react';

const fastify = Fastify({
  logger: true
})

fastify.addHook('preSerialization', jsxRender.preSerialization);
fastify.addHook('onSend', jsxRender.onSend);

// Declare a route
fastify.get('/', async () => {
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
  handler: async () => {
    return <h1>Hi</h1>;
  }
})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

