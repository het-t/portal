import express from 'express'

import getClientTypes from '../controllers/clientsTypes.js'

import auth from '../controllers/auth.js'
import addLog from '../controllers/logs.js'

const router = express.Router()

router.get('/types', auth, getClientTypes, addLog)

export default router