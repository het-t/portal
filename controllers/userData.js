import makeDbReq from '../db/index.js'

/**
 * get user data to show in edit user screen
 * @param {*} req 
 * @param {*} res 
 */

const getEditUser = (req, res, next) => {
    let logObj = {
        "activityId": 25,
        "user": req.email,
        "referenceTable": "users",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "userData"
    }
    makeDbReq(`users_user_data(?)`, [req.query.editUserId])
    .then((userData) => {
        logObj.detail = 'success'
        logObj.resData = userData[0]
    })
    .catch(() => {
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

export default getEditUser