import makeDbReq from "../db/index.js"

/**
 * get user_activities for `activity` screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const usersActivities = (req, res, next) => {

    makeDbReq(`user_activities(?, ?, ?)`,[
        req.userId,
        req.query.from, 
        req.query.recordsPerPage
    ])
    .then((activities) => {
        const resKey = 'activityList'
        
        if (typeof req?.logs == "object") {
            req.logs.push({resKey, resData: activities})
        }
        else {
            req.logs = [{resKey, resData: activities}]
        }
        next()
    })
    .catch((err) => {
        res.send(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            12,     //activityId
            14,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch(err => console.log(err))
    })
}

export default usersActivities