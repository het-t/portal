import makeDbReq from '../db/index.js'

/**
 * create role
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const createRole = (req, res, next) => {
        
    // let logObj = {
    //     "activityId": 3,
    //     "user": req.userId,
    //     "referenceTable": "roles",
    //     "referenceTablePkId": null,
    //     "detail": "",
    //     "resData": {},
    //     "resKey": "roleCreated"
    // }

    makeDbReq('roles_create(?, ?, ?)', [
        res.userId,
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
        res.send(500)
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