import makeDbReq from '../db/index.js'

/**
 * create task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const createTask = (req, res, next) => {

    let logObj = {
        "activityId": 17,
        "user": req.userId,
        "referenceTable": "tasks_master",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "taskCreated"
    }

    const {
        taskMasterId, 
        title, 
        description,
        cost, 
        saved, 
        coordinatorId, 
        clientId
    } = req.query

    makeDbReq(`tasks_create_task(?, ?, ?, ?, ?, ?, ?, ?)`, [req.userId, taskMasterId, title, description, cost, saved, clientId, coordinatorId])
    .then((results) => {
        logObj.referenceTablePkId = results[0]?.taskId
        logObj.detail = 'success'

        req.resData = logObj.resData = {
            saved,
            taskId: results[0].taskId,
            taskMasterId: results[0].taskMasterId 
        }
    })
    .catch((err) => {
        logObj.detail = [err]
        logObj.resData = 'fail'
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
    
}

export default createTask