import express from "express";
import auth from "../controllers/auth.js";
import getProfilePic from "../controllers/profilePicGet.js";
import setProfilePic from "../controllers/profilePicSet.js";
import settingsDataGet from "../controllers/settingsDataGet.js";
import settingsDataSet from '../controllers/settingsDataSet.js'
import multer from 'multer'

import path from 'path'
import { fileURLToPath } from "url"

//////////////////////////////////////////////////////////
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToStoreFiles = path.join(__dirname, '../pics/temp/')
/////////////////////////////////////////////////////////

const router = express.Router()

router.get('/', auth, settingsDataGet)
router.post('/', auth, settingsDataSet)
router.get('/profile-pic', auth, getProfilePic)

const upload = multer({dest: pathToStoreFiles})
router.post('/profile-pic', auth, upload.single('File'), setProfilePic)

export default router