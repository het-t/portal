import makeDbReq from '../db/index.js'
import con from '../db/conDb.js'

/**
 * delete role
 * @param {*} req 
 * @param {*} res 
 */

export default function deleteRole (req, res) {
    const roleId = req.params.id
    const connection = con()

    makeDbReq(
        connection,
        `roles_delete(?, ?)`, 
        [
            req.userId,    
            roleId
        ]
    )
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                3,     //activityId
                8,     //tableid
                roleId,   //tablePkId
                [err]     //details
            ]
        )
    }) 
    .finally(() => {
        connection.end()
    })
}