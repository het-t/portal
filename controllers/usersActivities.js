import activityDb from '../db/activityDb.js'

const usersActivities = (req, res, next) => {
    req.log_details = {
        "activity_id": 12,
        "user": req.email,
        "reference_table": "user_activities",
        "reference_table_pk_id": null,
    }
    activityDb(req.query.from, req.query.records_per_page)
    .then((activities) => {
        console.log(activities)
        req.res_data = activities
        req.log_details.detail = 'success'
        next()
    })
    .catch((err) => {
        req.res_data = 'failed'
        req.log_details.detail = [err]
        next()
    })
}

export default usersActivities