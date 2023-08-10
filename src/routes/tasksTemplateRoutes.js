import express from 'express'

import getCount from '../controllers/task-templates/getCount.js'
import getList from '../controllers/task-templates/getList.js'
import getData from '../controllers/task-templates/getData.js'
import getSubTasks from '../controllers/task-templates/getSubTasks.js'
import createTaskTemplate from '../controllers/task-templates/create.js'
import edit from '../controllers/task-templates/edit.js'
import del from '../controllers/task-templates/delete.js'

const router = express.Router()

router.get('/count', getCount)
router.get('/', getList)

//merge these both sp's into one
//reason: in new ui there is no need to make 
//these requests separate
router.get('/:id/data', getData)
router.get('/:id', getSubTasks)

router.post('/', createTaskTemplate)

router.put('/:id', edit)

router.delete('/:id', del)

export default router