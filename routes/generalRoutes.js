import express from 'express'

import login from '../controllers/login.js'
import logout from '../controllers/logout.js'
import auth from '../controllers/auth.js'
import userRights from '../controllers/userRightsList.js'

import sendResponse from '../controllers/sendResponse.js'

const router = express.Router()

router.get('/', auth, (req, res) => {
    res.send('1')
})

router.post('/login', login, sendResponse)
router.get('/rights', auth, userRights, sendResponse)
router.post('/logout', logout)
router.post('/auth', login)

export default router