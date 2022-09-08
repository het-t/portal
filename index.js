import express from 'express'
import cookieParser from 'cookie-parser'
import {indexRoutes} from './routes/indexRoutes.js'
import {userRoutes} from './routes/userRoutes.js'

const app = express()

app.use(cookieParser('secret'))
app.use(express.urlencoded({extended: true}))
app.use(express.json({limit:'5mb'}))

app.use('/u/api', userRoutes)
app.use('/api', indexRoutes)

app.listen(8181, ()=>{
    console.log("PORT 8181")
})