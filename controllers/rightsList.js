import makeDbReq from '../db/index.js'

/**
 * get list of rights
 * from rights_master
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const getRights = (req, res, next) => {

    // const logObj = {
    //     "activityId": 9,
    //     "user": req.userId,
    //     "referenceTable": "rights_master",
    //     "referenceTablePkId": null,
    //     "detail": "",
    //     "resData": {},
    //     "resKey": "rightsMasterList",
    // }

    makeDbReq(`rights_master_get_all(?)`, [req.userId])
    .then((rights) => {
        const resData = rights
        const resKey = 'rightsMasterList'

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
            9,     //activityId
            6,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    }) 
}

export default getRights