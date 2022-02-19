
import { mutationField, stringArg } from 'nexus'

const defaultResolver = async (_root, args, ctx) => {
    return {
        defaultType: 'mutation'
    }
}

export const defaultDefinition = mutationField(
    'defaultMutation',
    {
        type: 'Default',
        args: {
            sampleArgs: stringArg({ required: false })
        },
        resolve: defaultResolver,
    }
)
