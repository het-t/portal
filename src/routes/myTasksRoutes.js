import express from 'express'

import getList from '../controllers/my-tasks/getList.js'

const router = express.Router()

router.get('/', getList)

export default router