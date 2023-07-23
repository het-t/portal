import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

export default function login (req, res) {

    const {password, email, remember} = req.body

    var resData = ''
    var userId = null
    var orgId = null

    let expiresIn = ''
    if (remember) expiresIn = '30d'
    else expiresIn = '4h'

    //find users     
    //get hash from database
    const connection = con()
    makeDbReq(
        connection,
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
            orgId = user[0].orgId
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
        jwt.sign({userId, orgId}, 'secert', {expiresIn}, (err, token) => {
            if (err) {
                throw err
            }
            else {                             
                res.cookie('_token', token, {
                    signed: true
                })

                res.send({'login': 1})
            }
        })
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection, 
            'logs_add(?, ?, ?, ?, ?)', 
            [
                null,
                1,                  //activityId
                15,                 //tableid
                null,                  //tablePkId
                email + ' ' + err     //details
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}