import express from 'express'

import login from '../controllers/loginController.js'
import logout from '../controllers/logoutController.js'
import auth from '../controllers/auth.js'
import userRights from '../controllers/userRightsController.js'

import createRole from '../controllers/createRoleController.js'
import editRole from '../controllers/editRoleController.js'

import getRoles from '../controllers/getRolesController.js'
import getRights from '../controllers/getRightsController.js'

import createUser from '../controllers/createUserController.js'

const router = express.Router()

router.post('/login', login)
router.get('/rights', auth, userRights)
router.post('/logout', logout)
router.post('/auth', login)

router.post('/users/create-user', auth, createUser)
router.get('/users/get-roles', auth, getRoles)

router.get('/roles/create-role', auth, createRole)
router.get('/roles/edit-role', auth, editRole)
router.get('/roles/get-rights', auth, getRights)

export default router;