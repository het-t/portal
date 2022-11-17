import makeDbReq from '../db/index.js'

const deleteRole = (req, res, next) => {
    const roleId = req.body.roleId
    
    req.log_details = {
        "activity_id": 7,
        "user": req.email,
        "reference_table": "roles",
    }

    makeDbReq(`roles_delete_role(?)`, [roleId])
    .then((results) => {
        req.log_details.reference_table_pk_id = roleId
        req.log_details.detail = 'success'
        req.res_data = true
        next()
    })
    .catch((err) => {
        req.log_details.reference_table_pk_id = null
        req.log_details.detail = [err]
        req.res_data = "failed to delete role"
        next()
    });
}

export default deleteRole