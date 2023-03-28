import express from 'express'
import path from 'path'
import { fileURLToPath } from "url"
import createWaNotification from "../controllers/notificationsWaCreate.js";
import notificaitonsWaGetHistory from '../controllers/notificationsWaGetHistory.js';
import sendWaAuthOtp from "../controllers/profileWaContactAuth.js";
import waContactSet from "../controllers/profileWaContactSet.js";
import setNotificationConsent from '../controllers/notificationsConsent.js'
import multer from 'multer'


const router = express.Router()

////////////////////////////////////////////////////
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToStoreFiles = path.join(__dirname, '../uploads/temp/')
/////////////////////////////////////////////////////////////

const upload = multer({dest: pathToStoreFiles})
router.post('/create', upload.single('file'), createWaNotification)

router.get('/', sendWaAuthOtp)

router.post('/', waContactSet)

router.get('/history', notificaitonsWaGetHistory)

router.post('/consent', setNotificationConsent)

export default router