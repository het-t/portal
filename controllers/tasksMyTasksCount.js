import makeDbReq from '../db/index.js'

/**
 * get number of tasks assigned to user
 * @param {*} req 
 * @param {*} res 
 */

const myTasksCount = (req, res, next) => {
    let logObj = {
        "activityId": 23,
        "user": req.userId,
        "referenceTable": "tasks",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "count"
    }
    makeDbReq(`my_tasks_count(?)`, [req.userId])
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

export default myTasksCount