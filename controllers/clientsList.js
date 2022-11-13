import makeDbReq from '../db/index.js'

const getClients = (req, res, next) => {
    req.log_details = {
        "activity_id": 16,
        "user": req.email,
        "reference_table": "clients_master",
        "reference_table_pk_id": null
    }

    makeDbReq(`clients_master_get_clients()`, [])
    .then((results) => {
        req.log_details.detail = "success"
        req.res_data = results
        next()
    })
    .catch((err) => {
        req.log_details.detail = [`Error ${err}`]
        req.res_data = 'failed'
        next()
    })
}

export default getClients