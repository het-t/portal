import * as dotenv from 'dotenv'
import express from 'express'
import cookieParser from 'cookie-parser'
import router from './routes/index.js'
import {getClients} from './helpers/notifications/whatsapp/initClient.js'
import notificationWaSend from './helpers/notifications/whatsapp/notificationsWaSend.js'
import {join} from 'path'
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express()

dotenv.config()

app.use(cookieParser('secret'))
app.use(express.urlencoded({extended: true}))
app.use(express.json({limit:'10mb'}))

app.use(express.static(join(__dirname, './dist')))

app.use('/u/api', router)
app.use('/api', router)

app.listen(process.env.PORT, () => {
    // notificationWaSend()
    setInterval(notificationWaSend, 1000*30)
    console.log(`PORT ${process.env.PORT}`)
})

process.on('SIGINT', () => {
    let clients = getClients()

    console.log(clients)
    for (let client in clients) {
        client.destroy()
    }

    process.exit(0)
})