import makeDbReq from '../db/index.js'

const createSubTasks = (req, res, next) => {

    req.res_data.subTasks = []
    req.log_details.activity_id = 18
    req.log_details.reference_table = "sub_tasks_master"

    const subTasks = JSON.parse(req.query.subTasks)
    const saved = req.res_data.saved
    const taskId = req.res_data.taskId

    const createSubTasksReqs = []

    for(let i = 0; i!=subTasks.length; i++) {
        console.log("subtask", subTasks[i])
        const {description, cost, comments, status, assignedTo} = subTasks[i]
        createSubTasksReqs.push(
            makeDbReq(`sub_tasks_master_create_sub_task(?, ?, ?, ?, ?, ?, ?)`, [taskId, description, cost, saved, comments, status, assignedTo])
            .then((results) => {
                req.log_details.reference_table_pk_id = results[0]?.subTaskId
                req.log_details.detail = 'success'
                req.res_data.subTasks.push(results[0]?.subTaskId)
            })
            .catch((err) => {
                req.log_details.reference_table_pk_id = null
                req.log_details.detail = [err]
                req.res_data = 'failed'
            })
        )
    }

    Promise.all(createSubTasksReqs)
    .then(() => next())
}

export default createSubTasks