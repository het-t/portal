import express from 'express'

import createRole from '../controllers/roleCreate.js'
import editRole from '../controllers/roleEdit.js'
import deleteRole from '../controllers/roleDelete.js'
import getRoleData from '../controllers/roleData.js'
import getRolesCount from '../controllers/roleCount.js'
import getRoles from '../controllers/roleList.js'

const router = express.Router()

router.get('/count', getRolesCount)
router.get('/:id', getRoleData)
router.get('/', getRoles)
router.post('/', createRole)
router.put('/:id', editRole)
router.delete('/:id', deleteRole)

export default router