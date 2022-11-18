import makeDbReq from '../db/index.js'

/**
 * get roles
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const getRoles = (req, res, next) => {

    let logObj = {
        "activityId": 10,
        "user": req.email,
        "referenceTable": "roles",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "rolesList",
    }
    makeDbReq(`roles_get_roles(?, ?)`, [req.query.from, req.query.recordsPerPage])
    .then((roles) => {
        logObj.detail = 'success'
        logObj.resData = roles
    })
    .catch((err) => {
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

export default getRoles