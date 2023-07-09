import con from '../db/conDb.js'
import makeDbReq from '../db/index.js'

/**
 * get total number of admins
 * @param {*} req 
 * @param {*} res 
 */

export default function adminsCount(req, res) {
    let {
        orgId
    } = req.query

    const connection = con()
    makeDbReq(
        connection,
        `organizations_users_admins_count(?, ?)`, 
        [
            req.userId,
            orgId
        ]
    )
    .then((results) => {
        res.send({'count': results[0].count})
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