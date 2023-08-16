import express from 'express'

import createTask from '../controllers/tasks/create.js'
import getTasksList from '../controllers/tasks/getList.js'
import deleteTask from '../controllers/tasks/delete.js'
import getTaskData from '../controllers/tasks/getData.js'
import getTasksCount from '../controllers/tasks/getCount.js'
import editTask from '../controllers/tasks/edit.js'
import getTaskLogs from '../controllers/tasks/getLogs.js'
import changeTaskStatus from '../controllers/tasks/changeStatus.js'

import commentsGet from '../controllers/tasks/commentsGet.js'
import commentAdd from '../controllers/tasks/commentsAdd.js'

import getTaskPayments from '../controllers/tasks/getPayments.js'
import createTaskPayment from '../controllers/tasks/createPayment.js'
import editTaskPayment from '../controllers/tasks/editPayment.js'
import deleteTaskPayment from '../controllers/tasks/deletePayment.js'

import getList from '../controllers/sub-tasks/getList.js'
import deleteSubTask from '../controllers/sub-tasks/detete.js'
import addSubTask from '../controllers/sub-tasks/create.js'
import editSubTask from '../controllers/sub-tasks/edit.js'
import pinStatusUpdate from '../controllers/sub-tasks/pinStatusUpdate.js'

import createTaskTemplate from '../controllers/task-templates/create.js'

import teamRemoveUser from '../controllers/tasks/teamRemoveUser.js'
import teamAddUser from '../controllers/tasks/teamAddUser.js'
import teamGet from '../controllers/tasks/teamGet.js'

import changeStatus from '../controllers/sub-tasks/changeStatus.js'
import delegationGet from '../controllers/sub-tasks/delegationGet.js'
import delegationAdd from '../controllers/sub-tasks/delegationAdd.js'
import delegationRemove from '../controllers/sub-tasks/delegationRemove.js'
import delegationEdit from '../controllers/sub-tasks/delegationEdit.js'
import paymentGraphData from '../controllers/tasks/paymentGraphData.js'


import tagAdd from '../controllers/sub-tasks/tagAdd.js'
import tagRemove from '../controllers/sub-tasks/tagRemove.js'

const router = express.Router()

router.get('/count', getTasksCount)
router.get('/:taskId/sub-tasks/:subTaskId/delegation', delegationGet)
router.get('/:taskId/payments/graph', paymentGraphData)
router.get('/:taskId/payments', getTaskPayments)
router.get('/:taskId/team', teamGet)
router.get('/:id/sub-tasks', getList)
router.get('/:taskId/comments', commentsGet)
router.get('/:id/logs', getTaskLogs)
router.get('/:id', getTaskData)
router.get('/', getTasksList)

router.post('/:taskId/sub-tasks/:subTaskId/delegation', delegationAdd)
router.post('/:taskId/sub-tasks', addSubTask)
router.post('/:taskId/payments', createTaskPayment)
router.post('/:taskId/comments', commentAdd)
router.post('/:taskId/team/:userId', teamAddUser)

router.post('/', createTask)

router.put('/:taskId/sub-tasks/:subTaskId/delegation/', delegationEdit)
router.put('/:taskId/sub-tasks/:subTaskId/tags/:tagId', tagAdd)
router.put('/:taskId/payments/:paymentId', editTaskPayment)
router.put('/:id', createTaskTemplate, editTask)

router.patch('/:id', changeTaskStatus)
router.patch('/:taskId/sub-tasks/:subTaskId/status', changeStatus)
router.patch('/:taskId/sub-tasks/:subTaskId/description', editSubTask)
router.patch('/:taskId/sub-tasks/:subTaskId/pin', pinStatusUpdate)

router.delete('/:taskId/sub-tasks/:subTaskId/delegation/', delegationRemove)
router.delete('/:taskId/sub-tasks/:subTaskId/tags/:tagId', tagRemove)
router.delete('/:taskId/sub-tasks/:subTaskId', deleteSubTask)
router.delete('/:taskId/payments/:paymentId', deleteTaskPayment)
router.delete('/:taskId/team/:userId', teamRemoveUser)
router.delete('/:id', deleteTask)

export default router