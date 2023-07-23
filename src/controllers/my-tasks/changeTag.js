import con from "../../db/conDb.js"
import makeDbReq from "../../db/index.js"

export default function myTasksChangeTags(req, res) {
    const taskId = req.params.taskId
    const connection = con()
    const {
        subTaskId,
        tags
    } = req.body

    makeDbReq(
        connection,
        `sub_tasks_add_tags(?, ?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            taskId,
            subTaskId,
            tags
        ]
    )
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            `logs_add(?, ?, ?, ?, ?)`,
            [
                req.userId,
                71,
                30,
                subTaskId,
                [err]
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}