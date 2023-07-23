import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

/**
 * edit task
 * @param {*} req 
 * @param {*} res 
 */

export default function editTask (req, res) {
    const taskId = req.params.id 
    let {
        taskTemplateId,
        title, 
        description,
        cost, 
        coordinatorsIds, 
        clientId, 
        removedSubTasks,
        subTasks,
        saved,
        payments
    } = req.body.params

    const reqTaskMasterId = req?.resData?.taskMasterId

    if (reqTaskMasterId != undefined && reqTaskMasterId != null) {
        taskTemplateId = reqTaskMasterId
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
        `tasks_edit(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        [
            req.userId,
            req.orgId,
            taskId, 
            taskTemplateId ? taskTemplateId : null,
            title, 
            description,
            cost ? cost : null, 
            clientId ? clientId : null, 
            coordinatorsIds ? JSON.stringify(JSON.parse(coordinatorsIds)) : null, 
            removedSubTasks,
            saved,
            subTasks,
            payments ? JSON.stringify(JSON.parse(payments)) : null
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