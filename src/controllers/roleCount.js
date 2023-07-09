import con from '../db/conDb.js'
import makeDbReq from '../db/index.js'
import formatFilters from '../helpers/formatFilters.js'

/**
 * get number of roles
 * @param {*} req 
 * @param {*} res 
 */

export default function rolesCount (req, res) {
    const connection = con()
    const filters = formatFilters(req.query.filters)
    makeDbReq(
        connection,
        `roles_count(?, ?, ?, ?)`, 
        [
            req.userId, 
            req.orgId,
            filters.name,
            filters.rights
        ]
    )
    .then((results) => {
        res.send({
            count: results[0].count
        })
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                23,     //activityId
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