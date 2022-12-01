import express from 'express'

import auth from '../controllers/auth.js'
import addLog from '../controllers/logs.js'

import tasksGetMyTasks from '../controllers/tasksGetMyTasks.js'
import tasksMyTasksCount from '../controllers/tasksMyTasksCount.js'

const router = express.Router()

router.get('/count', auth, tasksMyTasksCount, addLog )
router.get('/', auth, tasksGetMyTasks, addLog)

export default router