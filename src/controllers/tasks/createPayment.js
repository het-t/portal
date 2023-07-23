import con from '../../db/conDb.js'
import makeDbReq from '../../db/index.js'

export default function createPayment(req, res) {
    const taskId = req.params.taskId

    const {
        payments
    } = req.body.params
    
    const connection = con()
    
    makeDbReq(
        connection,
        `tasks_payments_add(?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            taskId,
            payments
        ]
    )
    .then(() => {
        res.sendStatus(200)
    }) 
    .catch(err => {
        console.log(err)
        res.sendStatus(500)
        makeDbReq(
            connection,
            `logs_add(?, ?, ?, ?, ?)`,
            [
                req.userId,
                31,
                73,
                null,
                [err]
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}