import makeDbReq from '../db/index.js'

/**
 * delete role
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const deleteClient = (req, res, next) => {
    const clientId = req.body.params.clientId

    makeDbReq(`clients_master_delete(?)`, [
        req.userId,
        clientId
    ])
    .then(() => {
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