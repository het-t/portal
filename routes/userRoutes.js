import express from 'express'
import jwt from 'jsonwebtoken'
import {
    createUser,
} from '../db.js'

var router = express.Router()

const auth = (req, res, next) => {
    jwt.verify(req.signedCookies._token, 'secert', (err, decoded) => {
        if (err) {
            console.log("error in auth", err)
            res.send("invalid login attempt")
        } else {
            console.log("auth username ", decoded.un, " password ", decoded.pwd)
            req.un = decoded.un
            req.pwd = decoded.pwd
            next()
        }
    })
}

router.post('/logout', auth, (req, res) => {
    // jwt.verify(req.signedCookies._token, 'secert', (err, decoded) => {
    //     if (err) {
    //         console.log("userRoutes POST '/logout/ ",err) 
    //         res.send('fail')
    //     } else {
    //         console.log('Logout username', decoded.un, 'password', decoded.pwd)
            res.send('ok')
    //     }
    // })
})

//RoleView.vue 
router.get('/roles/create-role', auth, (req, res) => {
    console.log("GET '/u/roles/create-role'", req.query)
    res.end()
})

router.get('/roles/edit-role', auth, (req, res) => {
    console.log("GET '/u/roles/edit-role'", req.query)
    res.end()
})


//UsersView.vue
router.post('/users/create-user', auth, (req, res) => {
    console.log("GET '/users/create-user'", req.body.params)
    const args = Object.values(req.body.params)
    createUser(args)
    .then((results) => {
        console.log(results)
        res.send('success')
    })
    .catch((err)=>{
        console.log("/users/create-user catch ",err)
        res.send('failed')
    })
})
export {
    router as userRoutes,
}