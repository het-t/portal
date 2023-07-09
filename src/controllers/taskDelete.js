import makeDbReq from '../db/index.js'
import con from '../db/conDb.js'

/**
 * delete task
 * @param {*} req 
 * @param {*} res 
 */

export default function deleteTask (req, res, next) {
    const taskId = req.params.id
    const connection = con()
    makeDbReq(
        connection,
        `tasks_delete(?, ?)`,
        [
            req.userId,
            taskId
        ]
    )
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)',
            [
                req.userId,
                32,     //activityId
                19,     //tableid
                taskId,   //tablePkId
                [err]     //details
            ]
        )
    }) 
    .finally(() => {
        connection.end()
    })
}