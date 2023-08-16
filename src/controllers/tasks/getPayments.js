import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

/**
 * get payments of specified task
 * @param {*} req 
 * @param {*} res 
*/

export default function (req, res) {
    const taskId = req.params.taskId

    const connection = con()
    makeDbReq(
        connection,
        `tasks_payments_get(?, ?, ?)`, 
        [
            req.userId,
            req.orgId,
            taskId
        ]
    )
    .then((results) => {
        res.send(results)
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)',
            [
                req.userId,
                72,     //activityId
                31,     //tableid
                taskId,   //tablePkId
                [err]     //details
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}