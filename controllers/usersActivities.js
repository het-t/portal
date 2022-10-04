import {activityDb} from '../db/activityDb.js'

const usersActivities = (req, res, next) => {
    activityDb(req.query.from, req.query.records_per_page)
    .then((activities) => {
        res.send(activities)
    })
    .catch((err) => {
        res.send("failed")
    })
}

export default usersActivities