import makeDbReq from '../db/index.js'


/**
 * get list of tasks for `tasks` screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getTasksMaster = (req, res, next) => {

    makeDbReq(`tasks_master_get(?)`, [req.userId])
    .then((tasks) => {
        const resKey = "tasksMasterList"
        const resData = tasks

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
            33,     //activityId
            12,     //tableid
            req.resData,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
}

export default getTasksMaster