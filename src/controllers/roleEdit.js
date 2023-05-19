import makeDbReq from "../db/index.js"

/**
 * edit role
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const editRole = (req, res, next) => {

    makeDbReq(`roles_edit(?, ?, ?, ?)`, [
        req.userId,
        req.body.params.roleId, 
        req.body.params.roleName, 
        JSON.stringify(req.body.params.roleRights)
    ])
    .then(() => {
        next()
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            5,     //activityId
            8,     //tableid
            req.query.editRoleId,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default editRole