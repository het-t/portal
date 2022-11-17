import makeDbReq from '../db/index.js'

/**
 * add new log
 * @param {Object} req 
 * @param {*} res 
 */
const addLog = (req, res) => {
    let resDataObj = {}
    let p = []

    for (let logObj of req.logs) {
        console.log("logObj",logObj)
        let {activityId, user, referenceTable, referenceTablePkId, detail, resData, resKey} = logObj

        Object.defineProperty(resDataObj, resKey, {
            value: resData,
            enumerable: true,
            configurable: true,
            writable: true,
        })

        p.push(
            makeDbReq(
                `logs_add(?, ?, ?, ?, ?)`,
                [activityId, user, referenceTable, referenceTablePkId, detail]
            )
            .catch((e) => {
                // console.log(e)
            })
        )

        Promise.all(p)
        .then(() => {
            res.send(resDataObj)
        })
        .catch(() => {
            res.send('fail')
        })
    };
} 

export default addLog