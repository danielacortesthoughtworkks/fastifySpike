const helloHandler = function (request, reply) {
    reply.send({
        name: 'Frontend Developer',
        description:
            'Step by step guide to becoming a modern frontend developer',
    })
}
module.exports = {
    helloHandler
}