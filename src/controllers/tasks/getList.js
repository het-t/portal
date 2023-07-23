import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'
import formatFilters from '../../helpers/formatFilters.js'
/**
 * get list of tasks for `tasks` screen
 * @param {*} req 
 * @param {*} res 
 */
export default function getTasks (req, res) {

    const {
        from,
        recordsPerPage,
        sortBy,
        sortOrder
    } = req.query

    const filters = formatFilters(req.query.filters)
    
    const connection = con()
    makeDbReq(
        connection,
        `tasks_get(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            from, 
            recordsPerPage,
            sortBy,
            sortOrder,
            filters.name,
            filters.description,
            filters.client,
            filters.status,
            filters.progress
        ]
    )
    .then((results) => {
        res.send(results)
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                20,     //activityId
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