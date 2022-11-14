import makeDbReq from '../db/index.js'

const getSubTasks = (req, res, next) => {
    req.log_details = {
        "activity_id": 19,
        "user": req.email,
        "reference_table": "sub_tasks_master",
        "reference_table_pk_id": null,
    }
    makeDbReq(`sub_tasks_master_get_sub_tasks(?)`, [req.query.taskId])
    .then((subTasks) => {
        console.log("getting sub task of taskId ", req.query.taskId, subTasks)
        req.log_details.detail = 'success'
        req.res_data = subTasks
        next()
    })
    .catch((err) => {
        req.log_details.detail = [err]
        req.res_data = err
        next()
    })
}

export default getSubTasks