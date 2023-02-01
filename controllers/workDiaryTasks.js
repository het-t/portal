import makeDbReq from "../db/index.js"

export default function workDiaryTasks(req, res, next) {
    let {
        filters
    } = req.query
    

    let generalFilters = filters.slice(3, 9).map((el) => {
        if (el == '') return null
        return el
    })

    filters = filters.slice(0, 3).map((el) => {
        if (el == '' || el == null || el == 'null') return null
        return el
    })

    makeDbReq(`tasks_users_tasks(?, ?, ?, ?, ?)`, [
        req.userId,
        filters[0],
        filters[1],
        filters[2], 
        generalFilters
    ])
    .then((tasks) => {
        const resKey = 'workDiaryList'
        const resData = tasks

        if (typeof req?.logs == "object") {
            req.logs.push({resKey, resData})
        }
        else {
            req.logs = [{resKey, resData}]
        }
        next()
    })
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