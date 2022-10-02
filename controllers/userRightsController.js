import {userRightsDb} from "../db/rightsDb.js";

const userRights = (req, res, next) => {
    req.log_details = {
        "activity_id": 9,
        "user": req.email,
        "reference_table": "rights_master",
        "reference_table_pk_id": null,
    }
    userRightsDb(req.email)
    .then((rights) => {
        req.log_details.detail = 'success'
        req.res_data = rights 
        next()
    })
    .catch((err) => {
        console.log(err)
        req.log_details.detail = 'failed to load rights'
        req.res_data = "failed to load rights"
        next()
    })
}

export default userRights