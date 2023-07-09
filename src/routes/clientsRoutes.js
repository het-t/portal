import express from 'express'

import getClientTypes from '../controllers/clientsTypes.js'
import createClient from '../controllers/clientsCreate.js'
import editClient from '../controllers/clientsEdit.js'
import clientsList from '../controllers/clientsList.js'
import clientsCount from '../controllers/clientsCount.js'
import deleteClient from '../controllers/clientsDelete.js'
import clientsTag from '../controllers/clientsTag.js'

const router = express.Router()

router.get('/types', getClientTypes)
router.get('/count', clientsCount)
router.get('/', clientsList)
router.post('/', createClient)
router.put('/:id', editClient)
router.patch('/:id', clientsTag)
router.delete('/:id', deleteClient)

export default router