import http from 'http'
import fs from 'fs'
import * as dotenv from 'dotenv'
import cors from "cors"
import express from 'express'
import cookieParser from 'cookie-parser'
import router from './routes/index.js'
// import {getClients} from './helpers/notifications/whatsapp/initClient.js'
// import notificationWaSend from './helpers/notifications/whatsapp/notificationsWaSend.js'

//remove below part before creating build
dotenv.config()
//remove above part before creating build

const app = express()

let runningAsProduction = process.env.NODE_MODE === "production"
const origin = runningAsProduction ? process.env.DEV_ORIGIN : process.env.PRO_ORIGIN;

app.use(cors({origin}))

app.use(cookieParser('secret'))
app.use(express.urlencoded({extended: true}))
app.use(express.json({limit:'10mb'}))

app.use('/api', router)

let server = http.createServer(app)

if (runningAsProduction) {
    server.listen()
}
else {
    server.listen(process.env.DEV_PORT)
    console.log(`PORT ${process.env.DEV_PORT}`)
}