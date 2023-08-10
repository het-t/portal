import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

export default function (req, res) {
    const {
        taskId,
        userId
    } = req.params

    const connection = con()

    makeDbReq(
        connection,
        'task_team_add_user(?, ?, ?)',
        [
            req.userId,
            taskId,
            userId
        ]
    )    
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
    .finally(() => {
        connection.end()
    })
}