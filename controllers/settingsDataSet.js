import makeDbReq from "../db/index.js";

export default function settingsDataSet(req, res) {

    makeDbReq(`settings_set(?, ?)`, [
        req.userId,
        JSON.stringify(req.body.params)
    ])
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            52,
            27,
            req.body.params.key,
            [err]
        ])
        .catch(err => console.log(err))
        res.sendStatus(500)
    })
}