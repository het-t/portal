import con from '../db/conDb.js'
import makeDbReq from '../db/index.js'
import formatFilters from '../helpers/formatFilters.js'

/**
 * get list of clients for `client` screen
 * @param {*} req 
 * @param {*} res 
 */

export default function getClients(req, res) {

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
        `clients_master_get(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        [
            req.userId,
            req.orgId,
            from, 
            recordsPerPage,
            sortBy,
            sortOrder,
            filters.name,
            filters.type,
            filters.ca,
            filters.contact,
            filters.tag
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
                16,     //activityId
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