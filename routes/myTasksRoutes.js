import express from 'express'

import auth from '../controllers/auth.js'
import sendResponse from '../controllers/sendResponse.js'

import tasksGetMyTasks from '../controllers/tasksGetMyTasks.js'
import myTasksChangeStatus from '../controllers/tasksMytasksChangeStatus.js'
import tasksMyTasksCount from '../controllers/tasksMyTasksCount.js'

const router = express.Router()

router.get('/count', auth, tasksMyTasksCount, sendResponse )
router.get('/', auth, tasksGetMyTasks, sendResponse)
router.get('/change-status', auth, myTasksChangeStatus, sendResponse)

export default router