
export const rolePermitted = (roles) => {
    return async (resolve, root, args, ctx, info) => {
        let isAuthorized = true
        if (isAuthorized) {
            return await resolve(root, args, ctx, info)
        } else {
            throw new Error('NOT_PERMITTED')
        }
    }
}

// config permission for apis
export const permission = {
    Query: {
        users: rolePermitted(['ADMIN']),
    },
    Mutation: {
        createUser: rolePermitted(['ADMIN']),
    }
}
