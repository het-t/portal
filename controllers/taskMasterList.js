import makeDbReq from '../db/index.js'

/**
 * get tasks details stored inside task_master
 * to show as template for tasks
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getTasksMaster = (req, res, next) => {
    let logObj = {
        "activityId": 20,
        "user": req.email,
        "referenceTable": "tasks_master",
        "referenceTablePkId": null,
        "detail": '',
        "resData": {},
        "resKey": "task_master_list",
    }

    makeDbReq(`tasks_master_get_tasks()`, [])
    .then((tasks) => {
        logObj.detail = 'success'
        logObj.resData = tasks
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

export default getTasksMaster