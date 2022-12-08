import makeDbReq from "../db/index.js"

/**
 * edit role
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const editTaskMaster = (req, res, next) => {

    let logObj = {
        "activityId": 5,
        "user": req.userId,
        "referenceTable": "tasks_master",
        "referenceTablePkId": null,
        "detail": "",
        "resData": {},
        "resKey": "taskMasterEdited",
    }

    const {
        taskMasterId,
        title, 
        description,
        cost, 
        saved,
    } = req.query

    makeDbReq(`tasks_master_edit_task(?, ?, ?, ?, ?)`, [
        taskMasterId,
        title, 
        description,
        cost, 
    ])
    .then((results) => {
        logObj.referenceTablePkId = results[0].pk_for_logs
        logObj.detail = 'success'
    })
    .catch((err) => {
        logObj.detail = [err]
    })
    .finally(()=>{
        if (typeof req?.logs == "object") {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        next()
    })
}

export default editTaskMaster