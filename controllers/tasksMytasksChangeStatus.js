import makeDbReq from '../db/index.js'

/**
 * change status of sub task of task assigened to user
 * @param {*} req 
 * @param {*} res 
 */

const myTasksChangeStatus = (req, res, next) => {
    let {
        taskId,
        subTaskId,
        statusId
    } = req.query
    
    taskId = parseInt(taskId, 10)
    subTaskId = parseInt(subTaskId, 10)

    let userId = req.userId

    let logObj = {
        "activityId": 34,
        "user": req.userId,
        "referenceTable": "sub_tasks",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "count"
    }
    makeDbReq(`sub_tasks_change_status(?, ?, ?, ?)`, [
        userId,
        taskId,
        subTaskId,
        statusId
    ])
    .then(() => {
        logObj.detail = 'success'
        logObj.resData = subTaskId
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

export default myTasksChangeStatus