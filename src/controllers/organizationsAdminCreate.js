import con from '../db/conDb.js'
import makeDbReq from '../db/index.js'
import bcrypt from 'bcrypt'

/**
 * create admin user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export default function createAdmin(req, res) {
    const { firstName, lastName, gender, bithdate, email, password, orgId} = req.body.params

    const connection = con()
    bcrypt.hash(password, 3)
    .then((passwordHash) => 
        makeDbReq(
            connection,
            `organizations_users_admin_create(?, ?, ?, ?, ?, ?, ?, ?)`, 
            [
                req.userId,
                orgId,
                firstName, 
                lastName, 
                gender, 
                bithdate, 
                email, 
                passwordHash
            ]
        )
    )
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                4,     //activityId
                15,     //tableid
                null,   //tablePkId
                [err]     //details
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}