const { helloSchema } = require('../../schema/helloSchema')
const { helloHandler } = require('../../handler/helloHandler')
const helloRoute = require('../../route/helloRoute')

jest.mock('../../handler/helloHandler')

const fastifyMock = {
    route: jest.fn(),
}

test('Should get message', async () => {
    await helloRoute(fastifyMock)

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
                            description: { type: 'string' },
                        },
                    },
                },
            },
        },
        handler: helloHandler,
    })
})
