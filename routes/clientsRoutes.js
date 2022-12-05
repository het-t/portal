import express from 'express'

import getClientTypes from '../controllers/clientsTypes.js'
import createClient from '../controllers/clientsCreate.js'
import editClient from '../controllers/clientsEdit.js'
import clientsList from '../controllers/clientsList.js'
import clientsCount from '../controllers/clientsCount.js'
import auth from '../controllers/auth.js'
import addLog from '../controllers/logs.js'

const router = express.Router()

router.get('/types', auth, getClientTypes, addLog)
router.get('/create-client', auth, createClient, addLog)
router.get('/', auth, clientsList, addLog)
router.get('/count', auth, clientsCount, addLog)
router.get('/edit-client', auth, editClient, addLog)

export default router