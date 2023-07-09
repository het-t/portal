import makeDbReq from "../db/index.js"

export default function chatInternalGroupsGet(req, res) {
    makeDbReq(`chat_internal_groups_get(?)`, [
        req.userId,
    ])
    .then((results) => {
        res.send(results)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
}