import con from '../../db/conDb.js'
import makeDbReq from '../../db/index.js'
import formatFilters from '../../helpers/formatFilters.js'

/**
 * get all users
 * @param {*} req 
 * @param {*} res 
 */

export default function getList(req, res) {
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
        `users_get(?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        [
            req.userId,
            req.orgId,
            from, 
            recordsPerPage,
            sortBy,
            sortOrder,
            filters.name,
            filters.email,
            filters.rights
        ]
    )
    .then((results) => {
        res.send(results)
    })
    .catch((err) => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                6,     //activityId
                15,     //tableid
                null,   //tablePkId
                [err]     //details
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}