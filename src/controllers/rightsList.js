import makeDbReq from '../db/index.js'
import con from '../db/conDb.js'

/**
 * get list of rights from rights_master
 * @param {*} req 
 * @param {*} res 
 */

export default function getRights(req, res) {
    const connection = con()
    makeDbReq(
        connection,
        `rights_master_get_all(?)`, 
        [
            req.userId
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
                9,     //activityId
                6,     //tableid
                null,   //tablePkId
                [err]     //details
            ]
        )
    }) 
    .finally(() => {
        connection.end()
    })
}