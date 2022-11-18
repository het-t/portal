import makeDbReq from '../db/index.js'

/**
 * get user data to show in edit user screen
 * @param {*} req 
 * @param {*} res 
 */

const getEditUser = (req, res) => {
    makeDbReq(`users_user_data(?)`, [req.query.editUserId])
    .then((userData) => {
        res.send(userData[0])
    })
    .finally(()=>{
        if (typeof req?.logs == "Object") {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        next()
    })
}

export default getEditUser