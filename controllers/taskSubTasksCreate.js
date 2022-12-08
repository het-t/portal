import makeDbReq from '../db/index.js'

/**
 * create sub-task for given task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const createSubTasks = (req, res, next) => {
        
        let {
            subTasks,
            saved
        } = req.query

        subTasks = JSON.parse(subTasks)

        const {
            taskId,
            taskMasterId
        } = req.resData

        if (subTasks?.length == 0) next()
        else {

            let logObj = {
                "activityId": 18,
                "user": req.userId,
                "referenceTable": "sub_tasks_master",
                "referenceTablePkId": null,
                "detail": "",
                "resData": [],
                "resKey": "subTasksCreated"
            }


            for(let st in subTasks) {
                let stObj = subTasks[st]
                for(let key in stObj) {
                    if (stObj[key] == null || stObj[key] == 'null' || stObj[key] == '') {
                        delete subTasks[st][key]
                    }  
                    else continue
                }
            }

            subTasks = JSON.stringify(subTasks)


            makeDbReq(`sub_tasks_create_sub_task(?, ?, ?, ?, ?)`, [
                req.userId, 
                taskMasterId ? taskMasterId : null, 
                taskId,        
                saved,
                subTasks,
            ])
            .then((results) => {
                logObj.referenceTablePkId = results[0]?.subTaskId
                logObj.detail = 'success'
                logObj.resData.push(results[0]?.subTaskId)
            })
            .then(() => {
                if (typeof req?.logs == "object") {
                    req.logs.push(logObj)
                }
                else {
                    req.logs = [logObj]
                }
                next()
            })
            .catch((err) => {
                logObj.detail = [err]
                logObj.resData = 'fail'
                next()
            })
        }
    // }
}
export default createSubTasks