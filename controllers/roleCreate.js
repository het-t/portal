import makeDbReq from '../db/index.js'

/**
 * create role
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const createRole = (req, res, next) => {

    makeDbReq('roles_create(?, ?, ?, ?)', [
        req.userId,
        req.orgId,
        req.query.roleName, 
        JSON.stringify(req.query.roleRights)
    ])
    .then((results) => {
        const resKey = 'roleCreated'
        const resData = results[0].roleId

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
            3,     //activityId
            8,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default createRole