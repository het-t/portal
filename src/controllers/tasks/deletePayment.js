import con from '../../db/conDb.js'
import makeDbReq from '../../db/index.js'

export default function deletePayment(req, res) {
    const {
        taskId,
        paymentId
    } = req.params

    const connection = con()
    makeDbReq(
        connection,
        `tasks_payment_remove(?, ?, ?, ?)`,
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
                75,
                31,
                paymentId,
                [err]
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}