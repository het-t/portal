import {createRoleDb} from '../db/rolesDb.js'

const createRole = (req, res, next) => {
    console.log("GET '/users/create-role'", req.query)
    const roleName = req.query.role_name
    const roleRights = JSON.stringify(req.query.role_rights)
    
    req.log_details = {
        "activity_id": 3,
        "user": req.email,
        "reference_table": "roles",
    }

    createRoleDb(roleName, roleRights)
    .then((results) => {
        console.log("creater role", results)
        req.log_details.reference_table_pk_id = results[0][0].pk_for_logs
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