import makeDbReq from "../../db/index.js";
import fromatFilters from '../../helpers/formatFilters.js'
import con from '../../db/conDb.js'
/**
 * get tasks assigend to particular user
 * for my tasks screen
 * @param {*} req 
 * @param {*} res 
 */
export default function tasksGetMyTasks (req, res) {

    const {
        from,
        recordsPerPage,
        sortBy,
        sortOrder
    } = req.query

    const filters = fromatFilters(req.query.filters)
    const connection = con()
    makeDbReq(
        connection,
        `tasks_get_my_tasks(?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            req.userId, 
            from, 
            recordsPerPage,
            sortBy,
            sortOrder,
            filters.name,
            filters.description,
            filters.client
        ]
    )
    .then((results) => {
        res.send(results)
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)',
            [
                req.userId,
                28,     //activityId
                19,     //tableid
                null,   //tablePkId
                [err]     //details
            ]
        )
    }) 
    .finally(() => {
        connection.end()
    })
}