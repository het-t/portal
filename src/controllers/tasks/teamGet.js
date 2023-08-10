import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

export default function (req, res) {
    const taskId = req.params.taskId

    const connection = con()

    makeDbReq(
        connection,
        'task_team_get(?, ?)',
        [
            req.userId,
            taskId
        ]
    )    
    .then((results) => {
        res.send(results)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
    .finally(() => {
        connection.end()
    })
}