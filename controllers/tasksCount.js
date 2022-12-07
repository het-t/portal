import makeDbReq from '../db/index.js'

/**
 * get number of tasks
 * @param {*} req 
 * @param {*} res 
 */

const tasksCount = (req, res, next) => {
    let logObj = {
        "activityId": 23,
        "user": req.userId,
        "referenceTable": "tasks",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "count"
    }
    makeDbReq(`tasks_count()`, [])
    .then((count) => {
        logObj.detail = 'success'
        logObj.resData = count[0].count
    })
    .catch(err => {
        logObj.detail = [err]
        logObj.resData = err
    }) 
    .finally(()=>{
        if (typeof req?.logs == "object") {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        next()
    })
}

export default tasksCount