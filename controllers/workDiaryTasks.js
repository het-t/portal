import makeDbReq from "../db/index.js"

export default function workDiaryTasks(req, res) {
    const {
        userId,
        fromDate,
        toDate
    } = req.query

    console.log("fromDate raw", fromDate)
    console.log("fromDate formatted", new Date(fromDate).toLocaleString().slice(0, 19).replace('T', ' '))

    makeDbReq(`tasks_users_tasks(?, ?, ?)`, [
        userId,
        fromDate ? fromDate : null,
        toDate ? toDate : null
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