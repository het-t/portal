import makeDbReq from '../db/index.js'


/**
 * get list of tasks for `tasks` screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getSubTasksMaster = (req, res, next) => {
    let logObj = {
        "activityId": 27,
        "user": req.userId,
        "referenceTable": "tasks",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "subTasksMasterList"
    }
    makeDbReq(`sub_tasks_master_get_sub_tasks(?)`, [req.query.taskMasterId])
    .then((tasks) => {
        logObj.detail = 'success'
        logObj.resData = tasks
    })
    .catch((err) => {
        logObj.detail = [err]
        logObj.resData = err
    })
    .finally(() => {
        if (typeof req?.logs == "object") {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        next()
    })
}

export default getSubTasksMaster