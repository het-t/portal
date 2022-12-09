import makeDbReq from "../db/index.js";

/**
 * get rights of user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const userRights = (req, res, next) => {
    // let logObj = {
    //     "activityId": 9,
    //     "user": req.userId,
    //     "referenceTable": "rights_master",
    //     "referenceTablePkId": null,
    //     "detail": "",
    //     "resData": {},
    //     "resKey": "userRights"
    // }
    makeDbReq(`rights_master_get_user_rights(?)`, [req.userId])
    .then((rights) => {
        const resKey = "userRights"
        const resData = rights
        
        if (typeof req?.logs == "object") {
            req.logs.push({resKey, resData})
        }
        else {
            req.logs = [{resKey, resData}]
        }
        next()
    })
    .catch((err) => {
        res.send(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            6,     //activityId
            15,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
    // .finally(() => {

    // })
}

export default userRights