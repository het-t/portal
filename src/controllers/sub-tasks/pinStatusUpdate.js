import makeDbReq from '../../db/index.js'
import connection from '../../db/conDb.js'

export default function(req, res) {
    const con = connection()

    const subTaskId = req.params.subTaskId

    makeDbReq(
        con,
        `sub_task_delegation_pin_handle(?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            subTaskId,
            req.body.isPinned,
        ]
    )
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(500)
        return makeDbReq(
            con,
            `logs_add(?, ?, ?, ?, ?)`,
            [
                req.userId,
                79,
                33,
                subTaskId,
                [err]
            ]
        )
    })
    .finally(() => {
        con.end()
    })
}