import makeDbReq from '../db/index.js'

/**
 * edit user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const editUser = (req, res, next) => {
    const {
        userIdToEdit,
        firstName,
        lastName,
        gender,
        birthdate,
        email,
        role
    } = req.body.params

    // let logObj = {
    //     "activityId": 6,
    //     "user": req.userId,
    //     "referenceTable": "users",
    //     "referenceTablePkId": null,
    //     "detail": "",
    //     "resData": {},
    //     "resKey": "userEdited"
    // }

    makeDbReq(`users_edit(?, ?, ?, ?, ?, ?, ?, ?)`, [
        req.userId,
        userIdToEdit,
        firstName,
        lastName,
        gender,
        birthdate,
        email,
        role
    ])
    .then(() => {
        next()
        // logObj.referenceTablePkId = userId
        // logObj.detail = 'success'
        // logObj.resData = 'success'
    })
    .catch((err) => {
        res.send(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            6,     //activityId
            15,     //tableid
            userIdToEdit,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
    // .finally(()=>{
    //     if (typeof req?.logs == "Object") {
    //         req.logs.push(logObj)
    //     }
    //     else {
    //         req.logs = [logObj]
    //     }
    //     next()
    // })
}

export default editUser