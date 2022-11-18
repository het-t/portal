import makeDbReq from '../db/index.js'

/**
 * edit user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const editUser = (req, res, next) => {
    const args = Object.values(req.body.params)
    
    let logObj = {
        "activityId": 6,
        "user": req.email,
        "reference_table": "users",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "userEdited"
    }

    makeDbReq(`users_edit_user(?, ?, ?, ?, ?, ?, ?)`, args)
    .then((results) => {
        logObj.referenceTablePkId = args[0]
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

export default editUser