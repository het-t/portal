import express from 'express'

import workDiaryTasks from '../controllers/workDiaryTasks.js'
import workDiarySubTasks from '../controllers/workDiarySubTasks.js'
import workDiaryTasksCount from '../controllers/workDiaryTasksCount.js'

const router = express.Router()

router.get('/count', workDiaryTasksCount)
router.get('/:userId/:taskId', workDiarySubTasks)
router.get('/:userId', workDiaryTasks)

export default router