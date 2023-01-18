import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import makeDbReq from '../db/index.js'

const login = (req, res, next) => {

    const {password, email, remember} = req.body

    var resKey = 'login'
    var resData = ''
    var userId = null

    let expiresIn = ''
    if (remember) expiresIn = '30d'
    else expiresIn = '1d'

    //find users     
    //get hash from database
    makeDbReq(
        `users_login(?)`,
        [email]
    )
    //if no user exist throw err
    .then((user)=>{
        if (user.length == 0) {
            resData = "user not found"
            throw "user not found"
        }
        else {
            userId = user[0].userId
            return user
        }
    })
    //compare it with input password
    .then((user) => bcrypt.compare(password, user[0].password))
    //jwt
    .then((verified)=>{
        if (verified == true) {
            resData = 1
        }
        else {
            throw "password not matching"
        }
    })
    .then(() =>{
        jwt.sign({userId}, 'secert', {expiresIn}, (err, token) => {
            if (err) {
                throw err
            }
            else {                             
                res.cookie('_token', token, {
                    signed: true
                })

                if (typeof req?.logs == "object") {
                    req.logs.push({resKey, resData})
                }
                else {
                    req.logs = [{resKey, resData}]
                }
                next()
            }
        })
    })
    .catch(err => {
        res.send(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            null,
            1,                  //activityId
            15,                 //tableid
            null,                  //tablePkId
            email + ' ' + err     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default login