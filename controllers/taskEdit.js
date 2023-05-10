import makeDbReq from "../db/index.js"

/**
 * edit task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const editTask = (req, res, next) => {

    let {
        taskId, 
        taskMasterId,
        title, 
        description,
        cost, 
        coordinatorIds, 
        clientId, 
        removedSubTasks,
    } = req.query

    const reqTaskMasterId = req?.resData?.taskMasterId

    if (reqTaskMasterId != undefined && reqTaskMasterId != null) {
        taskMasterId = reqTaskMasterId
    }

    makeDbReq(`tasks_edit(?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
        req.userId,
        taskId, 
        taskMasterId ? taskMasterId : null,
        title, 
        description,
        cost ? cost : null, 
        clientId ? clientId : null, 
        coordinatorIds ? JSON.stringify(JSON.parse(coordinatorIds)) : null, 
        removedSubTasks
    ])
    .then(() => {
        next()
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            30,     //activityId
            19,     //tableid
            taskId,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default editTask