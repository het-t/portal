import express from 'express'

import usersActivities from '../controllers/activityData.js'
import usersActivitiesCount from '../controllers/activityCount.js'

import auth from '../controllers/auth.js'
import sendResponse from '../controllers/sendResponse.js'

const router = express.Router()

router.get('/', auth, usersActivities, sendResponse)
router.get('/count', auth, usersActivitiesCount, sendResponse)

export default router