import makeDbReq from '../db/index.js'
import con from '../db/conDb.js'

export default function organizationsCount(req, res) {
    const connection = con()
    makeDbReq(
        connection,
        'organizations_count(?)', 
        [
            req.userId,
        ]
    )
    .then((results) => res.send({
        count: results[0].count
    }))
    .catch((err) => {
        res.sendStatus(500)
    })
    .finally(() => {
        connection.end()
    })
}