import express from 'express'

import getClientTypes from '../controllers/clientsTypes.js'
import createClient from '../controllers/clientsCreate.js'

import auth from '../controllers/auth.js'
import addLog from '../controllers/logs.js'

const router = express.Router()

router.get('/types', auth, getClientTypes, addLog)
router.get('/create-client', auth, createClient, addLog)

export default router