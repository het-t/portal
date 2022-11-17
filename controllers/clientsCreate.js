import makeDbReq from "../db/index.js"

const createClient = (req, res, next) => {
    const {clientName, clientType, cin, firmName, firmAddress, caEmail, caPanDetails, conName, conEmail, conPhone} = req.query

    req.log_details = {
        "activity_id": 13,
        "user": req.email,
        "reference_table": "clients_master",
        "reference_table_pk_id": null,
    }
    makeDbReq(`clients_master_create_client(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [clientName, clientType, cin, firmName, firmAddress, caEmail, caPanDetails, conName, conEmail, conPhone])
    .then(() => {
        req.log_details.reference_table_pk_id = null
        req.log_details.detail = 'success'
        req.res_data = 'success'
        next()
    })
    .catch((err) => {
        req.log_details.reference_table_pk_id = null
        req.log_details.detail = [err]
        req.res_data = err
        next()
    })
}

export default createClient