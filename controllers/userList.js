import makeDbReq from '../db/index.js'

/**
 * get all users
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const getAllUsers = (req, res, next) => {
    const {
        from,
        recordsPerPage,
        sortBy,
        sortOrder,
        filters
    } = req.query

    for (let i in filters) {
        if (filters[i] == '') filters[i] = null
    }
    
    makeDbReq(`users_get(?, ?, ?, ?, ?, ?)`, [
        req.userId,
        from, 
        recordsPerPage,
        sortBy,
        sortOrder,
        filters
    ])
    .then((users) => {
        const resKey = 'usersList'
        const resData = users

        if (typeof req?.logs == "object") {
            req.logs.push({resKey, resData})
        }
        else {
            req.logs = [{resKey, resData}]
        }
        next()
    })
    .catch((err) => {
        res.send(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            6,     //activityId
            15,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
} 

export default getAllUsers