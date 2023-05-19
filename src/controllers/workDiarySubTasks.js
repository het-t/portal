import makeDbReq from "../db/index.js"

export default function workDiarySubTasks(req, res) {
    const {
        userId,
        taskId,
        fromDate,
        toDate
    } = req.query

    makeDbReq(`sub_tasks_users_sub_tasks(?, ?, ?, ?, ?)`, [
        req.userId,
        userId,
        taskId,
        fromDate ? fromDate : null,
        toDate ? toDate : null
    ])
    .then((subTasks) => res.send(subTasks))
    .catch((err) => {
        console.log(err)
        res.sendStatus(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            42,     //activityId
            21,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
}