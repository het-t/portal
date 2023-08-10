import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

export default function(req, res) {
    const {
        taskId,
        subTaskId
    } = req.params

    const connection = con()
    
    makeDbReq(
        connection,
        `sub_tasks_change_status(?, ?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            taskId,
            subTaskId,
            req.body.statusId
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