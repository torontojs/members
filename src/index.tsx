import Fastify from 'fastify'
import * as jsxRender from './middleware/jsx-render.js';
import { routes } from './routes.js';
import fastifyStatic from '@fastify/static';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const fastify = Fastify({
  logger: true
})

// These 2 hooks allow us to render React/jsx tags straight to HTML
fastify.addHook('preSerialization', jsxRender.preSerialization);
fastify.addHook('onSend', jsxRender.onSend);

// Static assets
fastify.register(fastifyStatic, {
  root: join(fileURLToPath(import.meta.url), '../../assets'),
  prefix: '/assets',
});

// Register routes
routes(fastify);

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

