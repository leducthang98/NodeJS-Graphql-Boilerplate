import { makeSchema } from 'nexus'
import { join } from 'path'
import { resolver } from './resolver'
export const schema = makeSchema({
  types: resolver,
  outputs: {
    typegen: join(__dirname, './generated/nexus-typegen.ts'),
    schema: join(__dirname, './generated/schema.graphql'),
  },
})