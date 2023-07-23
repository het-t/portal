import express from 'express'

import getCount from '../controllers/users/getCount.js'
import getUsersRights from '../controllers/users/getUsersRights.js'
import getData from '../controllers/users/getData.js'
import getList from '../controllers/users/getList.js'
import create from '../controllers/users/create.js'
import edit from '../controllers/users/edit.js'
import del from '../controllers/users/delete.js'

const router = express.Router()

router.get('/count', getCount)
router.get('/rights', getUsersRights)
router.get('/:id', getData)
router.get('/', getList)

router.post('/', create)

router.put('/:id', edit)

router.delete('/:id', del)

export default router