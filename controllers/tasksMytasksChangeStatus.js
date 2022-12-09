import makeDbReq from '../db/index.js'

/**
 * change status of sub task of task assigened to user
 * @param {*} req 
 * @param {*} res 
 */

const myTasksChangeStatus = (req, res, next) => {
    let {
        taskId,
        subTaskId,
        statusId
    } = req.query
    
    taskId = parseInt(taskId, 10)
    subTaskId = parseInt(subTaskId, 10)

    makeDbReq(`sub_tasks_change_status(?, ?, ?, ?)`, [
        req.userId,
        taskId,
        subTaskId,
        statusId
    ])
    .then(() => next())
    .catch(err => {
        res.send(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            34,     //activityId
            19,     //tableid
            subTaskId,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
}

export default myTasksChangeStatus