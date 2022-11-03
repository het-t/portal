import express from 'express'

import usersCount from '../controllers/userCount.js'
import createUser from '../controllers/userCreate.js'
import editUser from '../controllers/userEdit.js'
import getAllUsers from '../controllers/userList.js'
import getEditUser from '../controllers/userData.js'


import getRoles from '../controllers/roleList.js'

import auth from '../controllers/auth.js'
import addLog from '../controllers/logs.js'

const router = express.Router()

router.post('/create-user', auth, createUser, addLog)
router.get('/', auth, getAllUsers, addLog)
router.get('/get-roles', auth, getRoles, addLog)
router.get('/edit', auth, getEditUser)
router.post('/edit-user', auth, editUser, addLog)
router.get('/count', auth, usersCount)

export default router