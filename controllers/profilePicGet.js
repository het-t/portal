import makeDbReq from '../db/index.js'
import * as fs from 'fs/promises'

export default function getProfilePic(req, res) {
    let {width, height, userId} = req.query
    let dim = userId
    userId == -1 ? userId = req.userId : userId = userId

    makeDbReq(`users_settings_profile_pic_get(?)`, [
        userId
    ])
    .then((results) => {
        if (results?.[0].length == 0) throw 'NO_PROFILE_PIC_FOUND' 
        const filePath = `./pics/users/${results[0].picPath}_${width}x${height}.txt`
        return fs.readFile(filePath)
    })
    .then((data) => {
        res.send({
            dim: `${dim}_${width}x${height}`,
            data: `data:image/jpeg;base64,${data}`
        })
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
}