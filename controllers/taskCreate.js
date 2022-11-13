import makeDbReq from '../db/index.js'

const createTask = (req, res, next) => {

    req.log_details = {
        "activity_id": 17,
        "user": req.email,
        "reference_table": "tasks_master",
    }

    const {title, cost, saved} = req.query

    makeDbReq(`tasks_master_create_task(?, ?, ?)`, [title, cost, saved])
    .then((results) => {
        req.log_details.reference_table_pk_id = results[0]?.task_id
        req.log_details.detail = 'success'
        req.res_data = 'success'
        next()
    })
    .catch((err) => {
        req.log_details.reference_table_pk_id = null
        req.log_details.detail = [err]
        req.res_data = 'failed'
        next()
    })

    // if (subTasks?.length > 0) next()
}

export default createTask