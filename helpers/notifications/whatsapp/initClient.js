import createClient from "./createClient.js"
import getLatestFolder from "./getLatestFolder.js"

let clients = {}
let flagToDestroyClient = true

export function initClient(orgId) {
    let latestFolder = getLatestFolder(orgId, 'for-use')

    if (clients?.[orgId] && latestFolder && clients?.[orgId]?.authStrategy.clientId === latestFolder) {
        console.log(`=> latestSession ${orgId} ${latestFolder}`)
        return Promise.resolve(clients[orgId])
    }
    else return new Promise((resolve, reject) => {

        let {client, clientId} = createClient(orgId, 'for-use')
    
        if (clientId) {
            client.on('qr', () => {
                // destroyClient.call(client)
                     
                reject(`${orgId} NOT_AUTHORISED`)
            })
        
            client.on('authenticated', () => console.log('client authenticated'))
        
            client.on('auth_failure', () => {
                
                // destroyClient.call(client)
                    
                              
                reject(`${orgId} AUTH_FAILURE`)
            })
        
            client.on('ready', () => {
                clients[orgId] = client
                console.log(`${orgId} READY`)
                resolve(client)
            })
        
            client.initialize()
            .catch(err => {
                // destroyClient.call(client)
                console.error(err)
            })
        }
        else {
            reject(`${orgId} SESSION_NOT_FOUND`)
        }
        
    })
}

function destroyClient() {
    if (flagToDestroyClient === true) {
        this.destroy()
        try {
            this.destroy()
        }
        catch (err) {
            console.log(err)
        }
    }
}

export function getClients() {
    return clients
}