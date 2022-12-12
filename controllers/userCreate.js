import makeDbReq from '../db/index.js'
import bcrypt from 'bcrypt'

/**
 * create user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const createUser = (req, res, next) => {
    const {firstName, lastName, gender, bithdate, email, role, password} = req.body.params

    bcrypt.hash(password, 3)
    .then((passwordHash) => 
        makeDbReq(`users_create(?, ?, ?, ?, ?, ?, ?, ?)`, [
            req.userId,
            firstName, 
            lastName, 
            gender, 
            bithdate, 
            email, 
            role, 
            passwordHash
        ])
    )
    .then((results) => {
        console.log(results)

        const resKey = "userCreated"
        const resData = results[0].createdUserId

        if (typeof req?.logs == "Object") {
            req.logs.push({resKey, resData})
        }
        else {
            req.logs = [{resKey, resData}]
        }
        next()
    })
    .catch(err => {
        console.log(err)
        res.send(500)
        makeDbReq('logs_add(?, ?, ?, ?, ?)', [
            req.userId,
            4,     //activityId
            15,     //tableid
            null,   //tablePkId
            [err]     //details
        ])
        .catch((err) => console.log(err))
    })
}

export default createUser