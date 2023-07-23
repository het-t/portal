import makeDbReq from "../../db/index.js"
import formatFilters from "../../helpers/formatFilters.js"
import con from '../../db/conDb.js'

export default function workDiaryTasks(req, res) {
    const filters = formatFilters(req.query.filters)

    const connection = con()
    makeDbReq(
        connection,
        `tasks_users_tasks(?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        [
            req.userId,
            filters.userId,
            filters.datefrom,
            filters.dateto, 
            filters.title,
            filters.client,
            filters.description,
            filters.coordinator,
            filters.status
        ]
    )
    .then((results) => {
        res.send(results)
    })
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