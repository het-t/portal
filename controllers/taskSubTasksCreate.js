import makeDbReq from '../db/index.js'

/**
 * create sub-task for given task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const createSubTasks = (req, res, next) => {

    let subTasks = JSON.parse(req.query.subTasks) //stringified subTasksArray
    const {taskId, taskMasterId, saved} = req.resData

    if (subTasks?.length == 0) next()

    let logObj = {
        "activityId": 18,
        "user": req.userId,
        "referenceTable": "sub_tasks_master",
        "referenceTablePkId": null,
        "detail": "",
        "resData": [],
        "resKey": "subTasksCreated"
    }


    for(let st in subTasks) {
        let stObj = subTasks[st]
        for(let key in stObj) {
            if (stObj[key] == null || stObj[key] == 'null' || stObj[key] == '') {
                console.log(key, "is null")
                delete subTasks[st][key]
            }  
            else continue
        }
    }

    subTasks = JSON.stringify(subTasks)
    
    makeDbReq(`sub_tasks_create_sub_task(?, ?, ?, ?, ?)`, [
        req.userId, 
        taskMasterId, 
        taskId,        
        saved,
        subTasks
    ])
    .then((results) => {
        logObj.referenceTablePkId = results[0]?.subTaskId
        logObj.detail = 'success'
        logObj.resData.push(results[0]?.subTaskId)
    })
    .catch((err) => {
        logObj.detail = [err]
        logObj.resData = 'fail'
    })
    .finally(() => {
        if (typeof req?.logs == "object") {
            req.logs.push(logObj)
        }
        else {
            req.logs = [logObj]
        }
        next()
    })
    // const createSubTasksReqs = []

    // for(let i = 0; i!=subTasks.length; i++) {
    //     const {description, cost, comments, status, assignedTo} = subTasks[i]
    //     createSubTasksReqs.push(
    //         makeDbReq(`sub_tasks_create_sub_task(?, ?, ?, ?, ?, ?, ?, ?, ?)`, [req.userId, taskMasterId, taskId, description, cost, saved, comments, status, assignedTo])
    //         .then((results) => {
    //             logObj.referenceTablePkId = results[0]?.subTaskId
    //             logObj.detail = 'success'
    //             logObj.resData.push(results[0]?.subTaskId)
    //         })
    //         .catch((err) => {
    //             logObj.detail = [err]
    //             logObj.resData = 'fail'
    //         })
    //     )
    // }

    // Promise.all(createSubTasksReqs)
    // .then(() => {
    //     next()
    // })
}

export default createSubTasks