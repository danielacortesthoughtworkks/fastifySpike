import helloService from '../helloService'

test('Should return greetins', () => {

  let result = helloService()

  expect(result).toEqual({
    name: 'Hello developer!',
    description: 'This is a step by step guide to becoming a modern fullstack developer with Node'
  })
})
