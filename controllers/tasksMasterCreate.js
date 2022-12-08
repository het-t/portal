import makeDbReq from '../db/index.js'

/**
 * create task master
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * used in task-create and task-edit
 * in task-create if user choose not to save execution get transferred to next middleware 
 * in task-edit if user choose not to save exectuin get transferred to next middleware if next middleware is tasksSubTasksCreate it will also get skipped
 *  
 */

const createTaskMaster = (req, res, next) => {

    let {
        title, 
        description,
        cost, 
        saved, 
    } = req.query

    //
    saved = new Number(saved)

    if (saved == false) {
        next()
    }
    //

    else {

        let logObj = {
            "activityId": 33,
            "user": req.userId,
            "referenceTable": "tasks_master",
            "referenceTablePkId": null,
            "detail": "",
            "resData": {},
            "resKey": "taskCreated"
        }

        makeDbReq(`tasks_master_create(?, ?, ?)`, [
            title, 
            description, 
            cost ? cost : null
        ])
        .then((results) => {
            logObj.referenceTablePkId = results[0]?.taskMasterId
            logObj.detail = 'success'

            req.resData = logObj.resData = {
                taskMasterId: results[0].taskMasterId 
            }
        })
        .then(()=>{
            if (typeof req?.logs == "object") {
                req.logs.push(logObj)
            }
            else {
                req.logs = [logObj]
            }
            req.skipSubTasksCreate = false
            next() 
        })
        .catch((err) => {
            logObj.detail = [err]
            logObj.resData = 'fail'
            res.end()
        })
    }
    
}

export default createTaskMaster