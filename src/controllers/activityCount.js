import con from '../db/conDb.js'
import makeDbReq from '../db/index.js'

/**
 * get number of records in `user_activities` table
 * @param {*} req 
 * @param {*} res 
 */

export default function usersActivityCount (req, res) {
 
    let connection = con()
    makeDbReq(
        connection, 
        `user_activities_count(?)`, 
        [
            req.userId
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
                14,     //tableid
                null,   //tablePkId
                [err]     //details
            ]
        )
    }) 
    .finally(() => {
        connection.end()
    })
}