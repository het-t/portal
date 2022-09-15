import jwt from 'jsonwebtoken'
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

            userLoginDb([payload.email, payload.pwd])
            .then((user)=>{
                if (user) {
                    res.send({
                        user,
                    })
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