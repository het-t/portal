import makeDbReq from '../db/index.js'

export default function settingsDataGet(req, res) {
    makeDbReq(`users_settings_get(?)`, [req.userId])
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
}