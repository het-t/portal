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

    makeDbReq(
        `users_login(?)`,
        [email]
    )
    .then((user)=>{
        if (user.length == 0) {
            console.log("user login", user)
            logObj.resData = "user not found"
            logObj.referenceTablePkId = null,
            logObj.detail = "use not found"
        } 
        else {
            console.log("hashed",user[0].password, "data", password)
            const verified = bcrypt.compareSync(password, user[0].password)
            console.log("verified ", verified)
            if (verified) {
                payload.userId = user[0].userId
                logObj.referenceTablePkId = user[0].userId
                logObj.detail = 'success'
                logObj.resData = '1'
            }
            else {
                logObj.referenceTablePkId = user[0].userId
                logObj.detail = 'password not matching'
                logObj.resData = 'password not matching'
            }
        }
    })
    .then(()=>{
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
                    [email]
                )
                .then((user)=>{
                    if (user.length == 0) {
                        console.log("user login", user.length)
                        logObj.resData = "user not found"
                        logObj.referenceTablePkId = null,
                        logObj.detail = "use not found"
                    } 
                    else {
                        console.log("hashed",user[0].password, "data", password)
                        const verified = bcrypt.compareSync(password, user[0].password)
                        console.log("verified ", verified)
                        if (verified) {
                            logObj.referenceTablePkId = user[0].userId
                            logObj.detail = 'success'
                            logObj.resData = '1'
                        }
                        else {
                            logObj.referenceTablePkId = user[0].userId
                            logObj.detail = 'password not matching'
                            logObj.resData = 'password not matching'
                        }
                    }
                })
            }
        })
    })
    .catch(()=>{
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

export default login