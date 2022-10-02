import addLogDb from '../db/logsDb.js'

const addLog = (req, res) => {
    console.log("log data", req.log_details)
    addLogDb(Object.values(req.log_details))
    .then(() => {
        res.send(req.res_data)
    })
} 

export default addLog