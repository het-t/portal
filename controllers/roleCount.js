import makeDbReq from '../db/index.js'

/**
 * get number of roles
 * @param {*} req 
 * @param {*} res 
 */

const rolesCount = (req, res, next) => {

    makeDbReq(`roles_count(?)`, [req.userId])
    .then((results) => {
        const resKey = 'count'
        const resData = results[0].count
        if (typeof req?.logs == "object") {
            req.logs.push({resKey, resData})
        }
        else {
            req.logs = [{resKey, resData}]
        }
        next()
    })
    .catch(err => {
        res.send(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            23,     //activityId
            8,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default rolesCount