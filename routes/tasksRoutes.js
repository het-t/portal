import express from 'express'

import createTask from '../controllers/taskCreate.js'
import createSubTasks from '../controllers/taskSubTasksCreate.js'

import auth from '../controllers/auth.js'
import addLog from '../controllers/logs.js'
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

const router = express.Router()

router.get('/', auth, getTasks, addLog)
router.get('/get-task-data', auth, getTaskData, getTaskLogs, addLog)
router.get('/create-task', auth, createTaskMaster, createTask, createSubTasks, addLog)
router.get('/get-sub-tasks', auth, getSubTasks, addLog)
router.get('/get-tasks-master', auth, getTasksMaster, addLog)
router.get('/get-sub-tasks-master', auth, getSubTasksMaster, addLog)
router.get('/count', auth, tasksCount, addLog)
router.get('/edit-task', auth, createTaskMaster, editTask, editSubTasks, addLog)
router.get('/edit-task-master', auth, editTaskMaster, addLog)
router.post('/delete-task', auth, deleteTask, addLog)

export default router