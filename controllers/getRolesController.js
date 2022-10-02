import {getRolesDb} from '../db/rolesDb.js'

const getRoles = (req, res, next) => {
    console.log("GET '/users/get-roles'")
    req.log_details = {
        "activity_id": 10,
        "user": req.email,
        "reference_table": "roles",
        "reference_table_pk_id": null,
    }
    getRolesDb()
    .then((roles) => {
        req.log_details.detail = 'success'
        req.res_data = roles
        next()
    })
    .catch((err) => {
        console.log("/users/get-roles catch ",err)
        req.log_details.detail = err
        req.res_data = err
        next()
    })
}

export default getRoles