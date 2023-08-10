import makeDbReq from '../../db/index.js';
import con from '../../db/conDb.js';

export default function (req, res) {
    const connection = con()

    makeDbReq(
        connection,
        `tasks_payments_graph_data(?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            req.params.taskId
        ]
    )
    .then((results) => {
        res.send(results)
    })
    .catch(err => {
        res.sendStatus(500)
        console.log(err)
    })
    .finally(() => {
        connection.end()
    })
}