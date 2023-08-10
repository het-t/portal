import makeDbReq from '../../db/index.js';
import connection from '../../db/conDb.js';

export default function (req, res) {

    const taskId = req.params.taskId
    const con = connection()

    makeDbReq(
        con,
        `task_comments_get(?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            taskId
        ]
    )
    .then((results) => {
        res.send(results)
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq(
            con,
            `logs_add(?, ?, ?, ?, ?)`,
            [
                req.userId,
                76,
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