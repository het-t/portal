import express from 'express'

import getCount from '../controllers/work-diary/getCount.js'
import getSubTasks from '../controllers/work-diary/getSubTasks.js'
import getTasks from '../controllers/work-diary/getTasks.js'

const router = express.Router()

router.get('/count', getCount)
router.get('/:userId/:taskId', getSubTasks)
router.get('/:userId', getTasks)

export default router