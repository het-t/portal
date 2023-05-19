import makeDbReq from '../db/index.js'

export default function setNotificationConsent(req, res) {
    const { ntfId, consent } = req.body.params

    makeDbReq('notifications_set_consent(?, ?, ?, ?)', [
        req.userId,
        0,
        ntfId,
        consent
    ])
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            63,
            24,
            ntfId,
            [err]
        ])
        .catch(err => console.log(err))
    })
}