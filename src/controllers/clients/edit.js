import con from "../../db/conDb.js"
import makeDbReq from "../../db/index.js"

/**
 * edit client
 * @param {*} req 
 * @param {*} res 
 */

export default function editClient(req, res) {
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
    } = req.body.params

    const connection = con()
    makeDbReq(
        connection,
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
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)',
            [
                req.userId,
                14,     //activityId
                3,     //tableid
                clientId,   //tablePkId
                [err]     //details
            ]
        )
    }) 
    .finally(() => {
        connection.end()
    })
}