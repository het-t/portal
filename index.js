import express from 'express'
import cookieParser from 'cookie-parser'
import {indexRoutes} from './routes/indexRoutes.js'
import {userRoutes} from './routes/userRoutes.js'
import path from 'path'
import {fileURLToPath} from 'url'

const app = express()

app.use(cookieParser('secret'))
app.use(express.urlencoded({extended: true}))
app.use(express.json({limit:'5mb'}))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, 'dist')))

app.use('/u/api', userRoutes)
app.use('/api', indexRoutes)

app.listen(8181, ()=>{
    console.log("PORT 8181")
})