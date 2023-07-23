import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

/**
 * delete given sub tasks
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export default function editSubTasks(req, res, next) {
    let {
        taskId,
        removedSubTasks,
    } = req.body.params

    if (removedSubTasks.length === 0) {
        next()
    }
    else {
        const connection = con()
        makeDbReq(
            connection,
            `sub_tasks_delete(?, ?, ?, ?, ?, ?)`, 
            [
                req.userId,
                req.orgId,
                taskId,
                removedSubTasks
            ]
        )
        .then(() => {
            next()
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
                    null,   //tablePkId
                    [err]     //details
                ]
            )
        })
        .finally(() => {
            connection.end()
        })
    }
}