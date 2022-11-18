import makeDbReq from "../db/index.js";

/**
 * get rights of user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const userRights = (req, res, next) => {
    let logObj = {
        "activityId": 9,
        "user": req.email,
        "referenceTable": "rights_master",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "userRights"
    }
    makeDbReq(`rights_master_get_user_rights(?)`, [req.email])
    .then((rights) => {
        logObj.detail = 'success'
        logObj.resData = rights 
    })
    .catch((err) => {
        logObj.detail = [err]
        logObj.resData = "failed to load rights"
    })
    .finally(() => {
        if (typeof req?.logs == "Object") {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        next()
    })
}

export default userRights