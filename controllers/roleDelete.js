import makeDbReq from '../db/index.js'

/**
 * delete role
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const deleteRole = (req, res, next) => {
    const roleId = req.body.roleId
    
    let logObj = {
        "activityId": 7,
        "user": req.userId,
        "referenceTable": "roles",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "roleDeleted",
    }

    makeDbReq(`roles_delete_role(?)`, [roleId])
    .then((results) => {
        logObj.referenceTablePkId = roleId
        logObj.detail = 'success'
        logObj.resData = true
    })
    .catch((err) => {
        logObj.detail = [err]
        logObj.resData = "fail"
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

export default deleteRole