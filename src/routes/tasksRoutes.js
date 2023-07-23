import express from 'express'

import createTask from '../controllers/tasks/create.js'
import getTasksList from '../controllers/tasks/getList.js'
import deleteTask from '../controllers/tasks/delete.js'
import getTaskData from '../controllers/tasks/getData.js'
import getTasksCount from '../controllers/tasks/getCount.js'
import editTask from '../controllers/tasks/edit.js'
import getTaskLogs from '../controllers/tasks/getLogs.js'
import getTaskPayments from '../controllers/tasks/getPayments.js'
import changeTaskStatus from '../controllers/tasks/changeStatus.js'

import getList from '../controllers/sub-tasks/getList.js'

import createTaskTemplate from '../controllers/task-templates/create.js'

const router = express.Router()

router.get('/count', getTasksCount)

router.get('/:id/sub-tasks', getList)
router.get('/:id/logs', getTaskLogs)
router.get('/:id/payments', getTaskPayments)
router.get('/:id', getTaskData)
router.get('/', getTasksList)

router.post('/', createTaskTemplate, createTask)

router.patch('/:id', changeTaskStatus)

router.put('/:id', createTaskTemplate, editTask)

router.delete('/:id', deleteTask)

export default router