import makeDbReq from '../db/index.js'
import bcrypt from 'bcrypt'

/**
 * create admin user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const createAdmin = (req, res) => {
    const { firstName, lastName, gender, bithdate, email, password, orgId} = req.body.params

    bcrypt.hash(password, 3)
    .then((passwordHash) => 
        makeDbReq(`organizations_users_admin_create(?, ?, ?, ?, ?, ?, ?, ?)`, [
            req.userId,
            orgId,
            firstName, 
            lastName, 
            gender, 
            bithdate, 
            email, 
            passwordHash
        ])
    )
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            4,     //activityId
            15,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
}

export default createAdmin