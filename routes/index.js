import express from 'express'

import login from '../controllers/login.js'
import logout from '../controllers/logout.js'
import auth from '../controllers/auth.js'
import userRights from '../controllers/rightsData.js'

import createRole from '../controllers/roleCreate.js'
import editRole from '../controllers/roleEdit.js'
import deleteRole from '../controllers/roleDelete.js'
import getEditRole from '../controllers/roleData.js'
import rolesCount from '../controllers/roleCount.js'

import getRoles from '../controllers/roleList.js'
import getRights from '../controllers/rightsList.js'

import createUser from '../controllers/userCreate.js'
import editUser from '../controllers/userEdit.js'
import getAllUsers from '../controllers/userList.js'
import getEditUser from '../controllers/userData.js'

import addLog from '../controllers/logs.js'

import usersActivities from '../controllers/activityData.js'

import usersActivitiesCount from '../controllers/activityCount.js'
import usersCount from '../controllers/userCount.js'

const router = express.Router()

router.post('/login', login, addLog)
router.get('/rights', auth, userRights, addLog)
router.post('/logout', logout)
router.post('/auth', login)

router.post('/users/create-user', auth, createUser, addLog)
router.get('/users/', auth, getAllUsers, addLog)
router.get('/users/get-roles', auth, getRoles, addLog)
router.get('/users/edit', auth, getEditUser)
router.post('/users/edit-user', auth, editUser, addLog)
router.get('/users/count', auth, usersCount)

router.get('/roles/create-role', auth, createRole, addLog)
router.get('/roles/', auth, getRoles, addLog)
router.post('/roles/delete-role', auth, deleteRole, addLog)
router.get('/roles/edit', auth, getEditRole)
router.get('/roles/count', auth, rolesCount)

router.post('/roles/edit-role', auth, editRole, addLog)
router.get('/roles/get-rights', auth, getRights, addLog)


router.get('/activity', auth, usersActivities)
router.get('/activity/count', auth, usersActivitiesCount, addLog)

export default router;