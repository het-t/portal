import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

export default function (req, res) {
    const {
        taskId,
        subTaskId
    } = req.params

    const connection = con()

    makeDbReq(
        connection,
        'sub_tasks_delegation_get(?, ?, ?)',
        [
            req.userId,
            taskId,
            subTaskId
        ]
    )
    .then((results) => {
        res.send(results)
    })
    .catch(err => {
        res.sendStatus(500)
    })
    .finally(() => {
        connection.end()
    })
}