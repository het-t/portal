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

const app = express()

app.use('/', generalRoutes)
app.use('/users', usersRoutes)
app.use('/roles', rolesRoutes)
app.use('/activity', activityRoutes)
app.use('/clients', clientRoutes)
app.use('/tasks', tasksRoutes)
app.use('/myTasks', myTasksRoutes)
app.use('/workDiary', workDiaryRoutes)
app.use('/settings', settingsRoutes)
app.use('/orgs', organizationsRoutes)
app.get('/test', (req, res) => res.json("harleys in hawaii"))

export default app;