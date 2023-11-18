export const setResponse = (data, response) => {
    response.status(200)
            .json(data)
}

export const setErrorResponse = (error, response) => {
    response.status(500)
            .json({
                code: "ServiceError",
                message: "Error occured while processing your request."
            })
}