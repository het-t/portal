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
    let {
        taskId, 
        taskMasterId,
        title, 
        description,
        cost, 
        coordinatorId, 
        clientId, 
    } = req.query

    const reqTaskMasterId = req?.resData?.taskMasterId

    if (reqTaskMasterId != undefined && reqTaskMasterId != null) {
        taskMasterId = reqTaskMasterId
    }

    makeDbReq(`tasks_edit_task(?, ?, ?, ?, ?, ?, ?)`, [
        taskId, 
        taskMasterId,
        title, 
        description,
        cost, 
        clientId, 
        coordinatorId, 
    ])
    .then(() => {
        logObj.referenceTablePkId = taskId
        logObj.detail = 'success'
    })
    .then(()=>{
        if (typeof req?.logs == "object") {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        next()
    })
    .catch((err) => {
        logObj.detail = [err]
        console.log(err)
        res.end()
    })
}

export default editTask