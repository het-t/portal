import makeDbReq from "../db/index.js"
import con from '../db/conDb.js'

export default function chatInternalGroupsGet(req, res) {

    const connection = con()
    if(req.params.isGroupChat) {
        makeDbReq(
            connection,
            `chat_internal_new_group_message(?, ?, ?)`,
            [
                req.userId,
                req.params.toGroupId,
                req.params.message
            ]
        )
        .then(results => {
            res.sendStatus(200)
        })
        .catch(err => {
            res.sendStatus(500)
        })
        .finally(() => {
            connection.end()
        })
    }
    else {
        makeDbReq(
            connection,
            `chat_internal_new_individual_message(?, ?, ?)`,
            [
                req.userId,
                req.body.params.toUserId,
                req.body.params.message
            ]
        )
        .then(results => {
            res.sendStatus(200)
        })
        .catch(err => {
            res.sendStatus(500)
        })
        .finally(() => {
            connection.end()
        })
    }
}