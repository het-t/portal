import express from 'express'

import login from '../controllers/loginController.js'
import logout from '../controllers/logoutController.js'
import auth from '../controllers/auth.js'
import userRights from '../controllers/userRightsController.js'

import createRole from '../controllers/createRoleController.js'
import editRole from '../controllers/editRoleController.js'
import deleteRole from '../controllers/deleteRoleController.js'
import getEditRole from '../controllers/editRoleDataController.js'
import editUser from '../controllers/editUserController.js'

import getRoles from '../controllers/getRolesController.js'
import getRights from '../controllers/getRightsController.js'

import createUser from '../controllers/createUserController.js'
import getAllUsers from '../controllers/getAllUsersController.js'
import getEditUser from '../controllers/editUserDataController.js'

import addLog from '../controllers/logs.js'

import usersActivities from '../controllers/usersActivities.js'
import usersActivitiesCount from '../controllers/userActivitiesCount.js'

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

router.get('/roles/create-role', auth, createRole, addLog)
router.get('/roles/get-roles', auth, getRoles, addLog)
router.post('/roles/delete-role', auth, deleteRole, addLog)
router.get('/roles/edit', auth, getEditRole)

router.post('/roles/edit-role', auth, editRole, addLog)
router.get('/roles/get-rights', auth, getRights, addLog)


router.get('/activity', auth, usersActivities)
router.get('/activity/count', auth, usersActivitiesCount, addLog)

export default router;