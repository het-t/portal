import makeDbReq from '../db/index.js'

/**
 * get number of clients
 * @param {*} req 
 * @param {*} res 
 */

const clientsCount = (req, res, next) => {
    let logObj = {
        "activityId": 23,
        "user": req.userId,
        "referenceTable": "clients_master",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "count"
    }
    makeDbReq(`clients_count()`, [])
    .then((count) => {
        logObj.detail = 'success'
        logObj.resData = count[0].count
    })
    .catch(err => {
        logObj.detail = [err]
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

export default clientsCount