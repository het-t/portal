import makeDbReq from '../db/index.js'

const getRights = (req, res, next) => {
    console.log("GET '/roles/get-rights'", req.query)
    console.log(req.email)
    req.log_details = {
        "activity_id": 9,
        "user": req.email,
        "reference_table": "rights_master",
        "reference_table_pk_id": null
    }

    makeDbReq(`rights_master_get_all_rights()`, [])
    .then((results) => {
        console.log("inside", req.log_details)
        req.log_details.detail = "success"
        req.res_data = results
        next()
    })
    .catch((err) => {
        console.log("GET '/u/roles/get-rights", err)
        req.log_details.detail = [err]
        req.res_data = 'failed'
        next()
    })
}

export default getRights