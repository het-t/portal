import con from '../../db/conDb.js'
import makeDbReq from '../../db/index.js'

/**
 * create sub-task for given task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export default function (req, res) {
    const connection = con()

    const taskId = req.params.taskId

    const {
        description
    } = req.body.params

    makeDbReq(
        connection,
        `sub_task_add_in_task(?, ?, ?, ?)`, 
        [
            req.userId, 
            req.orgId,
            taskId,        
            description
        ]
    )
    .then((results) => {
        res.send({createdSubTaskId: results[0].createdSubTaskId})
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                18,     //activityId
                20,     //tableid
                taskId,   //tablePkId
                [err]     //details
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}
