
import { extendType } from 'nexus'

const defaultResolver = (_root, args, ctx) => {
    return {
        defaultType: 'query'
    }
}

export const defaultDefinition = extendType({
    type: 'Query',
    definition: t => {
        t.field('defaultQuery', {
            type: 'Default',
            resolve: defaultResolver
        })
    },
})