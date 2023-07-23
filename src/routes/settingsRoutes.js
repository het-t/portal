import express from "express";

import getPic from "../controllers/settings/profile/getPic.js";
import setPic from "../controllers/settings/profile/setPic.js";

import getData from "../controllers/settings/getData.js";
import setData from '../controllers/settings/setData.js';

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

router.get('/users', getData)
router.get('/organizations', settingsDataGetOrganizations)

router.post('/', setData)

router.get('/profile-pic', getPic)

const upload = multer({dest: pathToStoreFiles})
router.post('/profile-pic', upload.single('File'), setPic)

router.use('/notifications/wa/', waNotificationRoutes)

export default router