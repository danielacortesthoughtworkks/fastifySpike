import helloHandler from '../handler/helloHandler';
import helloSchema from '../schema/helloSchema';

export default async function(fastify) {

  fastify.route({
    method: 'GET',
      url: '/hello',
      schema: helloSchema,
      handler: helloHandler
  });
};
