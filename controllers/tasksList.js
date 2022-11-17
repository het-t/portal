import makeDbReq from '../db/index.js'

const getTasks = (req, res, next) => {
    req.log_details = {
        "activity_id": 20,
        "user": req.email,
        "reference_table": "tasks_master",
        "reference_table_pk_id": null,
    }
    makeDbReq(`tasks_get_tasks()`, [])
    .then((tasks) => {
        req.log_details.detail = 'success'
        req.res_data = tasks
        next()
    })
    .catch((err) => {
        req.log_details.detail = [err]
        req.res_data = err
        next()
    })
}

export default getTasks