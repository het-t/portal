import express from 'express'

import usersCount from '../controllers/userCount.js'
import createUser from '../controllers/userCreate.js'
import editUser from '../controllers/userEdit.js'
import getAllUsers from '../controllers/userList.js'
import getEditUser from '../controllers/userData.js'
import deleteUser from '../controllers/userDelete.js'

import getRoles from '../controllers/roleList.js'

import auth from '../controllers/auth.js'
import sendResponse from '../controllers/sendResponse.js'

const router = express.Router()

router.post('/create-user', auth, createUser, sendResponse)
router.get('/', auth, getAllUsers, sendResponse)
router.get('/get-roles', auth, getRoles, sendResponse)
router.get('/edit', auth, getEditUser,sendResponse)
router.post('/edit-user', auth, editUser, sendResponse)
router.get('/count', auth, usersCount, sendResponse)
router.post('/delete-user', auth, deleteUser, sendResponse)

export default router