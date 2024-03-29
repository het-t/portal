import makeDbReq from '../db/index.js'

/**
 * get data of task for edit task screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const getTaskData = (req, res, next) => {

    const taskId = req.query.taskId

    makeDbReq(`tasks_get_task_data(?, ?)`, [
        req.userId,
        taskId
    ])
    .then((taskData) => {
        const resKey = "taskData"
        const resData = taskData
        req.resData = taskId

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

export default getTaskData