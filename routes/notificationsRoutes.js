import express from 'express'
import auth from '../controllers/auth.js'
import createWaNotification from "../controllers/notificationsWaCreate.js";
import sendWaAuthOtp from "../controllers/profileWaContactAuth.js";
import waContactSet from "../controllers/profileWaContactSet.js";

const router = express.Router()

router.post('/create', auth, createWaNotification)
router.get('/', auth, sendWaAuthOtp)
router.post('/', auth, waContactSet)


export default router