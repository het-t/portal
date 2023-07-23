import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'
import formatFilters from '../../helpers/formatFilters.js'

/**
 * get number of payments of specified task
 * @param {*} req 
 * @param {*} res 
 */

export default function tasksPaymentsCount (req, res) {
    
    const filters = formatFilters(req.query.filters)
    const taskId = req.query.taskId

    const connection = con()
    makeDbReq(
        connection,
        `tasks_payments_count(?, ?, ?, ?, ?)`, 
        [
            req.userId,
            req.orgId,
            taskId,
            filters.details,
            filters.amount,
            filters.receivedAt
        ]
    )
    .then((results) => {
        res.send({count: results[0].count})
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                23,     //activityId
                31,     //tableid
                taskId,   //tablePkId
                [err]     //details
            ]
        )
        .catch((err) => console.log(err))
    }) 
}