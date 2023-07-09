import con from "../db/conDb.js"
import makeDbReq from "../db/index.js"

export default function clientsTag(req, res) {
    const clientId = req.body.id
    
    const connection = con()
    makeDbReq(
        connection,
        'clients_master_change_tag(?, ?, ?)', 
        [
            req.userId,
            clientId,
            req.body.tagId
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
                66,     //activityId
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