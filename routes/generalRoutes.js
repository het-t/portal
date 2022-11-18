import express from 'express'

import login from '../controllers/login.js'
import logout from '../controllers/logout.js'
import auth from '../controllers/auth.js'
import userRights from '../controllers/userRightsList.js'

import addLog from '../controllers/logs.js'

const router = express.Router()

router.post('/login', login, addLog)
router.get('/rights', auth, userRights, addLog)
router.post('/logout', logout)
router.post('/auth', login)

export default router