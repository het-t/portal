import con from '../../db/conDb.js'
import makeDbReq from '../../db/index.js'

export default function deletePayment(req, res) {
    const taskId = req.params.taskId
    const paymentId = req.params.paymentId

    const connection = con()
    makeDbReq(
        connection,
        `tasks_payments_delete(?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            taskId,
            paymentId
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
                31,
                75,
                paymentId,
                [err]
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}