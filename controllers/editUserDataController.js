import makeDbReq from '../db/index.js'

const getEditUser = (req, res) => {
    makeDbReq(`users_user_data(?)`, [req.query.editUserId])
    .then((userData) => {
        console.log("userData", userData)
        res.send(userData[0])
    })
}

export default getEditUser