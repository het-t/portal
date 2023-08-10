import express from 'express'

import generalRoutes from './generalRoutes.js'
import usersRoutes from './usersRoutes.js'
import rolesRoutes from './rolesRoutes.js'
import activityRoutes from './activityRoutes.js'
import clientRoutes from './clientsRoutes.js'
import tasksRoutes from './tasksRoutes.js'
import myTasksRoutes from './myTasksRoutes.js'
import workDiaryRoutes from './workDiaryRoutes.js'
import settingsRoutes from './settingsRoutes.js'
import organizationsRoutes from './organizationsRoutes.js'
import chatInternalRoutes from './chatInternalRoutes.js'
import tasksTemplateRoutes from './tasksTemplateRoutes.js'
import rightsList from '../controllers/rightsList.js'
import tags from './tags.js'

import auth from '../controllers/general/auth.js'

const app = express()

app.use('/', generalRoutes)
app.use('/tags', auth, tags)
app.use('/users', auth, usersRoutes)
app.use('/roles', auth, rolesRoutes)
app.use('/activities', auth, activityRoutes)
app.use('/clients', auth, clientRoutes)
app.use('/tasks', auth, tasksRoutes)
app.use('/tasksMaster', auth, tasksTemplateRoutes)
app.use('/myTasks', auth, myTasksRoutes)
app.use('/workDiary', auth, workDiaryRoutes)
app.use('/settings', auth, settingsRoutes)
app.use('/orgs', organizationsRoutes)
app.use('/chat', auth, chatInternalRoutes)
app.get('/rights/', auth, rightsList)

app.get('/test', (req, res) => res.send("harleys in hawaii"))

export default app;