import waweb from "whatsapp-web.js"
import getLatestFolder from "./getLatestFolder.js"

let {Client, LocalAuth} = waweb


export default function createClient (orgId, usecase) {

    let clientId = `admin-${orgId}`
    if (usecase === 'for-use') clientId = getLatestFolder(orgId, usecase)
    
    const client = new Client({
        authStrategy: new LocalAuth({
            clientId,
            dataPath: `./auth-${usecase}`
        }),
        puppeteer: { 
            handleSIGINT: false,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-gpu'
            ]
        },
        takeoverOnConflict: true
    })

    return {client, clientId}
}