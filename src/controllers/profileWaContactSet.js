import makeDbReq from "../db/index.js";
import con from '../db/conDb.js'

export default function waContactSet(req, res) {

    const connection = con()
    makeDbReq(
        connection,
        'users_settings_set(?, ?)', 
        [
            req.userId,
            req.body.params.otp
        ]
    )
    .then((results) => {
        if (results[0].verified == 0) res.sendStatus(200)
        else res.sendStatus(403)
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)',
            [
                req.userId,
                61,
                27,
                8,
                [err]
            ]
        )
    })
    .finally(() => {
        connection.end()
    }) 
}