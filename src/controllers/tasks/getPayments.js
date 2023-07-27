import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'
import formatFilters from '../../helpers/formatFilters.js'

/**
 * get payments of specified task
 * @param {*} req 
 * @param {*} res 
*/

export default function getTaskPayments(req, res) {
    const taskId = req.params.taskId
    let {
        filters,
        sortBy,
        sortOrder
    } = req.query

    filters  = formatFilters(filters)

    const connection = con()
    makeDbReq(
        connection,
        `tasks_payments_get(?, ?, ?, ?, ?, ?, ?, ?)`, 
        [
            req.userId,
            req.orgId,
            taskId,
            filters.details,
            filters.amount,
            filters.receivedAt,
            sortBy,
            sortOrder
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
                72,     //activityId
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