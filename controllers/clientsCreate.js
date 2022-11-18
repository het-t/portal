import makeDbReq from "../db/index.js"

/**
 * create client
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const createClient = (req, res, next) => {
    const {clientName, clientType, cin, firmName, firmAddress, caEmail, caPanDetails, conName, conEmail, conPhone} = req.query

    let logObj = {
        "activityId": 13,
        "user": req.email,
        "referenceTable": "clients_master",
        "referenceTablePkId": null,
        "resData": "",
        "resKey": "clientCreate"
    }
    makeDbReq(`clients_master_create_client(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [clientName, clientType, cin, firmName, firmAddress, caEmail, caPanDetails, conName, conEmail, conPhone])
    .then(() => {
        logObj.detail = 'success'
        logObj.resData = 'success'
    })
    .catch((err) => {
        logObj.detail = [err]
        logObj.resData = err
    })
    .finally(() => {
        if (typeof req?.logs == "Object") {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        next()
    })
}

export default createClient