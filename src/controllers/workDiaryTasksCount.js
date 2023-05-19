import makeDbReq from "../db/index.js";

const workDiaryTasksCount = (req, res, next) => {
    let {filters} = req.query

    let generalFilters = filters.slice(3, 9).map((el) => {
        if (el == '') return null
        return el
    })

    filters = filters.slice(0, 3).map((el) => {
        if (el == '' || el == null || el == 'null') return null
        return el
    })

    makeDbReq(`tasks_work_diary_tasks_count(?, ?, ?, ?, ?)`, [
        req.userId,
        filters[0],
        filters[1],
        filters[2],
        generalFilters
    ])
    .then((results) => {
        const resKey = "count"
        const resData = results[0].count 

        if (typeof req?.logs == "object") {
            req.logs.push({resKey, resData})
        }
        else {
            req.logs = [{resKey, resData}]
        }
        next()
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            23,     //activityId
            19,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default workDiaryTasksCount