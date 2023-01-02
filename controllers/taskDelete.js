import makeDbReq from '../db/index.js'

/**
 * delete task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const deleteTask = (req, res, next) => {
    const taskId = req.body.params.taskId

    makeDbReq(`tasks_delete(?, ?)`, [
        req.userId,
        taskId
    ])
    .then(() => {
        next()
    })
    .catch(err => {
        res.send(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            32,     //activityId
            19,     //tableid
            taskId,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default deleteTask