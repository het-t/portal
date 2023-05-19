import makeDbReq from "../db/index.js";

const changeStatusTask = (req, res, next) => {
    let {
        taskId,
        statusId
    } = req.body.params

    makeDbReq(`tasks_change_status(?, ?, ?)`, [
        req.userId,
        taskId,
        statusId
    ])
    .then(() => next())
    .catch((err) => {
        res.sentStatus(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            40,     //activityId
            19,     //tableid
            taskId,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
}

export default changeStatusTask