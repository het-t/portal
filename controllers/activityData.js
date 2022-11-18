import makeDbReq from "../db/index.js"

/**
 * get user_activities for `activity` screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const usersActivities = (req, res, next) => {
    let logObj = {
        "activityId": 12,
        "user": req.email,
        "referenceTable": "user_activities",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "activityList"
    }
    makeDbReq(
        `user_activities(?, ?)`,
        [req.query.from, req.query.recordsPerPage]
    )
    .then((activities) => {
        logObj.resData = activities
        logObj.detail = 'success'
    })
    .catch((err) => {
        logObj.resData = err
        logObj.detail = [err]
    })
    .finally(() => {
        if (typeof req?.logs == "Object") {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        next()
    })
}

export default usersActivities