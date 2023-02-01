import makeDbReq from "../db/index.js";
import bcrypt from 'bcrypt'

export default function settingsDataSet(req, res) {

    console.log(req.body.params)
    makeDbReq(`users_settings_set(?, ?)`, [
        req.userId,
        JSON.stringify(req.body.params)
    ])
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        res.sendStatus(500)
    })
}