import makeDbReq from '../../db/index.js'
import connection from '../../db/conDb.js'

export default function (req, res) {
    const {
        taskId,
        subTaskId,
        tagId
    } = req.params

    const con = connection()

    makeDbReq(
        con,
        `sub_task_add_tag(?, ?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            taskId,
            subTaskId,
            tagId
        ]
    )
    .then((results) => {
        if (results?.[0]?.createdTagId) {
            res.send({createdTagId: results[0].createdTagId})
        }
        else res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq(
            con,
            `logs_add(?, ?, ?, ?, ?)`,
            [
                req.userId,
                req.orgId,
                71,
                30,
                [err]
            ]
        )
    })
    .finally(() => {
        con.end()
    })
}