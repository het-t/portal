import makeDbReq from '../db/index.js'
import con from '../db/conDb.js'

/**
 * get number of tasks assigned to user
 * @param {*} req 
 * @param {*} res 
 */

export default function myTasksCount (req, res) {

    const connection = con()
    makeDbReq(
        connection,
        `my_tasks_count(?)`, 
        [
            req.userId
        ]
    )
    .then((results) => {
        res.send({count: results[0].count})
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                33,     //activityId
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