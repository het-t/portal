import makeDbReq from "../db/index.js"

/**
 * get types of clients
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const clientTypes = (req, res, next) => {
    makeDbReq(`clients_type_master_get(?)`, [req.userId])
    .then((types) => {
        const resKey = 'clientsMasterTypes'
        const resData = types

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
            15,     //activityId
            3,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default clientTypes