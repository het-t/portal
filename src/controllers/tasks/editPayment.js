import con from '../../db/conDb.js'
import makeDbReq from '../../db/index.js'

export default function editPayment (req, res) {
    const {
        taskId,
        paymentId
    } = req.params

    const {
        details,
        amount,
        receivedAt,
    } = req.body.params
    
    const connection = con()
    
    makeDbReq(
        connection,
        `tasks_payment_edit(?, ?, ?, ?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            taskId,
            paymentId,
            details ? details : '',
            amount ? amount : 0,
            receivedAt ? receivedAt : null
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
                74,
                31,
                taskId,
                [err]
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}