import makeDbReq from "../db/index.js"

/**
 * edit task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const editTask = (req, res, next) => {

    let logObj = {
        "activityId": 30,
        "user": req.userId,
        "referenceTable": "tasks",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "taskEdited",
    }
    const {
        taskId, 
        taskMasterId,
        title, 
        description,
        cost, 
        saved, 
        coordinatorId, 
        clientId, 
        subTasks
    } = req.query

    makeDbReq(`tasks_edit_task(?, ?, ?, ?, ?, ?, ?)`, [
        taskId, 
        taskMasterId,
        title, 
        description,
        cost, 
        // saved, 
        clientId, 
        coordinatorId, 
        // subTasks
    ])
    .then((results) => {
        logObj.referenceTablePkId = results[0].pk_for_logs
        logObj.detail = 'success'
    })
    .catch((err) => {
        logObj.detail = [err]
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

export default editTask