import makeDbReq from "../db/index.js"

/**
 * edit client
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const editClient = (req, res, next) => {
    const {
        clientId,
        clientName, 
        clientTypeId, 
        cin, 
        firmName, 
        firmAddress, 
        caEmail, 
        caPan, 
        conName,
        conEmail, 
        conPhone
    } = req.query

    let logObj = {
        "activityId": 13,
        "user": req.userId,
        "referenceTable": "clients_master",
        "referenceTablePkId": null,
        "resData": "",
        "resKey": "clientEdited"
    }
    makeDbReq(
        `clients_master_edit_client(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        [
            clientId,
            clientName, 
            cin,
            clientTypeId, 
            firmName, 
            firmAddress, 
            caPan, 
            caEmail, 
            conName, 
            conEmail, 
            conPhone
        ]
    )
    .then(() => {
        logObj.detail = 'success'
        logObj.resData = 'success'
    })
    .catch((err) => {
        logObj.detail = [err]
        logObj.resData = 'fail'
    })
    .then(() => {
        if (typeof req?.logs == "Object") {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        next()
    })
}

export default editClient