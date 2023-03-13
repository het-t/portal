import makeDbReq from '../db/index.js'

export default function createWaNotification(req, res) {
    const {
        content,
        rule
    } = req.body.params

    makeDbReq('notifications_wa_add(?, ?, ?)', [
        req.userId,
        JSON.stringify(rule),
        content
    ])
    .then(() => {
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

// line 20-21 changes are pending in server
