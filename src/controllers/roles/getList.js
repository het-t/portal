import makeDbReq from '../../db/index.js'
import formatFilters from '../../helpers/formatFilters.js'
import con from '../../db/conDb.js'

/**
 * get roles
 * @param {*} req 
 * @param {*} res 
 */

export default function getRoles (req, res) {

    const {
        from,
        recordsPerPage,
        sortBy,
        sortOrder
    } = req.query

    const connection = con()
    const filters = formatFilters(req.query.filters)
    makeDbReq(
        connection,
        `roles_get(?, ?, ?, ?, ?, ?, ?, ?)`, 
        [
            req.userId,
            req.orgId,
            from, 
            recordsPerPage,
            sortBy,
            sortOrder,
            filters.name,
            filters.rights
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
                10,     //activityId
                8,     //tableid
                null,   //tablePkId
                [err]     //details
            ]
        )
    }) 
    .finally(() => {
        connection.end()
    })
}