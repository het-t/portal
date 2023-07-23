import con from "../../db/conDb.js"
import makeDbReq from "../../db/index.js"
import formatFilters from '../../helpers/formatFilters.js'

/**
 * get user_activities for `activity` screen
 * @param {*} req 
 * @param {*} res 
 */

export default function usersActivities (req, res) {

    const {
        from,
        recordsPerPage,
        sortBy,
        sortOrder
    } = req.query

    const filters = formatFilters(req.query.filters)
    const connection = con()
    makeDbReq(
        connection,
        `user_activities(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,[
        req.userId,
        req.orgId,
        from, 
        recordsPerPage,
        sortBy,
        sortOrder,
        filters.email,
        filters.activity,
        filters.refTable,
        filters.detail,
        filters.datetime,

    ])
    .then((results) => {
        res.send(results)
    })
    .catch((err) => {
        res.sendStatus(500)
        makeDbReq(
            connection,
            'logs_add(?, ?, ?, ?, ?)',
            [
                req.userId,
                12,     //activityId
                14,     //tableid
                null,   //tablePkId
                [err]     //details
            ]
        )
        .catch(err => console.log(err))
    })
}