import makeDbReq from '../db/index.js'

const deleteRole = (req, res, next) => {
    console.log("deleteRole body ",req.body)
    const roleId = req.body.role_id
    
    req.log_details = {
        "activity_id": 7,
        "user": req.email,
        "reference_table": "roles",
    }

    makeDbReq(`roles_delete_role(?)`, [roleId])
    .then((results) => {
        console.log(results)
        req.log_details.reference_table_pk_id = roleId
        req.log_details.detail = 'success'
        req.res_data = true
        next()
    })
    .catch((err) => {
        console.log(err)
        req.log_details.reference_table_pk_id = null
        req.log_details.detail = [err]
        req.res_data = "failed to delete role"
        next()
    });
}

export default deleteRole