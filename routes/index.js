import express from 'express'

import generalRoutes from './generalRoutes.js'
import usersRoutes from './usersRoutes.js'
import rolesRoutes from './rolesRoutes.js'
import activityRoutes from './activityRoutes.js'
import clientRoutes from './clientsRoutes.js'

const app = express()

app.use('/', generalRoutes)
app.use('/users', usersRoutes)
app.use('/roles', rolesRoutes)
app.use('/activity', activityRoutes)
app.use('/clients', clientRoutes)

export default app;