import makeDbReq from '../db/index.js'

/**
 * get total number of users
 * @param {*} req 
 * @param {*} res 
 */

const usersCount = (req, res, next) => {
    // let logObj = {
    //     "activityId": 23,
    //     "user": req.userId,
    //     "referenceTable": "users",
    //     "referenceTablePkId": null,
    //     "detail": "",
    //     "resData": {},
    //     "resKey": "count"
    // }
    makeDbReq(`users_count(?)`, [req.userId])
    .then((results) => {
        const resKey = "count"
        const resData = results[0].count 

        if (typeof req?.logs == "Object") {
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
            23,     //activityId
            15,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
}

export default usersCount