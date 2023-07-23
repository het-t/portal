import con from '../../db/conDb.js'
import makeDbReq from '../../db/index.js'
import formatFilters from '../../helpers/formatFilters.js'
/**
 * get total number of users
 * @param {*} req 
 * @param {*} res 
 */

export default function usersCount (req, res) {

    const filters = formatFilters(req.query.filters)
    const connection = con()
    makeDbReq(
        connection,
        `users_count(?, ?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            filters.name,
            filters.email,
            filters.rights
        ]
    )
    .then((results) => {
        res.send({count: results[0].count})
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                23,     //activityId
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