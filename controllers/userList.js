import makeDbReq from '../db/index.js'

/**
 * get all users
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const getAllUsers = (req, res, next) => {

    makeDbReq(`users_get(?, ?, ?)`, [
        req.userId,
        req.query.from, 
        req.query.recordsPerPage
    ])
    .then((users) => {
        const resKey = 'usersList'
        const resData = users

        if (typeof req?.logs == "Object") {
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