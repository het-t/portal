import makeDbReq from '../db/index.js'
import formatFilters from '../helpers/formatFilters.js'
import con from '../db/conDb.js'

/**
 * get list of tasks for `tasks` screen
 * @param {*} req 
 * @param {*} res 
 */
export default function getTasksMaster(req, res) {

    let filters = formatFilters(req.query.filters)
    const connection = con()
    makeDbReq(
        connection,
        `tasks_master_get(?, ?, ?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            filters.title,
            filters.description,
            req.query.sortBy,
            req.query.sortOrder
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
                33,     //activityId
                12,     //tableid
                req.resData,   //tablePkId
                [err]     //details
            ]
        )
    })
    .finally(() => {
        connection.end()
    }) 
}