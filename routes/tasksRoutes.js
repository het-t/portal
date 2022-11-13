import express from 'express'

import getAllUsers from '../controllers/userList.js'
import createTask from '../controllers/taskCreate.js'

import auth from '../controllers/auth.js'
import addLog from '../controllers/logs.js'

const router = express.Router()

router.get('/', auth, getAllUsers, addLog)
router.get('/create-task', auth, createTask, addLog)

export default router