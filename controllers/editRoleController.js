import makeDbReq from "../db/index.js"

const editRole = (req, res, next) => {
    console.log("edit role ", req.body)

    req.log_details = {
        "activity_id": 5,
        "user": req.email,
        "reference_table": "roles",
    }
    makeDbReq(`roles_edit_role(?, ?)`, [req.body.params.role_name, JSON.stringify(req.body.params.role_rights)])
    .then((results) => {
        req.log_details.reference_table_pk_id = results[0].pk_for_logs
        req.log_details.detail = 'success'
        next()
    })
    .catch((err) => {
        req.log_details.reference_table_pk_id = null
        req.log_details.detail = [`Error ${err}`]
        next()
    })
}

export default editRole