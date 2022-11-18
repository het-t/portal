import makeDbReq from '../db/index.js'

/**
 * get number of records in `user_activities` table
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const usersActivityCount = (req, res, next) => {
    let logObj = {
        "activityId": 23,
        "user": req.email,
        "referenceTable": "user_activities",
        "referencetablePkId": null,
        "resData": {},
        "resKey": "count"
    }
    makeDbReq(`user_activities_count()`, [])
    .then((count) => {
        logObj.resData = count[0].count
        logObj.detail = 'success'
    })
    .catch(err => {
        logObj.resData = 'fail'
        logObj.detail = [err]
    }) 
    .finally(()=>{
        if (typeof req?.logs == "Object") {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        next()
    })
}

export default usersActivityCount