import makeDbReq from '../db/index.js'

/**
 * get roles
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const getRoles = (req, res, next) => {

    const {
        from,
        recordsPerPage,
        sortBy,
        sortOrder,
        filters             //0-name, 1-rights
    } = req.query
    console.log(filters)
    for(let value in filters) {
        console.log(value, filters[value])
        if (filters[value] == undefined || filters[value] == '') {
            filters[value] = null
        }
        console.log(value, filters[value])
    }

    console.log(filters)

    makeDbReq(`roles_get(?, ?, ?, ?, ?, ?)`, [
        req.userId,
        from, 
        recordsPerPage,
        sortBy,
        sortOrder,
        filters
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