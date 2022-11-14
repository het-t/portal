import makeDbReq from '../db/index.js'

const createTask = (req, res, next) => {

    req.log_details = {
        "activity_id": 17,
        "user": req.email,
        "reference_table": "tasks_master",
    }

    const {title, cost, saved, coordinatorId, clientId, subTasks} = req.query

    makeDbReq(`tasks_master_create_task(?, ?, ?, ?, ?)`, [title, cost, saved, clientId, coordinatorId])
    .then((results) => {
        req.log_details.reference_table_pk_id = results[0]?.task_id
        req.log_details.detail = 'success'
        req.res_data = {
            saved,
            taskId: results[0].task_id
        }
        if (subTasks?.length > 0) next()
    })
    .catch((err) => {
        req.log_details.reference_table_pk_id = null
        req.log_details.detail = [err]
        req.res_data = 'failed'
    })
    
}

export default createTask