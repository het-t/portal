import makeDbReq from '../db/index.js'
import con from '../db/conDb.js'

export default function organizationsCreate(req, res) {
    let { name } = req.body.params

    const connection = con()
    makeDbReq(
        connection,
        'organizations_create(?, ?)', 
        [
            req.userId,
            name
        ]
    )
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        res.sendStatus(500)
    })
    .finally(() => {
        connection.end()
    })
}