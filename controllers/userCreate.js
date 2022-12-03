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

    bcrypt.hash(password, 3)
    .then((passwordHash) => {
        makeDbReq(`users_create_user(?, ?, ?, ?, ?, ?, ?)`, [firstName, lastName, gender, bithdate, email, role, passwordHash])
    })
    .then((results) => {
        logObj.referenceTablePkId = results[0].pk_for_logs
        logObj.detail = 'success'
        logObj.resData = 'success'
    })
    .catch((err)=>{
        logObj.detail = [err]
        logObj.resData = 'fail'
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