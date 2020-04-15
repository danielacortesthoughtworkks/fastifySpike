const helloSchema = {
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
}

module.exports = {
    helloSchema
}