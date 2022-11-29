import makeDbReq from '../db/index.js'


/**
 * get list of tasks for `tasks` screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getTasks = (req, res, next) => {
    let logObj = {
        "activityId": 20,
        "user": req.userId,
        "referenceTable": "tasks",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "tasksList"
    }
    makeDbReq(`tasks_get_tasks()`, [])
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

export default getTasks