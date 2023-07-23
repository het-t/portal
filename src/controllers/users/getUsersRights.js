import makeDbReq from "../../db/index.js";
import con from '../../db/conDb.js'

/**
 * get rights of user
 * @param {*} req 
 * @param {*} res 
 */
export default function userRights (req, res) {
    const connection = con()
    makeDbReq(
        connection,
        `rights_master_get_user_rights(?)`, 
        [req.userId]
    )
    .then((results) => {
        res.send(results)
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