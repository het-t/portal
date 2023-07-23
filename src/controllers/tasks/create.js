import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

/**
 * create task
 * @param {*} req 
 * @param {*} res 
 */

export default function createTask (req, res) {

    let {
        taskTemplateId, 
        title, 
        description,
        cost, 
        coordinatorsIds, 
        clientId,
        subTasks,
        saved,
        payments
    } = req.body.params

    const reqTaskMasterId = req?.resData?.taskMasterId
    
    if (reqTaskMasterId !== undefined && reqTaskMasterId !== null) {
        taskTemplateId = reqTaskMasterId
    } 

    subTasks = JSON.parse(subTasks)

    for(let st in subTasks) {
        let stObj = subTasks[st]
        for(let key in stObj) {
            if (stObj[key] === null || stObj[key] === 'null' || stObj[key] === '') {
                delete subTasks[st][key]
            }  
            else continue
        }
    }

    subTasks = JSON.stringify(subTasks)

    const connection = con()
    makeDbReq(
        connection,
        `tasks_create(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            req.userId, 
            req.orgId,
            taskTemplateId ? taskTemplateId : null, 
            title, 
            description, 
            cost ? cost : null,  
            clientId ? clientId : null, 
            coordinatorsIds ? JSON.stringify(JSON.parse(coordinatorsIds)) : null,
            saved,
            subTasks,
            payments ? JSON.stringify(JSON.parse(payments)) : null
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