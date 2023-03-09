import makeDbReq from "../db/index.js";

export default function waContactSet(req, res) {

    makeDbReq('users_settings_set_wid(?, ?)', [
        req.userId,
        req.body.params.otp
    ])
    .then((results) => {
        if (results[0].verified == 0) res.sendStatus(200)
        else res.sendStatus(403)
    })
    .catch(err => {

        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            61,
            27,
            8,
            [err]
        ])
        .catch((err) => console.log(err))
        res.sendStatus(500)
    }) 
}