const {helloHandler} = require('../helloHandler')
const service = require('../../service/helloService')

jest.mock('../../service/HelloService')
const results = {
  name: "Hola",
  description: "Cómo estas"
}
service.mockReturnValueOnce(results);

const reply = {
    send: jest.fn(),
}

test('should return service value when calling handler', () => {
    helloHandler({}, reply)

    expect(reply.send).toHaveBeenCalledWith({
        name: 'Hola',
        description:
            'Cómo estas',
    })
})
