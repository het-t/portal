import makeDbReq from "../db/index.js"
import con from "../db/conDb.js"
/**
 * get types of clients
 * @param {*} req 
 * @param {*} res 
 */

export default function clientTypes (req, res) {
    const connection = con()
    makeDbReq(
        connection,
        `clients_type_master_get(?)`, 
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
                15,     //activityId
                3,     //tableid
                null,   //tablePkId
                [err]     //details
            ]
        )
    }) 
    .finally(() => {
        connection.end()
    })
}