import Fastify from 'Fastify'
import cors from '@fastify/cors'
import { prisma } from './lib/prisma'


const app = Fastify()

app.register(cors)


app.get('/hello', async () => {
    const habits = await prisma.habit.findMany({
        where:{
            tittle:{
                startsWith: 'Beber'
            }
            
        }
    })

    return habits
})


app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running!')
})