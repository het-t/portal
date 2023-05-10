import express from 'express'

import getClientTypes from '../controllers/clientsTypes.js'
import createClient from '../controllers/clientsCreate.js'
import editClient from '../controllers/clientsEdit.js'
import clientsList from '../controllers/clientsList.js'
import clientsCount from '../controllers/clientsCount.js'
import auth from '../controllers/auth.js'
import sendResponse from '../controllers/sendResponse.js'
import deleteClient from '../controllers/clientsDelete.js'
import clientsTag from '../controllers/clientsTag.js'

const router = express.Router()

router.get('/types', auth, getClientTypes, sendResponse)
router.get('/create-client', auth, createClient, sendResponse)
router.get('/', auth, clientsList, sendResponse)
router.get('/count', auth, clientsCount, sendResponse)
router.get('/edit-client', auth, editClient, sendResponse)
router.post('/delete-client', auth, deleteClient, sendResponse)
router.post('/tag', auth, clientsTag)

export default router