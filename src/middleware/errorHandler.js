import { errorMap } from '../constant/Error'

export const errorHandler = (error) => {
    const errorObj = findErrorObject(error.message)
    let errorResponse = {
        ...errorObj,
    }
    process.env.ENV === 'development' ? errorResponse.debug = error : null
    return errorResponse
}

const findErrorObject = (errorMessage) => {
    for (const e in errorMap) {
        if (e === errorMessage) {
            return errorMap[e]
        }
    }
    return errorMap.UNKNOWN_ERROR
}