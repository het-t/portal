import makeDbReq from "../../db/index.js";
import con from '../../db/conDb.js'

/**
 * get tasks assigend to particular user
 * for my tasks screen
 * @param {*} req 
 * @param {*} res 
 */
export default function (req, res) {

    const connection = con()
    makeDbReq(
        connection,
        `my_sub_tasks_get(?, ?)`,
        [
            req.userId, 
            req.orgId
        ]
    )
    .then((results) => {
        res.send(results)
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)',
            [
                req.userId,
                28,     //activityId
                19,     //tableid
                null,   //tablePkId
                [err]     //details
            ]
        )
    }) 
    .finally(() => {
        connection.end()
    })
}