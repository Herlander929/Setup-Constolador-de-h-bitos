import Fastify from 'Fastify'


const app = Fastify()


app.get('/', () => {
    return 'Hello wolrd'
})


app.listen({
    port: 3333,
})