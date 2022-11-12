import makeDbReq from "../db/index.js"

const clientTypes = (req, res, next) => {
    req.log_details = {
        "activity_id": 15,
        "user": req.email,
        "reference_table": "clients_type_master",
        "reference_table_pk_id": null,
    }
    makeDbReq(`clients_type_master_get_types`, [])
    .then((types) => {
        req.log_details.detail = 'success'
        req.res_data = types
        next()
    })
    .catch((err) => {
        req.log_details.detail = [`Error ${err}`]
        req.res_data = err
        next()
    })
}

export default clientTypes