import { GraphQLServer } from 'graphql-yoga'
import { schema } from './schema'
import { prisma } from './generated/prisma-client'
import NoIntrospection from 'graphql-disable-introspection'
import { middlewares } from './middleware'
const isDevelopment = process.env.ENV === 'development'

const server = new GraphQLServer({
  schema,
  context: req => {
    const context = {
      ...req,
      prisma,
    }
    return context
  },
  middlewares
})

const playground = isDevelopment ? true : false

const options = {
  port: 4000,
  playground,
  bodyParserOptions: { limit: '10mb', type: 'application/json' },
  validationRules: isDevelopment ? [] : [NoIntrospection],
}

server.express.get('health_check', (req, res) => {
  res.send('ok')
})

server.start(options, () => {
  console.log('Server is running on http://localhost:4000')
})