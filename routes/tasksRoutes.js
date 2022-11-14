import express from 'express'

import getAllUsers from '../controllers/userList.js'
import createTask from '../controllers/taskCreate.js'
import createSubTasks from '../controllers/taskSubTasksCreate.js'

import auth from '../controllers/auth.js'
import addLog from '../controllers/logs.js'
import getSubTasks from '../controllers/subTasksList.js'
import getTasks from '../controllers/tasksList.js'

const router = express.Router()

router.get('/', auth, getTasks, addLog)
router.get('/create-task', auth, createTask, createSubTasks, addLog)
router.get('/get-sub-tasks', auth, getSubTasks, addLog)

export default router