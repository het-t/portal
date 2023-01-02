import express from 'express'

import createTask from '../controllers/taskCreate.js'
import createSubTasks from '../controllers/taskSubTasksCreate.js'

import auth from '../controllers/auth.js'
import sendResponse from '../controllers/sendResponse.js'

import getSubTasks from '../controllers/subTasksList.js'
import getTasks from '../controllers/tasksList.js'
import getTaskData from '../controllers/tasksData.js'
import getTasksMaster from '../controllers/tasksMasterList.js'
import getSubTasksMaster from '../controllers/tasksSubTasksMasterList.js'
import tasksCount from '../controllers/tasksCount.js'
import editTask from '../controllers/taskEdit.js'
import editTaskMaster from '../controllers/taskMasterEdit.js'
import getTaskLogs from '../controllers/tasksLogs.js'
import editSubTasks from '../controllers/tasksSubTaskEdit.js'
import deleteTask from '../controllers/taskDelete.js'
import createTaskMaster from '../controllers/tasksMasterCreate.js'
import changeStatusTask from '../controllers/taskChangeStatus.js'

const router = express.Router()

router.get('/', auth, getTasks, sendResponse)
router.get('/get-task-data', auth, getTaskData, getTaskLogs, sendResponse)
router.get('/create-task', auth, createTaskMaster, createTask, createSubTasks, sendResponse)
router.get('/get-sub-tasks', auth, getSubTasks, sendResponse)
router.get('/get-tasks-master', auth, getTasksMaster, sendResponse)
router.get('/get-sub-tasks-master', auth, getSubTasksMaster, sendResponse)
router.get('/count', auth, tasksCount, sendResponse)
router.get('/edit-task', auth, createTaskMaster, editTask, editSubTasks, sendResponse)
router.get('/edit-task-master', auth, editTaskMaster, sendResponse)
router.post('/delete-task', auth, deleteTask, sendResponse)
router.post('/change-status', auth, changeStatusTask, sendResponse)

export default router