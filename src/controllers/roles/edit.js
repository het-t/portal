import makeDbReq from "../../db/index.js"
import con from '../../db/conDb.js'

/**
 * edit role
 * @param {*} req 
 * @param {*} res 
 */

export default function editRole (req, res) {

    const connection = con()
    makeDbReq(
        connection,
        `roles_edit(?, ?, ?, ?)`, 
        [
            req.userId,
            req.params.id, 
            req.body.params.roleName, 
            JSON.stringify(req.body.params.roleRights)
        ]
    )
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
        return makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)',
            [
                req.userId,
                5,     //activityId
                8,     //tableid
                req.query.editRoleId,   //tablePkId
                [err]     //details
            ]
        )
    }) 
    .finally(() => {
        connection.end()
    })
}