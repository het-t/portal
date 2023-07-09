import makeDbReq from '../db/index.js'
import formatFilters from '../helpers/formatFilters.js'
import con from '../db/conDb.js'

/**
 * get number of clients
 * @param {*} req 
 * @param {*} res 
 */

export default function clientsCount(req, res) {

    const filters = formatFilters(req.query.filters)

    const connection = con()
    makeDbReq(
        connection,
        `clients_count(?, ?, ?, ?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            filters.name,
            filters.type,
            filters.ca,
            filters.contact,
            filters.tag
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
                3,     //tableid
                null,   //tablePkId
                [err]     //details
            ]
        )
    }) 
    .finally(() => {
        connection.end()
    })
}