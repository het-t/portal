import con from '../../db/conDb.js'
import makeDbReq from '../../db/index.js'

export default function createPayment(req, res) {
    const taskId = req.params.taskId

    const payments = JSON.stringify(req.body.params.payments)

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
    .then((results) => {
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
                73,
                31,
                null,
                [err]
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}