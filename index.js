import express from 'express'
import cookieParser from 'cookie-parser'
// import path from 'path'
// import {fileURLToPath} from 'url'
import router from './routes/index.js'

import https from 'https'
import fs from 'fs'

var privateKey  = fs.readFileSync('./server.key', 'utf8');
var certificate = fs.readFileSync('./server.cert', 'utf8');
var credentials = {key: privateKey, cert: certificate}

const app = express()

var httpsServer = https.createServer(credentials, app)

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// app.use(express.static(path.join(__dirname, 'dist')))

app.use(cookieParser('secret'))
app.use(express.urlencoded({extended: true}))
app.use(express.json({limit:'5mb'}))


app.use('/u/api', router)
app.use('/api', router)

httpsServer.listen(8181, ()=>{
    console.log("PORT 8181")
})
