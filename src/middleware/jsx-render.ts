import { onSendHookHandler, preSerializationHookHandler } from 'fastify';
import { isValidElement } from 'react';
import { renderToString } from 'react-dom/server';

/**
 * So fastify hooks are a little dumb. Once we enter the preSerialization hook it already decided the
 * response has to be JSON.
 *
 * So in the preSerialization hook we turn the React component into a string and place it in an object
 * with a ___jsx key.
 *
 * In the onSend hook we unwrap that object and send the plain HTML string
 */

export const preSerialization: preSerializationHookHandler<unknown> = async (_request, reply, payload: unknown) => {

  if (isValidElement(payload)) {
    reply.header('Content-Type', 'text/html');
    return {
      ___jsx: renderToString(payload as any)
    };
  } else {
    return payload;
  }

};
export const onSend: onSendHookHandler<unknown> = async (_request, _reply, payload: unknown) => {

  if (typeof payload==='string' && payload.startsWith('{"___jsx":"')) {
    return JSON.parse(payload).___jsx;
  }
  return payload;

};
