import express from 'express'
import jwt from 'jsonwebtoken'
import {
    createUser,
    createRole,
    getRights,
    getRoles
} from '../db.js'

var router = express.Router()

const auth = (req, res, next) => {
    jwt.verify(req.signedCookies._token, 'secert', (err, decoded) => {
        if (err) {
            console.log("error in auth", err)
            res.send("invalid login attempt")
        } else {
            console.log("auth username ", decoded.email, " password ", decoded.pwd)
            req.email = decoded.email
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
router.get('/roles/get-rights', auth, (req, res) => {
    console.log("GET '/roles/get-rights'", req.query)
    getRights(req.email)
    .then((results) => {
        console.log(results)
        res.send(results[0])
    })
    .catch((err) => {
        console.log("GET '/u/roles/get-rgihts", err)
        res.send('failed')
    })
})

router.get('/roles/create-role', auth, (req, res) => {
    console.log("GET '/users/create-role'", req.query)
    const roleName = req.query.role_name
    const roleRights = JSON.stringify(req.query.role_rights)
    createRole(roleName, roleRights)
    .then((results) => {
        console.log(results)
        res.send('success')
    })
    .catch((err) => {
        console.log("/users/create-role catch ",err)
        res.send('failed')
    })
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

router.get('/users/get-roles', auth, (req, res) => {
    console.log("GET '/users/get-roles'")
    getRoles()
    .then((roles) => {
        console.log(roles)
        res.send(roles)
    })
    .catch((err) => {
        console.log("/users/get-roles catch ",err)
        res.send('failed')
    })
})

export {
    router as userRoutes,
}