import makeDbReq from "../../db/index.js";
import con from "../../db/conDb.js";

export default function (req, res) {
    const {
        taskId,
        subTaskId,
        tagId
    } = req.params

    const connection = con()

    makeDbReq(
        connection,
        `sub_task_remove_tag(?, ?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            taskId,
            subTaskId,
            tagId
        ]    
    )
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq(
            connection,
            `logs_add(?, ?, ?, ?, ?)`,
            [
                req.userId,
                71,
                20,
                subTaskId,
                [err]
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}