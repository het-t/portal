import express from 'express'

import getCount from '../controllers/roles/getCount.js'
import getData from '../controllers/roles/getData.js'
import getList from '../controllers/roles/getList.js'
import create from '../controllers/roles/create.js'
import edit from '../controllers/roles/edit.js'
import del from '../controllers/roles/delete.js'

const router = express.Router()

router.get('/count', getCount)
router.get('/:id', getData)
router.get('/', getList)
router.post('/', create)
router.put('/:id', edit)
router.delete('/:id', del)

export default router