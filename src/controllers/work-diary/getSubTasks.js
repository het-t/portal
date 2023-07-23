import con from "../../db/conDb.js"
import makeDbReq from "../../db/index.js"
import formatFilters from "../../helpers/formatFilters.js"

export default function workDiarySubTasks(req, res) {
    const {userId, taskId} = req.params

    const filters = formatFilters(req.query.filters)

    const connection = con()
    makeDbReq(
        connection,
        `sub_tasks_users_sub_tasks(?, ?, ?, ?, ?)`, 
        [
            req.userId,
            userId,
            taskId,
            filters.datefrom,
            filters.dateto
        ]
    )
    .then((results) => res.send(results))
    .catch((err) => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                42,     //activityId
                21,     //tableid
                null,   //tablePkId
                [err]     //details
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}