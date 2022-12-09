import makeDbReq from '../db/index.js'

/**
 * delete user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const deleteUser = (req, res, next) => {
    const userIdToDel = req.body.params.userId
    
    // let logObj = {
    //     "activityId": 8,
    //     "user": req.userId,
    //     "referenceTable": "users",
    //     "referenceTablePkId": userId,
    //     "detail": "",
    //     "resData": {},
    //     "resKey": "userDeleted",
    // }

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
    // .finally(()=>{
    //     if (typeof req?.logs == "object") {
    //         req.logs.push(logObj)
    //     }
    //     else {
    //         req.logs = [logObj]
    //     }
    //     next()
    // })
}

export default deleteUser