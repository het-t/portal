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

    }

    res.send(resDataObj)

} 

export default sendResponse