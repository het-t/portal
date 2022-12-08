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
            // .catch((err) => {
            //     console.log("error in logs.js", err)
            //     res.send(resDataObj)
            // })
        )
    }

    Promise.all(p) 
    .then(() => {
        res.send(resDataObj)
    })
    .catch(err => {
        console.log("error in logs.js catch ", err)
        res.send(resDataObj)
    })
} 

export default addLog