import makeDbReq from '../db/index.js'
import con from '../db/conDb.js'

export default function setNotificationConsent(req, res) {
    const { ntfId, consent } = req.body.params
    const connection = con()
    makeDbReq(
        connection,
        'notifications_set_consent(?, ?, ?, ?)',
        [
            req.userId,
            0,
            ntfId,
            consent
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
                63,
                24,
                ntfId,
                [err]
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}