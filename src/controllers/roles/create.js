import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

/**
 * create role
 * @param {*} req 
 * @param {*} res 
 */

export default function createRole (req, res) {

    const connection = con()
    makeDbReq(
        connection,
        'roles_create(?, ?, ?, ?)', 
        [
            req.userId,
            req.orgId,
            req.body.params.roleName, 
            JSON.stringify(req.body.params.roleRights)
        ]
    )
    .then((results) => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)',
            [
                req.userId,
                3,     //activityId
                8,     //tableid
                null,   //tablePkId
                [err]     //details
            ]
        )
    }) 
    .finally(() => {
        connection.end()
    })
}