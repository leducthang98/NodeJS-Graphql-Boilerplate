
import { extendType } from 'nexus'

const getAllPostResolver = async (parent, args, context) => {
    return [{ id: 1, title: 'Nexus', body: '...', published: false }]
}

export const getAllPostDefinition = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('getAllPost', {
            type: 'Post',
            resolve: getAllPostResolver,
        })
    },
})