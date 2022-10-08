import makeDbReq from '../db/index.js'

const getAllUsers = (req, res, next) => {
    req.log_details = {
        "activity_id": 11,
        "user": req.email,
        "reference_table": "users",
        "reference_table_pk_id": null,
    }
    makeDbReq(`users_get_all_users(?, ?)`, [req.query.from, req.query.records_per_page])
    .then((users) => {
        req.log_details.detail = 'success'
        req.res_data = users
        next()
    })
    .catch((err) => {
        req.log_details.detail = [err]
        req.res_data = 'failed in fetching users details'
        next()
    })
} 

export default getAllUsers