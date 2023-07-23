import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'


/**
 * get list of tasks for `tasks` screen
 * @param {*} req 
 * @param {*} res 
 */
export default function getSubTasksMaster (req, res) {

    const taskMasterId = req.params.id

    const connection = con()
    makeDbReq(
        connection,
        `sub_tasks_master_get(?, ?)`, 
        [
            req.userId,
            taskMasterId
        ]
    )
    .then((results) => {
        res.send(results)
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)', 
            [
                req.userId,
                27,     //activityId
                20,     //tableid
                taskMasterId,   //tablePkId
                [err]     //details
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}