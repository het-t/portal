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


        // let logObj = {
        //     "activityId": 31,
        //     "user": req.userId,
        //     "referenceTable": "sub_tasks",
        //     "referenceTablePkId": null,
        //     "detail": "",
        //     "resData": {},
        //     "resKey": "subTasksEdited"
        // }

        makeDbReq(`sub_tasks_edit(?, ?, ?, ?, ?)`, [
            req.userId,
            taskId, 
            taskMasterId,
            subTasks,
            saved
        ])
        .then(() => {
            // const resKey = "subTasksEdited"
            // const resData = results[0].count
    
            // if (typeof req?.logs == "object") {
            //     req.logs.push({resKey, resData})
            // }
            // else {
            //     req.logs = [{resKey, resData}]
            // }
            next()
        })
        .catch(err => {
            res.send(500)
            makeDbReq('logs_add(?, ?, ?, ?, ?)', [
                req.userId,
                31,     //activityId
                20,     //tableid
                null,   //tablePkId
                [err]     //details
            ])
            .catch((err) => console.log(err))
        })
        // .finally(() => {
        //     if (typeof req?.logs == "object") {
        //         req.logs.push(logObj)
        //     }
        //     else {
        //         req.logs = [logObj]
        //     }
        //     next()
        // })
    }
}

export default editSubTasks