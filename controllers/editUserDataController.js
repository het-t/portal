import {getEditUserDb} from '../db/usersDb.js'

const getEditUser = (req, res) => {
    getEditUserDb(req.query.editUserId)
    .then((userData) => {
        console.log("userData", userData)
        res.send(userData[0])
    })
}

export default getEditUser