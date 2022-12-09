/**
 * sends commulative response of all controllers in chain
 * @param {Object} req 
 * @param {*} res 
 */
const sendResponse = (req, res) => {
    let resDataObj = {}

    for (let logObj of req.logs) {
        let {resData, resKey} = logObj

        Object.defineProperty(resDataObj, resKey, {
            value: resData,
            enumerable: true,
            configurable: true,
            writable: true,
        })

        // p.push(
        //     makeDbReq(
        //         `logs_add(?, ?, ?, ?, ?)`,
        //         [activityId, user, referenceTable, referenceTablePkId, detail]
        //     )
        //     // .catch((err) => {
        //     //     console.log("error in logs.js", err)
        //     //     res.send(resDataObj)
        //     // })
        // )
    }

    res.send(resDataObj)

    // Promise.all(p) 
    // .then(() => {
    //     res.send(resDataObj)
    // })
    // .catch(err => {
    //     console.log("error in logs.js catch ", err)
    //     res.send(resDataObj)
    // })
} 

export default sendResponse