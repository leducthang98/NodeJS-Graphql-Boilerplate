
const handler = async (resolve, root, args, ctx, info) => {
    let isAuthenicated = true
    if (isAuthenicated) {
        ctx.userId = '123'
        return await resolve(root, args, ctx, info)
    } else {
        throw new Error('auth error')
    }
}
export const authenticateMiddleware = {
    Query: {
        users: handler,
        defaultQuery: handler
    },
    Mutation: {
        createUser: handler,
        defaultMutation: handler,
    }
}