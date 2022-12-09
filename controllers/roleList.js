import makeDbReq from '../db/index.js'

/**
 * get roles
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const getRoles = (req, res, next) => {

    makeDbReq(`roles_get(?, ?, ?)`, [
        req.userId,
        req.query.from, 
        req.query.recordsPerPage
    ])
    .then((roles) => {
        const resKey = 'rolesList'
        const resData = roles

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
            10,     //activityId
            8,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default getRoles