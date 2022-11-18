import makeDbReq from '../db/index.js'

/**
 * get total number of users
 * @param {*} req 
 * @param {*} res 
 */

const usersCount = (req, res) => {
    let logObj = {
        "activityId": 23,
        "user": req.email,
        "referenceTable": "users",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "taskCreated"
    }
    makeDbReq(`users_count()`, [])
    .then((count) => {
        logObj.detail = 'success'
        logObj.resData = count
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