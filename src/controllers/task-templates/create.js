import makeDbReq from '../../db/index.js'
import con from '../../db/conDb.js'

/**
 * create task template
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export default function (req, res) {

    let {
        title, 
        description,
        cost 
    } = req.body.params

    const connection = con()

    makeDbReq(
        connection,
        `tasks_master_create(?, ?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            title, 
            description, 
            cost ? cost : null
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
                33,     //activityId
                12,     //tableid
                null,   //tablePkId
                [err]     //details
            ]
        )
    })
    .finally(() => {
        connection.end()
    })     
}