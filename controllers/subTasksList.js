import makeDbReq from '../db/index.js'

/**
 * get sub tasks of task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const getSubTasks = (req, res, next) => {
    let logObj = {
        "activityId": 19,
        "user": req.userId,
        "referenceTable": "sub_tasks_master",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "subTasksList",
    }
    makeDbReq(`sub_tasks_get_task_sub_tasks(?)`, [req.query.taskId])
    .then((subTasks) => {
        logObj.detail = 'success'
        logObj.resData = subTasks
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

export default getSubTasks