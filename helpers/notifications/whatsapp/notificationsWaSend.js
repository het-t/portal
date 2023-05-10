import makeDbReq from "../../../db/index.js";
import convertToWid from './convertToWID.js'
import {initClient} from './initClient.js'

export default function notificationWaSend() {
console.log("job started")
    makeDbReq('notifications_wa_get();', [])
    .then(notifications => {
        for(let ntfObject of notifications) {   

            let clientReadyPromise = initClient(ntfObject.orgId)

            clientReadyPromise
            .then((client) => {
                ntfObject.notifications.map((ntf) => {
                    let contact = convertToWid(ntf.toContact)
    
                    return client.sendMessage(contact, ntf.content)
                    .then(() => {
                        return makeDbReq(`notifications_wa_mark_sent(?)`, [ntf.id])
                    })
                    .catch(err => {
                        return makeDbReq(`notifications_wa_mark_failed(?)`, [ntf.id])
                    })
                });
            })
            .catch(err => {
                console.log(err)
            })
        }
    })
}