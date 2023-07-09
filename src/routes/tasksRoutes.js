import express from 'express'

import createTask from '../controllers/taskCreate.js'

import sendResponse from '../controllers/sendResponse.js'

import getSubTasks from '../controllers/subTasksList.js'
import getTasks from '../controllers/tasksList.js'
import getTaskData from '../controllers/tasksData.js'
import tasksCount from '../controllers/tasksCount.js'
import editTask from '../controllers/taskEdit.js'
import getTaskLogs from '../controllers/tasksLogs.js'
import deleteTask from '../controllers/taskDelete.js'
import createTaskMaster from '../controllers/tasksMasterCreate.js'
import changeStatusTask from '../controllers/taskChangeStatus.js'

const router = express.Router()

router.get('/count', tasksCount)
router.get('/:id/sub-tasks', getSubTasks)
router.get('/:id', getTaskData, getTaskLogs, sendResponse)
router.get('/', getTasks)
router.post('/', createTaskMaster, createTask)
router.patch('/:id', changeStatusTask)
router.put('/:id', createTaskMaster, editTask)
router.delete('/:id', deleteTask)

export default router