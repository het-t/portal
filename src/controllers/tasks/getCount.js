import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'
import formatFilters from '../../helpers/formatFilters.js'

/**
 * get number of tasks
 * @param {*} req 
 * @param {*} res 
 */

export default function tasksCount (req, res) {
    
    const filters = formatFilters(req.query.filters)
    
    const connection = con()
    makeDbReq(
        connection,
        `tasks_count(?, ?, ?, ?, ?, ?, ?)`, 
        [
            req.userId,
            req.orgId,
            filters.name,
            filters.description,
            filters.client,
            filters.status,
            filters.progress
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
                19,     //tableid
                null,   //tablePkId
                [err]     //details
            ]
        )
        .catch((err) => console.log(err))
    }) 
}