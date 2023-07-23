import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

/**
 * get logs of task for edit task screen
 * @param {*} req 
 * @param {*} res 
 */

export default function getTaskLogs(req, res) {
    const taskId = req.params.id
    
    const connection = con()
    makeDbReq(
        connection,
        `tasks_get_logs(?, ?)`, 
        [
            req.userId,
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
                37,     //activityId
                21,     //tableid
                taskId,   //tablePkId
                [err]     //details
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}