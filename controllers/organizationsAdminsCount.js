import makeDbReq from '../db/index.js'

/**
 * get total number of admins
 * @param {*} req 
 * @param {*} res 
 */

const adminsCount = (req, res) => {
    let {
        orgId
    } = req.query

    makeDbReq(`organizations_users_admins_count(?, ?)`, [
        req.userId,
        orgId
    ])
    .then((results) => {
        res.send({'count': results[0].count})
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            23,     //activityId
            15,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
}

export default adminsCount