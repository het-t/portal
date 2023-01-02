import express from 'express'
import cookieParser from 'cookie-parser'
<<<<<<< HEAD
import {indexRoutes} from './routes/indexRoutes.js'
import {userRoutes} from './routes/userRoutes.js'
import path from 'path'
import {fileURLToPath} from 'url'
=======
import path from 'path'
import {fileURLToPath} from 'url'
import router from './routes/index.js'
>>>>>>> review_2

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, 'dist')))

app.use(cookieParser('secret'))
app.use(express.urlencoded({extended: true}))
app.use(express.json({limit:'5mb'}))

<<<<<<< HEAD
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, 'dist')))

app.use('/u/api', userRoutes)
app.use('/api', indexRoutes)
=======

app.use('/u/api', router)
app.use('/api', router)
>>>>>>> review_2

app.listen(8181, ()=>{
    console.log("PORT 8181")
})
