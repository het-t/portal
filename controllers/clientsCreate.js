import makeDbReq from "../db/index.js"

/**
 * create client
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const createClient = (req, res, next) => {
    const {
        clientName, 
        clientTypeId, 
        cin, 
        firmName, 
        firmAddress, 
        caEmail, 
        caPan, 
        conName,
        conEmail, 
        conPhone
    } = req.query

    makeDbReq(`clients_master_create(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
        req.userId,
        req.orgId,
        clientName, 
        cin,
        clientTypeId, 
        firmName, 
        firmAddress, 
        caPan, 
        caEmail, 
        conName, 
        conEmail, 
        conPhone
    ])
    .then((results) => {
        const resKey = 'clientCreated'
        const resData = results[0].clientId

        if (typeof req?.logs == "object") {
            req.logs.push({resKey, resData})
        }
        else {
            req.logs = [{resKey, resData}]
        }
        next()
    })
    .catch((err) => {
        res.sendStatus(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            13,     //activityId
            3,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
}

export default createClient