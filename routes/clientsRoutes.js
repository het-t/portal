import express from 'express'

import getClientTypes from '../controllers/clientsTypes.js'
import createClient from '../controllers/clientsCreate.js'
import clientsList from '../controllers/clientsList.js'

import auth from '../controllers/auth.js'
import addLog from '../controllers/logs.js'

const router = express.Router()

router.get('/types', auth, getClientTypes, addLog)
router.get('/create-client', auth, createClient, addLog)
router.get('/', auth, clientsList, addLog)

export default router