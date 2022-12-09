import makeDbReq from '../db/index.js'

/**
 * create task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const createTask = (req, res, next) => {

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
    
    makeDbReq(`tasks_create(?, ?, ?, ?, ?, ?, ?)`, [
        req.userId, 
        taskMasterId ? taskMasterId : null, 
        title, 
        description, 
        cost ? cost : null,  
        clientId ? clientId : null, 
        coordinatorId ? coordinatorId : null
    ])
    .then((results) => { 
        const resKey = "taskCreated"
        const resData = results[0].taskId

        req.resData = {
            taskId: resData.taskId,
            taskMasterId 
        }

        if (typeof req?.logs == "object") {
            req.logs.push({resKey, resData})
        }
        else {
            req.logs = [{resKey, resData}]
        }
        next() 
    })
    .catch(err => {
        res.send(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            17,     //activityId
            19,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
    
}

export default createTask