import createClient from "../helpers/notifications/whatsapp/createClient.js"
import fs from 'fs/promises'
import qrcode from 'qrcode'

export default function (req, res) {
    const date = Date.now()

    let clientObj = createClient(`${req.orgId}-${date}`, 'for-qr')

    let {client, clientId} = clientObj

    console.log(`${clientId} auth kickstart in notificationsWaQr`)

    client.on('qr', (qr) => {
        console.log(`${clientId} qr sent`)

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

    client.on('authenticated', () => {
        console.log(`client for ${clientId} authenticated`)
    })

    client.on('auth_failure', (error) => {
        console.log(`${clientId} Authentication failure: ${error}`);
    });
    
    client.on('ready', () => {
        console.log(`client for ${clientId} ready`)
    client.sendMessage('8849210989@c.use', "working ");

        // return fs.rename(
        //     `./auth-for-qr/session-${clientId}`, 
        //     `./auth-for-use/session-admin-${req.orgId}-${Date.now()}`
        // ).then(() => {
        //     console.log('File renamed successfully');
        //     client.destroy()
        //         .catch(err => {
        //             console.log(err)
        //         });
        // }).catch(err => {
        //     console.log(err);
        // });
        // client.destroy()
        // .catch(err => {
        //     console.log(err)
        // })
        // .finally(() => {
        //     return fs.rename(
        //         `./auth-for-qr/session-${clientId}`, 
        //         `./auth-for-use/session-admin-${req.orgId}-${Date.now()}`
        //     )
        // })
    })

    
    client.initialize()
    //     .catch(err => {
    //     console.log(err)
    // })
}