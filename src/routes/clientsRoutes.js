import express from 'express'

import getTypes from '../controllers/clients/getTypes.js'
import getCount from '../controllers/clients/getCount.js'
import getList from '../controllers/clients/getList.js'
import create from '../controllers/clients/create.js'
import edit from '../controllers/clients/edit.js'
import changeTAg from '../controllers/clients/changeTag.js'
import del from '../controllers/clients/delete.js'

const router = express.Router()

router.get('/types', getTypes)
router.get('/count', getCount)
router.get('/', getList)
router.post('/', create)
router.put('/:id', edit)
router.patch('/:id', changeTAg)
router.delete('/:id', del)

export default router