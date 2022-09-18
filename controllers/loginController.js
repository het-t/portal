import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {userLoginDb} from '../db/login.js'

const login = (req, res) => {
    console.log(req.body)

    let payload = {
        "email": req.body.email,
        "pwd": req.body.password
    }

    jwt.sign(payload, 'secert', (err, token) => {
        if (err) {
            console.log(err)
            res.send('fail')
        }
        else {
            res.cookie('_token', token, {
                signed: true
            })

            userLoginDb([payload.email])
            .then((user)=>{
                if (user.length == 0) {
                    res.send("user not found")
                } 
                else {
                    console.log("hashed",user[0].password, "data", payload.pwd)
                    const verified = bcrypt.compareSync(payload.pwd, user[0].password)
                    console.log("verified ", verified)
                    if (verified) {
                        res.send('1')
                    }
                    else res.send('0')
                }
            })
            .catch(()=>{
                console.log("POST '/login' ", err)
                res.send('fail')
            })
        }
    })

}

export default login