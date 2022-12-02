import makeDbReq from '../db/index.js'
import bcrypt from 'bcrypt'

/**
 * create user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const createUser = (req, res, next) => {
    const {firstName, lastName, gender, bithdate, email, role, password} = req.body.params
    
    let logObj = {
        "activityId": 4,
        "user": req.userId,
        "referenceTable": "users",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "userCreated"
    }

    makeDbReq(`users_create_user(?, ?, ?, ?, ?, ?, ?)`, [firstName, lastName, gender, bithdate, email, role, bcrypt.hashSync(password, 3)])
    .then((results) => {
        logObj.referenceTablePkId = results[0].pk_for_logs
        logObj.detail = 'success'
        req.res_data = 'success'
    })
    .catch((err)=>{
        logObj.detail = [err]
        req.res_data = 'fail'
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

export default createUser