import waweb from 'whatsapp-web.js'
import qrcode from 'qrcode-terminal'

const { Client, LocalAuth } = waweb

export default function createClient() {
    return new Promise((resolve, reject) => {
        const client = new Client({
            authStrategy: new LocalAuth(),
            puppeteer: { handleSIGINT: false}
        })
    
        client.once('qr', (qr) => {
            qrcode.generate(qr, {small: true}, (qr) => {
                console.log(qr)
            })
        })
        
        client.once('ready', () => {
            console.log("ready")
            resolve(client)
        })
        
        process.once('SIGINT', () => {
            client.destroy()
            .then(() => {
                process.exit(0)
            })
        })
        
        client.initialize()
    })
}