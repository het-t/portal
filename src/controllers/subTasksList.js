import makeDbReq from '../db/index.js'
import con from '../db/conDb.js'

/**
 * get sub tasks of task
 * @param {*} req 
 * @param {*} res 
 */

export default function getSubTasks (req, res) {
    const connection = con()
    makeDbReq(
        connection,
        `sub_tasks_get_task_sub_tasks(?, ?)`,
        [
            req.userId,
            req.params.id
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
                19,     //activityId
                20,     //tableid
                null,   //tablePkId
                [err]     //details
            ]
        )
    }) 
    .finally(() => {
        connection.end()
    })
}