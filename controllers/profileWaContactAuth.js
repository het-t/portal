import makeDbReq from "../db/index.js";
import convertToWid from "../helpers/notifications/whatsapp/convertToWID.js";
import otpGen from "../helpers/otpGen.js";

export default function sendWaAuthOtp(req, res) {
    const otp = otpGen()

    const wid = convertToWid(req.query.value)

    makeDbReq('authentications_wid(?, ?, ?, ?)', [
        req.userId,
        req.orgId,
        wid,
        otp
    ])
    .then(() => res.sendStatus(200))
    .catch((err) => {
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            60,
            23,
            null,
            [err]
        ])
        .catch(err => console.log(err))
        res.sendStatus(500)
    })
}