const errorHandleHttp = (res, errorMessage)=> {
    res.status(500).send({error: errorMessage})
}

export { errorHandleHttp }