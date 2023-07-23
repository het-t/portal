import express from 'express'

import auth from '../controllers/general/auth.js'

import organizationsList from '../controllers/organizationsList.js'
import organizationsCreateAdmin from '../controllers/organizationsAdminCreate.js'
import organizationsCreate from '../controllers/organizationsCreate.js'
import organizationsCount from '../controllers/organizationsCount.js'
import getOrgainzationsAdmins from '../controllers/organizationsAdminsList.js'
import getOrgainzationsAdminsCount from '../controllers/organizationsAdminsCount.js'

const router = express.Router()

router.get('/', auth, organizationsList)
router.post('/create-org', auth, organizationsCreate)
router.get('/count', auth, organizationsCount)

router.get('/admins/count', auth, getOrgainzationsAdminsCount)
router.get('/admins', auth, getOrgainzationsAdmins)
router.post('/admins/create-admin', auth, organizationsCreateAdmin)

export default router