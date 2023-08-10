import makeDbReq from '../../db/index.js';
import connection from '../../db/conDb.js';

export default function (req, res) {

    const taskId = req.params.taskId
    const con = connection()

    makeDbReq(
        con,
        `task_comment_add(?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            taskId,
            req.body.params.comment
        ]
    )
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq(
            con,
            `logs_add(?, ?, ?, ?, ?)`,
            [
                req.userId,
                77,
                32,
                taskId,
                [err]
            ]
        )
    })
    .finally(() => {
        con.end()
    })
}