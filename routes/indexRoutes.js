import express from 'express'
import jwt from 'jsonwebtoken'

var router = express.Router()

router.post('/login', (req, res) => {
    console.log(req.body)
    let payload = {
        "un": req.body.username,
        "pwd": req.body.password
    }
    jwt.sign(payload, 'secert', (err, token) => {
        if (err) {
            console.log(err)
            res.send('fail')
        }
        else {
            console.log(token)
            res.cookie('_token', token, {
                signed: true
            })
            res.send('ok')
        }
    })
})

export {
    router as indexRoutes,
}