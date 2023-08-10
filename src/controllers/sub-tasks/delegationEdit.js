import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

export default function (req, res) {
    const {
        taskId,
        subTaskId
    } = req.params

    const {
        userId,
        newUserId
    } = req.body.params

    const connection = con()

    makeDbReq(
        connection,
        'sub_tasks_delegation_edit(?, ?, ?, ?, ?)',
        [
            req.userId,
            taskId,
            subTaskId,
            userId,
            newUserId
        ]
    )
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
    })
    .finally(() => {
        connection.end()
    })
}