import con from '../../db/conDb.js'
import makeDbReq from '../../db/index.js'
import bcrypt from 'bcrypt'

/**
 * create user
 * @param {*} req 
 * @param {*} res 
 */

export default function createUser(req, res) {
    const { firstName, lastName, gender, bithdate, email, role, password} = req.body.params

    const connection = con()
    bcrypt.hash(password, 3)
    .then((passwordHash) => 
        makeDbReq(
            connection,
            `users_create(?, ?, ?, ?, ?, ?, ?, ?, ?, @createdUserId)`, 
            [
                req.userId,
                req.orgId,
                firstName, 
                lastName, 
                gender, 
                bithdate, 
                email, 
                role, 
                passwordHash
            ]
        )
    )
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
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