import { prismaObjectType } from "nexus-prisma";
import { defaultDefinition } from "./default";

const prismaQuery = prismaObjectType({
    name: 'Query',
    definition: t => {
        t.prismaFields(['users'])
    }
})

export const Query = [
    prismaQuery,
    defaultDefinition
]