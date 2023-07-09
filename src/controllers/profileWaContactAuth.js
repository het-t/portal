import con from "../db/conDb.js";
import makeDbReq from "../db/index.js";
import convertToWid from "../helpers/notifications/whatsapp/convertToWID.js";
import otpGen from "../helpers/otpGen.js";

export default function sendWaAuthOtp(req, res) {
    const otp = otpGen()

    const wid = convertToWid(req.query.value)
    const connection = con()
    makeDbReq(
        connection,
        'authentications_wid(?, ?, ?, ?)', 
        [
            req.userId,
            req.orgId,
            wid,
            otp
        ]
    )
    .then(() => res.sendStatus(200))
    .catch((err) => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                60,
                23,
                null,
                [err]
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}