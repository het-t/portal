import makeDbReq from "../../db/index.js";
import con from '../../db/conDb.js'

export default function (req, res) {
    const taskId = req.params.id
    const statusId = req.body.statusId
    const connection = con()

    makeDbReq(
        connection,
        `tasks_change_status(?, ?, ?)`,
        [
            req.userId,
            taskId,
            statusId
        ]
    )
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        res.sentStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)',
            [
                req.userId,
                40,     //activityId
                19,     //tableid
                taskId,   //tablePkId
                [err]     //details
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}