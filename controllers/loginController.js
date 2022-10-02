import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {userLoginDb} from '../db/login.js'

const login = (req, res, next) => {
    console.log(req.body)

    let payload = {
        "email": req.body.email,
        "pwd": req.body.password
    }
    req.log_details = {
        "activity_id": 1,
        "user": payload.email,
        "reference_table": "users",
        "reference_table_pk_id": null,
    }
    jwt.sign(payload, 'secert', (err, token) => {
        if (err) {
            console.log(err)
            req.res_data = 'fail'
            next()
        }
        else {
            res.cookie('_token', token, {
                signed: true
            })

            userLoginDb([payload.email])
            .then((user)=>{
                if (user.length == 0) {
                    req.res_data = "user not found"
                    req.log_details.detail = "user not found"
                    next()
                } 
                else {
                    console.log("hashed",user[0].password, "data", payload.pwd)
                    const verified = bcrypt.compareSync(payload.pwd, user[0].password)
                    console.log("verified ", verified)
                    if (verified) {
                        req.log_details.detail = 'success'
                        req.res_data = '1'
                        next()
                    }
                    else {
                        req.log_details.detail = 'password not matching'
                        req.res_data = '0'
                        next()
                    }
                }
            })
            .catch(()=>{
                console.log("POST '/login' ", err)
                req.log_details.detail = err
                req.res_data = 'fail'
                next()
            })
        }
    })

}

export default login