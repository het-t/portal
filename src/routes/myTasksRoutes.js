import express from 'express'

import tasksGetMyTasks from '../controllers/tasksGetMyTasks.js'
import myTasksChangeStatus from '../controllers/tasksMytasksChangeStatus.js'
import tasksMyTasksCount from '../controllers/tasksMyTasksCount.js'
import myTasksChangeTags from '../controllers/myTasksChangeTags.js'

const router = express.Router()

router.get('/count', tasksMyTasksCount)
router.get('/', tasksGetMyTasks)
router.patch('/:taskId/status', myTasksChangeStatus)
router.patch('/:taskId/tags', myTasksChangeTags)

export default router