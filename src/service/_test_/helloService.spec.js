const  helloService  = require('../helloService')

test('should return frontend developer description when request is okay', () => {
    let result = helloService()
    expect(result).toEqual({
        name: 'Frontend Developer',
        description:
            'Step by step guide to becoming a modern frontend developer',
    })
})
