import { makePrismaSchema } from 'nexus-prisma'
import { join } from 'path'
import { resolver } from './resolver'
import datamodelInfo from './generated/nexus-prisma'
import { prisma } from './generated/prisma-client'

export const schema = makePrismaSchema({
  types: resolver,

  prisma: {
    datamodelInfo,
    client: prisma,
  },

  outputs: {
    typegen: join(__dirname, './generated/nexus-typegen.ts'),
    schema: join(__dirname, './generated/schema.graphql'),
  },
})

