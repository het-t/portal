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

    const subTasks = JSON.parse(req.query.subTasks)
    const saved = req.resData.saved
    const taskId = req.resData.taskId

    const createSubTasksReqs = []

    for(let i = 0; i!=subTasks.length; i++) {
        console.log("subtask", subTasks[i])
        const {description, cost, comments, status, assignedTo} = subTasks[i]
        createSubTasksReqs.push(
            makeDbReq(`sub_tasks_master_create_sub_task(?, ?, ?, ?, ?, ?, ?)`, [taskId, description, cost, saved, comments, status, assignedTo])
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