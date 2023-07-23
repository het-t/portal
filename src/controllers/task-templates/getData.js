import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

export default function tasksMasterGetData(req, res) {
    const taskMasterId = req.params.id 
    const connection = con()
    makeDbReq(
        connection,
        `tasks_master_get_data(?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            taskMasterId
        ]
    )
    .then((results) => {
        res.send(results)
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            `logs_add(?, ?, ?, ?, ?)`, 
            [
                req.userId,
                68,
                12,
                taskMasterId,
                [err]
            ]
        )
    })
    .finally(() => {
        connection.end()
    }) 
}