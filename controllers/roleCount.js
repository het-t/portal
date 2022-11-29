import makeDbReq from '../db/index.js'

/**
 * get number of roles
 * @param {*} req 
 * @param {*} res 
 */

const rolesCount = (req, res, next) => {
    let logObj = {
        "activityId": 23,
        "user": req.userId,
        "referenceTable": "roles",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "count"
    }
    makeDbReq(`roles_count()`, [])
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

export default rolesCount