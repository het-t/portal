import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

/**
 * delete given sub tasks
 * @param {*} req 
 * @param {*} res 
 */
export default function(req, res) {
    let {
        taskId,
        subTaskId,
    } = req.params

    const connection = con()

    makeDbReq(
        connection,
        `sub_task_delete(?, ?, ?, ?)`, 
        [
            req.userId,
            req.orgId,
            taskId,
            subTaskId
        ]
    )
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
                39,     //activityId
                20,     //tableid
                subTaskId,   //tablePkId
                [err]     //details
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}