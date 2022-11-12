import makeDbReq from '../db/index.js'

/**
 * Helps to add new log
 * @param {Object} req 
 * @param {*} res 
 */
const addLog = (req, res) => {
    console.log("log data", req.log_details)
    makeDbReq(
        `logs_add(?, ?, ?, ?, ?)`,
        Object.values(req.log_details)
    )
    .then(() => {
        res.send(req.res_data)
    })
} 

export default addLog

/**
 * returns true if given value is empty
 * @param {Any} value 
 * @returns Boolean
 */
const isEmpty=(value)=>{
return !value || typeof value==='object'
}