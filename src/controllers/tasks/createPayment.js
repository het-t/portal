import con from '../../db/conDb.js'
import makeDbReq from '../../db/index.js'

export default function (req, res) {
    const taskId = req.params.taskId

    const {
        amount,
        subTaskId,
        title,
        comments,
        type,
        receivedAt
    } = req.body.params

    const connection = con()
    
    makeDbReq(
        connection,
        `task_payment_add(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            taskId,
            subTaskId ? subTaskId : null,
            amount,
            title,
            comments,
            type,
            receivedAt
        ]
    )
    .then((results) => {
        res.send({createdPaymentId: results[0].createdPaymentId})
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