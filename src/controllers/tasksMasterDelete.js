import con from "../db/conDb.js"
import makeDbReq from "../db/index.js"

export default function (req, res) {
    const connection = con()
    makeDbReq(
        connection,
        `tasks_master_delete(?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            req.params.id
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
                67,
                12,
                req.body.params.taskMasterId,
                err
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}