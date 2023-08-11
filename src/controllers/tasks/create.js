import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

/**
 * create task
 * @param {*} req 
 * @param {*} res 
 */

export default function createTask (req, res) {

    let {
        templateId, 
        title, 
        description,
        fees, 
        clientId,
    } = req.body.params

    const connection = con()
    makeDbReq(
        connection,
        `task_create(?, ?, ?, ?, ?, ?, ?)`,
        [
            req.userId, 
            req.orgId,
            templateId ? templateId : null, 
            title, 
            description, 
            fees ? fees : null,
            clientId ? clientId : null
        ]
    )
    .then((results) => { 
        res.send({createdTaskId: results[0].createdTaskId})
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