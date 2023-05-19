import express from 'express'
import path from 'path'
import { fileURLToPath } from "url"
import createWaNotification from "../controllers/notificationsWaCreate.js";
import notificaitonsWaGetHistory from '../controllers/notificationsWaGetHistory.js';
import setNotificationConsent from '../controllers/notificationsConsent.js'
import multer from 'multer'
import sendWaAuthOtp from "../controllers/profileWaContactAuth.js";
import waContactSet from "../controllers/profileWaContactSet.js";
import getWaQr from '../controllers/notificationsWaQr.js'

const router = express.Router()

////////////////////////////////////////////////////
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const pathToStoreFiles = path.join(__dirname, '../uploads/temp/')
/////////////////////////////////////////////////////////////


router.get('/otp', sendWaAuthOtp)
router.post('/otp', waContactSet)

const upload = multer({
    dest: pathToStoreFiles,
    limits: {
        fieldSize: '5mb',
    },
})
router.post('/create', upload.any(), createWaNotification)

router.get('/history', notificaitonsWaGetHistory)

router.post('/consent', setNotificationConsent)

router.get('/qr', getWaQr)

export default router