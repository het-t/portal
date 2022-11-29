import makeDbReq from '../db/index.js'


/**
 * get list of tasks for `tasks` screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getTasksMaster = (req, res, next) => {
    let logObj = {
        "activityId": 26,
        "user": req.userId,
        "referenceTable": "tasks",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "tasksMasterList"
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
    .finally(() => {
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