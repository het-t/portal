import makeDbReq from '../db/index.js'

/**
 * delete role
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const deleteClient = (req, res, next) => {
    const clientId = req.body.params.clientId
    console.log(clientId)
    let logObj = {
        "activityId": 29,
        "user": req.userId,
        "referenceTable": "clients_master",
        "referenceTablePkId": clientId,
        "detail": "",
        "resData": {},
        "resKey": "clientDeleted",
    }

    makeDbReq(`clients_master_delete_client(?)`, [clientId])
    .then((results) => {
        logObj.detail = 'success'
        logObj.resData = true
    })
    .catch((err) => {
        logObj.detail = [err]
        logObj.resData = "fail"
    })
    .finally(()=>{
        if (typeof req?.logs == "object") {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        next()
    })
}

export default deleteClient