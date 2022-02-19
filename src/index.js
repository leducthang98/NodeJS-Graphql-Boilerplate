import { GraphQLServer } from 'graphql-yoga'
import { schema } from './schema'
import { prisma } from './generated/prisma-client'
import NoIntrospection from 'graphql-disable-introspection'
import { middlewares } from './middleware'
import { PORT } from './constant/common'

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
  port: PORT,
  playground,
  bodyParserOptions: { limit: '10mb', type: 'application/json' },
  endpoint: '/graphql',
  validationRules: isDevelopment ? [] : [NoIntrospection],
}

server.express.get('/rest', (req, res) => {
  res.send('routes for REST-API')
})

server.start(options, () => {
  console.log('🚀 GraphQL Server is running on http://localhost:4000/graphql')
  console.log('🎯 REST-API Server is running on http://localhost:4000/rest')
})