import makeDbReq from '../db/index.js'

/**
 * get role data
 * @param {*} req 
 * @param {*} res 
 */

const getRoleData = (req, res, next) => {
    let logObj = {
        "activityId": 22,
        "user": req.userId,
        "referenceTable": "roles",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "roleData",
    }
    makeDbReq(`roles_role_data(?)`, [req.query.editRoleName])
    .then((roleData) => {
        logObj.detail = "success"
        logObj.resData = roleData[0]
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

export default getRoleData