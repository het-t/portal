import makeDbReq from '../db/index.js'

/**
 * delete role
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const deleteRole = (req, res, next) => {
    const roleId = req.body.params.roleId

    makeDbReq(`roles_delete(?, ?)`, [
        req.userId,    
        roleId
    ])
    .then(() => {
        next()
    })
    .catch(err => {
        res.send(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            3,     //activityId
            8,     //tableid
            roleId,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default deleteRole