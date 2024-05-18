import { FastifyInstance } from 'fastify'
import { MemberProfile } from './templates/member-profile.js';
import * as React from 'react';

export function routes(fastify: FastifyInstance) {

  // Declare a route
  fastify.get('/', async () => {
    return { hello: 'world' }
  })

  fastify.get<{
    Params: { name : string }
  }>('/~:name', request => <MemberProfile name={request.params.name} />);

}
