import makeDbReq from '../db/index.js'

/**
 * delete role
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const deleteRole = (req, res, next) => {
    const roleId = req.body.params.roleId
    
    // let logObj = {
    //     "activityId": 7,
    //     "user": req.userId,
    //     "referenceTable": "roles",
    //     "referenceTablePkId": roleId,
    //     "detail": "",
    //     "resData": {},
    //     "resKey": "roleDeleted",
    // }

    makeDbReq(`roles_delete(?, ?)`, [
        req.userId,    
        roleId
    ])
    // .then((results) => {
    //     logObj.detail = 'success'
    //     logObj.resData = true
    // })
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
    // .finally(()=>{
    //     if (typeof req?.logs == "Object") {
    //         req.logs.push(logObj)
    //     }
    //     else {
    //         req.logs = [logObj]
    //     }
    //     next()
    // })
}

export default deleteRole