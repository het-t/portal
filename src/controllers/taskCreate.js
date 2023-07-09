import makeDbReq from '../db/index.js'
import con from '../db/conDb.js'

/**
 * create task
 * @param {*} req 
 * @param {*} res 
 */

export default function createTask (req, res) {

    let {
        taskMasterId, 
        title, 
        description,
        cost, 
        coordinatorIds, 
        clientId,
        subTasks,
        saved
    } = req.body.params

    const reqTaskMasterId = req?.resData?.taskMasterId
    
    if (reqTaskMasterId != undefined && reqTaskMasterId != null) {
        taskMasterId = reqTaskMasterId
    } 

    subTasks = JSON.parse(subTasks)

    for(let st in subTasks) {
        let stObj = subTasks[st]
        for(let key in stObj) {
            if (stObj[key] == null || stObj[key] == 'null' || stObj[key] == '') {
                delete subTasks[st][key]
            }  
            else continue
        }
    }

    subTasks = JSON.stringify(subTasks)
    
    const connection = con()
    makeDbReq(
        connection,
        `tasks_create(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            req.userId, 
            req.orgId,
            taskMasterId ? taskMasterId : null, 
            title, 
            description, 
            cost ? cost : null,  
            clientId ? clientId : null, 
            coordinatorIds ? JSON.stringify(JSON.parse(coordinatorIds)) : null,
            saved,
            subTasks
        ]
    )
    .then(() => { 
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)',
            [
                req.userId,
                17,     //activityId
                19,     //tableid
                null,   //tablePkId
                [err]     //details
            ]
        )
    }) 
    .finally(() => {
        connection.end()
    })
}