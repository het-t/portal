import makeDbReq from "../db/index.js"
import con from '../db/conDb.js'

export default function notificaitonsWaGetHistory(req, res) {
    const connection = con()
    makeDbReq(
        connection,
        'notifications_wa_get_history(?)', 
        [
            req.userId
        ]
    )
    .then((results) => {
        res.send(results)
    })
    .catch((err) => {
        res.sendStatus(500)
        makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                64,
                24,
                null,
                [err]
            ]
        )
        .catch(err => console.log(err)) 
    })
    .finally(() => {
        connection.end()
    })
}