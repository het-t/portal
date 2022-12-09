import makeDbReq from '../db/index.js'

/**
 * delete user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const deleteUser = (req, res, next) => {
    const userIdToDel = req.body.params.userId
    
    makeDbReq(`users_delete(?)`, [
        req.userId,
        userIdToDel
    ])
    .then(() => {
        next()
    })
    .catch((err) => {
        res.send(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            8,     //activityId
            15,     //tableid
            userIdToDel,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
}

export default deleteUser