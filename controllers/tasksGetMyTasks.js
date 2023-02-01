import makeDbReq from "../db/index.js";

/**
 * get tasks assigend to particular user
 * for my tasks screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const tasksGetMyTasks = (req, res, next) => {

    const {
        from,
        recordsPerPage,
        sortBy,
        sortOrder,
        filters
    } = req.query

    for(let i in filters) {
        if (filters[i] == '') filters[i] = null
    }

    makeDbReq(`tasks_get_my_tasks(?, ?, ?, ?, ?, ?)`, [
        req.userId, 
        from, 
        recordsPerPage,
        sortBy,
        sortOrder,
        filters
    ])
    .then((myTasks) => {
        const resKey = "myTasksList"
        const resData = myTasks

        if (typeof req?.logs == "object") {
            req.logs.push({resKey, resData})
        }
        else {
            req.logs = [{resKey, resData}]
        }
        next()
    })
    .catch(err => {
        res.sendStatus(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            28,     //activityId
            19,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default tasksGetMyTasks