import express from "express";
import auth from "../controllers/auth.js";
import getProfilePic from "../controllers/profilePicGet.js";
import setProfilePic from "../controllers/profilePicSet.js";
import settingsDataGet from "../controllers/settingsDataGet.js";
import settingsDataSet from '../controllers/settingsDataSet.js'

import multer from 'multer'

import path from 'path'
import { fileURLToPath } from "url"

// import waNotificationRoutes from './waNotificationsRoutes.js'
//////////////////////////////////////////////////////////
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const pathToStoreFiles = path.join(__dirname, '../uploads/temp/')
/////////////////////////////////////////////////////////

const router = express.Router()

router.get('/', auth, settingsDataGet)

router.post('/', auth, settingsDataSet)

router.get('/profile-pic', auth, getProfilePic)

const upload = multer({dest: pathToStoreFiles})
router.post('/profile-pic', auth, upload.single('File'), setProfilePic)

// router.use('/notifications/wa/', auth, waNotificationRoutes)

export default router