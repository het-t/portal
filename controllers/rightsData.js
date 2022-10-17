import makeDbReq from "../db/index.js";

const userRights = (req, res, next) => {
    req.log_details = {
        "activity_id": 9,
        "user": req.email,
        "reference_table": "rights_master",
        "reference_table_pk_id": null,
    }
    makeDbReq(`rights_master_get_user_rights(?)`, [req.email])
    .then((rights) => {
        req.log_details.detail = 'success'
        req.res_data = rights 
        next()
    })
    .catch((err) => {
        console.log(err)
        req.log_details.detail = [`Error ${err}`]
        req.res_data = "failed to load rights"
        next()
    })
}

export default userRights