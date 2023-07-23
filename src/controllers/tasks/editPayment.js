import con from '../../db/conDb.js'
import makeDbReq from '../../db/index.js'

export default function editPayment (req, res) {
    const taskId = req.params.taskId
    const paymentId = req.params.paymentId

    const {
        details,
        amount,
        receivedAt,
        tags
    } = req.body.params
    
    const connection = con()
    makeDbReq(
        connection,
        `tasks_payments_edit(?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            taskId,
            paymentId,
            details ? details : '',
            amount ? amount : 0,
            receivedAt ? receivedAt : null,
            tags ? tags : null
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
                74,
                taskId,
                [err]
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}