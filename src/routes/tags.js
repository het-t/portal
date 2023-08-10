import express from 'express'

import tagsGet from '../controllers/tagsGet.js'
import tagDelete from '../controllers/tagDelete.js'
import tagCreate from '../controllers/tagCreate.js'

const router = express.Router()

router.get('/:tableId', tagsGet)

router.post('/', tagCreate)

router.delete('/:tagId', tagDelete)

export default router