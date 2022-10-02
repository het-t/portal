import {getRightsDb} from '../db/rightsDb.js'

const getRights = (req, res, next) => {
    console.log("GET '/roles/get-rights'", req.query)
    console.log(req.email)
    req.log_details = {
        "activity_id": 9,
        "user": req.email,
        "reference_table": "rights_master",
        "reference_table_pk_id": null
    }
    getRightsDb()
    .then((results) => {
        console.log("inside", req.log_details)
        req.log_details.detail = "success"
        req.res_data = results[0]
        next()
    })
    .catch((err) => {
        console.log("GET '/u/roles/get-rgihts", err)
        req.log_details.detail = err
        req.res_data = 'failed'
        // next()
    })
}

export default getRights