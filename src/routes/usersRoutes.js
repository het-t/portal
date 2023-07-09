import express from 'express'

import usersCount from '../controllers/userCount.js'
import createUser from '../controllers/userCreate.js'
import editUser from '../controllers/userEdit.js'
import getAllUsers from '../controllers/userList.js'
import getEditUser from '../controllers/userData.js'
import deleteUser from '../controllers/userDelete.js'
import userRightsList from '../controllers/userRightsList.js'

import getRoles from '../controllers/roleList.js'

const router = express.Router()

router.get('/count', usersCount)
router.get('/rights', userRightsList)
router.get('/:id', getEditUser)
router.get('/', getAllUsers)

router.post('/', createUser)
router.put('/:id', editUser)

router.delete('/:id', deleteUser)
//
router.get('/get-roles', getRoles)

export default router