import con from '../../../db/conDb.js'
import makeDbReq from '../../../db/index.js'
import * as fs from 'fs/promises'

export default function getProfilePic(req, res) {
    let {width, height, userId} = req.query

    userId == -1 ? userId = req.userId : userId = userId

    const connection = con()
    makeDbReq(
        connection,
        `users_settings_profile_pic_get(?, ?)`, 
        [
            req.userId,
            userId
        ]
    )
    .then((results) => {
        if (results?.length == 0) throw 'NO_PROFILE_PIC_FOUND' 
        const filePath = `./uploads/pics/users/${results[0].picPath}_${width}x${height}.txt`
        return fs.readFile(filePath)
    })
    .then((data) => {
        res.send({
            dim: `${userId}_${width}x${height}`,
            data: `data:image/jpeg;base64,${data}`
        })
    })
    .catch(err => {
        if (err == 'NO_PROFILE_PIC_FOUND') res.sendStatus(404)
        else res.sendStatus(500)

        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)',
            [
                req.userId,
                55,
                27,
                7,
                [err]
            ]
        )        
    })
    .finally(() => {
        connection.end()
    })
}