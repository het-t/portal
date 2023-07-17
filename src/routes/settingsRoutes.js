import express from "express";
import getProfilePic from "../controllers/profilePicGet.js";
import setProfilePic from "../controllers/profilePicSet.js";
import settingsDataGet from "../controllers/settingsDataGet.js";
import settingsDataSet from '../controllers/settingsDataSet.js'
import settingsDataGetOrganizations from "../controllers/settingsDataGetOrganizations.js";

import multer from 'multer'

import path from 'path'
import { fileURLToPath } from "url"

import waNotificationRoutes from './waNotificationsRoutes.js'

var __dirname = __dirname;
if (process.env.NODE_MODE !== 'production') {
    const __filename = fileURLToPath(import.meta.url);
    __dirname = path.dirname(__filename);
}

const pathToStoreFiles = path.join(__dirname, '../uploads/temp/')

const router = express.Router()

router.get('/users', settingsDataGet)
router.get('/organizations', settingsDataGetOrganizations)

router.post('/', settingsDataSet)

router.get('/profile-pic', getProfilePic)

const upload = multer({dest: pathToStoreFiles})
router.post('/profile-pic', upload.single('File'), setProfilePic)

router.use('/notifications/wa/', waNotificationRoutes)

export default router