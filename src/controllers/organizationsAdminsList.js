import con from '../db/conDb.js'
import makeDbReq from '../db/index.js'
import formatFilters from '../helpers/formatFilters.js'

/**
 * get admins of given organization
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export default function getOrgainzationsAdmins(req, res) {
    const {
        from,
        recordsPerPage,
        sortBy,
        sortOrder,
    } = req.query

    const filters = formatFilters(req.query.filters)
    
    const connection = con()
    makeDbReq(
        connection,
        `organizations_users_admins_get(?, ?, ?, ?, ?, ?)`, 
        [
            req.userId,
            from, 
            recordsPerPage,
            sortBy,
            sortOrder,
            filters
        ]
    )
    .then((admins) => {
        res.send({'orgs/adminsList': admins})
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