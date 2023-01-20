import makeDbReq from "../db/index.js"

export default function workDiaryTasks(req, res) {
    const {
        userId
    } = req.query

    makeDbReq(`tasks_users_tasks(?)`, [
        userId
    ])
    .then((tasks) => res.send(tasks))
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