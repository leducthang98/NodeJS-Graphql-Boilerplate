
const authMiddleware = async (resolve, root, args, ctx, info) => {
    let isAuthenticated = true
    if (isAuthenticated) {
        ctx.userId = '123'
        return await resolve(root, args, ctx, info)
    } else {
        throw new Error('UNAUTHORIZED')
    }
}

// auth apis go here
export const auth = {
    Query: {
        users: authMiddleware,
        defaultQuery: authMiddleware
    },
    Mutation: {
        createUser: authMiddleware,
        defaultMutation: authMiddleware,
    }
}