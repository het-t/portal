import express from 'express'

import createRole from '../controllers/roleCreate.js'
import editRole from '../controllers/roleEdit.js'
import deleteRole from '../controllers/roleDelete.js'
import getEditRole from '../controllers/roleData.js'
import rolesCount from '../controllers/roleCount.js'
import getRoles from '../controllers/roleList.js'
import getRights from '../controllers/rightsList.js'

import addLog from '../controllers/logs.js'
import auth from '../controllers/auth.js'

const router = express.Router()

router.get('/create-role', auth, createRole, addLog)
router.get('/', auth, getRoles, addLog)
router.post('/delete-role', auth, deleteRole, addLog)
router.get('/edit', auth, getEditRole)
router.get('/count', auth, rolesCount)
router.post('/edit-role', auth, editRole, addLog)
router.get('/get-rights', auth, getRights, addLog)

export default router