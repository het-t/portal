import createClient from "../helpers/notifications/whatsapp/createClient.js"
import fs from 'fs/promises'
import qrcode from 'qrcode'

export default function (req, res) {
    const date = Date.now()

    let clientObj = createClient(`${req.orgId}-${date}`, 'for-qr')

    let {client, clientId} = clientObj

    client.once('qr', (qr) => {
        qrcode.toDataURL(qr, (err, url) => {
            if (err) {
                console.log(err)
                res.sendStatus(500)
            }
            else {
                res.send(url)
            }
        })
    })

    client.once('authenticated', () => {
        console.log(`client for ${req.orgId} authenticated`)
    })

    client.once('ready', () => {
        console.log(`client for ${req.orgId} ready`)
        client.destroy()
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            return fs.rename(
                `./auth-for-qr/session-${clientId}`, 
                `./auth-for-use/session-admin-${req.orgId}-${Date.now()}`
            )
        })
    })

    client.initialize()
        .catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
}