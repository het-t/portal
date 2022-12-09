import makeDbReq from "../db/index.js"

/**
 * edit role
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const editRole = (req, res, next) => {

    // let logObj = {
    //     "activityId": 5,
    //     "user": req.userId,
    //     "referenceTable": "roles",
    //     "referenceTablePkId": null,
    //     "detail": "",
    //     "resData": {},
    //     "resKey": "roleEdited",
    // }
    
    makeDbReq(`roles_edit(?, ?, ?, ?)`, [
        req.userId,
        req.body.params.roleId, 
        req.body.params.roleName, 
        JSON.stringify(req.body.params.roleRights)
    ])
    .then(() => {
        // if (typeof req?.logs == "object") {
        //     req.logs.push(logObj)
        // }
        // else {
        //     req.logs = [logObj]
        // }
        next()
    })
    .catch(err => {
        res.send(500)
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