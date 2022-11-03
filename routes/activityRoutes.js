import express from 'express'

import usersActivities from '../controllers/activityData.js'
import usersActivitiesCount from '../controllers/activityCount.js'

import auth from '../controllers/auth.js'
import addLog from '../controllers/logs.js'

const router = express.Router()

router.get('/', auth, usersActivities)
router.get('/count', auth, usersActivitiesCount, addLog)

export default router