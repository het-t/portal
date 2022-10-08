import makeDbReq from '../db/index.js'

const createRole = (req, res, next) => {
    console.log("GET '/users/create-role'", req.query)
    
    req.log_details = {
        "activity_id": 3,
        "user": req.email,
        "reference_table": "roles",
    }

    makeDbReq(`roles_create_role(?, ?)`, [req.query.role_name, JSON.stringify(req.query.role_rights)])
    .then((results) => {
        console.log("creater role", results)
        req.log_details.reference_table_pk_id = results[0].pk_for_logs
        req.log_details.detail = 'success'
        req.res_data = 'success'
        next()
    })
    .catch((err) => {
        console.log("/users/create-role catch ",err)
        req.log_details.reference_table_pk_id = null
        req.log_details.detail = [err]
        req.res_data = 'failed'
        next()
    })
}

export default createRole