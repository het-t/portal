import makeDbReq from '../db/index.js'

const getTaskData = (req, res, next) => {
    req.log_details = {
        "activity_id": 21,
        "user": req.email,
        "reference_table": "tasks_master",
        "reference_table_pk_id": null,
    }

    makeDbReq(`tasks_master_get_task_data(?)`, [req.query.taskId])
    .then((taskData) => {
        req.log_details.detail = 'success'
        req.res_data = taskData
        next()
    })
    .catch((err) => {
        req.log_details.detail = [err]
        req.res_data = err
        next()
    })
}

export default getTaskData