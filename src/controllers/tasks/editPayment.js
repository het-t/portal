import con from '../../db/conDb.js'
import makeDbReq from '../../db/index.js'

export default function editPayment (req, res) {
    const {
        taskId,
        paymentId
    } = req.params

    const {
        subTaskId,
        title,
        comments,
        amount,
        receivedAt,
        type
    } = req.body.params
    
    const connection = con()

    makeDbReq(
        connection,
        `task_payment_edit(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            taskId,
            subTaskId ? subTaskId : null,
            paymentId,
            type,
            title,
            amount ? amount : 0,
            comments,
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