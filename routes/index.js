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

const router = express.Router()

router.post('/login', login)
router.get('/rights', auth, userRights)
router.post('/logout', logout)
router.post('/auth', login)

router.post('/users/create-user', auth, createUser)
router.get('/users/', auth, getAllUsers)
router.get('/users/get-roles', auth, getRoles)
router.get('/users/edit', auth, getEditUser)
router.post('/users/edit-user', auth, editUser)

router.get('/roles/create-role', auth, createRole)
router.get('/roles/get-roles', auth, getRoles)
router.post('/roles/delete-role', auth, deleteRole)
router.get('/roles/edit', auth, getEditRole)

router.get('/roles/edit-role', auth, editRole)
router.get('/roles/get-rights', auth, getRights)

export default router;