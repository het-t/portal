import makeDbReq from "../db/index.js"

export default function chatInternalMessagesGet(req, res) {
    makeDbReq(`chat_internal_messages_get(?, ?, ?)`, [
        req.userId,
        req.query.chatType,
        req.query.chatId
    ])
    .then((results) => {
        res.send(results)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
}