import makeDbReq from "../db/index.js"

export default function notificaitonsWaGetHistory(req, res) {
    makeDbReq('notifications_wa_get_history(?)', [
        req.userId
    ])
    .then((results) => {
        res.send(results)
    })
    .catch((err) => {
        res.sendStatus(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            64,
            24,
            null,
            [err]
        ])
        .catch(err => console.log(err)) 
    })
}