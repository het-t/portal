import makeDbReq from '../db/index.js'

/**
 * get list of clients for `client` screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const getClients = (req, res, next) => {

    const {
        from,
        recordsPerPage,
        sortBy,
        sortOrder
    } = req.query

    makeDbReq(`clients_master_get(?, ?, ?, ?, ?)`, [
        req.userId,
        from, 
        recordsPerPage,
        sortBy,
        sortOrder
    ])
    .then((results) => {
        const resKey = 'clientsList'
        const resData = results

        if (typeof req?.logs == "object") {
            req.logs.push({resKey, resData})
        }
        else {
            req.logs = [{resKey, resData}]
        }
        next()
    })
    .catch(err => {
        res.send(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            16,     //activityId
            3,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default getClients