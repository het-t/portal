import express from 'express'

import auth from '../controllers/auth.js'
import sendResponse from '../controllers/sendResponse.js'

import workDiaryTasks from '../controllers/workDiaryTasks.js'
import workDiarySubTasks from '../controllers/workDiarySubTasks.js'
import workDiaryTasksCount from '../controllers/workDiaryTasksCount.js'

const router = express.Router()

router.get('/', auth, workDiaryTasks, sendResponse )
router.get('/sub-tasks', auth, workDiarySubTasks, sendResponse)
router.get('/count', auth, workDiaryTasksCount, sendResponse)

export default router