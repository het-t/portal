import makeDbReq from '../db/index.js'
import con from '../db/conDb.js'

/**
 * get role data
 * @param {*} req 
 * @param {*} res 
 */

export default function getRoleData (req, res) {

    const connection = con()
    makeDbReq(
        connection,
        `roles_role_data(?, ?)`,
        [
            req.userId,
            req.params.id
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
                22,     //activityId
                8,     //tableid
                req.params.id,   //tablePkId
                [err]     //details
            ]
        )
    }) 
    .finally(() => {
        connection.end()
    })
}