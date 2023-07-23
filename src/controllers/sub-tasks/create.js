import con from '../../db/conDb.js'
import makeDbReq from '../../db/index.js'

/**
 * create sub-task for given task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export default function createSubTasks (req, res, next) {
        
        let {
            subTasks,
            saved
        } = req.body.params


        const {
            taskId,
            taskMasterId
        } = req.resData

        if (subTasks?.length == 0) {
            next()
        }
        else {
            const connection = con()
            makeDbReq(
                connection,
                `sub_tasks_create(?, ?, ?, ?, ?)`, 
                [
                    req.userId, 
                    taskMasterId ? taskMasterId : null, 
                    taskId,        
                    saved,
                    subTasks,
                ]
            )
            .then((results) => {
                const resKey = "subTasksCreated"
                const resData = results[0]?.subTaskId

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
                return makeDbReq(
                    connection,
                    'logs_add(?, ?, ?, ?, ?)', 
                    [
                        req.userId,
                        18,     //activityId
                        20,     //tableid
                        null,   //tablePkId
                        [err]     //details
                    ]
                )
            })
            .finally(() => {
                connection.end()
            })
        }
}
