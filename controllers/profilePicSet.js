import makeDbReq from '../db/index.js'
import resizeImg from '../helpers/resizeImage.js'
import fs from 'fs'

import path from 'path'
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default function setProfilePic(req, res) {
    const fileName = `${req.userId}_${req.orgId}`
    const tempPath = path.join(__dirname, '../pics/temp')

    let fileData = fs.readFileSync(`${tempPath}/${req.file.filename}`)

    fileData = Buffer.from(fileData, 'base64')

    let ext = 'txt'
    
    const picPath = path.join(__dirname, '../pics/users', fileName)
    Promise.all([
        resizeImg(fileData, 100, 100, `${picPath}_100x100.${ext}`),    
        resizeImg(fileData, 50, 50, `${picPath}_50x50.${ext}`)
    ])
    .then(() => {
        return makeDbReq(`users_settings_profile_pic_path_set(?, ?)`, [
            req.userId,
            fileName
        ])
    })
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
    .finally(() => {
        fs.rm(path.join(tempPath, req.file.filename), (err) => {
            if (err) console.log(err)
        })
    })
}