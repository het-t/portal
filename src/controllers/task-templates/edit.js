import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

export default function editSubTasksMaster(req, res) {
    let {
        taskMasterId,
        subTasks,
        removedSubTasks,
        title,
        description,
        cost,
        taskStatus
    } = req.body.params

    subTasks = JSON.parse(subTasks)
    for(let st in subTasks) {
        let stObj = subTasks[st]
        for(let key in stObj) {
            if ((stObj[key] == null || stObj[key] == 'null' || stObj[key] == '') && key != 'id') {
                delete subTasks[st][key]
            }  
            else continue
        }
    }
    subTasks = JSON.stringify(subTasks)
    const connection = con()
    makeDbReq(
        connection,
        `tasks_master_edit(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            taskMasterId,
            title,
            description,
            cost,
            subTasks,
            JSON.stringify(JSON.parse(removedSubTasks)),
            taskStatus
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