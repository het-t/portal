import makeDbReq from "../db/index.js"

/**
 * edit role
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const editRole = (req, res, next) => {

    let logObj = {
        "activityId": 5,
        "user": req.userId,
        "referenceTable": "roles",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "roleEdited",
    }
    
    makeDbReq(`roles_edit_role(?, ?, ?)`, [req.body.params.roleId, req.body.params.roleName, JSON.stringify(req.body.params.roleRights)])
    .then((results) => {
        logObj.referenceTablePkId = results[0].pk_for_logs
        logObj.detail = 'success'
    })
    .catch((err) => {
        logObj.detail = [err]
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

export default editRole