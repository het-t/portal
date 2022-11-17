import makeDbReq from '../db/index.js'

const getRights = (req, res, next) => {

    req.log_details = {
        "activity_id": 9,
        "user": req.email,
        "reference_table": "rights_master",
        "reference_table_pk_id": null
    }

    makeDbReq(`rights_master_get_all_rights()`, [])
    .then((results) => {
        req.log_details.detail = "success"
        req.res_data = results
        next()
    })
    .catch((err) => {
        req.log_details.detail = [err]
        req.res_data = 'failed'
        next()
    })
}

export default getRights