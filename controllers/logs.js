import makeDbReq from '../db/index.js'

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