import makeDbReq from '../db/index.js'


/**
 * edit sub tasks of given task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const editSubTasks = (req, res, next) => {
    let {
        taskId,
        subTasks,
        saved
    } = req.query

    let taskMasterId = req?.resData?.taskMasterId

    if (subTasks.length == 0) {
        next()
    }
    else {
        subTasks = JSON.parse(subTasks)
        for(let st in subTasks) {
            let stObj = subTasks[st]
            for(let key in stObj) {
                if ((stObj[key] == null || stObj[key] == 'null' || stObj[key] == '') && key != 'id') {
                    delete subTasks[st][key]
                }  
                else continue
            }
        }

        subTasks = JSON.stringify(subTasks)


        makeDbReq(`sub_tasks_edit(?, ?, ?, ?, ?)`, [
            req.userId,
            taskId, 
            taskMasterId,
            subTasks,
            saved
        ])
        .then(() => {
            next()
        })
        .catch(err => {
            res.sendStatus(500)
            makeDbReq('logs_add(?, ?, ?, ?, ?)', [
                req.userId,
                31,     //activityId
                20,     //tableid
                null,   //tablePkId
                [err]     //details
            ])
            .catch((err) => console.log(err))
        })
    }
}

export default editSubTasks