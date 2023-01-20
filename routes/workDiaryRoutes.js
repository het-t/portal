import express from 'express'

import auth from '../controllers/auth.js'
import sendResponse from '../controllers/sendResponse.js'

import workDiaryTasks from '../controllers/workDiaryTasks.js'
import workDiarySubTasks from '../controllers/workDiarySubTasks.js'

const router = express.Router()

router.get('/tasks', auth, workDiaryTasks, sendResponse )
router.get('/sub-tasks', auth, workDiarySubTasks, sendResponse)

export default router