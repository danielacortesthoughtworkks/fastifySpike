import helloService from '../service/helloService'

export default function(request, reply) {

  let result = helloService()

  reply.send(result)
}
