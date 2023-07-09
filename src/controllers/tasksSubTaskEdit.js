import makeDbReq from '../db/index.js'
import con from '../db/conDb.js'

/**
 * edit sub tasks of given task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export default function editSubTasks(req, res, next) {
    let {
        taskId,
        subTasks,
        saved
    } = req.body.params

    let taskMasterId = req?.resData?.taskMasterId

    if (subTasks.length == 0) {
        next()
    }
    else {
        const connection = con()
        makeDbReq(
            connection,
            `sub_tasks_edit(?, ?, ?, ?, ?)`, 
            [
                req.userId,
                taskId, 
                taskMasterId,
                subTasks,
                saved
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
                    31,     //activityId
                    20,     //tableid
                    null,   //tablePkId
                    [err]     //details
                ]
            )
            .then(() => {
                connection.end()
            })
        })
    }
}