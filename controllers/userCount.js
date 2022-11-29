import makeDbReq from '../db/index.js'

/**
 * get total number of users
 * @param {*} req 
 * @param {*} res 
 */

const usersCount = (req, res, next) => {
    let logObj = {
        "activityId": 23,
        "user": req.userId,
        "referenceTable": "users",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "count"
    }
    makeDbReq(`users_count()`, [])
    .then((count) => {
        logObj.detail = 'success'
        logObj.resData = count[0].count
    })
    .catch(() => {
        logObj.detail = [err]
        logObj.resData = err
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

export default usersCount