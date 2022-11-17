import makeDbReq from "../db/index.js"

const usersActivities = (req, res, next) => {
    makeDbReq(
        `user_activities(?, ?)`,
        [req.query.from, req.query.recordsPerPage]
    )
    .then((activities) => {
        res.send(activities)
    })
    .catch((err) => {
        res.send("failed")
    })
}

export default usersActivities