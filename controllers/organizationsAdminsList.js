import makeDbReq from '../db/index.js'

/**
 * get admins of given organization
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const getOrgainzationsAdmins = (req, res) => {
    const {
        from,
        recordsPerPage,
        sortBy,
        sortOrder,
        filters
    } = req.query

    for (let i in filters) {
        if (filters[i] == '') filters[i] = null
    }
    
    makeDbReq(`organizations_users_admins_get(?, ?, ?, ?, ?, ?)`, [
        req.userId,
        from, 
        recordsPerPage,
        sortBy,
        sortOrder,
        filters
    ])
    .then((admins) => {
        res.send({'orgs/adminsList': admins})
    })
    .catch((err) => {
        res.sendStatus(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            6,     //activityId
            15,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
} 

export default getOrgainzationsAdmins