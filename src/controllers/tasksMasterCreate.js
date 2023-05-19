import makeDbReq from '../db/index.js'

/**
 * create task master
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * used in task-create and task-edit
 * in task-create if user choose not to save execution get transferred to next middleware 
 * in task-edit if user choose not to save exectuin get transferred to next middleware if next middleware is tasksSubTasksCreate it will also get skipped
 *  
 */

const createTaskMaster = (req, res, next) => {

    let {
        title, 
        description,
        cost, 
        saved, 
    } = req.query

    //
    saved = new Number(saved)

    if (saved == false) {
        next()
    }
    //

    else {

        makeDbReq(`tasks_master_create(?, ?, ?, ?, ?)`, [
            req.userId,
            req.orgId,
            title, 
            description, 
            cost ? cost : null
        ])
        .then((results) => {
            req.resData = {
                taskMasterId: results[0].taskMasterId 
            }

            req.skipSubTasksCreate = false
            next() 
        })
        .catch(err => {
            res.sendStatus(500)
            makeDbReq('logs_add(?, ?, ?, ?, ?)', [
                req.userId,
                33,     //activityId
                12,     //tableid
                req.resData,   //tablePkId
                [err]     //details
            ])
            .catch((err) => console.log(err))
        })
    }
    
}

export default createTaskMaster