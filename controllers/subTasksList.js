import makeDbReq from '../db/index.js'

/**
 * get sub tasks of task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const getSubTasks = (req, res, next) => {

    makeDbReq(`sub_tasks_get_task_sub_tasks(?, ?)`, [
        req.userId,
        req.query.taskId
    ])
    .then((subTasks) => {
        const resKey = 'subTasksList'
        const resData = subTasks

        if (typeof req?.logs == "object") {
            req.logs.push({resKey, resData})
        }
        else {
            req.logs = [{resKey, resData}]
        }
        next()
    })
    .catch(err => {
        res.send(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            19,     //activityId
            20,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default getSubTasks