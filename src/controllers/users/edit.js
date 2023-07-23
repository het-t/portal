import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

/**
 * edit user
 * @param {*} req 
 * @param {*} res 
 */

export default function editUser (req, res) {
    const {
        userId,
        firstName,
        lastName,
        gender,
        birthdate,
        email,
        role
    } = req.body.params

    const connection = con()
    makeDbReq(
        connection,
        `users_edit(?, ?, ?, ?, ?, ?, ?, ?)`, 
        [
            req.userId,
            userId,
            firstName,
            lastName,
            gender,
            birthdate,
            email,
            role
        ]
    )
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                6,     //activityId
                15,     //tableid
                userIdToEdit,   //tablePkId
                [err]     //details
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}