import express from 'express'

import getCount from '../controllers/task-templates/getCount.js'
import getList from '../controllers/task-templates/getList.js'
import getData from '../controllers/task-templates/getData.js'
import getSubTasks from '../controllers/task-templates/getSubTasks.js'
import edit from '../controllers/task-templates/edit.js'
import del from '../controllers/task-templates/delete.js'

const router = express.Router()

router.get('/count', getCount)
router.get('/', getList)
router.get('/:id/data', getData)
router.get('/:id', getSubTasks)
router.put('/:id', edit)
router.delete('/:id', del)

export default router