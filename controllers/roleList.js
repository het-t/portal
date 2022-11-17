import makeDbReq from '../db/index.js'

const getRoles = (req, res, next) => {

    req.log_details = {
        "activity_id": 10,
        "user": req.email,
        "reference_table": "roles",
        "reference_table_pk_id": null,
    }
    makeDbReq(`roles_get_roles(?, ?)`, [req.query.from, req.query.recordsPerPage])
    .then((roles) => {
        req.log_details.detail = 'success'
        req.res_data = roles
        next()
    })
    .catch((err) => {
        req.log_details.detail = [err]
        req.res_data = err
        next()
    })
}

export default getRoles