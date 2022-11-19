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
        logObj.referenceTablePkId = results[0]?.taskId
        logObj.detail = 'success'

        // console.log("create task result", results[])
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
        if (typeof req?.logs == "Object") {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        console.log("subTasks", subTasks)
        if (JSON.parse(subTasks)?.length > 0) next() 
    })
    
}

export default createTask