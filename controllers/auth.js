import jwt from 'jsonwebtoken'

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

export default auth;