import makeDbReq from "../db/index.js"

export  default function clientsTag(req, res) {
    const clientId = req.body.params.id
    makeDbReq('clients_master_change_tag(?, ?, ?)', [
        req.userId,
        clientId,
        req.body.params.tagId
    ])    
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            66,     //activityId
            3,     //tableid
            clientId,   //tablePkId
            [err]     //details
        ])
        res.sendStatus(500)
    })
}