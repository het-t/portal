import makeDbReq from '../db/index.js'

/**
 * get user data to show in edit user screen
 * @param {*} req 
 * @param {*} res 
 */

const getEditUser = (req, res, next) => {
    // let logObj = {
    //     "activityId": 25,
    //     "user": req.userId,
    //     "referenceTable": "users",
    //     "referenceTablePkId": null,
    //     "detail": "",
    //     "resData": {},
    //     "resKey": "userData"
    // }
    makeDbReq(`users_user_data(?, ?)`, [
        req.userId,
        req.query.editUserId
    ])
    .then((userData) => {
        const resKey = "userData"
        const resData = userData[0]

        if (typeof req?.logs == "Object") {
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
            25,     //activityId
            15,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
}

export default getEditUser