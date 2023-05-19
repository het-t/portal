import express from 'express'

import createRole from '../controllers/roleCreate.js'
import editRole from '../controllers/roleEdit.js'
import deleteRole from '../controllers/roleDelete.js'
import getEditRole from '../controllers/roleData.js'
import rolesCount from '../controllers/roleCount.js'
import getRoles from '../controllers/roleList.js'
import getRights from '../controllers/rightsList.js'

import sendResponse from '../controllers/sendResponse.js'
import auth from '../controllers/auth.js'

const router = express.Router()

router.get('/create-role', auth, createRole, sendResponse)
router.get('/', auth, getRoles, sendResponse)
router.post('/delete-role', auth, deleteRole, sendResponse)
router.get('/edit-role', auth, getEditRole, sendResponse)
router.get('/count', auth, rolesCount, sendResponse)
router.post('/edit-role', auth, editRole, sendResponse)
router.get('/get-rights', auth, getRights, sendResponse)

export default router