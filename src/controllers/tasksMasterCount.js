import makeDbReq from "../db/index.js";
import formatFilters from "../helpers/formatFilters.js";
import con from '../db/conDb.js'

export default function tasksMasterCount(req, res) {

    let filters = formatFilters(req.query.filters)
    const connection = con()
    makeDbReq(
        connection,
        'tasks_master_count(?, ?, ?, ?)',
        [
            req.userId,
            req.orgId,
            filters.title,
            filters.description
        ]
    )
    .then((results) => {
        res.send({count: results[0].count})
    })
    .catch(err => {
        return makeDbReq(
            connection,
            `logs_add(?, ?, ?, ?, ?)`, 
            [
                req.userId,
                23,
                12,
                null,
                [err]
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}