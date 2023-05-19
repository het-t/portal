import makeDbReq from '../db/index.js'

/**
 * get number of records in `user_activities` table
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const usersActivityCount = (req, res, next) => {
 
    makeDbReq(`user_activities_count(?)`, [req.userId])
    .then((results) => {
        const resData = results[0].count
        const resKey = 'count'

        if (typeof req?.logs == "object") {
            req.logs.push({resData, resKey})
        }
        else {
            req.logs = [{resData, resKey}]
        }
        next()
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            23,     //activityId
            14,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default usersActivityCount