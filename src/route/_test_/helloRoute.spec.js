import helloHandler from '../../handler/helloHandler';
import helloRoute from '../helloRoute';

jest.mock('../../handler/helloHandler');

const fastifyMock = {
    route: jest.fn()
};

test('Should return message with specific contract', async () => {

    await helloRoute(fastifyMock);

    expect(fastifyMock.route).toHaveBeenCalledWith({
        method: 'GET',
        url: '/hello',
        schema: {
            schema: {
                response: {
                    200: {
                        type: 'object',
                        properties: {
                            name: { type: 'string' },
                            description: { type: 'string' }
                        }
                    }
                }
            }
        },
        handler: helloHandler
    });
});
