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
import tasksGetMyTasks from '../controllers/tasksGetMyTasks.js'
import tasksCount from '../controllers/tasksCount.js'

const router = express.Router()

router.get('/', auth, getTasks, addLog)
router.get('/get-task-data', auth, getTaskData, addLog)
router.get('/create-task', auth, createTask, createSubTasks, addLog)
router.get('/get-sub-tasks', auth, getSubTasks, addLog)
router.get('/get-tasks-master', auth, getTasksMaster, addLog)
router.get('/get-sub-tasks-master', auth, getSubTasksMaster, addLog)
router.get('/get-my-tasks', auth, tasksGetMyTasks, addLog)
router.get('/count', auth, tasksCount, addLog)

export default router