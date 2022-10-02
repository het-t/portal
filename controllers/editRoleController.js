import { editRoleDb } from "../db/rolesDb.js"

const editRole = (req, res, next) => {
    console.log("edit role ", req.body)

    req.log_details = {
        "activity_id": 5,
        "user": req.email,
        "reference_table": "roles",
        "reference_table_pk_id": null,
    }
    editRoleDb(req.body.params.role_name, JSON.stringify(req.body.params.role_rights))
    .then((results) => {
        req.log_details.detail = 'success'
        next()
    })
    .catch((err) => {
        req.log_details.detail = [(err)]
        next()
    })
}

export default editRole