import makeDbReq from '../db/index.js'

/**
 * get logs of task for edit task screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const getTaskLogs = (req, res, next) => {
    let logObj = {
        "activityId": 21,
        "user": req.userId,
        "referenceTable": "tasks_logs",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "taskLogs",    
    }

    makeDbReq(`tasks_get_logs(?)`, [req.resData])
    .then((taskLogs) => {
        logObj.detail = 'success'
        logObj.resData = taskLogs
    })
    .catch((err) => {
        logObj.detail = [err]
        logObj.resData = err
    })
    .finally(()=>{
        console.log(req.logs, "\n\n")
        if (typeof req?.logs == "object") {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        console.log(req.logs)
        next()
    })
}

export default getTaskLogs