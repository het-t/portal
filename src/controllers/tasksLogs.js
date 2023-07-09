import makeDbReq from '../db/index.js'
import con from '../db/conDb.js'

/**
 * get logs of task for edit task screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export default function getTaskLogs(req, res, next) {
    const connection = con()
    makeDbReq(
        connection,
        `tasks_get_logs(?, ?)`, 
        [
            req.userId,
            req.resData
        ]
    )
    .then((taskLogs) => {
        const resKey = "taskLogs"
        const resData = taskLogs

        if (typeof req?.logs == "object") {
            req.logs.push({resKey, resData})
        }
        else {
            req.logs = [{resKey, resData}]
        }
        next()
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
                req.resData,   //tablePkId
                [err]     //details
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}