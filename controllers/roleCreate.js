import makeDbReq from '../db/index.js'

/**
 * create role
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const createRole = (req, res, next) => {
        
    let logObj = {
        "activityId": 3,
        "user": req.userId,
        "referenceTable": "roles",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "roleCreated"
    }

    makeDbReq('roles_create_role(?, ?)', [req.query.roleName, JSON.stringify(req.query.roleRights)])
    .then(() => {
        logObj.detail = 'success'
        logObj.resData = 'success'
    })
    .catch((err) => {
        logObj.detail = [err]
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

export default createRole