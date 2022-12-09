import makeDbReq from '../db/index.js'

/**
 * delete role
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const deleteClient = (req, res, next) => {
    const clientId = req.body.params.clientId

    // let logObj = {
    //     "activityId": 29,
    //     "user": req.userId,
    //     "referenceTable": "clients_master",
    //     "referenceTablePkId": clientId,
    //     "detail": "",
    //     "resData": {},
    //     "resKey": "clientDeleted",
    // }

    makeDbReq(`clients_master_delete(?)`, [
        req.userId,
        clientId
    ])
    .then(() => {
        // const resKey = 'clientDeleted'
        // const resData = 
        // if (typeof req?.logs == "object") {
        //     req.logs.push(logObj)
        // }
        // else {
        //     req.logs = [logObj]
        // }
        next()
    })
    .catch(err => {
        res.send(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            29,     //activityId
            3,     //tableid
            clientId,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default deleteClient