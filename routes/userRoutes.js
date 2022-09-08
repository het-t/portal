import express from 'express'
import jwt from 'jsonwebtoken'

var router = express.Router()
 
router.post('/logout', (req, res) => {
    jwt.verify(req.signedCookies._token, 'secert', (err, decoded) => {
        if (err) {
            console.log("userRoutes POST '/logout/ ",err) 
            res.send('fail')
        } else {
            console.log('Logout username', decoded.un, 'password', decoded.pwd)
            res.send('ok')
        }
    })
})

export {
    router as userRoutes,
}