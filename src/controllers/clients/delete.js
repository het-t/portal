import con from '../../db/conDb.js'
import makeDbReq from '../../db/index.js'

/**
 * delete role
 * @param {*} req 
 * @param {*} res 
 */

export default function deleteClient(req, res) {
    const clientId = req.params.id

    const connection = con()
    makeDbReq(
        connection,
        `clients_master_delete(?, ?)`, 
        [
            req.userId,
            clientId
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
                29,     //activityId
                3,     //tableid
                clientId,   //tablePkId
                [err]     //details
            ]
        )
    }) 
    .finally(() => {
        connection.end()
    })
}