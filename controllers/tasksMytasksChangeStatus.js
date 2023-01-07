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
        statusId,
        cost,
        costSaved
    } = req.query
    
    if (costSaved == 1 && cost == undefined) cost = null
    taskId = parseInt(taskId, 10)
    subTaskId = parseInt(subTaskId, 10)

    if (costSaved == 0) {
        makeDbReq(`sub_tasks_set_cost(?, ?, ?)`, [
            req.userId,
            subTaskId,
            cost
        ])
        .catch((err) => {
            makeDbReq('logs_add(?, ?, ?, ?, ?)', [
                req.userId,
                41,     //activityId
                20,     //tableid
                subTaskId,   //tablePkId
                [err]     //details
            ])
            .catch((err) => console.log(err))
        })
    }

    makeDbReq(`sub_tasks_change_status(?, ?, ?, ?)`, [
        req.userId,
        taskId,
        subTaskId,
        statusId,
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