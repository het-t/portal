import makeDbReq from '../db/index.js'
import con from '../db/conDb.js'
/**
 * get user data to show in edit user screen
 * @param {*} req 
 * @param {*} res 
 */

export default function getData (req, res) {
    const userId = req.params.id

    const connection = con()
    makeDbReq(
        connection,
        `users_user_data(?, ?)`, 
        [
            req.userId,
            userId
        ]
    )
    .then((results) => {
        res.send(results[0])
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                25,     //activityId
                15,     //tableid
                userId,   //tablePkId
                [err]     //details
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}