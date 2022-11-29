import makeDbReq from "../db/index.js";

/**
 * get tasks assigend to particular user
 * for my tasks screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const tasksGetMyTasks = (req, res, next) => {
    let logObj = {
        "activityId": 28,
        "user": req.userId,
        "referenceTable": "tasks",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "myTasksList"
    }
    makeDbReq(`tasks_get_my_tasks(?)`, [req.userId])
    .then((myTasks) => {
        logObj.detail = 'success'
        logObj.resData = myTasks
    })
    .catch(err => {
        logObj.detail = [err]
        logObj.resData = err
    })
    .finally(() => {
        if (typeof req?.logs == 'Object') {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        next()
    })
}

export default tasksGetMyTasks