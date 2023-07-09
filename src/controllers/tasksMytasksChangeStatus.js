import makeDbReq from '../db/index.js'
import con from '../db/conDb.js'

/**
 * change status of sub task of task assigened to user
 * @param {*} req 
 * @param {*} res 
 */

export default function myTasksChangeStatus(req, res) {
    const taskId = req.params.taskId

    let {
        subTaskId,
        statusId,
        cost,
        costSaved
    } = req.body
    
    if (costSaved == 1 && cost == undefined) cost = null
    subTaskId = parseInt(subTaskId, 10)

    const connection = con()
    if (costSaved == 0) {
        makeDbReq(
            connection,
            `sub_tasks_set_cost(?, ?, ?)`,
            [
                req.userId,
                subTaskId,
                cost
            ]
        )
        .catch((err) => {
            makeDbReq(
                connection,
                'logs_add(?, ?, ?, ?, ?)',
                [
                    req.userId,
                    41,     //activityId
                    20,     //tableid
                    subTaskId,   //tablePkId
                    [err]     //details
                ]
            )
        })
    }

    makeDbReq(
        connection,
        `sub_tasks_change_status(?, ?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            taskId,
            subTaskId,
            statusId,
        ]
    )
    .then(() => {
        return makeDbReq(
            connection,
            `tasks_auto_assign_status(?, ?, ?)`,
            [
                req.userId,
                req.orgId,
                taskId
            ]
        )
    })
    
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)',
            [
                req.userId,
                34,     //activityId
                19,     //tableid
                subTaskId,   //tablePkId
                [err]     //details
            ]
        )   
    })
    .finally(() => {
        connection.end()
    }) 
}