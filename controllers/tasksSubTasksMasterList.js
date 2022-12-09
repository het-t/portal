import makeDbReq from '../db/index.js'


/**
 * get list of tasks for `tasks` screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getSubTasksMaster = (req, res, next) => {

    makeDbReq(`sub_tasks_master_get(?, ?)`, [
        req.userId,
        req.query.taskMasterId
    ])
    .then((tasks) => {
        const resKey = "subTasksMasterList"
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
            27,     //activityId
            20,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
}

export default getSubTasksMaster