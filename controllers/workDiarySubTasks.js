import makeDbReq from "../db/index.js"

export default function workDiarySubTasks(req, res) {
    const {
        userId,
        taskId
    } = req.query

    makeDbReq(`sub_tasks_users_sub_tasks(?, ?)`, [
        userId,
        taskId
    ])
    .then((subTasks) => res.send(subTasks))
    .catch((err) => {
        res.send(500)
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