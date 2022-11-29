import makeDbReq from '../db/index.js'

/**
 * get data of task for edit task screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const getTaskData = (req, res, next) => {
    let logObj = {
        "activityId": 21,
        "user": req.userId,
        "referenceTable": "tasks_master",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "taskData",    }

    makeDbReq(`tasks_get_task_data(?)`, [req.query.taskId])
    .then((taskData) => {
        logObj.detail = 'success'
        logObj.resData = taskData
    })
    .catch((err) => {
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

export default getTaskData