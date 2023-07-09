import express from 'express'

import usersActivities from '../controllers/activityData.js'
import usersActivitiesCount from '../controllers/activityCount.js'

const router = express.Router()

router.get('/', usersActivities)
router.get('/count', usersActivitiesCount)

export default router