import makeDbReq from "../db/index.js"
import con from '../db/conDb.js'

/**
 * edit task
 * @param {*} req 
 * @param {*} res 
 */

export default function editTask (req, res) {
    const taskId = req.params.id 
    let {
        taskMasterId,
        title, 
        description,
        cost, 
        coordinatorIds, 
        clientId, 
        removedSubTasks,
        subTasks,
        saved
    } = req.body.params

    const reqTaskMasterId = req?.resData?.taskMasterId

    if (reqTaskMasterId != undefined && reqTaskMasterId != null) {
        taskMasterId = reqTaskMasterId
    }

    if (subTasks) subTasks = JSON.parse(subTasks)
    else subTasks = []

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
        `tasks_edit(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        [
            req.userId,
            req.orgId,
            taskId, 
            taskMasterId ? taskMasterId : null,
            title, 
            description,
            cost ? cost : null, 
            clientId ? clientId : null, 
            coordinatorIds ? JSON.stringify(JSON.parse(coordinatorIds)) : null, 
            removedSubTasks,
            saved,
            subTasks
        ]
    )
    .then((resutls) => {
        console.log(resutls)
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                30,     //activityId
                19,     //tableid
                taskId,   //tablePkId
                [err]     //details
            ]
        )
    }) 
    .finally(() => {
        connection.end()
    })
}