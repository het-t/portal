import express from 'express'

import getList from '../controllers/activities/getList.js'
import getCount from '../controllers/activities/getCount.js'

const router = express.Router()

router.get('/count', getCount)
router.get('/', getList)

export default router