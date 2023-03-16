import makeDbReq from '../db/index.js'

export default function createWaNotification(req, res) {
    const {
        content,
        userRule,
        clientRule,
        custom
    } = req.body.params

    makeDbReq('notifications_wa_add(?, ?, ?, ?, ?)', [
        req.userId,
        userRule,
        clientRule,
        custom,
        content
    ])
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        makeDbReq(`logs_add(?, ?, ?, ?, ?)`, [
            req.userId,
            57,
            24,
            null,
            [err]
        ])
        .catch(err => console.log(err))
        res.sendStatus(500)
    }) 
}