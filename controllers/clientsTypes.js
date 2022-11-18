import makeDbReq from "../db/index.js"

/**
 * get types of clients
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const clientTypes = (req, res, next) => {
    let logObj = {
        "activityId": 15,
        "user": req.email,
        "referenceTable": "clients_type_master",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "clientsMasterTypes"
    }
    makeDbReq(`clients_type_master_get_types`, [])
    .then((types) => {
        logObj.detail = 'success'
        logObj.resData = types
    })
    .catch((err) => {
        logObj.detail = [`Error ${err}`]
        logObj.resData = err
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

export default clientTypes