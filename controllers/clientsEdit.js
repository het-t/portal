import makeDbReq from "../db/index.js"

/**
 * edit client
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const editClient = (req, res, next) => {
    const {
        clientId,
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

    // let logObj = {
    //     "activityId": 14,
    //     "user": req.userId,
    //     "referenceTable": "clients_master",
    //     "referenceTablePkId": null,
    //     "resData": "",
    //     "resKey": "clientEdited"
    // }
    makeDbReq(
        `clients_master_edit(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        [
            req.userId,
            clientId,
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
        ]
    )
    .then(() => {
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
            14,     //activityId
            3,     //tableid
            clientId,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default editClient