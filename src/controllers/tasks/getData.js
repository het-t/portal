import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'


/**
 * get data of task for edit task screen
 * @param {*} req 
 * @param {*} res 
 */

export default function getTaskData (req, res) {

    const taskId = req.params.id
    const connection = con()
    makeDbReq(
        connection,
        `tasks_get_task_data(?, ?)`, 
        [
            req.userId,
            taskId
        ]
    )
    .then((results) => {
        res.send(results[0])
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)',
            [
                req.userId,
                23,     //activityId
                19,     //tableid
                null,   //tablePkId
                [err]     //details
            ]
        )
    }) 
    .finally(() => {
        connection.end()
    })
}