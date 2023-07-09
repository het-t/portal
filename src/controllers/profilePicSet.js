import makeDbReq from '../db/index.js'
import resizeImg from '../helpers/resizeImage.js'
import fs from 'fs'

import path from 'path'
import { fileURLToPath } from "url"
import con from '../db/conDb.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default function setProfilePic(req, res) {
    const fileName = `${req.userId}_${req.orgId}`
    const tempPath = path.join(__dirname, '../uploads/temp')

    let fileData = fs.readFileSync(`${tempPath}/${req.file.filename}`)

    fileData = Buffer.from(fileData, 'base64')

    let ext = 'txt'
    
    const picPath = path.join(__dirname, '../uploads/pics/users', fileName)
    const connection = con()
    
    Promise.all([
        resizeImg(fileData, 100, 100, `${picPath}_100x100.${ext}`),    
        resizeImg(fileData, 50, 50, `${picPath}_50x50.${ext}`)
    ])
    .then(() => {
        return makeDbReq(
            connection,
            `settings_set(?, ?)`, 
            [
                req.userId,
                JSON.stringify({
                    "key": 7,
                    "value": fileName
                })
            ]
        )
    })
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                52,
                27,
                7,
                [err] 
            ]
        )        
    })
    .finally(() => {
        fs.rm(path.join(tempPath, req.file.filename), (err) => {
            if (err) console.log(err)
            connection.end()
        })
    })
}