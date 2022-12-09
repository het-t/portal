import makeDbReq from '../db/index.js'

/**
 * get number of tasks assigned to user
 * @param {*} req 
 * @param {*} res 
 */

const myTasksCount = (req, res, next) => {
    // let logObj = {
    //     "activityId": 23,
    //     "user": req.userId,
    //     "referenceTable": "tasks",
    //     "referenceTablePkId": null,
    //     "detail": "",
    //     "resData": {},
    //     "resKey": "count"
    // }
    makeDbReq(`my_tasks_count(?)`, [req.userId])
    .then((results) => {
        const resKey = "count"
        const resData = results[0].count

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
            19,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
    // .finally(()=>{
    //     if (typeof req?.logs == "object") {
    //         req.logs.push(logObj)
    //     }
    //     else {
    //         req.logs = [logObj]
    //     }
    //     next()
    // })
}

export default myTasksCount