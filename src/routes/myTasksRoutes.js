import express from 'express'

import getcount from '../controllers/my-tasks/getCount.js'
import getList from '../controllers/my-tasks/getList.js'
import changeStatus from '../controllers/my-tasks/changeStatus.js'
import changeTags from '../controllers/my-tasks/changeTag.js'

const router = express.Router()

router.get('/count', getcount)
router.get('/', getList)
router.patch('/:taskId/status', changeStatus)
router.patch('/:taskId/tags', changeTags)

export default router