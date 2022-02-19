import { prismaObjectType } from "nexus-prisma";
import { defaultDefinition } from "./default";

const prismaMutation = prismaObjectType({
    name: 'Mutation',
    definition: t => {
        t.prismaFields([
            'createUser'
        ])
    }
})

export const Mutation = [
    prismaMutation,
    defaultDefinition
]