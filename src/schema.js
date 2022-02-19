import  {makePrismaSchema}  from 'nexus-prisma'
import { join } from 'path'
import { resolver } from './resolver'

export const schema = makePrismaSchema({
  types: resolver,
  outputs: {
    typegen: join(__dirname, './generated/nexus-typegen.ts'),
    schema: join(__dirname, './generated/schema.graphql'),
  },
})