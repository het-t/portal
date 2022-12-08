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
                    console.log(key, "is null")
                    delete subTasks[st][key]
                }  
                else continue
            }
        }

        subTasks = JSON.stringify(subTasks)


        let logObj = {
            "activityId": 31,
            "user": req.userId,
            "referenceTable": "sub_tasks",
            "referenceTablePkId": null,
            "detail": "",
            "resData": {},
            "resKey": "subTasksEdited"
        }

        makeDbReq(`sub_tasks_edit(?, ?, ?, ?)`, [
            taskId, 
            taskMasterId,
            subTasks,
            saved
        ])
        .then(() => {
            logObj.detail = 'success'
            logObj.resData = 'success'
        })
        .catch((err) => {
            logObj.detail = [err]
            logObj.resData = err
        })
        .finally(() => {
            if (typeof req?.logs == "object") {
                req.logs.push(logObj)
            }
            else {
                req.logs = [logObj]
            }
            next()
        })
    }
}

export default editSubTasks