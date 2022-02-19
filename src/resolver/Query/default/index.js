
import { extendType } from 'nexus'

export const defaultDefinition = extendType({
    type: 'Query',
    definition: t => {
        t.field('default', {
            type: 'Default',
            resolve: (_root, args, ctx) => {
                return {
                    healthCheck: 'ok'
                }
            },
        })
    },
})