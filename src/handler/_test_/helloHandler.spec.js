import helloHandler from '../helloHandler';
import serviceMock from '../../service/helloService';

jest.mock('../../service/helloService');

const serviceResult = {
  name: 'Hello!',
  description: 'How are you doing?'
};

serviceMock.mockReturnValueOnce(serviceResult);

const handlerReply = {
    send: jest.fn(),
};

test('Should return greetings when calling handler', () => {

    helloHandler({}, handlerReply);

    expect(handlerReply.send).toHaveBeenCalledWith({
        name: 'Hello!',
        description: 'How are you doing?'
    });
});
