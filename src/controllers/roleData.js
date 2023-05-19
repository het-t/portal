import makeDbReq from '../db/index.js'

/**
 * get role data
 * @param {*} req 
 * @param {*} res 
 */

const getRoleData = (req, res, next) => {

    makeDbReq(`roles_role_data(?, ?)`, [
        req.userId,
        req.query.roleId
    ])
    .then((roleData) => {
        const resKey = 'roleData'
        const resData = roleData

        if (typeof req?.logs == "object") {
            req.logs.push({resKey, resData})
        }
        else {
            req.logs = [{resKey, resData}]
        }
        next()    
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            22,     //activityId
            8,     //tableid
            req.query.editRoleId,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default getRoleData