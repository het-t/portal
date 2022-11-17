import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import makeDbReq from '../db/index.js'

const login = (req, res, next) => {

    let payload = {
        "email": req.body.email,
        "pwd": req.body.password
    }

    const logObj = {
        "activityId": 1,
        "user": payload.email,
        "referenceTable": "users",
        "referenceTablePkId": '',
        "detail": '',
        "resData": {},
        "resKey": "login"
    }

    jwt.sign(payload, 'secert', (err, token) => {
        if (err) {
            logObj.detail = [err]
            logObj.resData = 'fail'
        }
        else {
            res.cookie('_token', token, {
                signed: true
            })

            // userLoginDb([payload.email])
            makeDbReq(
                `users_login(?)`,
                [payload.email]
            )
            .then((user)=>{
                if (user.length == 0) {
                    console.log("user login", user.length)
                    logObj.resData = "user not found"
                    logObj.referenceTablePkId = null,
                    logObj.detail = "use not found"
                } 
                else {
                    console.log("hashed",user[0].password, "data", payload.pwd)
                    const verified = bcrypt.compareSync(payload.pwd, user[0].password)
                    console.log("verified ", verified)
                    if (verified) {
                        logObj.referenceTablePkId = user[0].pk_for_logs
                        logObj.detail = 'success'
                        logObj.resData = '1'
                    }
                    else {
                        logObj.referenceTablePkId = user[0].pk_for_logs
                        logObj.detail = 'password not matching'
                        logObj.resData = 'password not matching'
                    }
                }
            })
            .catch(()=>{
                console.log("POST '/login' ", err)
                logObj.detail = [err]
                logObj.resData = 'fail'
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
    })

}

export default login