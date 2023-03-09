import makeDbReq from '../db/index.js'

export default function settingsDataGet(req, res) {
    makeDbReq(`users_settings_get(?, ?)`, [
        req.userId,
        parseInt(req.query.authorType)
    ])
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            51,
            27,
            null,
            err
        ])
        .catch(err => console.log(err))
        res.sendStatus(500)
    })
}