import makeDbReq from "../db/index.js";
import con from '../db/conDb.js'

export default function settingsDataSet(req, res) {

    const connection = con()
    makeDbReq(
        connection,
        `settings_set(?, ?)`, 
        [
            req.userId,
            JSON.stringify(req.body.params)
        ]
    )
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)',
            [
                req.userId,
                52,
                27,
                req.body.params.key,
                [err]
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}