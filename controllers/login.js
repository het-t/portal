import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import makeDbReq from '../db/index.js'

const login = (req, res, next) => {

    const {password, email} = req.body

    let payload = {
        "userId": ""
    }

    let logObj = {
        "activityId": 1,
        "user": email,
        "referenceTable": "users",
        "referenceTablePkId": null,
        "detail": '',
        "resData": {},
        "resKey": "login"
    }

    //find users     
    //get hash from database
    makeDbReq(
        `users_login(?)`,
        [email]
    )
    //if no user exist throw err
    .then((user)=>{
        if (user.length == 0) {
            logObj.resData = "user not found"
            logObj.referenceTablePkId = null,
            logObj.detail = "use not found"
            throw "user not found"
        }
        else {
            payload.userId = user[0].userId
            logObj.referenceTablePkId = user[0].userId
            return user
        }
    })
    //compare it with input password
    .then((user) => bcrypt.compare(password, user[0].password))
    //jwt
    .then((verified)=>{
        if (verified == true) {
            logObj.detail = 'success'
            logObj.resData = '1'
        }
        else {
            logObj.detail = 'password not matching'
            logObj.resData = 'password not matching'
            throw "password not matching"
        }
    })
    .then(() =>{
        jwt.sign(payload, 'secert', (err, token) => {
            if (err) {
                logObj.detail = [err]
                logObj.resData = 'fail'
            }
            else {
                res.cookie('_token', token, {
                    signed: true
                })
            }
        })
    })
    .catch((err)=>{
        logObj.detail = [err]
        logObj.resData = err
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

export default login