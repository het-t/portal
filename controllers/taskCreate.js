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
        "user": req.email,
        "referenceTable": "tasks_master",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "taskCreated"
    }

    const {taskMasterId, title, cost, saved, coordinatorId, clientId, subTasks} = req.query

    makeDbReq(`tasks_create_task(?, ?, ?, ?, ?, ?)`, [taskMasterId, title, cost, saved, clientId, coordinatorId])
    .then((results) => {
        logObj.referenceTablePkId = results[0]?.task_id
        logObj.detail = 'success'
        req.resData = logObj.resData = {
            saved,
            taskId: results[0].task_id
        }
    })
    .catch((err) => {
        logObj.detail = [err]
        logObj.resData = 'fail'
    })
    .finally(()=>{
        if (typeof req?.logs == "Object") {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        if (JSON.parse(subTasks)?.length > 0) next() 
    })
    
}

export default createTask