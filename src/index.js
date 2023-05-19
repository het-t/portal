import http from 'http'
import fs from 'fs'
import * as dotenv from 'dotenv'
import cors from "cors"
import express from 'express'
import cookieParser from 'cookie-parser'
import router from './routes/index.js'
// import {getClients} from './helpers/notifications/whatsapp/initClient.js'
// import notificationWaSend from './helpers/notifications/whatsapp/notificationsWaSend.js'
import {join} from 'path'
import * as url from 'url';
// const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express()

// dotenv.config()
app.use(cors({origin: "https://corporatetasks.com/"}))

app.use(cookieParser('secret'))
app.use(express.urlencoded({extended: true}))
app.use(express.json({limit:'10mb'}))

app.use('/api', router)



let options = {
    key: fs.readFileSync('./ssl/corporatetasks.com_privatekey.key'),
    cert: fs.readFileSync('./ssl/combined.crt'),
    ca: [
        fs.readFileSync('./ssl/CerteraDVSSLCA.crt'),
        fs.readFileSync('./ssl/USERTrustRSAAAACA.crt'),
        fs.readFileSync('./ssl/AAACertificateServices.crt')
    ]
}

let server = http.createServer(app)

server.listen()