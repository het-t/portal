import makeDbReq from '../db/index.js'

/**
 * get list of clients for `client` screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const getClients = (req, res, next) => {
    let logObj = {
        "activityId": 16,
        "user": req.userId,
        "referenceTable": "clients_master",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "clientsList"
    }

    makeDbReq(`clients_master_get_clients(?, ?)`, [req.query.from, req.query.recordsPerPage])
    .then((results) => {
        logObj.detail = "success"
        logObj.resData = results
    })
    .catch((err) => {
        logObj.detail = [`Error ${err}`]
        logObj.resData = 'failed'
    })
    .finally(()=>{
        if (typeof req?.logs == "Object") {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        next()
    })
}

export default getClients