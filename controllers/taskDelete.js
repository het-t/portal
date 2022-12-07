import makeDbReq from '../db/index.js'

/**
 * delete task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const deleteTask = (req, res, next) => {
    const taskId = req.body.params.taskId
    
    let logObj = {
        "activityId": 32,
        "user": req.userId,
        "referenceTable": "tasks",
        "referenceTablePkId": taskId,
        "detail": "",
        "resData": {},
        "resKey": "taskDeleted",
    }

    makeDbReq(`tasks_delete(?)`, [taskId])
    .then(() => {
        logObj.detail = 'success'
        logObj.resData = true
    })
    .catch((err) => {
        logObj.detail = [err]
        logObj.resData = "fail"
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

export default deleteTask