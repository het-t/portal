import express from 'express'

import tagsGet from '../controllers/tagsGet.js'

const router = express.Router()

router.get('/:tableId', tagsGet)

export default router