import makeDbReq from "../../db/index.js"
import con from '../../db/conDb.js'

/**
 * create client
 * @param {*} req 
 * @param {*} res 
 */

export default function (req, res) {
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
        conPhone,
        status
    } = req.body.params

    const connection = con()
    makeDbReq(
        connection,
        `clients_master_create(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        [
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
            conPhone,
            status
        ]
    )
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)',
            [
                req.userId,
                13,     //activityId
                3,     //tableid
                null,   //tablePkId
                [err]     //details
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}