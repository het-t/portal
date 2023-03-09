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
            .catch(err => {
                console.log(err)
            })
        })
    })
}