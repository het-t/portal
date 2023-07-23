import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

/**
 * create task master
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export default function createTaskMaster(req, res, next) {

    let {
        title, 
        description,
        cost, 
        saved, 
    } = req.body.params

    //
    saved = new Number(saved)

    if (saved == false) {
        next()
    }
    //

    else {
        const connection = con()
        makeDbReq(
            connection,
            `tasks_master_create(?, ?, ?, ?, ?)`,
            [
                req.userId,
                req.orgId,
                title, 
                description, 
                cost ? cost : null
            ]
        )
        .then((results) => {
            req.resData = {
                taskMasterId: results[0].taskMasterId 
            }

            req.skipSubTasksCreate = false
            next() 
        })
        .catch(err => {
            res.sendStatus(500)
            return makeDbReq(
                connection,
                'logs_add(?, ?, ?, ?, ?)', 
                [
                    req.userId,
                    33,     //activityId
                    12,     //tableid
                    req.resData,   //tablePkId
                    [err]     //details
                ]
            )
        })
        .finally(() => {
            connection.end()
        }) 
    }
    
}