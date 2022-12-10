import makeDbReq from '../db/index.js'


/**
 * get list of tasks for `tasks` screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getTasks = (req, res, next) => {

    const {
        from,
        recordsPerPage,
        sortBy,
        sortOrder
    } = req.query

    console.log("sorting", sortOrder)
    
    makeDbReq(`tasks_get(?, ?, ?, ?, ?)`, [
        req.userId,
        from, 
        recordsPerPage,
        sortBy,
        sortOrder
    ])
    .then((tasks) => {
        const resKey = "tasksList"
        const resData = tasks

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
            20,     //activityId
            19,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default getTasks