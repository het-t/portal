import makeDbReq from '../../../db/index.js'
import convertToWID from './convertToWID.js'

export default function notificationsWaSend(client) {

    makeDbReq('notifications_wa_get()', [])
    .then((results) => {
        results.forEach(ntf => {
            
            ntf.toContact = convertToWID(ntf.toContact)

            client.sendMessage(
                ntf.toContact,
                ntf.content
            )
            .then(() => {
                makeDbReq('notifications_wa_mark_sent(?)', [ntf.id])
            })
            .catch((err) => {
                makeDbReq('notifications_wa_mark_failed(?)', [ntf.id])
                makeDbReq('logs_add(?, ?, ?, ?, ?', [
                    req.userId,
                    62,
                    24,
                    null,
                    [err]
                ])
            })
        })
    })
}