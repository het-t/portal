import express from 'express'
import tasksMasterCount from '../controllers/tasksMasterCount.js'
import getTasksMaster from '../controllers/tasksMasterList.js'
import getSubTasksMaster from '../controllers/tasksSubTasksMasterList.js'
import tasksMasterGetData from '../controllers/tasksMasterGetData.js'
import editSubTasksMaster from '../controllers/tasksMasterEdit.js'
import tasksMasterDelete from '../controllers/tasksMasterDelete.js'

const router = express.Router()

router.get('/count', tasksMasterCount)
router.get('/', getTasksMaster)
router.get('/:id/data', tasksMasterGetData)
router.get('/:id', getSubTasksMaster)
router.put('/:id', editSubTasksMaster)
router.delete('/:id', tasksMasterDelete)

export default router