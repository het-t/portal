import {getRightsDb} from '../db/rightsDb.js'

const getRights = (req, res) => {
    console.log("GET '/roles/get-rights'", req.query)
    getRightsDb(req.email)
    .then((results) => {
        console.log(results)
        res.send(results[0])
    })
    .catch((err) => {
        console.log("GET '/u/roles/get-rgihts", err)
        res.send('failed')
    })
}

export default getRights