import makeDbReq from '../db/index.js'

/**
 * get all users
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const getAllUsers = (req, res, next) => {
    let logObj = {
        "activityId": 11,
        "user": req.userId,
        "referenceTable": "users",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "usersList"    
    }
    makeDbReq(`users_get_all_users(?, ?)`, [req.query.from, req.query.recordsPerPage])
    .then((users) => {
        logObj.detail = 'success'
        logObj.resData = users
    })
    .catch((err) => {
        logObj.detail = [err]
        logObj.resData = 'failed in fetching users details'
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

export default getAllUsers