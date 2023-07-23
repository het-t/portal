import express from 'express'

import login from '../controllers/general/login.js'
import logout from '../controllers/general/logout.js'
import auth from '../controllers/general/auth.js'

const router = express.Router()

router.get('/', auth, (req, res) => {
    res.send('1')
})

router.post('/login', login)
router.post('/logout', logout)
router.post('/auth', login)

export default router