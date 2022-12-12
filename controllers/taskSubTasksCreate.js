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

            makeDbReq(`sub_tasks_create(?, ?, ?, ?, ?)`, [
                req.userId, 
                taskMasterId ? taskMasterId : null, 
                taskId,        
                saved,
                subTasks,
            ])
            .then((results) => {
                const resKey = "subTasksCreated"
                const resData = results[0]?.subTaskId

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
                    18,     //activityId
                    20,     //tableid
                    null,   //tablePkId
                    [err]     //details
                ])
                .catch((err) => console.log(err))
            })
        }
    // }
}
export default createSubTasks