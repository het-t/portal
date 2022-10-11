import {activityCountDb} from '../db/activityDb.js'

const usersActivityCount = (req, res, next) => {
    req.log_details = {
        "activity_id": 12,
        "user": req.email,
        "reference_table": "user_activities",
        "reference_table_pk_id": null,
    }
    activityCountDb()
    .then((count) => {
        req.res_data = count
        req.log_details.detail = 'success'
        next()
    })
    .catch(err => {
        req.res_data = 'failed'
        req.log_details.detail = [`Error ${err}`]
        next()
    }) 
}

export default usersActivityCount