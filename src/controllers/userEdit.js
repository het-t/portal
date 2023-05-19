import makeDbReq from '../db/index.js'

/**
 * edit user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const editUser = (req, res, next) => {
    const {
        userId,
        firstName,
        lastName,
        gender,
        birthdate,
        email,
        role
    } = req.body.params

    makeDbReq(`users_edit(?, ?, ?, ?, ?, ?, ?, ?)`, [
        req.userId,
        userId,
        firstName,
        lastName,
        gender,
        birthdate,
        email,
        role
    ])
    .then(() => {
        next()
    })
    .catch((err) => {
        res.sendStatus(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            6,     //activityId
            15,     //tableid
            userIdToEdit,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
}

export default editUser