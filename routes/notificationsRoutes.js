import express from 'express'
import auth from '../controllers/auth.js'
import createWaNotification from "../controllers/notificationsWaCreate.js";
import notificaitonsWaGetHistory from '../controllers/notificationsWaGetHistory.js';
import sendWaAuthOtp from "../controllers/profileWaContactAuth.js";
import waContactSet from "../controllers/profileWaContactSet.js";
import setNotificationConsent from '../controllers/notificationsConsent.js'

const router = express.Router()

router.post('/create', auth, createWaNotification)
router.get('/', auth, sendWaAuthOtp)
router.post('/', auth, waContactSet)
router.get('/history', auth, notificaitonsWaGetHistory)
router.post('/consent', auth, setNotificationConsent)

export default router