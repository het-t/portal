import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    jwt.verify(req.signedCookies._token, 'secert', (err, decoded) => {
        if (err) {
            res.send("invalid login attempt")
        } else {
            req.email = decoded.email
            req.pwd = decoded.pwd
            next()
        }
    })
}

export default auth;