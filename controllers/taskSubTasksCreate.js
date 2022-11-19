import makeDbReq from '../db/index.js'

/**
 * create sub-task for given task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const createSubTasks = (req, res, next) => {

    let logObj = {
        "activityId": 18,
        "user": req.email,
        "referenceTable": "sub_tasks_master",
        "referenceTablePkId": null,
        "detail": "",
        "resData": [],
        "resKey": "subTasksCreated"
    }

    console.log(req.query.subTasks)

    const subTasks = JSON.parse(req.query.subTasks)

    console.log("resData", req.resData)
    const {taskId, taskMasterId, saved} = req.resData

    const createSubTasksReqs = []

    console.log("subTasks", subTasks)

    for(let i = 0; i!=subTasks.length; i++) {
        console.log("subtask", subTasks)
        const {description, cost, comments, status, assignedTo} = subTasks[i]
        createSubTasksReqs.push(
            makeDbReq(`sub_tasks_master_create_sub_task(?, ?, ?, ?, ?, ?, ?, ?)`, [taskMasterId, taskId, description, cost, saved, comments, status, assignedTo])
            .then((results) => {
                logObj.referenceTablePkId = results[0]?.subTaskId
                logObj.detail = 'success'
                logObj.resData.push(results[0]?.subTaskId)
            })
            .catch((err) => {
                logObj.detail = [err]
                logObj.resData = 'fail'
            })
        )
    }

    Promise.all(createSubTasksReqs)
    .then(() => {
        next()
    })
}

export default createSubTasks