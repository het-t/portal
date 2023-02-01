import express from "express";
import auth from "../controllers/auth.js";
import settingsDataGet from "../controllers/settingsDataGet.js";
import settingsDataSet from "../controllers/settingsDataSet.js";

const router = express.Router()

router.get('/', auth, settingsDataGet)
router.post('/', auth, settingsDataSet)

export default router