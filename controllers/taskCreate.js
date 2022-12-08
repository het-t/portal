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
        "referenceTable": "tasks",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "taskCreated"
    }

    let {
        taskMasterId, 
        title, 
        description,
        cost, 
        saved,
        coordinatorId, 
        clientId
    } = req.query

    const reqTaskMasterId = req?.resData?.taskMasterId

    if (reqTaskMasterId != undefined && reqTaskMasterId != null) {
        taskMasterId = reqTaskMasterId
    } 
    
    makeDbReq(`tasks_create_task(?, ?, ?, ?, ?, ?, ?)`, [
        req.userId, 
        taskMasterId ? taskMasterId : null, 
        title, 
        description, 
        cost ? cost : null,  
        clientId ? clientId : null, 
        coordinatorId ? coordinatorId : null
    ])
    .then((results) => {
        logObj.referenceTablePkId = results[0]?.taskId
        logObj.detail = 'success'

        req.resData = logObj.resData = {
            saved,
            taskId: results[0].taskId,
            taskMasterId 
        }
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
        logObj.resData = 'fail'
        ///////// set response status ////////////////////
        res.end();
    })
    
}

export default createTask