import makeDbReq from '../db/index.js'
import con from '../db/conDb.js'

export default function settingsDataGet(req, res) {

    const connection = con()
    makeDbReq(
        connection,
        `settings_get(?, ?)`,
        [
            req.userId,
            parseInt(req.query.pageId)
        ]
    )
    .then(results => {
        res.send(results)
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                51,
                27,
                null,
                [err]
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}