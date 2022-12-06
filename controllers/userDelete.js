import makeDbReq from '../db/index.js'

/**
 * delete user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const deleteUser = (req, res, next) => {
    const userId = req.body.userId
    
    let logObj = {
        "activityId": 8,
        "user": req.userId,
        "referenceTable": "users",
        "referenceTablePkId": userId,
        "detail": "",
        "resData": {},
        "resKey": "userDeleted",
    }

    makeDbReq(`users_delete_user(?)`, [userId])
    .then((results) => {
        logObj.detail = 'success'
        logObj.resData = true
    })
    .catch((err) => {
        logObj.detail = [err]
        logObj.resData = "fail"
    })
    .finally(()=>{
        if (typeof req?.logs == "object") {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        next()
    })
}

export default deleteUser