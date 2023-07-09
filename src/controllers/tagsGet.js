import con from '../db/conDb.js'
import makeDbReq from '../db/index.js'

export default function tagsGet(req, res) {
    const connection = con()

    makeDbReq(
        connection,
        `tags_master_get(?, ?, ?)`, 
        [
            req.userId,
            req.orgId,
            req.params.tableId
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
                69,
                28,
                req.params.tableId,
                [err]
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}