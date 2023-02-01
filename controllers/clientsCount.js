import makeDbReq from '../db/index.js'

/**
 * get number of clients
 * @param {*} req 
 * @param {*} res 
 */

const clientsCount = (req, res, next) => {

    makeDbReq(`clients_count(?)`, [req.userId])
    .then((results) => {
        const resKey = 'count'
        const resData = results[0].count

        if (typeof req?.logs == "object") {
            req.logs.push({resData, resKey})
        }
        else {
            req.logs = [{resData, resKey}]
        }
        next()
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            23,     //activityId
            3,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default clientsCount