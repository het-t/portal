import makeDbReq from '../db/index.js'

/**
 * get logs of task for edit task screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const getTaskLogs = (req, res, next) => {
    
    makeDbReq(`tasks_get_logs(?, ?)`, [
        req.userId,
        req.resData
    ])
    .then((taskLogs) => {
        const resKey = "tasksLogs"
        const resData = taskLogs

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
            37,     //activityId
            21,     //tableid
            req.resData,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
}

export default getTaskLogs