import makeDbReq from '../db/index.js'

/**
 * get list of rights
 * from rights_master
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const getRights = (req, res, next) => {

    const logObj = {
        "activityId": 9,
        "user": req.email,
        "referenceTable": "rights_master",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "rightsMasterList",
    }

    makeDbReq(`rights_master_get_all_rights()`, [])
    .then((rights) => {
        logObj.detail = "success"
        logObj.resData = rights
    })
    .catch((err) => {
        logObj.detail = [err]
        logObj.resData = 'fail'
    })
    .finally(()=>{
        if (typeof req?.logs == "Object") {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        next()
    })
}

export default getRights