import makeDbReq from '../db/index.js'

export default function createWaNotification(req, res) {
    const {
        content,
        userRule,
        clientRule,
        custom
    } = req.body.params

    console.log(custom)
    makeDbReq('notifications_wa_add(?, ?, ?, ?, ?)', [
        req.userId,
        userRule,
        clientRule,
        custom,
        content
    ])
    .then((results) => {
        console.log(results)
        res.sendStatus(200)
    })
    .catch(err => {
        makeDbReq('logs_add(?, ?, ?, ?, ?', [
            req.userId,
            57,
            24,
            null,
            [err]
        ])
        res.sendStatus(500)
    }) 
}