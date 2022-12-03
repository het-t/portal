import makeDbReq from '../db/index.js'

/**
 * edit user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const editUser = (req, res, next) => {
    const {
        userId,
        firstName,
        lastName,
        gender,
        birthdate,
        email,
        role
    } = req.body.params

    let logObj = {
        "activityId": 6,
        "user": req.userId,
        "referenceTable": "users",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "userEdited"
    }

    makeDbReq(`users_edit_user(?, ?, ?, ?, ?, ?, ?)`, [
        userId,
        firstName,
        lastName,
        gender,
        birthdate,
        email,
        role
    ])
    .then((results) => {
        logObj.referenceTablePkId = userId
        logObj.detail = 'success'
        logObj.resData = 'success'
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

export default editUser