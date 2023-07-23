import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'


/**
 * delete user
 * @param {*} req 
 * @param {*} res 
 */

export default function deleteUser (req, res) {
    const userIdToDel = req.params.id
    
    const connection = con()
    makeDbReq(
        connection,
        `users_delete(?, ?)`, 
        [
            req.userId,
            userIdToDel
        ]
    )
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                8,     //activityId
                15,     //tableid
                userIdToDel,   //tablePkId
                [err]     //details
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}